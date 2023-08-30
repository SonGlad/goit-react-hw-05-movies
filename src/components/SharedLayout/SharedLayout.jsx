import HeaderContainer from "components/Header/Header";
import { Container } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";


const SharedLayout = () => {
  return (
    <Container>
      <HeaderContainer/>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;



