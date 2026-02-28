// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import {
//   Container,
//   // Section,
//   SectionHeading,
//   Button,
//   Card,
// } from "../components/UI";
// import { FiArrowRight, FiCheck, FiCpu, FiZap, FiShield } from "react-icons/fi";

// import heroImg from "../assets/home-banner.png";

// export default function Home() {
//   return (
//     <>
//       <Hero>
//         <Container>
//           <HeroGrid>
//             <HeroLeft>
//               <Badge>
//                 <Dot /> Data center ready • Nordic precision
//               </Badge>

//               <H1>
//                 Switchboards built for <span>mission-critical</span> power.
//               </H1>

//               <Lead>
//                 G.T Nordics AS designs and produces electrical switchboards and
//                 panel solutions tailored for modern data centers—reliable,
//                 scalable, and delivered with tight quality control.
//               </Lead>

//               <CTA>
//                 <Link to="/contact">
//                   <Button>
//                     Talk to us <FiArrowRight />
//                   </Button>
//                 </Link>
//                 <Link to="/services">
//                   <Button variant="ghost">Explore what we do</Button>
//                 </Link>
//               </CTA>

//               <TrustRow>
//                 <TrustItem>
//                   <FiCheck /> ISO-aligned processes
//                 </TrustItem>
//                 <TrustItem>
//                   <FiCheck /> High availability mindset
//                 </TrustItem>
//                 <TrustItem>
//                   <FiCheck /> Built & tested in Norway
//                 </TrustItem>
//               </TrustRow>
//             </HeroLeft>

//             <HeroRight>
//               <HeroCard>
//                 <GlowOrb aria-hidden="true" />
//                 <TopRow>
//                   <MiniTitle>Core capability</MiniTitle>
//                   <MiniChip>Data Center</MiniChip>
//                 </TopRow>

//                 <BigNumber>24/7</BigNumber>
//                 <BigText>
//                   Operational thinking — design for uptime, safety, and
//                   serviceability.
//                 </BigText>

//                 <Divider />

//                 <Grid3>
//                   <MiniBox>
//                     <FiCpu />
//                     <span>Engineering</span>
//                     <small>From spec to FAT</small>
//                   </MiniBox>
//                   <MiniBox>
//                     <FiZap />
//                     <span>Production</span>
//                     <small>Controlled build quality</small>
//                   </MiniBox>
//                   <MiniBox>
//                     <FiShield />
//                     <span>Compliance</span>
//                     <small>Documented delivery</small>
//                   </MiniBox>
//                 </Grid3>
//               </HeroCard>
//             </HeroRight>
//           </HeroGrid>
//         </Container>
//       </Hero>

//       <Section>
//         <Container>
//           <SectionHeading
//             eyebrow="What we do"
//             title="Electrical panels engineered for scale"
//             desc="We support clients with complete switchboard deliveries—from engineering and production to testing and documentation."
//           />

//           <Cards>
//             {[
//               {
//                 title: "LV switchboards & distribution",
//                 desc: "Robust power distribution assemblies designed for maintainability, expansion, and high availability environments.",
//               },
//               {
//                 title: "MCC & control panels",
//                 desc: "Control and automation panels built to spec with reliable components and clear labeling for safe operation.",
//               },
//               {
//                 title: "Testing & documentation",
//                 desc: "Structured testing routines and complete documentation packages to match project requirements and handover needs.",
//               },
//             ].map((c) => (
//               <Card key={c.title}>
//                 <CardTitle>{c.title}</CardTitle>
//                 <CardDesc>{c.desc}</CardDesc>
//                 <CardLink to="/services">
//                   Learn more <FiArrowRight />
//                 </CardLink>
//               </Card>
//             ))}
//           </Cards>
//         </Container>
//       </Section>

//       <Section>
//         <Container>
//           <Split>
//             <SplitLeft>
//               <SectionHeading
//                 eyebrow="Why G.T Nordics AS"
//                 title="We build like uptime matters—because it does."
//                 desc="In data centers, mistakes become outages. Our process is designed to reduce risk: clear engineering, controlled production, and disciplined testing."
//               />
//               <Bullets>
//                 <li>
//                   <FiCheck /> Structured quality routines and traceable
//                   documentation
//                 </li>
//                 <li>
//                   <FiCheck /> Production built for repeatable deliveries at
//                   scale
//                 </li>
//                 <li>
//                   <FiCheck /> Practical, service-friendly panel layouts
//                 </li>
//               </Bullets>
//               <Link to="/contact">
//                 <Button style={{ marginTop: 20 }}>
//                   Meet the team <FiArrowRight />
//                 </Button>
//               </Link>
//             </SplitLeft>

