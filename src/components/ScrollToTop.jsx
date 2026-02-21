import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return <Hidden aria-hidden="true" />;
}

const Hidden = styled.div`
  display: none;
`;
