// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import PasswordGenerator from "./components/PasswordGenerator";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <MainSection>
      <Header></Header>
      <Content>
        <PasswordGenerator></PasswordGenerator>
      </Content>
      <Footer></Footer>
    </MainSection>
  );
}

export default App;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;
