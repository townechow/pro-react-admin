import React from 'react'
// import Wave from 'react-wavify'
import styles from './index.module.less'

const AnimateWave = ({ children }) => {
  return (
    <>
      <section className={styles.hIBkFg}>
        <h2>
          Design and code{' '}
          <span className={styles.kqOLaE}>
            <span>R</span>
            <span>e</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </span>{' '}
          apps
        </h2>
      </section>
      {/* <Wave className="wave" fill='#8a2be2'
        paused={false}
        options={{
          height: 90,
          amplitude: 25,
          speed: 0.3,
          points: 5
        }}
      /> */}
    </>
  )
}

export default AnimateWave

// https://codepen.io/natgeyzentech/pen/PoRYvRM
// https://codepen.io/tedmcdo/pen/PqxKXg
