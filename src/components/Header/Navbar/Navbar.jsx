import classNames from "classnames/bind"
import styles from "./Navbar.module.scss"
import { Bell, Search } from 'lucide-react'

const cx = classNames.bind(styles)
const Navbar = () => {
  return (
    <nav className={cx("navbar")}>
      <div className={cx("nav__left")}>
        <ul>
          <li className={cx("nav__left--active")}>Trang chủ</li>
          <li>Series</li>
          <li>Phim</li>
          <li>Mới & Phổ biến</li>
          <li>Danh sách của tôi</li>
          <li>Duyệt tìm theo ngôn ngữ</li>
        </ul>
      </div>

      <div className={cx("nav__right")}>
        <button className={cx("search__button")}>
          <Search />
        </button>
        <div className={cx("navbar__bell")}>
          <Bell />
        </div>
        <div className={cx("navbar__account")}>
          <img src="\src\assets\profile_img.png" alt="" className={cx("account__avatar")} />
          <img src="\src\assets\caret_icon.svg" alt="" className={cx("account__dropdown")} />
          <div className={cx("dropdown")}>
            <p>Đăng xuất khỏi Neflix</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
