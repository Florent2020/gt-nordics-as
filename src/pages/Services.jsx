import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, SectionHeading, Card, Button } from "../components/UI";
import {
  FiArrowRight,
  FiClipboard,
  FiTool,
  FiShield,
  FiLayers,
  FiCheck,
  FiFileText,
  FiMapPin,
  FiCpu,
  FiZap,
  FiChevronDown,
} from "react-icons/fi";

import heroImg from "../assets/services-banner.png";

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const items = useMemo(
    () => [
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
    ],
    [],
  );

  const deliverables = useMemo(
    () => [
      {
        title: "Documentation package",
        desc: "Clear labeling, structured documents, and handover-ready files aligned to project requirements.",
      },
      {
        title: "Testing & verification",
        desc: "Routine checks / FAT workflow to reduce installation issues and speed up commissioning.",
      },
      {
        title: "Traceability",
        desc: "Controlled build steps with checkpoints and records to support reliability and future maintenance.",
      },
      {
        title: "Service-friendly layout",
        desc: "Panels designed for safe access, clarity, and maintainability over long operating life.",
      },
    ],
    [],
  );

  const capabilities = useMemo(
    () => [
      {
        title: "Control panels for auxiliary equipment",
        desc: "Smaller control panels for supporting systems like lighting, cooling fans, and communication equipment — built for clarity and reliable operation.",
        icon: <FiCpu />,
      },
      {
        title: "Customized solutions",
        desc: "We tailor panel layouts and deliveries around scope, standards, and customer requirements — from planning to final product.",
        icon: <FiZap />,
      },
    ],
    [],
  );

  const industries = useMemo(
    () => [
      {
        title: "Data centers",
        desc: "High-availability distribution and panels designed for uptime, safe access, and predictable delivery.",
      },
      {
        title: "Industrial environments",
        desc: "Robust switchboards and control panels built for demanding conditions and long-life operation.",
      },
      {
        title: "Infrastructure & utilities",
        desc: "Structured, documented deliveries with clarity for installation, maintenance, and auditing needs.",
      },
    ],
    [],
  );

  const snapshots = useMemo(
    () => [
      {
        tag: "Delivery-ready",
        title: "Switchboard handover package",
        desc: "A clean delivery format: labeling, routine checks, and documentation that supports installation and future maintenance.",
      },
      {
        tag: "Testing",
        title: "FAT-focused workflow",
        desc: "Verification routines and checkpoints built to reduce risk and make commissioning smoother.",
      },
      {
        tag: "Process",
        title: "Engineering → build flow",
        desc: "Defined requirements, reviews, controlled production and handover — designed to be repeatable at scale.",
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        q: "What do you need to start a project?",
        a: "A short scope description is enough: timeline, standards (if any), interface points, and preferred handover format. We’ll follow up with the right engineering questions.",
      },
      {
        q: "Do you provide documentation and labeling?",
        a: "Yes. We focus on traceable delivery and documentation packages aligned to project requirements and handover needs.",
      },
      {
        q: "Do you support testing (FAT)?",
        a: "Yes. We support structured verification routines to reduce risk and accelerate commissioning.",
      },
      {
        q: "Where are your switchboards manufactured?",
        a: "Designed and assembled in Norway (Notodden) following relevant rules, regulations, and project requirements.",
      },
    ],
    [],
  );

  return (
    <>
      {/* HERO */}
      <Top>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="From specification to finished switchboard"
            desc="We deliver panel solutions with engineering discipline, controlled production, and documentation that makes commissioning smoother."
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

          {/* ✅ trust bar inside hero */}
          <HeroTrust>
            <HeroTrustItem>
              <FiMapPin /> Designed & assembled in Norway
            </HeroTrustItem>
            <HeroTrustItem>
              <FiCheck /> ISO-aligned management system
            </HeroTrustItem>
            <HeroTrustItem>
              <FiCheck /> Documentation & traceability focus
            </HeroTrustItem>
          </HeroTrust>
        </Container>
      </Top>

      {/* SERVICES GRID */}
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

          {/* PROCESS (your existing, improved a bit) */}
          <Process>
            <ProcessTop>
              <h3>Typical delivery process</h3>
              <p>
                Clear checkpoints. Predictable output. Handover-ready
                documentation.
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

      {/* DELIVERABLES */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Deliverables"
            title="What you receive"
            desc="Strong deliveries are more than hardware — they include clarity, verification, and documentation that helps your team move faster."
          />

          <DeliverGrid>
            {deliverables.map((d) => (
              <DeliverCard key={d.title}>
                <DeliverIcon>
                  <FiCheck />
                </DeliverIcon>
                <div>
                  <DeliverTitle>{d.title}</DeliverTitle>
                  <DeliverDesc>{d.desc}</DeliverDesc>
                </div>
              </DeliverCard>
            ))}
          </DeliverGrid>
        </Container>
      </Section>

      {/* QUALITY / HSE */}
      <Section>
        <Container>
          <Split>
            <SplitLeft>
              <SectionHeading
                eyebrow="Quality & HSE"
                title="Built on standards, improvement, and safety"
                desc="We operate with a Quality, Environment, Health & Safety Management System supporting continuous improvement and reliable delivery."
              />

              <BulletList>
                <li>
                  <FiCheck /> Customer requirements and controlled processes
                </li>
                <li>
                  <FiCheck /> Compliance with laws, regulations, and ethical
                  guidelines
                </li>
                <li>
                  <FiCheck /> Focus on learning and continuous improvement
                </li>
                <li>
                  <FiCheck /> Safety-first mindset and HSE focus
                </li>
              </BulletList>

              <BtnRow>
                <GhostLink
                  href="/pdf/GT-Nordics-AS-Quality-HSE-Policy.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiFileText /> Quality & HSE Policy (PDF)
                </GhostLink>

                <Link to="/contact">
                  <Button>
                    Talk to us <FiArrowRight />
                  </Button>
                </Link>
              </BtnRow>

              <TinyHint>
                Put your file here:{" "}
                <Code>/public/pdf/GT-Nordics-AS-Quality-HSE-Policy.pdf</Code>
              </TinyHint>
            </SplitLeft>

            <SplitRight>
              <HighlightCard>
                <HighlightTop>
                  <span>ISO standards</span>
                  <small>Management system alignment</small>
                </HighlightTop>

                <IsoGrid>
                  {[
                    ["ISO 9001", "Quality management", "/pdf/iso-9001.pdf"],
                    [
                      "ISO 14001",
                      "Environmental management",
                      "/pdf/iso-14001.pdf",
                    ],
                    ["ISO 45001", "Occupational H&S", "/pdf/iso-45001.pdf"],
                  ].map(([name, hint, href]) => (
                    <IsoBtn
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>{name}</strong>
                      <span>{hint}</span>
                      <em>Open PDF</em>
                    </IsoBtn>
                  ))}
                </IsoGrid>

                {/* <TinyHint>
                  Place your PDFs inside <Code>/public/pdf/</Code> and keep the
                  names consistent.
                </TinyHint> */}
              </HighlightCard>
            </SplitRight>
          </Split>
        </Container>
      </Section>

      {/* EXTRA CAPABILITIES */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="More capabilities"
            title="Control panels & tailored builds"
            desc="Beyond switchboards, we support auxiliary systems and customized panel solutions based on requirements and interfaces."
          />

          <Cards2>
            {capabilities.map((c) => (
              <MiniCard key={c.title}>
                <MiniIcon>{c.icon}</MiniIcon>
                <div>
                  <MiniTitle>{c.title}</MiniTitle>
                  <MiniDesc>{c.desc}</MiniDesc>
                </div>
              </MiniCard>
            ))}
          </Cards2>
        </Container>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Where we support teams"
            desc="Our delivery style fits projects where uptime, safety, and documentation matter."
          />

          <IndustryGrid>
            {industries.map((c) => (
              <IndustryCard key={c.title}>
                <CardTitle>{c.title}</CardTitle>
                <CardDesc>{c.desc}</CardDesc>
                <CardLink to="/contact">
                  Ask availability <FiArrowRight />
                </CardLink>
              </IndustryCard>
            ))}
          </IndustryGrid>
        </Container>
      </Section>

      {/* SNAPSHOTS */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Experience"
            title="Project-style snapshots"
            desc="Even when projects differ, strong deliveries share the same ingredients: clarity, checkpoints, and traceability."
          />

          <SnapGrid>
            {snapshots.map((s) => (
              <SnapCard key={s.title}>
                <SnapTop>
                  <SnapTag>{s.tag}</SnapTag>
                  <FiFileText />
                </SnapTop>
                <SnapTitle>{s.title}</SnapTitle>
                <SnapDesc>{s.desc}</SnapDesc>

                <SnapLink to="/contact">
                  Start a request <FiArrowRight />
                </SnapLink>
              </SnapCard>
            ))}
          </SnapGrid>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            desc="If you don’t see your question here, send us a message and we’ll reply with next steps."
          />

          <FaqWrap>
            {faqs.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FaqItem key={f.q}>
                  <FaqBtn
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{f.q}</span>
                    <FiChevronDown className={isOpen ? "rot" : ""} />
                  </FaqBtn>
                  <FaqBody $open={isOpen}>
                    <p>{f.a}</p>
                  </FaqBody>
                </FaqItem>
              );
            })}
          </FaqWrap>

          <BottomCTA>
            <BottomLeft>
              <b>Want a quote or a technical discussion?</b>
              <span>
                Send scope + standards + timeline and we’ll respond quickly.
              </span>
            </BottomLeft>
            <Link to="/contact">
              <Button>
                Contact us <FiArrowRight />
              </Button>
            </Link>
          </BottomCTA>
        </Container>
      </Section>
    </>
  );
}

