import React from "react";
import styled from "styled-components";

export default function Transparency() {
  const pdfUrl = "/pdf/transparency-act-statement-2023.pdf";

  const toc = [
    { label: "Overview", href: "#overview" },
    { label: "1. Background", href: "#background" },
    { label: "2. CTS Nordics Family", href: "#family" },
    { label: "3. Guidelines & Procedures", href: "#guidelines" },
    { label: "4. Grievance Mechanism", href: "#grievance" },
    { label: "5. Due Diligence", href: "#duediligence" },
    { label: "Supply Chain & Labor", href: "#supplychain" },
    { label: "Signatures", href: "#signatures" },
  ];

  return (
    <Page>
      {/* HERO */}
      <Hero>
        <HeroBg src="/images/banners/transparency.png" alt="" />
        <HeroOverlay />
        <HeroContent>
          <Pill>Transparency Act</Pill>
          <H1>Transparency Act Statement</H1>
          <Sub>
            Our annual disclosure describing how we work with human rights and
            decent working conditions across our operations and supply chain.
          </Sub>

          <HeroActions>
            <PrimaryBtn as="a" href={pdfUrl} target="_blank" rel="noreferrer">
              Download PDF
            </PrimaryBtn>

            <SecondaryBtn
              as="a"
              href="mailto:Transparency.Act.Requests@cts-nordics.com"
            >
              Request Information
            </SecondaryBtn>
          </HeroActions>

          <MetaRow>
            <MetaItem>
              <MetaLabel>Statement year</MetaLabel>
              <MetaValue>2023</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Applies to</MetaLabel>
              <MetaValue>CTS Nordics Holding AS & subsidiaries</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Requests</MetaLabel>
              <MetaValue>Transparency.Act.Requests@cts-nordics.com</MetaValue>
            </MetaItem>
          </MetaRow>
        </HeroContent>
      </Hero>

      {/* CONTENT */}
      <Wrap>
        <Container>
          <Layout>
            {/* TOC */}
            <Side>
              <SideCard>
                <SideTitle>Contents</SideTitle>
                <SideList>
                  {toc.map((t) => (
                    <SideLink key={t.href} href={t.href}>
                      {t.label}
                    </SideLink>
                  ))}
                </SideList>

                <SideHint>
                  Tip: You can also download the full statement as PDF.
                </SideHint>

                <SideBtns>
                  <SmallBtn
                    as="a"
                    href={pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download PDF
                  </SmallBtn>
                  <SmallBtn
                    $ghost
                    as="a"
                    href="mailto:Transparency.Act.Requests@cts-nordics.com"
                  >
                    Email Requests
                  </SmallBtn>
                </SideBtns>
              </SideCard>
            </Side>

            {/* MAIN ARTICLE */}
            <Main>
              <Card id="overview">
                <CardTitle>2023 Transparency Act Statement</CardTitle>
                <CardSubtitle>
                  For CTS Nordics Holding AS and CTS Nordics AS, NordicEPOD AS,
                  G.T Nordics AS, and Gapit Nordics AS.
                </CardSubtitle>

                <Lead>
                  The purpose of the Norwegian Transparency Act is to promote
                  corporate respect for fundamental human rights and decent
                  working conditions. Through due diligence and other actions,
                  we work to ensure compliance in our own operations and
                  throughout our supply chain.
                </Lead>

                <ImageGrid>
                  <ImgCard>
                    <Img
                      src="/images/banners/doc-1.png"
                      alt="Documentation and governance"
                      loading="lazy"
                      decoding="async"
                    />
                    <ImgCap>Governance & documentation</ImgCap>
                  </ImgCard>

                  <ImgCard>
                    <Img
                      src="/images/banners/doc-2.png"
                      alt="Compliance and procedures"
                      loading="lazy"
                      decoding="async"
                    />
                    <ImgCap>Procedures & due diligence</ImgCap>
                  </ImgCard>
                </ImageGrid>
              </Card>

              <Card id="background">
                <H2>1. Background</H2>
                <Text>
                  CTS Nordics Holding AS is proud that its products and services
                  provide benefits for society at large. At the same time, we
                  recognize that these benefits may come with potential societal
                  risks and costs.
                </Text>
                <Text>
                  Therefore, this statement contains the results of our due
                  diligence efforts for the prior year to identify areas of
                  human rights risks within our supply chain and operations, as
                  well as our efforts to monitor, mitigate, or eliminate those
                  risks.
                </Text>
                <Text>
                  This statement constitutes the annual disclosure as required
                  under the Act relating to Enterprises’ Transparency and Work
                  on Fundamental Human Rights and Working Conditions
                  (Transparency Act).
                </Text>
              </Card>

              <Card id="family">
                <H2>2. About the CTS Nordics Holding AS family</H2>
                <Text>
                  CTS Nordics Holding AS builds data centers and provides
                  turnkey data center solutions at scale in the Nordics. Through
                  our group companies, we cover design, engineering,
                  manufacturing, construction, fitting-out and commissioning.
                </Text>

                <Bullets>
                  <li>
                    <b>CTS Nordics</b> – design/build contracting and project
                    delivery in the Nordics.
                  </li>
                  <li>
                    <b>NordicEPOD</b> – large scale modular electrical back-up
                    power supplies and related manufacturing.
                  </li>
                  <li>
                    <b>Gapit</b> – software and industrial automation solutions.
                  </li>
                  <li>
                    <b>G.T Nordics</b> – design, manufacture and installation of
                    electrical distribution systems, switchboards and automation
                    systems.
                  </li>
                </Bullets>
              </Card>

              <Card id="guidelines">
                <H2>3. Guidelines and Procedures</H2>
                <Text>
                  Under the Transparency Act, companies must embed responsible
                  business conduct into their policies and implement suitable
                  measures to prevent or mitigate adverse impacts on fundamental
                  human rights.
                </Text>

                <H3>1) Codes of Conduct</H3>
                <Text>
                  Our commitment begins with defining principles in Codes of
                  Conduct adopted by the Board and integrated into management
                  and operations. Our codes align with the OECD Guidelines for
                  Multinational Enterprises and the UN Guiding Principles on
                  Business and Human Rights.
                </Text>

                <H3>2) Embedded Policies</H3>
                <Text>
                  We embed policies throughout our operations to ensure
                  objectives are followed consistently through management
                  requirements and compliance routines.
                </Text>

                <H3>3) Independent Internal Oversight</H3>
                <Text>
                  A compliance structure provides support and monitoring across
                  the holding company and subsidiaries. Oversight functions and
                  HSE frameworks support compliance at operational level.
                </Text>

                <Callout>
                  <b>Note:</b> This page is a styled web version. For the
                  official full statement, use the PDF download above.
                </Callout>
              </Card>

              <Card id="grievance">
                <H2>4. Grievance Mechanism and Requests for Information</H2>
                <Text>
                  Under the Transparency Act, any person has a right to
                  information regarding how we address potential or actual
                  adverse impacts on fundamental human rights.
                </Text>
                <Text>
                  Requests concerning the Transparency Act should be sent to{" "}
                  <InlineLink href="mailto:Transparency.Act.Requests@cts-nordics.com">
                    Transparency.Act.Requests@cts-nordics.com
                  </InlineLink>
                  .
                </Text>
              </Card>

              <Card id="duediligence">
                <H2>5. Due Diligence</H2>
                <Text>
                  We undertake due diligence reviews to identify areas of
                  potential human rights risks across operations and supply
                  chain, and use that process to review and improve internal
                  practices.
                </Text>

                <H3>1) Human Rights Assessment for our supply chain</H3>
                <Text>
                  We collect relevant information from major suppliers and
                  partners to analyze the supply chain and identify risks or
                  areas of concern that may require mitigation.
                </Text>

                <H3>2) Monitoring and screening of suppliers</H3>
                <Text>
                  If a risk or violation is identified, a formal process
                  determines appropriate course of action. Where possible, we
                  aim for timely dialogue and corrective action consistent with
                  law and our Code of Conduct.
                </Text>

                <H3>3) Employment and labor monitoring</H3>
                <Text>
                  We monitor labor practices related to human rights and decent
                  working conditions for relevant projects and production
                  activities, supported by HR, compliance and HSE functions.
                </Text>

                <H3>4) Training</H3>
                <Text>
                  We develop formal processes for annual and onboarding training
                  to ensure awareness of relevant laws, regulations, HSE
                  practices and obligations under the Transparency Act.
                </Text>

                <H3>5) Due diligence findings and future actions</H3>
                <Text>
                  We continue to identify areas where there are potential risks
                  that should be monitored and mitigated on an ongoing basis.
                </Text>
              </Card>

              <Card id="supplychain">
                <H2>Supply Chain and Labor</H2>

                <H3>1) Supply chain</H3>
                <Text>
                  In terms of supply chain, the group procures materials and
                  equipment used in data center construction and production. We
                  work to screen suppliers using our processes and policies.
                </Text>

                <H3>2) Labor</H3>
                <Text>
                  The construction industry can face labor exploitation risks.
                  By following applicable laws and regulations, and through
                  internal controls and monitoring routines, we work to reduce
                  risk and ensure decent working conditions.
                </Text>
              </Card>

              <Card id="signatures">
                <H2>Signatures</H2>
                <Text>
                  Signatures to the Transparency Act Statement for the year
                  2023. Oslo, Norway.
                </Text>

                <SignatureCard>
                  <SigTop>
                    <SigDate>20 June 2023</SigDate>
                    <SigNote>CTS Nordics Holding AS family</SigNote>
                  </SigTop>

                  <SigGrid>
                    <SigBlock>
                      <SigCompany>CTS Nordics Holding AS</SigCompany>
                      <SigLine>Ian Paul Wardell — Chair</SigLine>
                      <SigLine>
                        Filip Schelfhout — General Manager & Director
                      </SigLine>
                    </SigBlock>

                    <SigBlock>
                      <SigCompany>NordicEPOD AS</SigCompany>
                      <SigLine>Ian Paul Wardell — Chair</SigLine>
                      <SigLine>
                        Filip Schelfhout — General Manager & Director
                      </SigLine>
                      <SigLine>Morten Molven — Director</SigLine>
                    </SigBlock>

                    <SigBlock>
                      <SigCompany>Gapit AS</SigCompany>
                      <SigLine>Ian Paul Wardell — Chair</SigLine>
                      <SigLine>
                        Kjetil Kåsin — General Manager & Director
                      </SigLine>
                      <SigLine>Filip Schelfhout — Director</SigLine>
                    </SigBlock>

                    <SigBlock>
                      <SigCompany>G.T Nordics AS</SigCompany>
                      <SigLine>Filip Schelfhout — Chair</SigLine>
                      <SigLine>Trond Wabakken — General Manager</SigLine>
                      <SigLine>Geir Mykland — Director</SigLine>
                      <SigLine>Trond Nygård — Director</SigLine>
                      <SigLine>Ian Paul Wardell — Director</SigLine>
                    </SigBlock>
                  </SigGrid>

                  <SigImgWrap>
                    <SigImg
                      src="/images/transparency/signatures.jpg"
                      alt="Signatures"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // If you don't have this image, it won't break the layout
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </SigImgWrap>
                </SignatureCard>

                <BottomCta>
                  <BottomCtaText>
                    Need the full document or supporting details?
                  </BottomCtaText>
                  <BottomCtaActions>
                    <PrimaryBtn
                      as="a"
                      href={pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download PDF
                    </PrimaryBtn>
                    <SecondaryBtn
                      as="a"
                      href="mailto:Transparency.Act.Requests@cts-nordics.com"
                    >
                      Email Requests
                    </SecondaryBtn>
                  </BottomCtaActions>
                </BottomCta>
              </Card>
            </Main>
          </Layout>
        </Container>
      </Wrap>
    </Page>
  );
}

