import headerLogo  from "../../Images/modal_tablet_min.png";
import { Header, Logo, Link } from "./Header.styled";

const HeaderContainer = () => {
    return(
        <Header>
            <Logo>
                <img src={headerLogo} alt="Header Logo"/>
            </Logo>
            <nav>
                <Link to="/" end>Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </Header>
    )
};

export default HeaderContainer;