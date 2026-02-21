import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Shell>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Shell>
  );
}

const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;