/* =========================
   STYLES (same file)
========================= */

const Page = styled.div`
  background: radial-gradient(
    circle at 15% 0%,
    rgb(17, 27, 46),
    rgb(11, 18, 32) 60%
  );
  color: rgba(255, 255, 255, 0.9);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 700px) {
    padding: 0 16px;
  }
`;

const Hero = styled.section`
  position: relative;
  min-height: 340px;
  display: grid;
  align-items: end;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const HeroBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.75) contrast(1.05);
  transform: scale(1.02);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      900px 400px at 20% 0%,
      rgba(124, 92, 255, 0.25),
      transparent 60%
    ),
    radial-gradient(
      900px 400px at 85% 20%,
      rgba(45, 212, 191, 0.18),
      transparent 60%
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.75));
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 34px 20px 28px;

  @media (max-width: 700px) {
    padding: 26px 16px 22px;
  }
`;

const Pill = styled.div`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.78);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
`;

const H1 = styled.h1`
  margin: 14px 0 0;
  font-size: 44px;
  letter-spacing: -0.04em;
  line-height: 1.1;

  @media (max-width: 700px) {
    font-size: 34px;
  }
`;

const Sub = styled.p`
  margin: 12px 0 0;
  max-width: 80ch;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.7;
`;

const HeroActions = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.85),
    rgba(45, 212, 191, 0.55)
  );
  color: rgba(255, 255, 255, 0.95);
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
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

