import React from "react";
import styled from "styled-components";
import Header from "./Header";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(40, 40, 40);
`;

function App() {
  return (
    <AppContainer>
      <Header color={"#FF0"} />
    </AppContainer>
  );
}

export default App;
