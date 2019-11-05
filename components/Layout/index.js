import Link from "next/link";
import { logOutUser } from "../../lib/Auth";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-top: 20px;
  background: #f2f2f2;
  height: 100%;
  display: inline-block;
  clear: left;
  width: 80%;
`;
const StyledCheat = styled.div`
  width: 20%;
  overflow: hidden;
  float: left;
  background-repeat: repeat-y;
`;
const StyledWrapper = styled.div`
  height: 100%;
  background: #f2f2f2;
  background-repeat: repeat-y;
  min-height: 100%;
`;
const Layout = ({ children, title, auth }) => {
  const { user = {} } = auth || {};
  return (
    <>
      {title !== "Login" ? (
        <>
          <Toolbar full_name={user.name} />

          <SideDrawer full_name={user.name} position={user.department} />
          <StyledWrapper>
            <StyledCheat>
              <h1></h1>
            </StyledCheat>
            <StyledContainer>{children}</StyledContainer>
          </StyledWrapper>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
export default Layout;
