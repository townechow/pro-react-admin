import React, { version, useState, useRef } from 'react'
import { Input, Flex, Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { Atom, Merge, GitMerge, GitPullRequestArrow } from 'lucide-react'
import { PinInput } from 'react-input-pin-code'
import FixTabPanel from '@stateless/FixTabPanel'
import TypedText from '@stateless/TypedText'
import ReMarkdown from '@stateless/ReMarkdown'
// import LinearWrap from '@stateless/LinearWrap'
import AlternatingText from '@stateless/AlternatingText'
import AutoLink from '@stateless/AutoLink'
import LazyLoadImage from '@stateless/LazyLoadImage'
import StarRating from '@stateless/StarRating'
import IsometricCard from '@stateless/IsometricCard'
import AvatarCard from '@stateless/AvatarCard'
import LineBordered from '@stateless/LineBordered'
import GradientTracking from '@stateless/GradientTracking'
import ShiftingCard from '@stateless/ShiftingCard'
import BreatheText from '@stateless/BreatheText'
import ScrollAnimation from '@stateless/ScrollAnimation'
import AnimateOnScreen from '@stateless/AnimateOnScreen'
import AnimateRipple from '@stateless/AnimateRipple'
import AnimateWave from '@stateless/AnimateWave'
import MeshGradientBackground from '@stateless/MeshGradientBackground'

import { oneApiChat, prettyObject } from '@utils/aidFn'

import styles from './index.module.less'

const Home = () => {
  const [aiText, setAiText] = useState('')
  const aiTextRef = useRef(null)
  // const [loading, setLoading] = useState(false)
  const [isStream, setIsStream] = useState(false)
  const [dateTime, setDateTime] = useState('')
  const curController = useRef(null)

  const [apiKey, setApiKey] = useState(() => '')
  const [chatText, setChatText] = useState('')
  const textareaRef = useRef(null)

  const changeApiKey = (event) => {
    setApiKey(event.target.value)
  }

  const changeChatText = (event) => {
    setChatText(event.target.value)
  }

  const onInputKeyDown = (event) => {
    if (event.metaKey && event.key === 'Enter') {
      onSubmit()
      event.preventDefault()
    }
  }

  const [pinValues, setPinValues] = useState(['', '', '', '', '', '', ''])

  const onSubmit = () => {
    if (chatText.trim() === '') {
      return
    }
    const controller = new AbortController()
    curController.current = controller
    fetchAi(chatText, apiKey, controller)
  }

  const onStop = () => {
    curController.current.abort()
    // setLoading(false)
    setIsStream(false)
  }

  const fetchAi = (text, key, controller) => {
    aiTextRef.current = ''
    setAiText(aiTextRef.current)
    const { signal } = controller
    setIsStream(true)
    oneApiChat(
      [
        {
          content: text,
          role: 'user',
        },
      ],
      key,
      signal
    )
      .then((response) => {
        const contentType = response.headers.get('content-type')
        if (!response.ok || !contentType?.startsWith('text/event-stream') || response.status !== 200) {
          if (contentType?.startsWith('text/html') || contentType?.startsWith('text/plain')) {
            const textPlain = response.clone().text()
            textPlain.then((plainText) => {
              setAiText(plainText)
            })
          } else if (contentType?.startsWith('application/json')) {
            const resJson = response.clone().json()
            resJson.then((res) => {
              setAiText(prettyObject(res))
            })
          } else {
            setAiText(response.statusText)
          }
          setIsStream(false)
        } else {
          const reader = response?.body?.getReader()
          const delimiter = '\n\n'
          let buffer = ''
          let lastText = ''
          const readStream = () => {
            reader
              .read()
              .then(({ done, value }) => {
                if (done) {
                  setIsStream(false)
                  return
                }
                buffer += new TextDecoder().decode(value)
                while (buffer.includes(delimiter)) {
                  const ind = buffer.indexOf(delimiter)
                  const message = buffer.slice(0, ind)

                  const dataList = message.split('data: ')

                  // eslint-disable-next-line no-restricted-syntax
                  for (const index in dataList) {
                    if (dataList[index] !== '' && dataList[index] !== '[DONE]') {
                      try {
                        const json = JSON.parse(dataList[index])
                        const delta = json.choices[0]?.delta?.content ?? ''
                        lastText += delta
                        setDateTime(new Date().toLocaleString())
                        aiTextRef.current = lastText
                        setAiText(aiTextRef.current)
                      } catch (error) {
                        console.log(error)
                      }
                    }
                  }
                  // 从缓冲区中移除已处理的消息和分隔符
                  buffer = buffer.slice(ind + delimiter.length)
                }
                readStream()
              })
              .catch((error) => {
                console.log('read stream error', error)
              })
          }
          readStream()
        }
      })
      .catch((error) => {
        setIsStream(false)
        setAiText(error.message)
      })
  }

  return (
    <FixTabPanel>
      <section style={{ marginBottom: 15 }}>
        <TypedText>Cool! Hi, React & Ant Design!</TypedText>
      </section>

      <section className={styles.avatar}>React version: {version}</section>

      <section>
        I love coding in <AlternatingText alternateText={['javascript', 'typescript', 'rect', 'vue']} />.
      </section>
      <section style={{ marginBottom: 40 }}>
        <AutoLink text="foo bar baz http://example.org bar https://github.com/wkylin/pro-react-admin" />
      </section>
      <section>
        <AvatarCard avatar="https://picsum.photos/seed/picsum/300/160" text="Hi, I'm a developer." />
      </section>
      <section>
        <IsometricCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?" />
      </section>
      <StarRating value={2} />
      <LineBordered text="A line bordered text." />
      <section style={{ display: 'flex', alignItems: 'center', marginTop: 10, marginBottom: 40 }}>
        <Atom /> <Merge /> <GitMerge /> <GitPullRequestArrow />
      </section>
      <section style={{ marginBottom: 40 }}>
        <ScrollAnimation>
          <LazyLoadImage src="https://picsum.photos/seed/picsum/300/160" alt="Strawberries" />
        </ScrollAnimation>
      </section>
      <section>
        <GradientTracking />
      </section>

      <section style={{ margin: 40 }}>
        <BreatheText />
      </section>

      <section style={{ marginBottom: 40 }}>
        <ShiftingCard />
      </section>
      <section style={{ marginBottom: 40 }}>
        <PinInput onChange={(value, index, values) => setPinValues(values)} values={pinValues} />
      </section>
      <section style={{ marginBottom: 40 }}>
        <AnimateOnScreen.FadeIn>
          <AvatarCard avatar="https://picsum.photos/seed/picsum/300/160" text="Hi, I'm a developer." />
        </AnimateOnScreen.FadeIn>
      </section>
      <section style={{ marginBottom: 40 }}>
        <AnimateOnScreen.FadeUp>
          <img src="https://picsum.photos/360/200.jpg" alt="" />
        </AnimateOnScreen.FadeUp>
      </section>
      <section style={{ marginBottom: 40, width: 360, height: 200 }}>
        <AnimateOnScreen.ScaleIn>
          <>
            <img src="https://picsum.photos/360/200/?blur=2" alt="" />
            <section className={styles['blend-me']}>Mix Blend Mode</section>
          </>
        </AnimateOnScreen.ScaleIn>
      </section>
      <section style={{ marginBottom: 40, height: 200, width: 360, overflow: 'hidden' }}>
        <MeshGradientBackground />
      </section>
      <section style={{ marginBottom: 40 }}>
        <AnimateRipple>Click Me</AnimateRipple>
      </section>
      <section style={{ marginBottom: 40 }} className={styles.maskBox}>
        <section className={styles.watermark}>water mark</section>
        mask
      </section>
      <section style={{ marginBottom: 40 }}>
        <button className={styles['button']}>
          <span className={styles['button-label']}>Click Me</span>
        </button>
      </section>

      <section style={{ position: 'relative', margin: '80px 0 160px 50px' }}>
        <div className={styles['circle-1']}></div>
        <div className={styles['circle-2']}></div>
        <div className={styles['circle-3']}></div>
        <div className={styles['circle-4']}></div>
      </section>

      <section style={{ width: 600, margin: '30px 0' }}>
        <Input defaultValue={apiKey} placeholder="api key" onChange={changeApiKey} style={{ marginBottom: 20 }} />
        <Flex align="center">
          {/* <LinearWrap> */}
          <Input.TextArea
            ref={textareaRef}
            defaultValue={chatText}
            placeholder="来，说点什么呗...Meta + Enter发送"
            onChange={changeChatText}
            onKeyDown={onInputKeyDown}
            autoSize
            style={{ width: 300, height: 30, caretColor: '#ff0000' }}
          />
          {/* </LinearWrap> */}
          <Button
            style={{ margin: '0 10px' }}
            icon={<SendOutlined rotate={-60} />}
            type="primary"
            disabled={isStream}
            onClick={onSubmit}
          >
            发送
          </Button>
          <Button icon={<SendOutlined rotate={-60} />} type="primary" disabled={!isStream} onClick={onStop}>
            停止
          </Button>
        </Flex>
      </section>

      <section>
        {isStream && <div>正在输入...</div>}
        <section style={{ textAlign: 'right', color: '#666' }}>{dateTime}</section>
        <ReMarkdown markdownText={aiText} isLoading={isStream} />
      </section>

      <section style={{ position: 'relative', height: 300 }}>
        <AnimateWave>
          <p> wave </p>
        </AnimateWave>
      </section>
    </FixTabPanel>
  )
}

export default Home
