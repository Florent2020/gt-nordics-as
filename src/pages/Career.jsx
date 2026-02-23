import React, { useMemo, useState } from "react";
import styled from "styled-components";
import {
  Container,
  // Section,
  SectionHeading,
  Card,
  Button,
} from "../components/UI";
import { FiArrowRight, FiMapPin, FiBriefcase, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

import heroImg from "../assets/career-banner-2.png";

export default function Career() {
  const jobs = useMemo(
    () => [
      {
        title: "Panel Builder / Electrician",
        location: "Notodden, Norway",
        type: "Full-time",
        desc: "Build and assemble electrical panels and switchboards with tidy craftsmanship and strong safety routines.",
      },
      {
        title: "Electrical Engineer",
        location: "Notodden, Norway",
        type: "Full-time",
        desc: "Work on schematics, technical documentation and design reviews for switchboard deliveries.",
      },
      {
        title: "QA / Documentation Coordinator",
        location: "Notodden, Norway",
        type: "Full-time",
        desc: "Support structured testing, documentation packages and quality routines throughout the delivery flow.",
      },
    ],
    [],
  );

  const [selected, setSelected] = useState(jobs[0]);

  return (
    <>
      <Top>
        <Container>
          <SectionHeading
            eyebrow="Career"
            title="Build the infrastructure behind the cloud"
            desc="Join a team that delivers mission-critical switchboards for data centers—where quality, safety, and precision actually matter."
          />
          <TopActions>
            <a href="#openings">
              <Button>
                See openings <FiArrowRight />
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="ghost">Send an open application</Button>
            </Link>
          </TopActions>
        </Container>
      </Top>

      <Section>
        <Container>
          <Grid id="openings">
            <Left>
              {jobs.map((j) => (
                <JobButton
                  key={j.title}
                  onClick={() => setSelected(j)}
                  $active={selected.title === j.title}
                >
                  <div>
                    <strong>{j.title}</strong>
                    <small>
                      <FiMapPin /> {j.location} · <FiBriefcase /> {j.type}
                    </small>
                  </div>
                  <span>View</span>
                </JobButton>
              ))}
            </Left>

            <Right>
              <Card>
                <RoleTitle>{selected.title}</RoleTitle>
                <Meta>
                  <span>
                    <FiMapPin /> {selected.location}
                  </span>
                  <span>
                    <FiBriefcase /> {selected.type}
                  </span>
                  <span>
                    <FiClock /> ASAP
                  </span>
                </Meta>
                <RoleDesc>{selected.desc}</RoleDesc>

                <Divider />

                <h4>What you’ll do</h4>
                <ul>
                  <li>
                    Collaborate with engineering and production to deliver clean
                    builds
                  </li>
                  <li>Follow structured quality routines and HSE practices</li>
                  <li>
                    Contribute to FAT preparation and documentation readiness
                  </li>
                </ul>

                <h4>What we look for</h4>
                <ul>
                  <li>
                    Hands-on mindset, attention to detail and safety-first
                    approach
                  </li>
                  <li>Comfortable working with documentation and checklists</li>
                  <li>Team player who communicates clearly</li>
                </ul>

                <Actions>
                  <Link to="/contact">
                    <Button>
                      Apply / Contact <FiArrowRight />
                    </Button>
                  </Link>
                  <SmallNote>
                    Prefer email?{" "}
                    <a href="mailto:postmottak@gted.no">postmottak@gted.no</a>
                  </SmallNote>
                </Actions>
              </Card>
            </Right>
          </Grid>
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
  grid-template-columns: 0.95fr 1.05fr;
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  display: grid;
  gap: 10px;
`;

const JobButton = styled.button`
  border-radius: 18px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255,255,255,.18)" : "rgba(255,255,255,.10)"};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, rgba(124,92,255,.18), rgba(45,212,191,.12))"
      : "rgba(255,255,255,.04)"};
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
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

  strong {
    display: block;
    font-weight: 900;
    letter-spacing: -0.02em;
    margin-bottom: 6px;
    text-align: left;
  }

  small {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    color: var(--muted);
  }

  span {
    font-weight: 900;
    opacity: 0.9;
  }
`;

const Right = styled.div``;

const RoleTitle = styled.h3`
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.03em;
`;

const Meta = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  color: var(--muted);
  font-weight: 650;
  font-size: 13px;

  span {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
  }
`;

const RoleDesc = styled.p`
  margin: 12px 0 0;
  color: var(--muted);
  line-height: 1.75;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 14px 0;
`;

const Actions = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const SmallNote = styled.div`
  color: var(--muted);
  font-size: 13px;

  a {
    color: rgba(255, 255, 255, 0.92);
    text-decoration: underline;
  }
`;