/* =========================
   STYLES
========================= */

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

const HeroTrust = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.86);
`;

const HeroTrustItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
  font-weight: 800;
  letter-spacing: 0.01em;

  svg {
    opacity: 0.9;
  }
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

/* ✅ Deliverables */
const DeliverGrid = styled.div`
  margin-top: 18px;
  display: grid;
  gap: 12px;
`;

const DeliverCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  padding: 14px;
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 12px;
  align-items: start;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
`;

const DeliverIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.25),
    rgba(45, 212, 191, 0.18)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);

  svg {
    opacity: 0.9;
  }
`;

const DeliverTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
`;

const DeliverDesc = styled.div`
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.7;
`;

/* ✅ Quality split */
const Split = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 18px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const SplitLeft = styled.div``;
const SplitRight = styled.div``;

const BulletList = styled.ul`
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

const BtnRow = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const GhostLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  font-weight: 900;
  transition:
    transform 0.16s ease,
    filter 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.06);
  }
`;

const TinyHint = styled.div`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.58);
  font-size: 13px;
  line-height: 1.6;
`;

const Code = styled.code`
  padding: 2px 7px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
  color: rgba(255, 255, 255, 0.86);
`;

const HighlightCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const HighlightTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;

  span {
    font-weight: 950;
    letter-spacing: -0.02em;
  }
  small {
    color: var(--muted);
  }
