import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Container,
  Section,
  SectionHeading,
  Button,
  Card,
} from "../components/UI";
import { FiArrowRight, FiCheck, FiCpu, FiZap, FiShield } from "react-icons/fi";

import heroImg from "../assets/home-banner.png";

export default function Home() {
  return (
    <>
      <Hero>
        <Container>
          <HeroGrid>
            <HeroLeft>
              <Badge>
                <Dot /> Data center ready • Nordic precision
              </Badge>

              <H1>
                Switchboards built for <span>mission-critical</span> power.
              </H1>

              <Lead>
                G.T Nordics AS designs and produces electrical switchboards and
                panel solutions tailored for modern data centers—reliable,
                scalable, and delivered with tight quality control.
              </Lead>

              <CTA>
                <Link to="/contact">
                  <Button>
                    Talk to us <FiArrowRight />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="ghost">Explore what we do</Button>
                </Link>
              </CTA>

              <TrustRow>
                <TrustItem>
                  <FiCheck /> ISO-aligned processes
                </TrustItem>
                <TrustItem>
                  <FiCheck /> High availability mindset
                </TrustItem>
                <TrustItem>
                  <FiCheck /> Built & tested in Norway
                </TrustItem>
              </TrustRow>
            </HeroLeft>

            <HeroRight>
              <HeroCard>
                <GlowOrb aria-hidden="true" />
                <TopRow>
                  <MiniTitle>Core capability</MiniTitle>
                  <MiniChip>Data Center</MiniChip>
                </TopRow>

                <BigNumber>24/7</BigNumber>
                <BigText>
                  Operational thinking — design for uptime, safety, and
                  serviceability.
                </BigText>

                <Divider />

                <Grid3>
                  <MiniBox>
                    <FiCpu />
                    <span>Engineering</span>
                    <small>From spec to FAT</small>
                  </MiniBox>
                  <MiniBox>
                    <FiZap />
                    <span>Production</span>
                    <small>Controlled build quality</small>
                  </MiniBox>
                  <MiniBox>
                    <FiShield />
                    <span>Compliance</span>
                    <small>Documented delivery</small>
                  </MiniBox>
                </Grid3>
              </HeroCard>
            </HeroRight>
          </HeroGrid>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Electrical panels engineered for scale"
            desc="We support clients with complete switchboard deliveries—from engineering and production to testing and documentation."
          />

          <Cards>
            {[
              {
                title: "LV switchboards & distribution",
                desc: "Robust power distribution assemblies designed for maintainability, expansion, and high availability environments.",
              },
              {
                title: "MCC & control panels",
                desc: "Control and automation panels built to spec with reliable components and clear labeling for safe operation.",
              },
              {
                title: "Testing & documentation",
                desc: "Structured testing routines and complete documentation packages to match project requirements and handover needs.",
              },
            ].map((c) => (
              <Card key={c.title}>
                <CardTitle>{c.title}</CardTitle>
                <CardDesc>{c.desc}</CardDesc>
                <CardLink to="/services">
                  Learn more <FiArrowRight />
                </CardLink>
              </Card>
            ))}
          </Cards>
        </Container>
      </Section>

      <Section>
        <Container>
          <Split>
            <SplitLeft>
              <SectionHeading
                eyebrow="Why G.T Nordics"
                title="We build like uptime matters—because it does."
                desc="In data centers, mistakes become outages. Our process is designed to reduce risk: clear engineering, controlled production, and disciplined testing."
              />
              <Bullets>
                <li>
                  <FiCheck /> Structured quality routines and traceable
                  documentation
                </li>
                <li>
                  <FiCheck /> Production built for repeatable deliveries at
                  scale
                </li>
                <li>
                  <FiCheck /> Practical, service-friendly panel layouts
                </li>
              </Bullets>
              <Link to="/about">
                <Button>
                  Meet the team <FiArrowRight />
                </Button>
              </Link>
            </SplitLeft>

            <SplitRight>
              <Showcase>
                <ShowcaseTop>
                  <span>Delivery flow</span>
                  <small>How we typically work</small>
                </ShowcaseTop>

                <Steps>
                  {[
                    [
                      "1",
                      "Define requirements",
                      "Scope, standards, and interface mapping.",
                    ],
                    [
                      "2",
                      "Engineer & approve",
                      "Schematics, layouts, BOM and reviews.",
                    ],
                    [
                      "3",
                      "Build & test",
                      "Production, FAT, labeling and documentation.",
                    ],
                    [
                      "4",
                      "Deliver & support",
                      "Handover package and after-delivery support.",
                    ],
                  ].map(([n, t, d]) => (
                    <Step key={n}>
                      <StepNo>{n}</StepNo>
                      <div>
                        <StepTitle>{t}</StepTitle>
                        <StepDesc>{d}</StepDesc>
                      </div>
                    </Step>
                  ))}
                </Steps>
              </Showcase>
            </SplitRight>
          </Split>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTABox>
            <div>
              <CTATitle>Need a reliable switchboard partner?</CTATitle>
              <CTADesc>
                Send a short description of your project and we’ll get back with
                next steps.
              </CTADesc>
            </div>
            <Link to="/contact">
              <Button>
                Contact us <FiArrowRight />
              </Button>
            </Link>
          </CTABox>
        </Container>
      </CTASection>
    </>
  );
}