//             <SplitRight>
//               <Showcase>
//                 <ShowcaseTop>
//                   <span>Delivery flow</span>
//                   <small>How we typically work</small>
//                 </ShowcaseTop>

//                 <Steps>
//                   {[
//                     [
//                       "1",
//                       "Define requirements",
//                       "Scope, standards, and interface mapping.",
//                     ],
//                     [
//                       "2",
//                       "Engineer & approve",
//                       "Schematics, layouts, BOM and reviews.",
//                     ],
//                     [
//                       "3",
//                       "Build & test",
//                       "Production, FAT, labeling and documentation.",
//                     ],
//                     [
//                       "4",
//                       "Deliver & support",
//                       "Handover package and after-delivery support.",
//                     ],
//                   ].map(([n, t, d]) => (
//                     <Step key={n}>
//                       <StepNo>{n}</StepNo>
//                       <div>
//                         <StepTitle>{t}</StepTitle>
//                         <StepDesc>{d}</StepDesc>
//                       </div>
//                     </Step>
//                   ))}
//                 </Steps>
//               </Showcase>
//             </SplitRight>
//           </Split>
//         </Container>
//       </Section>

//       <CTASection>
//         <Container>
//           <CTABox>
//             <div>
//               <CTATitle>Need a reliable switchboard partner?</CTATitle>
//               <CTADesc>
//                 Send a short description of your project and we’ll get back with
//                 next steps.
//               </CTADesc>
//             </div>
//             <Link to="/contact">
//               <Button>
//                 Contact us <FiArrowRight />
//               </Button>
//             </Link>
//           </CTABox>
//         </Container>
//       </CTASection>
//     </>
//   );
// }

// // const Hero = styled.section`
// //   padding: 76px 0 56px;
// // `;

// const Hero = styled.section`
//   position: relative;
//   background-image: url(${heroImg});
//   background-size: cover;
//   background-position: center;
//   padding: 100px 0;
//   color: white;
// `;

// const Section = styled.section`
//   padding: 60px 0;
//   position: relative;
//   background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
// `;

// const HeroGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1.15fr 0.85fr;
//   gap: 28px;
//   align-items: center;

//   @media (max-width: 980px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const HeroLeft = styled.div``;

// const Badge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 10px;
//   padding: 10px 12px;
//   border-radius: 999px;
//   border: 1px solid rgba(255, 255, 255, 0.12);
//   background: rgba(255, 255, 255, 0.05);
//   color: var(--muted);
//   font-weight: 700;
//   font-size: 13px;
// `;

// const Dot = styled.div`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background: linear-gradient(
//     135deg,
//     rgba(124, 92, 255, 1),
//     rgba(45, 212, 191, 1)
//   );
//   box-shadow: 0 0 0 6px rgba(124, 92, 255, 0.12);
// `;

// const H1 = styled.h1`
//   margin: 16px 0 0;
//   font-size: clamp(34px, 4.6vw, 64px);
//   line-height: 1.02;
//   letter-spacing: -0.04em;

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
// `;

// const Lead = styled.p`
//   margin: 14px 0 0;
//   color: var(--muted);
//   font-size: 17px;
//   line-height: 1.75;
//   max-width: 58ch;
// `;

// const CTA = styled.div`
//   margin-top: 18px;
//   display: flex;
//   gap: 12px;
//   flex-wrap: wrap;
// `;

// const TrustRow = styled.div`
//   margin-top: 16px;
//   display: flex;
//   gap: 12px;
//   flex-wrap: wrap;
//   color: var(--muted);
//   font-weight: 650;
//   font-size: 13px;
// `;

// const TrustItem = styled.div`
//   display: inline-flex;
//   gap: 8px;
//   align-items: center;
//   padding: 8px 10px;
//   border-radius: 999px;
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   background: rgba(255, 255, 255, 0.03);
// `;

// const HeroRight = styled.div`
//   display: grid;
//   justify-items: end;

//   @media (max-width: 980px) {
//     justify-items: start;
//   }
// `;

