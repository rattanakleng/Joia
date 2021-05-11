import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

    return (

        <footer className="bg-white footer">
            <div className="container p-4 d-flex flex-row justify-content-around">
                <ul className="list-unstyled d-flex flex-row">
                    <li>
                        <Link to="/" className="navbar-logo">
                            <img className="navbar-logo" src="./assets/img/logo.png"      alt="Logo" />
                        </Link>
                    </li>
                </ul>
            </div>

            <hr className="border-warning" />

            <div className="text-center p-3">
                © 2020 Copyright: Joia Group
            </div>
        </footer>
    )
}

export default Footer
