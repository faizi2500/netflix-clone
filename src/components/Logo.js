import image from '../assets/netflix.png';
import './stylesheets/logo.css'

const TopLogo = () => {

  return (
    <div class="position-relative">
      <div class="position-absolute top-0 start-0">
        <img src={image} class="logo" alt="Netflix logo" />
      </div>
    </div>
  )
}

export default TopLogo
