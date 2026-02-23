import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  // Section,
  SectionHeading,
  Card,
  Button,
} from "../components/UI";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

import heroImg from "../assets/contact-banner.png";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2200);
    e.currentTarget.reset();
  }

  const locations = [
    {
      name: "G.T Nordics AS – HQ",
      address: "Heddalsvegen 11, Bygg 55, 3674 Notodden",
    },
    {
      name: "G.T Nordics AS – Office",
      address: "Bjørn Farmanns gate 3, 3678 Notodden",
    },
  ];

  const [activeLocation, setActiveLocation] = useState(locations[0]);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    activeLocation.address,
  )}&output=embed`;

  const team = [
    {
      name: "Trond Wabakken",
      role: "CEO",
      phone: "+47 90 61 46 50",
      email: "trond.wabakken@gted.no",
      image: "/images/team/trond.png",
    },
    {
      name: "Giovanni Pilla",
      role: "Production Director",
      phone: "+47 99 26 88 92",
      email: "giovanni.pilla@gted.no",
      image: "/images/team/giovanni.png",
    },
    {
      name: "Ingeborg Roe Schia",
      role: "Human Resources",
      phone: "+47 95 16 94 91",
      email: "ingeborg.roe.schia@gted.no",
      image: "/images/team/ingeborg.png",
    },
    {
      name: "Erlend Holberg",
      role: "HSE",
      phone: "+47 99 36 33 20",
      email: "erlend.holberg@gted.no",
      image: "/images/team/erlend.png",
    },
    {
      name: "Espen Etholm",
      role: "Design & Engineering",
      phone: "+47 92 20 75 06",
      email: "espen.etholm@gted.no",
      image: "/images/team/espen.png",
    },
    {
      name: "Sondre Flåten",
      role: "Production Supervisor department 1",
      phone: "+47 99 37 66 97",
      email: "sondre.flaten@gted.no",
      image: "/images/team/sondre.png",
    },
    {
      name: "Alexander Stordal",
      role: "Secondary Production Supervisor department 1",
      phone: "+47 47 36 03 00",
      email: "alexander.stordal@gted.no",
      image: "/images/team/alexander.png",
    },
    {
      name: "Anders Huneide",
      role: "Production Supervisor department 2",
      phone: "+47 41 67 50 22",
      email: "anders.huneide@gted.no",
      image: "/images/team/anders.png",
    },
    {
      name: "Luca Cafaro",
      role: "Electrics Supervisor department 2",
      phone: "+47 48 92 88 20",
      email: "luca.cafaro@gted.no",
      image: "/images/team/luca.png",
    },
    {
      name: "Marius Karlberg",
      role: "Logistic/Mechanical Supervisor department 2",
      phone: "+47 45 86 20 97",
      email: "marius.karlberg@gted.no",
      image: "/images/team/marius.png",
    },
    {
      name: "Frode Wabakken",
      role: "Production Supervisor mechanical assembly department 3",
      phone: "+47 90 59 39 44",
      email: "frode.wabakken@gted.no",
      image: "/images/team/frode.png",
    },
  ];

  const initials = (fullName = "") =>
    fullName
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join("");

  return (
    <>
      <Top>
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something reliable"
            desc="Tell us what you’re planning—scope, timeline, standards—and we’ll reply with next steps."
          />
        </Container>
      </Top>

      <Section>
        <Container>
          <Grid>
            <Card>
              <CardTitle>Contact details</CardTitle>
              <Info>
                <li>
                  <FiMapPin />
                  <div>
                    <b>Address</b>
                    <span>Heddalsvegen 11, Bygg 55, 3674 Notodden</span>
                  </div>
                </li>
                <li>
                  <FiMail />
                  <div>
                    <b>Email</b>
                    <a href="mailto:postmottak@gted.no">postmottak@gted.no</a>
                  </div>
                </li>
                <li>
                  <FiPhone />
                  <div>
                    <b>Phone</b>
                    <a href="tel:+4735901440">35 90 14 40</a>
                  </div>
                </li>
              </Info>

              <Note>
                Prefer email? Send a short description + attachments (if
                relevant) and we’ll take it from there.
              </Note>
            </Card>

            <Card>
              <CardTitle>Send a message</CardTitle>
              <Form onSubmit={onSubmit}>
                <Row>
                  <Field>
                    <label>Name</label>
                    <input required placeholder="Your name" />
                  </Field>
                  <Field>
                    <label>Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                    />
                  </Field>
                </Row>

                <Field>
                  <label>Subject</label>
                  <input
                    required
                    placeholder="Data center switchboard request"
                  />
                </Field>

                <Field>
                  <label>Message</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell us about scope, standards, timeline, and needs..."
                  />
                </Field>

                <Actions>
                  <Button type="submit">
                    {status === "sent" ? (
                      "Sent ✔"
                    ) : (
                      <>
                        Send <FiSend />
                      </>
                    )}
                  </Button>
                  <Small>
                    This form is UI-only. Hook it up to your backend/email
                    service when ready.
                  </Small>
                </Actions>
              </Form>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* MAP / LOCATIONS SECTION */}
      <Section>
        <Container>
          <LocationsWrap>
            <HeaderRow>
              <div>
                <LocEyebrow>Locations</LocEyebrow>
                <LocTitle>Find us in Notodden</LocTitle>
                <LocDesc>
                  Choose an address to preview it on the map. You can add more
                  locations anytime.
                </LocDesc>
              </div>
            </HeaderRow>

            <LocGrid>
              <LocList>
                {locations.map((loc) => (
                  <LocCard
                    key={loc.address}
                    $active={activeLocation.address === loc.address}
                    onClick={() => setActiveLocation(loc)}
                    type="button"
                  >
                    <LocName>{loc.name}</LocName>
                    <LocAddress>{loc.address}</LocAddress>

                    <LocActions>
                      <MiniBtn
                        as="a"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          loc.address,
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open in Google Maps
                      </MiniBtn>

                      <MiniBtn
                        as="a"
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                          loc.address,
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Directions
                      </MiniBtn>
                    </LocActions>
                  </LocCard>
                ))}
              </LocList>

              <MapCard>
                <MapTop>
                  <MapTitle>{activeLocation.name}</MapTitle>
                  <MapSub>{activeLocation.address}</MapSub>
                </MapTop>

                <MapFrame
                  title={`Map - ${activeLocation.name}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </MapCard>
            </LocGrid>
          </LocationsWrap>
        </Container>
      </Section>

      {/* MEET OUR TEAM SECTION */}
      <Section>
        <Container>
          <TeamWrap>
            <TeamHeader>
              <div>
                <TeamEyebrow>Meet our team</TeamEyebrow>
                <TeamTitle>People behind the delivery</TeamTitle>
                <TeamDesc>
                  Reach out directly — we’ll connect you with the right person
                  for your project.
                </TeamDesc>
              </div>
            </TeamHeader>

            <TeamGrid>
              {team.map((m) => (
                <TeamCard key={m.email}>
                  <Avatar>
                    {m.image ? (
                      <AvatarImg src={m.image} alt={m.name} />
                    ) : (
                      <AvatarInitials>{initials(m.name)}</AvatarInitials>
                    )}
                  </Avatar>

                  <TeamName>{m.name}</TeamName>
                  <TeamRole>{m.role}</TeamRole>

                  <TeamDivider />

                  <TeamMeta>
                    <MetaRow>
                      <MetaLabel>Phone</MetaLabel>
                      <MetaValue
                        as="a"
                        href={`tel:${m.phone.replace(/\s/g, "")}`}
                      >
                        {m.phone}
                      </MetaValue>
                    </MetaRow>

                    <MetaRow>
                      <MetaLabel>Email</MetaLabel>
                      <MetaValue as="a" href={`mailto:${m.email}`}>
                        {m.email}
                      </MetaValue>
                    </MetaRow>
                  </TeamMeta>
                </TeamCard>
              ))}
            </TeamGrid>
          </TeamWrap>
        </Container>
      </Section>
    </>
  );
}

