// import React from 'react'
import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Header from "../../components/Header/Header"
import Featured_video from "../../components/Featured_videos/Featured_video"

const cx = classNames.bind(styles)

const Home = () => {
  return (
    <div className={cx("home")}>
      <Header />
      <Featured_video />
    </div>
  )
}

export default Home