const SecondaryBtn = styled(PrimaryBtn)`
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const MetaRow = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MetaItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 18px;
  padding: 12px 14px;
`;

const MetaLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 800;
`;

const MetaValue = styled.div`
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 800;
`;

const Wrap = styled.div`
  padding: 26px 0 60px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Side = styled.aside`
  position: sticky;
  top: 84px;
  height: fit-content;

  @media (max-width: 980px) {
    position: relative;
    top: auto;
  }
`;

const SideCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(
      900px 280px at 15% 10%,
      rgba(124, 92, 255, 0.16),
      transparent 60%
    ),
    radial-gradient(
      900px 280px at 85% 10%,
      rgba(45, 212, 191, 0.12),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.04);
  border-radius: 24px;
  padding: 16px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const SideTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
  font-size: 16px;
`;

const SideList = styled.div`
  margin-top: 12px;
  display: grid;
  gap: 10px;
`;

const SideLink = styled.a`
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
  font-weight: 800;
  transition:
    transform 0.18s ease,
    background 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.06);
  }
`;

const SideHint = styled.p`
  margin: 14px 0 0;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.7;
  font-size: 13px;
`;

const SideBtns = styled.div`
  margin-top: 12px;
  display: grid;
  gap: 10px;
`;

const SmallBtn = styled(PrimaryBtn)`
  padding: 11px 14px;
  font-size: 14px;
  background: ${({ $ghost }) =>
    $ghost
      ? "rgba(255,255,255,.06)"
      : "linear-gradient(135deg, rgba(124,92,255,.85), rgba(45,212,191,.55))"};
