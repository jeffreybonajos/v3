import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  background: white;
`;
const StyledContent = styled.div`
  background: #ff8533;
`;
const StyledImg = styled.img`
  padding: 5px;
  float:left
  width: 75%;
`;
const qrCode = () => (
  <StyledContainer>
    <StyledContent>
      <StyledImg src="/local/static/static-qr.png" alt="Qr" />
    </StyledContent>
  </StyledContainer>
);
export default qrCode;
