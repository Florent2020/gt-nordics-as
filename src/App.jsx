import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Transparency from "./pages/Transparency";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const GlobalStyle = createGlobalStyle`
  :root{
    --bg0:#070A12;
    --bg1:#0B1020;

    --card: rgba(255,255,255,.06);
    --card2: rgba(255,255,255,.085);
    --stroke: rgba(255,255,255,.14);

    --text: rgba(255,255,255,.92);
    --muted: rgba(255,255,255,.68);
    --muted2: rgba(255,255,255,.52);

    --shadow: 0 18px 60px rgba(0,0,0,.45);
    --r: 18px;
    --max: 1180px;

    --g1: #7C5CFF;
    --g2: #2DD4BF;
    --g3: #60A5FA;
    --g4: #F472B6;
  }

  *, *::before, *::after { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
    background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
    color: var(--text);
    overflow-x: hidden;
  }

  a { color: inherit; text-decoration: none; }
  button, input, textarea { font: inherit; }
  ::selection { background: rgba(124,92,255,.35); }

  @media (pointer:fine){
    ::-webkit-scrollbar{ width: 10px; }
    ::-webkit-scrollbar-thumb{ background: rgba(255,255,255,.16); border-radius: 10px; }
    ::-webkit-scrollbar-track{ background: rgba(255,255,255,.04); }
  }
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/transparency-act" element={<Transparency />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