`;

const Main = styled.main`
  display: grid;
  gap: 14px;
`;

const Card = styled.article`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 26px;
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.03em;
`;

const CardSubtitle = styled.p`
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
`;

const Lead = styled.p`
  margin: 14px 0 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.75;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 20px;
  letter-spacing: -0.02em;
`;

const H3 = styled.h3`
  margin: 14px 0 0;
  font-size: 16px;
  letter-spacing: -0.01em;
`;

const Text = styled.p`
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.8;
`;

const Bullets = styled.ul`
  margin: 12px 0 0;
  padding-left: 18px;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.8;

  li {
    margin: 6px 0;
  }
  b {
    color: rgba(255, 255, 255, 0.92);
  }
`;

const Callout = styled.div`
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.14),
    rgba(45, 212, 191, 0.1)
  );
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.75;
`;

const InlineLink = styled.a`
  color: rgba(45, 212, 191, 1);
  font-weight: 850;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageGrid = styled.div`
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ImgCard = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
`;

const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;

  @media (max-width: 720px) {
    height: 200px;
  }
`;

const ImgCap = styled.div`
  padding: 10px 12px;
  color: rgba(255, 255, 255, 0.72);
  font-weight: 750;
`;

const SignatureCard = styled.div`
  margin-top: 12px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.14);
  overflow: hidden;
`;

const SigTop = styled.div`
  padding: 14px 14px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const SigDate = styled.div`
  font-weight: 950;
`;

const SigNote = styled.div`
  color: rgba(255, 255, 255, 0.65);
  font-weight: 750;
`;

const SigGrid = styled.div`
  padding: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SigBlock = styled.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  padding: 12px;
`;

const SigCompany = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
`;

const SigLine = styled.div`
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.6;
`;

const SigImgWrap = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
`;

const SigImg = styled.img`
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  display: block;
`;

const BottomCta = styled.div`
  margin-top: 16px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.16),
    rgba(45, 212, 191, 0.1)
  );
  padding: 14px;
`;

const BottomCtaText = styled.div`
  font-weight: 900;
  letter-spacing: -0.02em;
`;

const BottomCtaActions = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
