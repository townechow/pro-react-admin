import React from 'react'
import { Table } from 'antd'
import FixTabPanel from '@stateless/FixTabPanel'
import AnimationTabs from '@stateless/AnimationTabs'
import LogoSlider from '@stateless/LogoSlider'
import FloatingIcon, { SocialIcon } from '@stateless/FloatingIcon'
import GradientTracing from '@stateless/GradientTracing'
import Footer from '@stateless/Footer'
import StarBack from '@stateless/StarBackground'

import StickyCard from '@stateless/StickyCard'
import SpringPng from '@assets/images/spring.png'
import HePng from '@assets/images/he.png'
import SongPng from '@assets/images/song.png'
import XuePng from '@assets/images/xue.png'

import { Command, Cannabis, Beer, Mail } from 'lucide-react'

const companies = [SpringPng, HePng, SongPng, XuePng]
const columns = [
  {
    title: 'Name',
    align: 'center',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    align: 'center',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    align: 'center',
    dataIndex: 'address',
  },
]

const tabs = [
  {
    title: 'Product',
    value: 'product',
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-linear-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Product Tab</p>
      </div>
    ),
  },
  {
    title: 'Services',
    value: 'services',
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-linear-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Services tab</p>
      </div>
    ),
  },
  {
    title: 'Playground',
    value: 'playground',
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-linear-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Playground tab</p>
      </div>
    ),
  },
  {
    title: 'Content',
    value: 'content',
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-linear-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Content tab</p>
      </div>
    ),
  },
  {
    title: 'Random',
    value: 'random',
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-linear-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Random tab</p>
      </div>
    ),
  },
]
const ProDemo = () => {
  return (
    <FixTabPanel>
      <StarBack />
      <StickyCard cards={[...Array.from({ length: 4 }, () => ({ id: Math.random() }))]} />
      <div className="relative w-full overflow-hidden bg-[#0a192f]">
        <div className="absolute top-0 right-0 h-full w-1/2">
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 100% 0)',
            }}
          />
        </div>
        <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white/20" />
        <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full border-8 border-white/20" />

        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Influencer And Affiliate Marketing Plans and Pricing
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, in? Nemo, quas esse a id at quae sunt!
              Temporibus, consectetur optio. Beatae, culpa nam quas eaque ipsa blanditiis adipisci rem.
            </p>
          </div>
        </div>
        <div className="relative mt-8 flex h-16 justify-center gap-8">
          <FloatingIcon initialX={-150}>
            <SocialIcon icon={Command} color="bg-blue-500" />
          </FloatingIcon>
          <FloatingIcon initialX={-50}>
            <SocialIcon icon={Cannabis} color="bg-blue-400" />
          </FloatingIcon>
          <FloatingIcon initialX={50}>
            <SocialIcon icon={Beer} color="bg-pink-500" />
          </FloatingIcon>
          <FloatingIcon initialX={150}>
            <SocialIcon icon={Mail} color="bg-red-500" />
          </FloatingIcon>
        </div>
      </div>

      <LogoSlider companies={companies} />

      <section className="flex flex-row items-center justify-center gap-5">
        <GradientTracing width={300} height={100} path="M0,50 Q150,0 300,50" />
        <GradientTracing
          width={200}
          height={200}
          path="M100,0 L75,75 L125,75 L50,200 L100,100 L50,100 L100,0"
          gradientColors={['#F1C40F', '#F1C40F', '#E67E22']}
        />
        <GradientTracing
          width={200}
          height={200}
          path="M100,100 m0,-75 a75,75 0 1,1 -0.1,0 z"
          gradientColors={['#7B68EE', '#7B68EE', '#3498DB']}
        />
        <GradientTracing width={300} height={100} path="M0,50 L75,25 L150,75 L225,25 L300,50" />
      </section>
      <section className="flex flex-row items-center justify-center gap-5">
        <GradientTracing
          width={200}
          height={50}
          path="M 20,25 L 180,25"
          gradientColors={['#FF5733', '#FF5733', '#C70039']}
        />
        <GradientTracing
          width={250}
          height={200}
          path="M 50,20 L 50,120 L 50,60 L 200,60"
          gradientColors={['#FFA07A', '#FFA07A', '#FF6347']}
        />
        <GradientTracing
          width={200}
          height={200}
          path="M 20,20 L 180,180"
          gradientColors={['#5733FF', '#5733FF', '#C700C7']}
        />
      </section>
      <section className="flex flex-row items-center justify-center gap-5">
        <GradientTracing
          width={200}
          height={200}
          path="M 20,20 L 20,120 L 170,120"
          gradientColors={['#FF69B4', '#FF69B4', '#8A2BE2']}
        />
        <GradientTracing
          width={200}
          height={200}
          path="M 150,20 L 150,120 L 20,120"
          gradientColors={['#FF1493', '#FF1493', '#9400D3']}
        />
        <GradientTracing
          width={200}
          height={200}
          path="M 20,180 L 20,80 L 170,80"
          gradientColors={['#FFA500', '#FFA500', '#FF4500']}
        />
        <GradientTracing
          width={200}
          height={200}
          path="M 180,180 L 180,80 L 30,80"
          gradientColors={['#00BFFF', '#00BFFF', '#1E90FF']}
        />
      </section>
      <div className="b relative mx-auto flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px]">
        <AnimationTabs tabs={tabs} />
      </div>

      <Table columns={columns} dataSource={[]} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />

      <section className="m-10 flex items-center justify-center gap-5">
        <div className="mb-5 inline-block rounded-xl bg-gradient-to-tl from-blue-600 via-transparent to-purple-400 p-px">
          <div className="min-w-20 rounded-xl bg-white px-3 py-1.5 text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight dark:bg-neutral-900">
            <span className="bg-gradient-to-tl from-blue-600 to-purple-400 bg-clip-text text-transparent">200+</span>
          </div>
        </div>
        <div className="mb-5 inline-block rounded-xl bg-gradient-to-tl from-blue-600 via-transparent to-purple-400 p-px">
          <div className="min-w-20 rounded-xl bg-white px-3 py-1.5 text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight dark:bg-neutral-900">
            <span className="bg-gradient-to-tl from-blue-600 to-purple-400 bg-clip-text text-transparent">400+</span>
          </div>
        </div>
        <div className="mb-5 inline-block rounded-xl bg-gradient-to-tl from-blue-600 via-transparent to-purple-400 p-px">
          <div className="min-w-20 rounded-xl bg-white px-3 py-1.5 text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight dark:bg-neutral-900">
            <span className="bg-gradient-to-tl from-blue-600 to-purple-400 bg-clip-text text-transparent">1200+</span>
          </div>
        </div>
        <div className="mb-5 inline-block rounded-xl bg-gradient-to-tl from-blue-600 via-transparent to-purple-400 p-px">
          <div className="min-w-20 rounded-xl bg-white px-3 py-1.5 text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight dark:bg-neutral-900">
            <span className="bg-gradient-to-tl from-blue-600 to-purple-400 bg-clip-text text-transparent">2000+</span>
          </div>
        </div>
      </section>
      <Footer />
    </FixTabPanel>
  )
}

export default ProDemo
