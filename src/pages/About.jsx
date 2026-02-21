import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Container,
  Section,
  SectionHeading,
  Card,
  Button,
} from "../components/UI";
import {
  FiArrowRight,
  FiUsers,
  FiTarget,
  FiZap,
  FiShield,
} from "react-icons/fi";

import heroImg from "../assets/about-banner.png";

export default function About() {
  return (
    <>
      <Top>
        <Container>
          <SectionHeading
            eyebrow="Who we are"
            title="A Nordic team focused on safe, repeatable deliveries"
            desc="G.T Nordics AS builds electrical panels with a data-center mindset: clarity, documentation, and disciplined execution—so your commissioning is smoother."
          />
          <Actions>
            <Link to="/career">
              <Button>
                Join the team <FiArrowRight />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Talk to us</Button>
            </Link>
          </Actions>
        </Container>
      </Top>

      <Section>
        <Container>
          <Grid>
            <Card>
              <Icon>
                <FiTarget />
              </Icon>
              <H3>Mission</H3>
              <P>
                Deliver reliable switchboards and control solutions that support
                high availability operations and help clients scale with
                confidence.
              </P>
            </Card>

            <Card>
              <Icon>
                <FiShield />
              </Icon>
              <H3>Quality mindset</H3>
              <P>
                Structured routines, traceability, and documentation are part of
                the product—not an afterthought.
              </P>
            </Card>

            <Card>
              <Icon>
                <FiZap />
              </Icon>
              <H3>Data center focus</H3>
              <P>
                Maintainability, safe service access and consistent builds are
                key when uptime is non-negotiable.
              </P>
            </Card>

            <Card>
              <Icon>
                <FiUsers />
              </Icon>
              <H3>People first</H3>
              <P>
                Skilled professionals, clear roles, and collaborative
                delivery—so projects move fast without losing control.
              </P>
            </Card>
          </Grid>

          <Story>
            <StoryLeft>
              <h3>How we work</h3>
              <p>
                We combine engineering discipline with practical production
                experience. The result is switchboards that are easier to
                install, test, and maintain.
              </p>
              <ul>
                <li>Clear engineering packages and review checkpoints</li>
                <li>Controlled assembly flow with quality checks</li>
                <li>FAT routines and documentation ready for handover</li>
              </ul>
            </StoryLeft>

            <StoryRight>
              <Panel>
                <PanelTop>
                  <span>Values</span>
                  <small>How we show up</small>
                </PanelTop>
                <ValueList>
                  <li>
                    <b>Clarity:</b> communicate early and document well.
                  </li>
                  <li>
                    <b>Care:</b> safety and quality in every detail.
                  </li>
                  <li>
                    <b>Craft:</b> build tidy, serviceable panels.
                  </li>
                  <li>
                    <b>Consistency:</b> repeatable delivery at scale.
                  </li>
                </ValueList>
              </Panel>
            </StoryRight>
          </Story>
        </Container>
      </Section>
    </>
  );
}

const Top = styled.section`
  position: relative;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  color: white;
`;

const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Icon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.25),
    rgba(45, 212, 191, 0.18)
  );

  svg {
    opacity: 0.92;
  }
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 18px;
  letter-spacing: -0.02em;
`;

const P = styled.p`
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.7;
`;

const Story = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const StoryLeft = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);

  h3 {
    margin: 0;
    font-weight: 950;
    letter-spacing: -0.03em;
  }
  p {
    margin: 10px 0 0;
    color: var(--muted);
    line-height: 1.75;
  }
  ul {
    margin: 12px 0 0;
    color: var(--muted);
    line-height: 1.75;
    padding-left: 18px;
  }
`;

const StoryRight = styled.div``;

const Panel = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(
      700px 240px at 10% 10%,
      rgba(124, 92, 255, 0.2),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.04);
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const PanelTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;

  span {
    font-weight: 950;
    letter-spacing: -0.03em;
  }
  small {
    color: var(--muted);
  }
`;

const ValueList = styled.ul`
  margin: 12px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.75;

  b {
    color: rgba(255, 255, 255, 0.9);
  }
`;
