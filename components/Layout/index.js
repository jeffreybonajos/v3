import Link from "next/link";
import { logOutUser } from "../../lib/Auth";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import styled from "styled-components";

const StyledContent = styled.div`
  margin: 100px auto;
  max-width: 600px;
  height: 500px;
  text-align: center;
`;
const StyledContainer = styled.div`
  padding-top: 20px;
  background: #f2f2f2;
  width: 100%;
  height: 100vh;
`;
const Layout = ({ children, title, auth }) => {
  const { user = {} } = auth || {};
  return (
    <>
      {title !== "Login" ? (
        <>
          <Toolbar />
          <SideDrawer /> <h1>{user.name}</h1>
          <StyledContainer>
            <StyledContent>{children}</StyledContent>
          </StyledContainer>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
export default Layout;
