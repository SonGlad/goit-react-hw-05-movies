import { HeaderContainer } from "components/Header/Header";
import { Container } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";


export const SharedLayout = () => {
  return (
    <Container>
      <HeaderContainer/>
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};



