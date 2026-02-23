import React from "react";
import styled from "styled-components";

export default function PrivacyPolicy() {
  const updated = "Last updated: 2026";

  const toc = [
    { label: "Overview", href: "#overview" },
    { label: "Traffic logs", href: "#traffic" },
    { label: "Comments", href: "#comments" },
    { label: "Media uploads", href: "#media" },
    { label: "Contact forms", href: "#forms" },
    { label: "Google Analytics", href: "#ga" },
    { label: "Facebook Pixel", href: "#fb" },
    { label: "Cookies", href: "#cookies" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
    <Page>
      {/* HERO */}
      <Hero>
        <Container>
          <HeroBg src="/images/banners/privacy.png" alt="Privacy background" />
          <HeroOverlay />
          <HeroContent>
            <Pill>Legal</Pill>
            <H1>Privacy Policy</H1>
            <Sub>
              We want you to understand what data we collect, why we collect it,
              and how you can manage it.
            </Sub>
          </HeroContent>
        </Container>
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
                  This page is a human-readable overview. If anything is
                  unclear, email us and we’ll help.
                </SideHint>

                <SideBtns>
                  <SmallBtn as="a" href="mailto:postmottak@gted.no">
                    Contact us
                  </SmallBtn>
                  <SmallBtn
                    $ghost
                    as="a"
                    href="https://nettvett.no/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn about cookies
                  </SmallBtn>
                </SideBtns>
              </SideCard>
            </Side>

            {/* MAIN */}
            <Main>
              <Card id="overview">
                <CardTitle>Overview</CardTitle>
                <Lead>
                  Personal information is information that can be linked to you
                  as an individual. It can include names and contact
                  information, but also other information that can be indirectly
                  associated with you. It’s important that you know what kind of
                  information we process so you can safeguard your rights under
                  privacy laws.
                </Lead>

                <Callout>
                  <b>This website logs traffic anonymously.</b> This information
                  cannot in any way be traced back to you as an individual.
                </Callout>
              </Card>

              <Card id="traffic">
                <H2>Traffic logs</H2>
                <Text>
                  We may collect basic technical data to keep the website secure
                  and functioning properly (for example: aggregated page views,
                  errors, and performance metrics). This data is used for
                  website operations and improvement.
                </Text>
              </Card>

              <Card id="comments">
                <H2>Comments</H2>
                <Text>
                  When visitors leave comments on the site, the information
                  entered in the comment form may be stored along with the
                  visitor’s IP address and browser user agent string to help
                  detect spam.
                </Text>
                <Text>
                  An anonymized string created from your email address (also
                  called a “hash”) may be provided to the Gravatar service to
                  see if you are using it.
                </Text>

                <Note>
                  Gravatar privacy policy:{" "}
                  <InlineLink
                    href="https://automattic.com/privacy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    automattic.com/privacy
                  </InlineLink>
                </Note>
              </Card>

              <Card id="media">
                <H2>Media</H2>
                <Text>
                  If you upload images to the website, you should avoid
                  uploading images with embedded location data (EXIF GPS).
                  Visitors to the website can download and extract location data
                  from images on the website.
                </Text>
              </Card>

              <Card id="forms">
                <H2>Contact forms</H2>
                <Text>
                  If you submit an inquiry via one of our contact forms, the
                  information you provide will be stored on our servers. The
                  information will only be used to process your request and can
                  be deleted upon request.
                </Text>
              </Card>

              <Card id="ga">
                <H2>Google Analytics</H2>
                <Text>
                  We use Google Analytics to collect information about how
                  visitors use our website. This includes details about pages
                  visited, time spent on each page, and navigation paths. It
                  helps us understand behavior and improve the website
                  experience.
                </Text>
              </Card>

              <Card id="fb">
                <H2>Facebook Pixel</H2>
                <Text>
                  To show relevant ads, Facebook may target users of a website.
                  This is possible because the website may have a “Facebook
                  pixel” installed, which collects data from visitors to the
                  website.
                </Text>
                <Text>
                  You can disable cookies in your browser at any time. You can
                  also manage ad settings in your Facebook account to reduce ad
                  personalization.
                </Text>
              </Card>

              <Card id="cookies">
                <H2>Opting out of cookies</H2>
                <Text>
                  If you do not want cookies to be stored in your browser, you
                  must go into the settings of your browser and disable cookies.
                  Note that this may cause some websites to not function
                  optimally.
                </Text>

                <LinkGrid>
                  <LinkCard
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Guide for Google Chrome
                  </LinkCard>
                  <LinkCard
                    href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Guide for Firefox
                  </LinkCard>
                  <LinkCard
                    href="https://support.apple.com/en-us/HT201265"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Guide for Safari
                  </LinkCard>
                  <LinkCard
                    href="https://support.microsoft.com/en-us/microsoft-edge/view-and-delete-browser-history-in-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Guide for Microsoft Edge
                  </LinkCard>
                </LinkGrid>

                <Text style={{ marginTop: 14 }}>
                  You can also learn more about managing cookies at{" "}
                  <InlineLink
                    href="https://nettvett.no/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    nettvett.no
                  </InlineLink>
                  .
                </Text>
              </Card>

              <Card id="contact">
                <H2>Contact us</H2>
                <Text>
                  If you have any questions or wish to know what information is
                  stored about you, or if you want your information to be
                  deleted, please contact us through our contact pages.
                </Text>

                <ContactBox>
                  <ContactRow>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>
                      <InlineLink href="mailto:postmottak@gted.no">
                        postmottak@gted.no
                      </InlineLink>
                    </ContactValue>
                  </ContactRow>

                  <ContactRow>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactValue>
                      <InlineLink href="tel:+4735901440">
                        35 90 14 40
                      </InlineLink>
                    </ContactValue>
                  </ContactRow>

                  <ContactRow>
                    <ContactLabel>Address</ContactLabel>
                    <ContactValue>
                      <InlineLink
                        href="https://maps.google.com/?q=Heddalsvegen%2011,%20Bygg%2055,%203674%20Notodden"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Heddalsvegen 11, Bygg 55, 3674 Notodden
                      </InlineLink>
                    </ContactValue>
                  </ContactRow>
                </ContactBox>
              </Card>
            </Main>
          </Layout>
        </Container>
      </Wrap>
    </Page>
  );
}

/* =========================
   STYLES
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
  min-height: 380px;
  display: flex;
  align-items: flex-end;
  padding: 80px 0 40px;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 700px) {
    padding: 70px 0 26px;
  }
`;

const HeroBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.05) brightness(0.55);
  transform: scale(1.03);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      900px 400px at 15% 0%,
      rgba(124, 92, 255, 0.24),
      transparent 60%
    ),
    radial-gradient(
      900px 400px at 85% 20%,
      rgba(45, 212, 191, 0.16),
      transparent 60%
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45));
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 700px) {
    padding: 0 16px;
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

const SmallBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: ${({ $ghost }) =>
    $ghost
      ? "rgba(255,255,255,0.06)"
      : "linear-gradient(135deg, rgba(124,92,255,0.85), rgba(45,212,191,0.55))"};
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

const Text = styled.p`
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.8;
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

const Note = styled.div`
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.14);
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.7;
`;

const InlineLink = styled.a`
  color: rgba(45, 212, 191, 1);
  font-weight: 850;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkGrid = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const LinkCard = styled.a`
  padding: 12px 14px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.85);
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

const ContactBox = styled.div`
  margin-top: 12px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.14);
  padding: 14px;
`;

const ContactRow = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const ContactLabel = styled.div`
  font-weight: 900;
  color: rgba(255, 255, 255, 0.8);
`;

const ContactValue = styled.div`
  color: rgba(255, 255, 255, 0.78);
`;
