import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="header">
      <div className="mobile-view">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="website-logo"
            alt="website logo"
          />
        </Link>
        <ul className="icons-container">
          <li>
            <Link to="/">
              <AiFillHome className="mobile-icon" />
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <BsFillBriefcaseFill className="mobile-icon" />
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="mobile-logout-btn"
              onClick={onClickLogout}
            >
              <FiLogOut />
            </button>
          </li>
        </ul>
      </div>
      <div className="desktop-view">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="website-logo"
            alt="website logo"
          />
        </Link>
        <ul className="menu-item">
          <li className="list-items">
            <Link to="/" className="link-items">
              Home
            </Link>
          </li>
          <li className="list-items">
            <Link to="/jobs" className="link-items">
              Jobs
            </Link>
          </li>
        </ul>
        <div className="desktop-button">
          <button
            className="desktop-logout-btn"
            type="button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
