import './Navigation.css'
import logo from '../img/bookshelf.svg'

const Navigation = () => {
  return (
    <div className='Navigation'>
      <img src={logo} alt='book'></img>
      <div className='title'>Bookshelf</div>
    </div>
  )
}

export default Navigation