// const Hero = styled.section`
//   padding: 76px 0 56px;
// `;

const Hero = styled.section`
  position: relative;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  color: white;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 28px;
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const HeroLeft = styled.div``;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: var(--muted);
  font-weight: 700;
  font-size: 13px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 1),
    rgba(45, 212, 191, 1)
  );
  box-shadow: 0 0 0 6px rgba(124, 92, 255, 0.12);
`;

const H1 = styled.h1`
  margin: 16px 0 0;
  font-size: clamp(34px, 4.6vw, 64px);
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
  max-width: 58ch;
`;

const CTA = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const TrustRow = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  color: var(--muted);
  font-weight: 650;
  font-size: 13px;
`;

const TrustItem = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
`;

const HeroRight = styled.div`
  display: grid;
  justify-items: end;

  @media (max-width: 980px) {
    justify-items: start;
  }
`;

const HeroCard = styled.div`
  width: min(440px, 100%);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.4);
  padding: 18px;
  position: relative;
  overflow: hidden;
`;

const GlowOrb = styled.div`
  position: absolute;
  inset: -120px -120px auto auto;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(45, 212, 191, 0.35),
      transparent 60%
    ),
    radial-gradient(
      circle at 70% 70%,
      rgba(124, 92, 255, 0.35),
      transparent 60%
    );
  filter: blur(2px);
  opacity: 0.85;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;
`;

const MiniTitle = styled.div`
  color: var(--muted);
  font-weight: 700;
  font-size: 13px;
`;

const MiniChip = styled.div`
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.18);
  color: rgba(255, 255, 255, 0.85);
  font-weight: 800;
  font-size: 12px;
`;

const BigNumber = styled.div`
  margin-top: 14px;
  font-size: 52px;
  font-weight: 900;
  letter-spacing: -0.04em;
  position: relative;
`;

const BigText = styled.p`
  margin: 6px 0 0;
  color: var(--muted);
  line-height: 1.7;
  position: relative;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 14px 0;
  position: relative;
`;

const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  position: relative;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const MiniBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 12px;
  display: grid;
  gap: 6px;

  svg {
    opacity: 0.9;
  }

  span {
    font-weight: 850;
    letter-spacing: -0.02em;
  }
  small {
    color: var(--muted);
    line-height: 1.4;
  }
`;

const Cards = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  letter-spacing: -0.02em;
`;

const CardDesc = styled.p`
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.7;
`;

const CardLink = styled(Link)`
  margin-top: 14px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 800;
  opacity: 0.92;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const SplitLeft = styled.div``;
const SplitRight = styled.div``;

const Bullets = styled.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;

  li {
    display: grid;
    grid-template-columns: 18px 1fr;
    gap: 10px;
    align-items: start;
    color: var(--muted);
    line-height: 1.7;

    svg {
      margin-top: 3px;
    }
  }
`;

const Showcase = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 22px;
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const ShowcaseTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;

  span {
    font-weight: 900;
    letter-spacing: -0.02em;
  }
  small {
    color: var(--muted);
  }
`;

const Steps = styled.div`
  display: grid;
  gap: 10px;
`;

const Step = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 12px;
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 12px;
`;

const StepNo = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 950;
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.35),
    rgba(45, 212, 191, 0.25)
  );
  border: 1px solid rgba(255, 255, 255, 0.14);
`;

const StepTitle = styled.div`
  font-weight: 900;
  letter-spacing: -0.02em;
`;

const StepDesc = styled.div`
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 14px;
`;

const CTASection = styled.section`
  padding: 0 0 86px;
`;

const CTABox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(
      700px 240px at 10% 10%,
      rgba(124, 92, 255, 0.2),
      transparent 60%
    ),
    radial-gradient(
      700px 240px at 90% 10%,
      rgba(45, 212, 191, 0.14),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.05);
  border-radius: 26px;
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CTATitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.03em;
  font-size: 22px;
`;

const CTADesc = styled.div`
  margin-top: 8px;
  color: var(--muted);
  line-height: 1.7;
`;
