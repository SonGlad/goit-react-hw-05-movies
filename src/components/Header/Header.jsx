import headerLogo  from "../../Images/modal_tablet_min.png";
import { Header, Logo, Link } from "./Header.styled";

export const HeaderContainer = () => {
    return(
        <Header>
            <Logo>
                <img src={headerLogo} alt="Header Logo"/>
            </Logo>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </Header>
    )
};