// const HeroCard = styled.div`
//   width: min(440px, 100%);
//   border-radius: 22px;
//   border: 1px solid rgba(255, 255, 255, 0.12);
//   background: rgba(255, 255, 255, 0.05);
//   box-shadow: 0 30px 90px rgba(0, 0, 0, 0.4);
//   padding: 18px;
//   position: relative;
//   overflow: hidden;
// `;

// const GlowOrb = styled.div`
//   position: absolute;
//   inset: -120px -120px auto auto;
//   width: 260px;
//   height: 260px;
//   border-radius: 50%;
//   background:
//     radial-gradient(
//       circle at 30% 30%,
//       rgba(45, 212, 191, 0.35),
//       transparent 60%
//     ),
//     radial-gradient(
//       circle at 70% 70%,
//       rgba(124, 92, 255, 0.35),
//       transparent 60%
//     );
//   filter: blur(2px);
//   opacity: 0.85;
// `;

// const TopRow = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 10px;
//   position: relative;
// `;

// const MiniTitle = styled.div`
//   color: var(--muted);
//   font-weight: 700;
//   font-size: 13px;
// `;

// const MiniChip = styled.div`
//   padding: 8px 10px;
//   border-radius: 999px;
//   border: 1px solid rgba(255, 255, 255, 0.14);
//   background: rgba(0, 0, 0, 0.18);
//   color: rgba(255, 255, 255, 0.85);
//   font-weight: 800;
//   font-size: 12px;
// `;

// const BigNumber = styled.div`
//   margin-top: 14px;
//   font-size: 52px;
//   font-weight: 900;
//   letter-spacing: -0.04em;
//   position: relative;
// `;

// const BigText = styled.p`
//   margin: 6px 0 0;
//   color: var(--muted);
//   line-height: 1.7;
//   position: relative;
// `;

// const Divider = styled.div`
//   height: 1px;
//   background: rgba(255, 255, 255, 0.1);
//   margin: 14px 0;
//   position: relative;
// `;

// const Grid3 = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 10px;
//   position: relative;

//   @media (max-width: 420px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const MiniBox = styled.div`
//   border: 1px solid rgba(255, 255, 255, 0.12);
//   background: rgba(255, 255, 255, 0.04);
//   border-radius: 16px;
//   padding: 12px;
//   display: grid;
//   gap: 6px;

//   svg {
//     opacity: 0.9;
//   }

//   span {
//     font-weight: 850;
//     letter-spacing: -0.02em;
//   }
//   small {
//     color: var(--muted);
//     line-height: 1.4;
//   }
// `;

// const Cards = styled.div`
//   margin-top: 22px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 14px;

//   @media (max-width: 980px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const CardTitle = styled.h3`
//   margin: 0;
//   font-size: 18px;
//   letter-spacing: -0.02em;
// `;

// const CardDesc = styled.p`
//   margin: 10px 0 0;
//   color: var(--muted);
//   line-height: 1.7;
// `;

// const CardLink = styled(Link)`
//   margin-top: 14px;
//   display: inline-flex;
//   gap: 8px;
//   align-items: center;
//   color: rgba(255, 255, 255, 0.9);
//   font-weight: 800;
//   opacity: 0.92;

//   &:hover {
//     opacity: 1;
//     text-decoration: underline;
//   }
// `;

// const Split = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 18px;
//   align-items: start;

//   @media (max-width: 980px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const SplitLeft = styled.div``;
// const SplitRight = styled.div``;

// const Bullets = styled.ul`
//   margin: 16px 0 0;
//   padding: 0;
//   list-style: none;
//   display: grid;
//   gap: 10px;

//   li {
//     display: grid;
//     grid-template-columns: 18px 1fr;
//     gap: 10px;
//     align-items: start;
//     color: var(--muted);
//     line-height: 1.7;

//     svg {
//       margin-top: 3px;
//     }
//   }
// `;

// const Showcase = styled.div`
//   border: 1px solid rgba(255, 255, 255, 0.12);
//   background: rgba(255, 255, 255, 0.05);
//   border-radius: 22px;
//   padding: 18px;
//   box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
// `;

// const ShowcaseTop = styled.div`
//   display: flex;
//   align-items: baseline;
//   justify-content: space-between;
//   gap: 10px;
//   margin-bottom: 12px;

//   span {
//     font-weight: 900;
//     letter-spacing: -0.02em;
//   }
//   small {
//     color: var(--muted);
//   }
// `;

// const Steps = styled.div`
//   display: grid;
//   gap: 10px;
// `;

