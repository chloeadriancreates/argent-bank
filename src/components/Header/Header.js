import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { useDispatch } from "react-redux";
import { deleteToken } from "../../state/slices/tokenSlice";

export default function Header({signedIn}) {
    const dispatch = useDispatch();

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
                { signedIn
                ?
                    <div>
                        <Link to="/profile" className="main-nav-item">
                            {/* <i className="fa fa-user-circle"></i> */}
                            Tony
                        </Link>
                        <button onClick={() => dispatch(deleteToken())} className="main-nav-item">
                            {/* <i className="fa fa-sign-out"></i> */}
                            Sign Out
                        </button>
                    </div>
                :
                    <Link to="/signin" className="main-nav-item">
                        {/* <i class="fa fa-user-circle"></i> */}
                        Sign In
                    </Link>
                }
        </nav>
    );
}