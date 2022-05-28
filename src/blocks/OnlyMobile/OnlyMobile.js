import mobileImage from '@/assets/images/mobile_small.png'
import './OnlyMobile.scss'

const OnlyMobile = () => {
  return (
    <div className="page">
      <div className="background" />
      <div className="page-content">
        <div className="page-content__text">Sorry, this app doesn't support wide displays :(</div>
        <div className="page-content__image">
          <img src={mobileImage} alt="Mobile app image"/>
        </div>
      </div>
    </div>
  )
}

export default OnlyMobile