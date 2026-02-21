import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import { Container } from "./UI";

import logoImg from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/services", label: "What we do" },
      { to: "/about", label: "Who we are" },
      { to: "/career", label: "Career" },
      { to: "/contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Sticky>
      <Bar>
        <Container>
          <Inner>
            <Logo to="/">
              <img src={logoImg} alt="logo" />
            </Logo>

            {/* <Logo to="/" onClick={close}>
              <img src={logoImg} alt="logo" />
            </Logo> */}

            <DesktopNav>
              {links.map((l) => (
                <NavItem
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {l.label}
                </NavItem>
              ))}
            </DesktopNav>

            <MobileBtn
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </MobileBtn>
          </Inner>
        </Container>
      </Bar>

      <MobileMenu $open={open} role="dialog" aria-modal="true">
        <Container>
          <MobileInner>
            {links.map((l) => (
              <MobileLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {l.label}
              </MobileLink>
            ))}
            <MiniNote>
              Engineered switchboards and electrical panels for modern data
              centers.
            </MiniNote>
          </MobileInner>
        </Container>
      </MobileMenu>
    </Sticky>
  );
}

const Sticky = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
`;

const Bar = styled.div`
  background: rgba(6, 10, 18, 0.55);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Inner = styled.div`
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const Logo = styled.div`
  img {
    width: 185px;
  }
`;

// const LogoMark = styled.div`
//   width: 34px;
//   height: 34px;
//   border-radius: 12px;
//   background:
//     radial-gradient(
//       12px 12px at 30% 30%,
//       rgba(255, 255, 255, 0.55),
//       transparent 55%
//     ),
//     linear-gradient(135deg, rgba(124, 92, 255, 0.95), rgba(45, 212, 191, 0.85));
//   box-shadow: 0 14px 40px rgba(124, 92, 255, 0.22);
//   border: 1px solid rgba(255, 255, 255, 0.16);
// `;

// const BrandText = styled.div`
//   font-weight: 850;
//   letter-spacing: -0.03em;
//   font-size: 18px;

//   span {
//     background: linear-gradient(
//       135deg,
//       rgba(124, 92, 255, 1),
//       rgba(45, 212, 191, 1)
//     );
//     -webkit-background-clip: text;
//     background-clip: text;
//     color: transparent;
//   }

//   small {
//     font-weight: 750;
//     color: var(--muted);
//     margin-left: 6px;
//   }

//   @media (max-width: 420px) {
//     font-size: 16px;
//   }
// `;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 880px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  padding: 10px 12px;
  border-radius: 999px;
  color: var(--muted);
  font-weight: 700;
  border: 1px solid transparent;
  transition:
    background 0.18s ease,
    color 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.92);
    border-color: rgba(255, 255, 255, 0.16);
  }
`;

const MobileBtn = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    background 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.085);
  }
  &:active {
    transform: translateY(0px) scale(0.99);
  }

  @media (max-width: 880px) {
    display: inline-flex;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 880px) {
    display: block;
    max-height: ${({ $open }) => ($open ? "360px" : "0px")};
    overflow: hidden;
    transition: max-height 0.25s ease;
    background: rgba(6, 10, 18, 0.75);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
  }
`;

const MobileInner = styled.nav`
  padding: 10px 0 18px;
  display: grid;
  gap: 8px;
`;

const MobileLink = styled(NavLink)`
  padding: 12px 12px;
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 700;

  &.active {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.16);
  }
`;

const MiniNote = styled.p`
  margin: 10px 2px 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
`;
