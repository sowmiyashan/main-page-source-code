import { Link } from 'react-router-dom'
import logo from '../logo1.svg'

export default function Header() {
  return (
    <>
    <div class="topbar topbar--minimal">
        <div class="topbar-inner">
            <div class="topbar-logo">
                <Link to="/">
                    <img src={logo} alt="FLIK Logo"/>
                </Link>
            </div>
            <div class="topbar-menu">
                <Link class="is-button" to="/login">
                    <button type="button" class="ant-btn ant-btn-primary ant-btn-background-ghost">
                        <span>Login</span>
                    </button>
                </Link>
                <Link class="is-button" to="/signup">
                    <button type="button" class="ant-btn ant-btn-primary">
                        <span>Sign Up</span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}