// const Step = styled.div`
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   background: rgba(255, 255, 255, 0.03);
//   border-radius: 16px;
//   padding: 12px;
//   display: grid;
//   grid-template-columns: 44px 1fr;
//   gap: 12px;
// `;

// const StepNo = styled.div`
//   width: 44px;
//   height: 44px;
//   border-radius: 14px;
//   display: grid;
//   place-items: center;
//   font-weight: 950;
//   background: linear-gradient(
//     135deg,
//     rgba(124, 92, 255, 0.35),
//     rgba(45, 212, 191, 0.25)
//   );
//   border: 1px solid rgba(255, 255, 255, 0.14);
// `;

// const StepTitle = styled.div`
//   font-weight: 900;
//   letter-spacing: -0.02em;
// `;

// const StepDesc = styled.div`
//   margin-top: 6px;
//   color: var(--muted);
//   line-height: 1.6;
//   font-size: 14px;
// `;

// const CTASection = styled.section`
//   padding: 0 0 86px;
// `;

// const CTABox = styled.div`
//   border: 1px solid rgba(255, 255, 255, 0.12);
//   background:
//     radial-gradient(
//       700px 240px at 10% 10%,
//       rgba(124, 92, 255, 0.2),
//       transparent 60%
//     ),
//     radial-gradient(
//       700px 240px at 90% 10%,
//       rgba(45, 212, 191, 0.14),
//       transparent 60%
//     ),
//     rgba(255, 255, 255, 0.05);
//   border-radius: 26px;
//   padding: 22px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 18px;
//   box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);

//   @media (max-width: 900px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

// const CTATitle = styled.div`
//   font-weight: 950;
//   letter-spacing: -0.03em;
//   font-size: 22px;
// `;

// const CTADesc = styled.div`
//   margin-top: 8px;
//   color: var(--muted);
//   line-height: 1.7;
// `;

import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, SectionHeading, Button, Card } from "../components/UI";
import {
  FiArrowRight,
  FiCheck,
  FiCpu,
  FiZap,
  FiShield,
  FiFileText,
  FiMapPin,
  FiClock,
  FiUsers,
  FiChevronDown,
} from "react-icons/fi";

