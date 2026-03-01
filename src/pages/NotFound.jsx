import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Container, Button } from "../components/UI";
import { FiArrowRight, FiHome, FiMail, FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <Page>
      <BgGlow aria-hidden="true" />
      <BgGlow2 aria-hidden="true" />

      <Hero>
        <Container>
          <Wrap>
            <Left>
              <Pill>
                <FiAlertTriangle />
                404 — Page not found
              </Pill>

              <H1>
                This page <span>doesn’t exist</span>.
              </H1>

              <Lead>
                The link might be broken, the page may have been moved, or you
                typed the address wrong. No stress — let’s get you back.
              </Lead>

              <Actions>
                <Link to="/">
                  <Button>
                    Back to Home <FiHome />
                  </Button>
                </Link>

                <Link to="/contact">
                  <Button variant="ghost">
                    Contact us <FiMail />
                  </Button>
                </Link>
              </Actions>

              <QuickLinks>
                <QuickTitle>Popular pages</QuickTitle>
                <QuickGrid>
                  <QuickCard to="/services">
                    <b>What we do</b>
                    <span>Services & delivery flow</span>
                    <i>
                      Go <FiArrowRight />
                    </i>
                  </QuickCard>

                  <QuickCard to="/about">
                    <b>Who we are</b>
                    <span>How we work & values</span>
                    <i>
                      Go <FiArrowRight />
                    </i>
                  </QuickCard>

                  <QuickCard to="/career">
                    <b>Career</b>
                    <span>Openings & application</span>
                    <i>
                      Go <FiArrowRight />
                    </i>
                  </QuickCard>
                </QuickGrid>
              </QuickLinks>
            </Left>

            <Right>
              <Card>
                <Orb aria-hidden="true" />
                <Code>404</Code>

                <CardTitle>Try one of these</CardTitle>
                <CardDesc>
                  If you came from a saved bookmark, update it after you find
                  the right page.
                </CardDesc>

                <List>
                  <li>
                    <Dot /> Check the URL spelling
                  </li>
                  <li>
                    <Dot /> Go back to the homepage
                  </li>
                  <li>
                    <Dot /> Contact us if you need help
                  </li>
                </List>

                <CardActions>
                  <Link to="/">
                    <Button>
                      Home <FiArrowRight />
                    </Button>
                  </Link>
                  <a href="mailto:postmottak@gted.no">
                    <Button variant="ghost">Email us</Button>
                  </a>
                </CardActions>
              </Card>
            </Right>
          </Wrap>
        </Container>
      </Hero>
    </Page>
  );
}

/* =========================
   STYLES (matches your site)
========================= */

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Page = styled.main`
  min-height: calc(100vh - 80px);
  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
  position: relative;
  overflow: hidden;
`;

const Hero = styled.section`
  padding: 140px 0 90px;
  color: white;

  @media (max-width: 980px) {
    padding: 120px 0 80px;
  }
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: grid;
  justify-items: end;

  @media (max-width: 980px) {
    justify-items: start;
  }
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: var(--muted);
  font-weight: 800;
  font-size: 13px;

  svg {
    opacity: 0.9;
  }
`;

const H1 = styled.h1`
  margin: 16px 0 0;
  font-size: clamp(36px, 4.8vw, 66px);
  line-height: 1.02;
  letter-spacing: -0.04em;

  span {
    background: linear-gradient(
      135deg,
      rgba(124, 92, 255, 1),
      rgba(45, 212, 191, 1)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Lead = styled.p`
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
  max-width: 62ch;
`;

const Actions = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const QuickLinks = styled.div`
  margin-top: 22px;
`;

const QuickTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
`;

const QuickGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const QuickCard = styled(Link)`
  text-decoration: none;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  padding: 14px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
  transition:
    transform 0.18s ease,
    filter 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.06);
    background: rgba(255, 255, 255, 0.055);
    border-color: rgba(255, 255, 255, 0.18);
  }

  b {
    display: block;
    color: rgba(255, 255, 255, 0.92);
    font-weight: 950;
    letter-spacing: -0.02em;
  }

  span {
    display: block;
    margin-top: 6px;
    color: var(--muted);
    line-height: 1.6;
  }

  i {
    margin-top: 12px;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    font-style: normal;
    color: rgba(255, 255, 255, 0.86);
    font-weight: 900;
    opacity: 0.92;
  }
`;

const Card = styled.div`
  width: min(460px, 100%);
  border-radius: 26px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(
      900px 320px at 20% 10%,
      rgba(124, 92, 255, 0.16),
      transparent 60%
    ),
    radial-gradient(
      900px 320px at 85% 10%,
      rgba(45, 212, 191, 0.12),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.04);
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
`;

const Orb = styled.div`
  position: absolute;
  inset: -140px -140px auto auto;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(45, 212, 191, 0.32),
      transparent 60%
    ),
    radial-gradient(
      circle at 70% 70%,
      rgba(124, 92, 255, 0.34),
      transparent 60%
    );
  filter: blur(2px);
  opacity: 0.9;
  animation: ${float} 6s ease-in-out infinite;
`;

const Code = styled.div`
  font-size: 64px;
  font-weight: 950;
  letter-spacing: -0.06em;
  margin-bottom: 6px;
  position: relative;
`;

const CardTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
  position: relative;
`;

const CardDesc = styled.div`
  margin-top: 8px;
  color: var(--muted);
  line-height: 1.7;
  position: relative;
`;

const List = styled.ul`
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
  color: var(--muted);
  position: relative;

  li {
    display: grid;
    grid-template-columns: 18px 1fr;
    gap: 10px;
    align-items: start;
    line-height: 1.6;
  }
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 4px;
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 1),
    rgba(45, 212, 191, 1)
  );
  box-shadow: 0 0 0 6px rgba(124, 92, 255, 0.12);
`;

const CardActions = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  position: relative;
`;

const BgGlow = styled.div`
  position: absolute;
  inset: -260px auto auto -260px;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(124, 92, 255, 0.18),
    transparent 60%
  );
  filter: blur(2px);
  opacity: 0.9;
`;

const BgGlow2 = styled.div`
  position: absolute;
  inset: auto -280px -280px auto;
  width: 560px;
  height: 560px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(45, 212, 191, 0.14),
    transparent 60%
  );
  filter: blur(2px);
  opacity: 0.9;
`;
