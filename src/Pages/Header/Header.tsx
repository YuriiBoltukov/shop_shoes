import {Link} from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import {cart} from '../../assets/icon';
import logo from './header-logo.png';
import style from './header.module.scss';
import Banner from '../../Components/Banner/Banner';
import SearchContainer from '../../Components/SearchContainer/SearchContainer';

function Header() {
    return (
        <header className={style.container}>
            <div className={style.header}>
                <Link to='/'>
                    <img src={logo} alt='logo'></img>
                </Link>
                <div className={style.header_navigation}>
                    <Navigation/>
                    <div className={style.header_navigation_wrapper}>
                        <Link to='/cart' className={style.header_controls_cart_menu}>
                            {cart}
                        </Link>
                        <SearchContainer/>
                    </div>
                </div>
            </div>
            <Banner/>
        </header>
    );
}

export default Header;