const Top = styled.section`
  position: relative;
  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  padding: 170px 0;
  color: white;
`;

const Section = styled.section`
  padding: 60px 0;
  position: relative;
  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
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

const Info = styled.ul`
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: grid;
  gap: 12px;

  li {
    display: grid;
    grid-template-columns: 18px 1fr;
    gap: 12px;
    align-items: start;
    color: var(--muted);

    svg {
      margin-top: 3px;
      opacity: 0.95;
    }
    b {
      color: rgba(255, 255, 255, 0.92);
      display: block;
      margin-bottom: 2px;
    }
    a {
      color: rgba(255, 255, 255, 0.92);
      text-decoration: underline;
    }
  }
`;

const Note = styled.p`
  margin: 14px 0 0;
  color: var(--muted);
  line-height: 1.75;
`;

const Form = styled.form`
  margin-top: 14px;
  display: grid;
  gap: 12px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: grid;
  gap: 8px;

  label {
    color: var(--muted);
    font-weight: 700;
    font-size: 13px;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 12px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
    color: rgba(255, 255, 255, 0.92);
    outline: none;
    transition:
      border-color 0.18s ease,
      filter 0.18s ease;
  }

  input:focus,
  textarea:focus {
    border-color: rgba(124, 92, 255, 0.55);
    filter: brightness(1.06);
  }

  textarea {
    resize: vertical;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 4px;
`;

const Small = styled.div`
  color: var(--muted);
  font-size: 13px;
`;

const LocationsWrap = styled.div`
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
  border-radius: 26px;
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

const LocEyebrow = styled.div`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--muted);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
`;

const LocTitle = styled.h3`
  margin: 12px 0 0;
  font-size: 22px;
  letter-spacing: -0.03em;
`;

const LocDesc = styled.p`
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.7;
  max-width: 70ch;
`;

const LocGrid = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const LocList = styled.div`
  display: grid;
  gap: 10px;
`;

const LocCard = styled.button`
  text-align: left;
  border-radius: 20px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255,255,255,.18)" : "rgba(255,255,255,.10)"};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, rgba(124,92,255,.16), rgba(45,212,191,.10))"
      : "rgba(255,255,255,.04)"};
  padding: 14px;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    filter 0.18s ease,
    background 0.18s ease;
  color: rgba(255, 255, 255, 0.92);

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }
  &:active {
    transform: translateY(0px) scale(0.99);
  }
`;

const LocName = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
`;

const LocAddress = styled.div`
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.6;
`;

const LocActions = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const MiniBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 800;
  font-size: 13px;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    background 0.18s ease,
    filter 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.07);
    filter: brightness(1.05);
  }
  &:active {
    transform: translateY(0px) scale(0.99);
  }
`;

const MapCard = styled.div`
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const MapTop = styled.div`
  padding: 14px 14px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
`;

const MapTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
`;

const MapSub = styled.div`
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.5;
  font-size: 13px;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 420px;
  border: 0;
  display: block;

  @media (max-width: 980px) {
    height: 360px;
  }
`;

////// TEAM

const TeamWrap = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(
      900px 320px at 20% 10%,
      rgba(96, 165, 250, 0.14),
      transparent 60%
    ),
    radial-gradient(
      900px 320px at 85% 15%,
      rgba(124, 92, 255, 0.16),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.04);
  border-radius: 26px;
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

const TeamEyebrow = styled.div`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--muted);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
`;

const TeamTitle = styled.h3`
  margin: 12px 0 0;
  font-size: 22px;
  letter-spacing: -0.03em;
`;

const TeamDesc = styled.p`
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.7;
  max-width: 70ch;
`;

const TeamGrid = styled.div`
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.18s ease,
    filter 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;
  text-align: center;

  /* &:hover {
    transform: translateY(-2px);
    filter: brightness(1.06);
    background: rgba(255, 255, 255, 0.055);
    border-color: rgba(255, 255, 255, 0.18);
  } */

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 40px 120px rgba(0, 0, 0, 0.45);
  }
`;

const Avatar = styled.div`
  width: 116px;
  height: 116px;
  border-radius: 50%;
  margin: 0 auto 12px;
  padding: 4px;
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.95),
    rgba(45, 212, 191, 0.75)
  );
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.2);

  transition: transform 0.25s ease;

  ${TeamCard}:hover & {
    transform: scale(1.05);
  }
`;

const AvatarInitials = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 950;
  letter-spacing: -0.03em;
  font-size: 34px;
  color: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.22);
  background:
    radial-gradient(
      60px 60px at 30% 30%,
      rgba(255, 255, 255, 0.18),
      transparent 60%
    ),
    rgba(0, 0, 0, 0.18);
`;

const TeamName = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
  font-size: 18px;
`;

const TeamRole = styled.div`
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 600;
`;

const TeamDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 14px 0;
`;

const TeamMeta = styled.div`
  display: grid;
  gap: 10px;
`;

const MetaRow = styled.div`
  display: grid;
  gap: 6px;
`;

const MetaLabel = styled.div`
  color: var(--muted2);
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const MetaValue = styled.div`
  color: rgba(255, 255, 255, 0.92);
  font-weight: 800;
  line-height: 1.4;
  cursor: pointer;

  &:hover {
    color: rgba(124, 92, 255, 1);
    text-decoration: none;
  }
`;
