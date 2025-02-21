import classNames from "classnames/bind"
import styles from "./Featured_video.module.scss"

const cx = classNames.bind(styles)
const Featured_video = () => {
  return (
    <div className={cx("Featured--video")}>
      <img src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZxTjpl44A6RUlLRUg2rv29H-kJ3ky_qgTejImYYSCDQa9PSR4jLEEXQIznqfoDT1Lql1cQAdlbnFFQunjvtCB-CL_CaudYQnbpS.webp?r=1b2" alt="" className={cx("static__img")}/>
      <div className={cx("caption__image")}>
        <img src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRuCb8xb1zMS3egL0N3TAKRwD7szjzKKaZGhDX6AfDXnZo8vi3DrvsXugtSHrooiOPuuGylh1zivq39Ghc_ZENvE_iBUJ9vwUv1OldFJ_W63GnuvpHPh4tfxlgBu7gKuBG8vrSBDe0vRsmwTi93ydlnKbGYyF_jSEvO8Y7LorcKDG7Dgpj8DcA.webp?r=ecc" alt="" className={cx("title__img")}/>
        <p>Trong cuộc phiêu lưu đầy kích thích do Millie Bobby Brown diễn chính này, đám cưới cổ tích của Elodie ở một vương quốc xa xôi bỗng biến thành cuộc chiến sinh tồn khốc liệt.</p>
        <div className={cx("video__btn")}>
          <button className={cx("video__btn--play")}><img src="\src\assets\play_icon.png" alt=""/>Phát</button>
          <button className={cx("info__btn")}><img src="\src\assets\info_icon.png" alt=""/>Thông tin khác</button>
        </div>
      </div>
    </div>
  )
}

export default Featured_video
