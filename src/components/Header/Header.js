import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../../state/slices/tokenSlice";
import { deleteUser } from "../../state/slices/userSlice";
import { turnOffEditing } from "../../state/slices/editingSlice";

export default function Header() {
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.token);
    const {user} = useSelector((state) => state.user);

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
                { token
                ?
                    <div>
                        <Link to="/profile" className="main-nav-item">
                            <i className="fa fa-user-circle main-nav-icon"></i>
                            {user.firstName}
                        </Link>
                        <button onClick={() => {
                            dispatch(deleteToken());
                            dispatch(turnOffEditing());
                            dispatch(deleteUser());
                        }} className="main-nav-item">
                            <i className="fa fa-sign-out main-nav-icon"></i>
                            Sign Out
                        </button>
                    </div>
                :
                    <Link to="/signin" className="main-nav-item">
                        <i className="fa fa-user-circle main-nav-icon"></i>
                        Sign In
                    </Link>
                }
        </nav>
    );
}