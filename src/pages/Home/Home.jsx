// import React from 'react'
import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Header from "../../components/Header/Header"
const cx = classNames.bind(styles)

const Home = () => {
  return (
    <div className={cx("home")}>
      <Header />
    </div>
  )
}

export default Home
