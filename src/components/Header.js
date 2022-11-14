import './Header.css';
import fdr from "../fdr.png";

const Header = () => {
    return (
        <div className="header">
            <div><img src={fdr} className="logo" /></div>
            <button className="login-btn">Login</button>
        </div>
    );
}

export default Header;