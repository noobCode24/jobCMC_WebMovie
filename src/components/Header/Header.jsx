import classNames from "classnames/bind"
import styles from "./Header.module.scss"
import Navbar from "./Navbar/Navbar"

const cx = classNames.bind(styles)
const Header = () => {
  return (
    <div className={cx("header")}>
      <div className={cx("header__logo")}>
        <img src="\src\assets\logo.png" alt=""/>
      </div>
      <div className={cx("header__nav")}>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
