import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Container,
  // Section,
  SectionHeading,
  Card,
  Button,
} from "../components/UI";
import {
  FiArrowRight,
  FiClipboard,
  FiTool,
  FiShield,
  FiLayers,
} from "react-icons/fi";

import heroImg from "../assets/services-banner.png";

export default function Services() {
  const items = [
    {
      icon: <FiLayers />,
      title: "LV switchboards & distribution",
      desc: "Design and production of low-voltage switchboards and distribution panels built for uptime, safe access, and structured expansion.",
    },
    {
      icon: <FiTool />,
      title: "Assembly & production",
      desc: "Controlled production flow with consistent labeling, tidy cable management, and repeatable build quality.",
    },
    {
      icon: <FiClipboard />,
      title: "Testing (FAT) & handover",
      desc: "Functional verification routines, inspection, and handover documentation aligned with project requirements.",
    },
    {
      icon: <FiShield />,
      title: "Quality, HSE & documentation",
      desc: "Traceability, checklists, and structured documentation packages—built to reduce risk and accelerate commissioning.",
    },
  ];

  return (
    <>
      <Top>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="From specification to finished switchboard"
            desc="We deliver panel solutions with engineering discipline, production quality, and documentation that makes commissioning smoother."
          />
          <TopActions>
            <Link to="/contact">
              <Button>
                Request a quote <FiArrowRight />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">How we work</Button>
            </Link>
          </TopActions>
        </Container>
      </Top>

      <Section>
        <Container>
          <Grid>
            {items.map((it) => (
              <Card key={it.title}>
                <Icon>{it.icon}</Icon>
                <H3>{it.title}</H3>
                <P>{it.desc}</P>
              </Card>
            ))}
          </Grid>

          <Process>
            <ProcessTop>
              <h3>Typical delivery process</h3>
              <p>
                Clear checkpoints. Predictable output. Documentation ready for
                handover.
              </p>
            </ProcessTop>

            <Flow>
              {[
                [
                  "01",
                  "Scope & interfaces",
                  "Standards, I/O mapping, constraints and project requirements.",
                ],
                [
                  "02",
                  "Engineering",
                  "Schematics, layouts, BOM, reviews and approvals.",
                ],
                [
                  "03",
                  "Build",
                  "Assembly with structured quality checks throughout.",
                ],
                [
                  "04",
                  "Test & deliver",
                  "FAT, documentation package and delivery coordination.",
                ],
              ].map(([n, t, d]) => (
                <FlowItem key={n}>
                  <Num>{n}</Num>
                  <div>
                    <FlowTitle>{t}</FlowTitle>
                    <FlowDesc>{d}</FlowDesc>
                  </div>
                </FlowItem>
              ))}
            </Flow>
          </Process>
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

const TopActions = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Section = styled.section`
  padding: 60px 0;
  position: relative;
  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
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

  /* margin: 14px 0 0;
    color: var(--muted);
    font-size: 17px;
    line-height: 1.75;
    max-width: 58ch; */
`;

const Process = styled.div`
  margin-top: 18px;
  border-radius: 24px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const ProcessTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;

  h3 {
    margin: 0;
    font-weight: 950;
    letter-spacing: -0.03em;
  }
  p {
    margin: 0;
    color: var(--muted);
  }
`;

const Flow = styled.div`
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FlowItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 12px;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 12px;
`;

const Num = styled.div`
  width: 56px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 950;
  letter-spacing: -0.03em;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

const FlowTitle = styled.div`
  font-weight: 900;
  letter-spacing: -0.02em;
`;

const FlowDesc = styled.div`
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 14px;
`;