`;

const IsoGrid = styled.div`
  margin-top: 14px;
  display: grid;
  gap: 10px;
`;

const IsoBtn = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.14);
  border-radius: 18px;
  padding: 12px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.92);
  display: grid;
  gap: 6px;
  transition:
    transform 0.16s ease,
    filter 0.16s ease,
    border-color 0.16s ease;

  strong {
    font-weight: 950;
    letter-spacing: -0.02em;
  }
  span {
    color: var(--muted);
    line-height: 1.5;
    font-size: 13px;
  }
  em {
    color: rgba(45, 212, 191, 1);
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
  }

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.06);
    border-color: rgba(45, 212, 191, 0.25);
  }
`;

/* ✅ More capabilities */
const Cards2 = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MiniCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 22px;
  padding: 16px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 12px;
  align-items: start;
`;

const MiniIcon = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 18px;
  display: grid;
  place-items: center;
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

const MiniTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
`;

const MiniDesc = styled.p`
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.7;
`;

/* ✅ Industries */
const IndustryGrid = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const IndustryCard = styled(Card)``;

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
  font-weight: 900;
  opacity: 0.92;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

/* ✅ Snapshots */
const SnapGrid = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const SnapCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 22px;
  padding: 16px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.32);
`;

const SnapTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  svg {
    opacity: 0.75;
  }
`;

const SnapTag = styled.div`
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 900;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
  color: rgba(255, 255, 255, 0.82);
`;

const SnapTitle = styled.div`
  margin-top: 12px;
  font-weight: 950;
  letter-spacing: -0.02em;
  font-size: 16px;
`;

const SnapDesc = styled.p`
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.75;
`;

const SnapLink = styled(Link)`
  margin-top: 14px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 900;
  opacity: 0.92;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

/* ✅ FAQ */
const FaqWrap = styled.div`
  margin-top: 18px;
  display: grid;
  gap: 12px;
`;

const FaqItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
`;

const FaqBtn = styled.button`
  width: 100%;
  padding: 14px 14px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  cursor: pointer;
  font-weight: 950;
  letter-spacing: -0.02em;
  text-align: left;

  svg {
    transition: transform 0.18s ease;
    opacity: 0.85;
  }
  .rot {
    transform: rotate(180deg);
  }
`;

const FaqBody = styled.div`
  padding: ${({ $open }) => ($open ? "0 14px 14px" : "0 14px")};
  max-height: ${({ $open }) => ($open ? "240px" : "0")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  overflow: hidden;
  transition:
    max-height 0.22s ease,
    opacity 0.18s ease,
    padding 0.18s ease;

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.75;
  }
`;

/* ✅ Bottom CTA */
const BottomCTA = styled.div`
  margin-top: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(
      700px 240px at 10% 10%,
      rgba(124, 92, 255, 0.18),
      transparent 60%
    ),
    radial-gradient(
      700px 240px at 90% 10%,
      rgba(45, 212, 191, 0.12),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.05);
  border-radius: 26px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BottomLeft = styled.div`
  display: grid;
  gap: 6px;

  b {
    font-weight: 950;
    letter-spacing: -0.02em;
  }
  span {
    color: var(--muted);
    line-height: 1.6;
  }
`;
