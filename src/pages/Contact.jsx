import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Section,
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
    </>
  );
}

const Top = styled.section`
  position: relative;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  padding: 170px 0;
  color: white;
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