import heroImg from "../assets/home-banner.png";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  // ✅ Update these later if you want
  const certs = useMemo(
    () => [
      {
        label: "ISO 9001",
        href: "/pdf/iso-9001.pdf", // put file in public/pdf/iso-9001.pdf
        hint: "Quality management",
      },
      {
        label: "ISO 14001",
        href: "/pdf/iso-14001.pdf", // public/pdf/iso-14001.pdf
        hint: "Environmental management",
      },
      {
        label: "ISO 45001",
        href: "/pdf/iso-45001.pdf", // public/pdf/iso-45001.pdf
        hint: "Occupational health & safety",
      },
    ],
    [],
  );

  const metrics = useMemo(
    () => [
      { icon: <FiClock />, label: "Built for uptime", value: "24/7 mindset" },
      { icon: <FiShield />, label: "Safety focus", value: "HSE-driven work" },
      {
        icon: <FiFileText />,
        label: "Documentation",
        value: "Traceable delivery",
      },
      { icon: <FiUsers />, label: "Team support", value: "Right person, fast" },
    ],
    [],
  );

  const industries = useMemo(
    () => [
      {
        title: "Data centers",
        desc: "High availability distribution and panels engineered for serviceability and controlled delivery.",
      },
      {
        title: "Industrial facilities",
        desc: "Reliable power distribution and control solutions built for demanding environments.",
      },
      {
        title: "Infrastructure & utilities",
        desc: "Structured builds with clarity, labeling, and documentation to support long-life operation.",
      },
    ],
    [],
  );

  const projectSnapshots = useMemo(
    () => [
      {
        title: "Switchboard delivery package",
        desc: "A structured handover including labeling, test routines, and documentation aligned to project requirements.",
        tag: "Delivery-ready",
      },
      {
        title: "Panel build with FAT workflow",
        desc: "Controlled production + functional checks to reduce issues on-site and simplify commissioning.",
        tag: "Testing",
      },
      {
        title: "Engineering-to-production flow",
        desc: "From requirements and schematics to build, review, and final documentation — a repeatable delivery process.",
        tag: "Process",
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        q: "What information should we include in a request?",
        a: "Share scope, timeline, standards (if any), interface points, and preferred handover format. Even a short description is enough — we’ll follow up with the right questions.",
      },
      {
        q: "Do you support testing and documentation packages?",
        a: "Yes. We can support routine testing and structured documentation aligned to your project requirements and handover needs.",
      },
      {
        q: "Where are you located?",
        a: "Notodden, Norway. You can find our addresses and map on the Contact page.",
      },
      {
        q: "Can we contact a specific department or person?",
        a: "Yes — use the Contact page where we list departments and team members, or send a message and we’ll route it internally.",
      },
    ],
    [],
  );

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

      {/* ✅ What we do */}
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

      {/* ✅ Certifications + metrics */}
      <Section>
        <Container>
          <Split2>
            <SplitLeft>
              <SectionHeading
                eyebrow="Certifications"
                title="Standards that support trust"
                desc="We work with structured routines, traceable documentation, and safety-first delivery principles."
              />

              <CertRow>
                {certs.map((c) => (
                  <CertBtn
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    title={`${c.label} — ${c.hint}`}
                  >
                    <span>{c.label}</span>
                    <small>{c.hint}</small>
                  </CertBtn>
                ))}
              </CertRow>
            </SplitLeft>

            <SplitRight>
              <MetricGrid>
                {metrics.map((m) => (
                  <MetricCard key={m.label}>
                    <MetricIcon>{m.icon}</MetricIcon>
                    <div>
                      <MetricLabel>{m.label}</MetricLabel>
                      <MetricValue>{m.value}</MetricValue>
                    </div>
                  </MetricCard>
                ))}
              </MetricGrid>
            </SplitRight>
          </Split2>
        </Container>
      </Section>

      {/* ✅ Why us + delivery flow (your existing section) */}
      <Section>
        <Container>
          <Split>
            <SplitLeft>
              <SectionHeading
                eyebrow="Why G.T Nordics AS"
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
              <Link to="/contact">
                <Button style={{ marginTop: 20 }}>
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

      {/* ✅ Industries / where we fit */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Where we fit"
            title="Built for demanding environments"
            desc="A delivery style designed for projects where quality, safety and documentation matter."
          />

          <Cards>
            {industries.map((c) => (
              <Card key={c.title}>
                <CardTitle>{c.title}</CardTitle>
                <CardDesc>{c.desc}</CardDesc>
                <CardLink to="/services">
                  See capabilities <FiArrowRight />
                </CardLink>
              </Card>
            ))}
          </Cards>
        </Container>
      </Section>

      {/* ✅ Project snapshots */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Experience"
            title="Project-style deliverables"
            desc="Even when projects differ, strong deliveries share the same ingredients: clarity, testing, and traceability."
          />

          <SnapGrid>
            {projectSnapshots.map((p) => (
              <SnapCard key={p.title}>
                <SnapTop>
                  <SnapTag>{p.tag}</SnapTag>
                  <FiFileText />
                </SnapTop>
                <SnapTitle>{p.title}</SnapTitle>
                <SnapDesc>{p.desc}</SnapDesc>

                <SnapLink to="/services">
                  Learn more <FiArrowRight />
                </SnapLink>
              </SnapCard>
            ))}
          </SnapGrid>
        </Container>
      </Section>

      {/* ✅ FAQ */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            desc="If you don’t see your question here, send us a message and we’ll respond quickly."
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
        </Container>
      </Section>

      {/* ✅ Quick contact form */}
      <Section>
        <Container>
          <QuickCard>
            <QuickLeft>
              <QuickKicker>Quick contact</QuickKicker>
              <QuickTitle>Tell us what you’re planning</QuickTitle>
              <QuickDesc>
                Share scope, timeline, standards, and any notes you already
                have. We’ll route your message to the right person.
              </QuickDesc>

              <QuickMeta>
                <QuickMetaRow>
                  <FiMapPin />
                  <span>Notodden, Norway</span>
                </QuickMetaRow>
                <QuickMetaRow>
                  <FiClock />
                  <span>We reply with next steps</span>
                </QuickMetaRow>
              </QuickMeta>

              <Link
                to="/contact"
                style={{ marginTop: 14, display: "inline-block" }}
              >
                <Button variant="ghost">
                  Full contact page <FiArrowRight />
                </Button>
              </Link>
            </QuickLeft>

            <QuickForm
              onSubmit={(e) => {
                e.preventDefault();
                alert("UI-only ✅ Connect to EmailJS/backend when ready.");
              }}
            >
              <FormTitle>Send a message</FormTitle>

              <FormRow>
                <Field>
                  <Label>Name</Label>
                  <Input placeholder="Your name" required />
                </Field>
                <Field>
                  <Label>Email</Label>
                  <Input type="email" placeholder="you@company.com" required />
                </Field>
              </FormRow>

              <Field>
                <Label>Subject</Label>
                <Input placeholder="Switchboard / panel request" required />
              </Field>

              <Field>
                <Label>Message</Label>
                <Textarea
                  rows={5}
                  placeholder="Scope, standards, timeline, needs..."
                  required
                />
              </Field>

              <FormActions>
                <FormBtn type="submit">
                  Send <FiArrowRight />
                </FormBtn>
                <FormHint>
                  UI-only. Hook to EmailJS/backend when ready.
                </FormHint>
              </FormActions>
            </QuickForm>
          </QuickCard>
        </Container>
      </Section>

      {/* ✅ Your existing CTA */}
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

/* =========================
   STYLES (your style + new)
========================= */

const Hero = styled.section`
  position: relative;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  color: white;
`;

const Section = styled.section`
  padding: 60px 0;
  position: relative;
  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
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

/* ✅ New: Cert + metrics split */
const Split2 = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 18px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const CertRow = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const CertBtn = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  padding: 14px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  display: grid;
  gap: 6px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
  transition:
    transform 0.16s ease,
    filter 0.16s ease,
    border-color 0.16s ease;

  span {
    font-weight: 950;
    letter-spacing: -0.02em;
    font-size: 16px;
  }

  small {
    color: var(--muted);
    line-height: 1.4;
  }

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
    border-color: rgba(45, 212, 191, 0.25);
  }
`;

const MetricGrid = styled.div`
  display: grid;
  gap: 12px;
`;

const MetricCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  padding: 14px;
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 12px;
  align-items: center;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
`;

const MetricIcon = styled.div`
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

const MetricLabel = styled.div`
  color: rgba(255, 255, 255, 0.68);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.02em;
`;

const MetricValue = styled.div`
  margin-top: 4px;
  font-weight: 950;
  letter-spacing: -0.02em;
`;

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

/* ✅ New: Project snapshots */
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

/* ✅ New: FAQ accordion */
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
  max-height: ${({ $open }) => ($open ? "260px" : "0")};
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

/* ✅ New: Quick contact */
const QuickCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(
      800px 260px at 12% 10%,
      rgba(124, 92, 255, 0.18),
      transparent 60%
    ),
    radial-gradient(
      800px 260px at 88% 10%,
      rgba(45, 212, 191, 0.12),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.05);
  border-radius: 26px;
  padding: 18px;
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 14px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const QuickLeft = styled.div`
  padding: 6px 6px 6px 8px;
`;

const QuickKicker = styled.div`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.78);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
`;

const QuickTitle = styled.div`
  margin-top: 12px;
  font-weight: 950;
  letter-spacing: -0.03em;
  font-size: 24px;
`;

const QuickDesc = styled.p`
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.75;
  max-width: 62ch;
`;

const QuickMeta = styled.div`
  margin-top: 14px;
  display: grid;
  gap: 10px;
  color: rgba(255, 255, 255, 0.72);
`;

const QuickMetaRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.14);

  svg {
    opacity: 0.9;
  }
`;

const QuickForm = styled.form`
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.14);
  padding: 14px;
`;

const FormTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
`;

const FormRow = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  margin-top: 10px;
`;

const Label = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 850;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.92);
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  &:focus {
    border-color: rgba(45, 212, 191, 0.35);
    box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.12);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.92);
  outline: none;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  &:focus {
    border-color: rgba(124, 92, 255, 0.35);
    box-shadow: 0 0 0 3px rgba(124, 92, 255, 0.12);
  }
`;

const FormActions = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const FormBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.85),
    rgba(45, 212, 191, 0.55)
  );
  color: rgba(255, 255, 255, 0.95);
  font-weight: 950;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    filter 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.06);
  }
  &:active {
    transform: translateY(0px) scale(0.99);
  }
`;

const FormHint = styled.div`
  color: rgba(255, 255, 255, 0.58);
  font-weight: 650;
  font-size: 13px;
`;

/* ✅ Your existing CTA */
const CTASection = styled.section`
  padding: 60px 0;
  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
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
