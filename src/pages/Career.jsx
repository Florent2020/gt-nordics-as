import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { Container, SectionHeading, Card, Button } from "../components/UI";
import {
  FiArrowRight,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiTool,
  FiBookOpen,
  FiHeart,
  FiHelpCircle,
  FiUpload,
  FiCheckCircle,
  FiCheck,
  FiX,
} from "react-icons/fi";
// import { Link } from "react-router-dom";

import heroImg from "../assets/career-banner-2.png";

export default function Career() {
  const jobs = useMemo(
    () => [
      {
        title: "Panel Builder / Electrician",
        location: "Notodden, Norway",
        type: "Full-time",
        desc: "Build and assemble electrical panels and switchboards with tidy craftsmanship and strong safety routines.",
        tasks: [
          "Assemble switchboards and control panels following drawings and build instructions",
          "Keep wiring, labeling and layout tidy and service-friendly",
          "Follow HSE routines and internal quality checkpoints",
          "Support FAT readiness and delivery documentation",
        ],
        requirements: [
          "Experience as panel builder, electrician, or relevant production background",
          "Attention to detail and a safety-first mindset",
          "Comfortable with checklists, documentation, and structured routines",
          "Team player who communicates clearly",
        ],
      },
      {
        title: "Electrical Engineer",
        location: "Notodden, Norway",
        type: "Full-time",
        desc: "Work on schematics, technical documentation and design reviews for switchboard deliveries.",
        tasks: [
          "Create and review electrical schematics and documentation packages",
          "Support technical clarifications and interface mapping",
          "Collaborate with production for buildability and quality",
          "Participate in design reviews and FAT planning",
        ],
        requirements: [
          "Electrical engineering background (education or strong relevant experience)",
          "Comfortable with documentation and structured workflows",
          "Clear communication and practical mindset",
          "Quality-oriented and able to work cross-functionally",
        ],
      },
      {
        title: "QA / Documentation Coordinator",
        location: "Notodden, Norway",
        type: "Full-time",
        desc: "Support structured testing, documentation packages and quality routines throughout the delivery flow.",
        tasks: [
          "Coordinate documentation packages and handover requirements",
          "Support FAT structure, checklists and traceability routines",
          "Maintain quality records and process improvements",
          "Work closely with engineering and production teams",
        ],
        requirements: [
          "Strong structure and attention to detail",
          "Comfortable with documentation and quality routines",
          "Able to coordinate across multiple stakeholders",
          "Proactive mindset and clear communication",
        ],
      },
    ],
    [],
  );

  const [selected, setSelected] = useState(jobs[0]);
  const [openFaq, setOpenFaq] = useState(0);

  // ✅ Application form state (UI only for now)
  const [form, setForm] = useState({
    role: jobs[0]?.title || "",
    fullName: "",
    email: "",
    phone: "",
    message: "",
    cvFile: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Auto-sync role dropdown with the selected job
  useEffect(() => {
    setForm((prev) => ({ ...prev, role: selected?.title || "" }));
  }, [selected]);

  const benefits = [
    {
      icon: <FiShield />,
      title: "Safety-first culture",
      desc: "HSE routines and clean workmanship are part of daily delivery — not a slogan.",
    },
    {
      icon: <FiUsers />,
      title: "Strong team collaboration",
      desc: "Engineering + production work closely so delivery stays predictable and efficient.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Stable growth projects",
      desc: "We build infrastructure that matters — supporting high availability environments.",
    },
    {
      icon: <FiBookOpen />,
      title: "Learning & development",
      desc: "Work with experienced people and improve your skills through structured routines.",
    },
    {
      icon: <FiTool />,
      title: "Real craftsmanship",
      desc: "We care about tidy builds, labeling, serviceability and professional execution.",
    },
    {
      icon: <FiHeart />,
      title: "Respectful workplace",
      desc: "Clear roles, good communication and a culture that values responsibility.",
    },
  ];

  const hiringSteps = [
    [
      "1",
      "Apply / Contact",
      "Send your CV or a short message about your background.",
    ],
    ["2", "Quick call", "We align on role fit, availability and expectations."],
    [
      "3",
      "Interview",
      "Meet the team — practical talk about tasks and ways of working.",
    ],
    [
      "4",
      "Offer & onboarding",
      "Clear start plan, safety routines, and structured onboarding.",
    ],
  ];

  const cultureCards = [
    {
      title: "Built for reliability",
      desc: "We work as if uptime matters — because for our clients, it does.",
    },
    {
      title: "Structured routines",
      desc: "Checklists, documentation and traceability help deliver consistently at scale.",
    },
    {
      title: "Quality in details",
      desc: "Cable management, labeling and clean panel layout are part of our standard.",
    },
  ];

  const faqs = [
    {
      q: "Do you accept open applications?",
      a: "Yes. If you don’t see a perfect match, send an open application and we’ll reach out if a role fits.",
    },
    {
      q: "Is experience required for all roles?",
      a: "Not always. For some roles, a practical mindset and willingness to learn can be just as important.",
    },
    {
      q: "Where are you located?",
      a: "Our operations are based in Notodden, Norway. Some roles may require on-site work due to production needs.",
    },
    {
      q: "What should I include when applying?",
      a: "A CV and a short note about what you’ve done, what you want to do next, and when you’re available.",
    },
  ];

  const onChange = (key) => (e) => {
    const value = e?.target?.value ?? "";
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const onPickFile = (e) => {
    const file = e?.target?.files?.[0] || null;
    setForm((prev) => ({ ...prev, cvFile: file }));
    setErrors((prev) => ({ ...prev, cvFile: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.role) next.role = "Please select a role.";
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!form.cvFile) next.cvFile = "Please upload your CV (PDF/DOC/DOCX).";
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    // ✅ UI-only for now:
    console.log("Career application (UI-only)", {
      role: form.role,
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      message: form.message,
      cvFile: form.cvFile
        ? {
            name: form.cvFile.name,
            size: form.cvFile.size,
            type: form.cvFile.type,
          }
        : null,
    });

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrors({});
    setForm({
      role: selected?.title || "",
      fullName: "",
      email: "",
      phone: "",
      message: "",
      cvFile: null,
    });
  };

  return (
    <>
      {/* HERO */}
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
            <a href="#apply">
              <Button variant="ghost">Apply here</Button>
            </a>
          </TopActions>
        </Container>
      </Top>

      {/* WHY WORK HERE */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why work here"
            title="A workplace built on discipline and respect"
            desc="We’re proud of our structured delivery culture — clear routines, strong safety mindset, and team collaboration."
          />

          <BenefitsGrid>
            {benefits.map((b) => (
              <BenefitCard key={b.title}>
                <BenefitIcon>{b.icon}</BenefitIcon>
                <div>
                  <BenefitTitle>{b.title}</BenefitTitle>
                  <BenefitDesc>{b.desc}</BenefitDesc>
                </div>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
      </Section>

      {/* OPENINGS */}
      <Section>
        <Container>
          <Grid id="openings">
            <Left>
              {jobs.map((j) => (
                <JobButton
                  key={j.title}
                  onClick={() => setSelected(j)}
                  $active={selected.title === j.title}
                  type="button"
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
                  {selected.tasks.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <h4>What we look for</h4>
                <ul>
                  {selected.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>

                <Actions>
                  <a href="#apply">
                    <Button>
                      Apply here <FiArrowRight />
                    </Button>
                  </a>

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

      {/* ✅ APPLICATION FORM (NEW) */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Application"
            title="Apply in 2 minutes"
            desc="Upload your CV and tell us what role you’re interested in. (Form UI now — EmailJS/backend later.)"
          />

          <ApplyGrid id="apply">
            <ApplyLeft>
              <ApplyCard>
                {!submitted ? (
                  <>
                    <ApplyTop>
                      <div>
                        <ApplyTitle>Application form</ApplyTitle>
                        <ApplySub>
                          Role auto-fills from the selected opening.
                        </ApplySub>
                      </div>

                      <ApplyHint>
                        <FiCheck /> PDF / DOC / DOCX
                      </ApplyHint>
                    </ApplyTop>

                    <Form onSubmit={onSubmit}>
                      <FieldRow>
                        <Field>
                          <Label>Role</Label>
                          <Select value={form.role} onChange={onChange("role")}>
                            {jobs.map((j) => (
                              <option key={j.title} value={j.title}>
                                {j.title}
                              </option>
                            ))}
                            <option value="">
                              Open application (no specific role)
                            </option>
                          </Select>
                          {errors.role ? <Error>{errors.role}</Error> : null}
                        </Field>

                        <Field>
                          <Label>Full name *</Label>
                          <Input
                            value={form.fullName}
                            onChange={onChange("fullName")}
                            placeholder="Your full name"
                            autoComplete="name"
                          />
                          {errors.fullName ? (
                            <Error>{errors.fullName}</Error>
                          ) : null}
                        </Field>
                      </FieldRow>

                      <FieldRow>
                        <Field>
                          <Label>Email *</Label>
                          <Input
                            value={form.email}
                            onChange={onChange("email")}
                            placeholder="you@example.com"
                            autoComplete="email"
                          />
                          {errors.email ? <Error>{errors.email}</Error> : null}
                        </Field>

                        <Field>
                          <Label>Phone</Label>
                          <Input
                            value={form.phone}
                            onChange={onChange("phone")}
                            placeholder="+47 ..."
                            autoComplete="tel"
                          />
                        </Field>
                      </FieldRow>

                      <Field>
                        <Label>Message (optional)</Label>
                        <Textarea
                          value={form.message}
                          onChange={onChange("message")}
                          placeholder="Short note about your background, availability, or questions…"
                          rows={4}
                        />
                      </Field>

                      <Field>
                        <Label>Upload CV *</Label>
                        <FileRow>
                          <FileButton
                            type="button"
                            onClick={() =>
                              document.getElementById("cvUpload")?.click()
                            }
                          >
                            <FiUpload /> Choose file
                          </FileButton>

                          <FileName title={form.cvFile?.name || ""}>
                            {form.cvFile ? (
                              <>
                                <b>{form.cvFile.name}</b>
                                <small>
                                  {(form.cvFile.size / 1024 / 1024).toFixed(2)}{" "}
                                  MB
                                </small>
                              </>
                            ) : (
                              <span>No file selected</span>
                            )}
                          </FileName>

                          {form.cvFile ? (
                            <ClearFile
                              type="button"
                              onClick={() =>
                                setForm((prev) => ({ ...prev, cvFile: null }))
                              }
                              aria-label="Remove file"
                              title="Remove file"
                            >
                              <FiX />
                            </ClearFile>
                          ) : null}

                          <HiddenFile
                            id="cvUpload"
                            type="file"
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={onPickFile}
                          />
                        </FileRow>
                        {errors.cvFile ? <Error>{errors.cvFile}</Error> : null}
                      </Field>

                      <FormActions>
                        <Button type="submit">
                          Submit application <FiArrowRight />
                        </Button>

                        <FormNote>
                          This is UI-only for now. Later we’ll connect
                          EmailJS/backend.
                        </FormNote>
                      </FormActions>
                    </Form>
                  </>
                ) : (
                  <Success>
                    <SuccessIcon>
                      <FiCheckCircle />
                    </SuccessIcon>
                    <SuccessTitle>Application saved (UI only)</SuccessTitle>
                    <SuccessDesc>
                      Your application is ready — next step is connecting email
                      sending.
                      <br />
                      For now, it’s logged in the console.
                    </SuccessDesc>

                    <SuccessActions>
                      <Button type="button" onClick={resetForm}>
                        Submit another <FiArrowRight />
                      </Button>
                      <a href="#openings">
                        <Button variant="ghost">Back to openings</Button>
                      </a>
                    </SuccessActions>
                  </Success>
                )}
              </ApplyCard>
            </ApplyLeft>

            <ApplyRight>
              <SideCard>
                <SideTop>
                  <span>Tips for a strong application</span>
                  <small>What helps us reply faster</small>
                </SideTop>

                <SideList>
                  {[
                    "Include a CV (PDF preferred) with your latest experience",
                    "Write 2–3 lines about what role you want and your availability",
                    "If you’re a panel builder/electrician: mention drawings, wiring, labeling, FAT",
                    "If engineer/QA: mention documentation routines, reviews, quality mindset",
                  ].map((t) => (
                    <li key={t}>
                      <FiCheck /> {t}
                    </li>
                  ))}
                </SideList>

                <SideDivider />

                <SideCTA>
                  <div>
                    <b>Prefer email?</b>
                    <span>Send your CV directly.</span>
                  </div>
                  <a href="mailto:postmottak@gted.no">
                    <Button variant="ghost">postmottak@gted.no</Button>
                  </a>
                </SideCTA>
              </SideCard>
            </ApplyRight>
          </ApplyGrid>
        </Container>
      </Section>

      {/* HIRING PROCESS */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Hiring process"
            title="Clear steps. Fast feedback."
            desc="We keep the process simple so you know what’s next."
          />

          <StepsGrid>
            {hiringSteps.map(([n, t, d]) => (
              <Step key={n}>
                <StepNo>{n}</StepNo>
                <div>
                  <StepTitle>{t}</StepTitle>
                  <StepDesc>{d}</StepDesc>
                </div>
              </Step>
            ))}
          </StepsGrid>
        </Container>
      </Section>

      {/* CULTURE */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Life at G.T Nordics"
            title="Quality work — without chaos"
            desc="We work with structure and calm execution. That’s how good deliveries happen."
          />

          <CultureGrid>
            {cultureCards.map((c) => (
              <CultureCard key={c.title}>
                <b>{c.title}</b>
                <p>{c.desc}</p>
              </CultureCard>
            ))}
          </CultureGrid>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we often get"
            desc="If you’re unsure, send a message — we’ll respond with next steps."
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
                    <span>
                      <FiHelpCircle /> {f.q}
                    </span>
                    <i>{isOpen ? "–" : "+"}</i>
                  </FaqBtn>

                  {isOpen && <FaqBody>{f.a}</FaqBody>}
                </FaqItem>
              );
            })}
          </FaqWrap>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <Container>
          <CTABox>
            <div>
              <CTATitle>Ready to join — or want to know more?</CTATitle>
              <CTADesc>
                Apply now or ask a question. We’ll connect you with the right
                person.
              </CTADesc>
            </div>

            <CTAButtons>
              <a href="#apply">
                <Button>
                  Apply here <FiArrowRight />
                </Button>
              </a>
              <a href="#openings">
                <Button variant="ghost">View openings</Button>
              </a>
            </CTAButtons>
          </CTABox>
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

/* ====== Benefits ====== */

const BenefitsGrid = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 22px;
  padding: 16px;
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 12px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const BenefitIcon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.25),
    rgba(45, 212, 191, 0.18)
  );
`;

const BenefitTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
`;

const BenefitDesc = styled.div`
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.7;
`;

/* ====== NEW: Apply form layout ====== */

const ApplyGrid = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ApplyLeft = styled.div``;
const ApplyRight = styled.div``;

const ApplyCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(
      900px 300px at 12% 10%,
      rgba(124, 92, 255, 0.18),
      transparent 60%
    ),
    radial-gradient(
      900px 300px at 85% 15%,
      rgba(45, 212, 191, 0.12),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.05);
  border-radius: 26px;
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const ApplyTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const ApplyTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.03em;
  font-size: 20px;
`;

const ApplySub = styled.div`
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.6;
`;

const ApplyHint = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
  color: rgba(255, 255, 255, 0.82);
  font-weight: 800;
  font-size: 12px;
`;

const Form = styled.form`
  margin-top: 14px;
  display: grid;
  gap: 12px;
`;

const FieldRow = styled.div`
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
`;

const Label = styled.label`
  font-weight: 850;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
`;

const Input = styled.input`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
  padding: 12px 12px;
  color: rgba(255, 255, 255, 0.92);
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  &:focus {
    border-color: rgba(124, 92, 255, 0.45);
    box-shadow: 0 0 0 3px rgba(124, 92, 255, 0.12);
  }
`;

const Select = styled.select`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
  padding: 12px 12px;
  color: rgba(255, 255, 255, 0.92);
  outline: none;

  &:focus {
    border-color: rgba(45, 212, 191, 0.45);
    box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.12);
  }
`;

const Textarea = styled.textarea`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
  padding: 12px 12px;
  color: rgba(255, 255, 255, 0.92);
  outline: none;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  &:focus {
    border-color: rgba(124, 92, 255, 0.45);
    box-shadow: 0 0 0 3px rgba(124, 92, 255, 0.12);
  }
`;

const Error = styled.div`
  color: rgba(255, 120, 120, 0.95);
  font-size: 12.5px;
  font-weight: 700;
`;

const FileRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
`;

const FileButton = styled.button`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  padding: 10px 12px;
  color: rgba(255, 255, 255, 0.92);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 850;
  transition:
    transform 0.18s ease,
    filter 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.06);
  }
`;

const FileName = styled.div`
  min-width: 0;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.16);
  padding: 10px 12px;
  color: rgba(255, 255, 255, 0.82);

  b {
    display: block;
    font-weight: 900;
    letter-spacing: -0.02em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  small {
    display: block;
    margin-top: 4px;
    color: var(--muted);
  }
`;

const ClearFile = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.16);
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;

  &:hover {
    filter: brightness(1.08);
  }
`;

const HiddenFile = styled.input`
  display: none;
`;

const FormActions = styled.div`
  margin-top: 4px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const FormNote = styled.div`
  color: var(--muted);
  font-size: 13px;
`;

/* ====== Success state ====== */

const Success = styled.div`
  padding: 6px 2px 2px;
`;

const SuccessIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(45, 212, 191, 0.22);
  background: rgba(45, 212, 191, 0.08);
  margin-bottom: 12px;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const SuccessTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.03em;
  font-size: 22px;
`;

const SuccessDesc = styled.div`
  margin-top: 10px;
  color: var(--muted);
  line-height: 1.75;
`;

const SuccessActions = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

/* ====== Right-side tips card ====== */

const SideCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
`;

const SideTop = styled.div`
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

const SideList = styled.ul`
  margin: 12px 0 0;
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
      opacity: 0.9;
    }
  }
`;

const SideDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 14px 0;
`;

const SideCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;

  b {
    display: block;
    font-weight: 950;
    letter-spacing: -0.02em;
  }
  span {
    display: block;
    margin-top: 4px;
    color: var(--muted);
    line-height: 1.6;
    font-size: 14px;
  }
`;

/* ====== Steps ====== */

const StepsGrid = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 22px;
  padding: 16px;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 12px;
`;

const StepNo = styled.div`
  width: 56px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 950;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

const StepTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.02em;
`;

const StepDesc = styled.div`
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.6;
`;

/* ====== Culture ====== */

const CultureGrid = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const CultureCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(
      700px 220px at 10% 10%,
      rgba(124, 92, 255, 0.18),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.05);
  border-radius: 22px;
  padding: 18px;

  b {
    display: block;
    font-weight: 950;
    letter-spacing: -0.02em;
  }

  p {
    margin: 10px 0 0;
    color: var(--muted);
    line-height: 1.7;
  }
`;

/* ====== FAQ ====== */

const FaqWrap = styled.div`
  margin-top: 18px;
  display: grid;
  gap: 10px;
`;

const FaqItem = styled.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
`;

const FaqBtn = styled.button`
  width: 100%;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.92);
  cursor: pointer;
  padding: 14px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-weight: 900;

  span {
    display: inline-flex;
    gap: 10px;
    align-items: center;
    text-align: left;
  }

  i {
    font-style: normal;
    opacity: 0.85;
    font-size: 18px;
  }
`;

const FaqBody = styled.div`
  padding: 0 14px 14px;
  color: var(--muted);
  line-height: 1.7;
`;

/* ====== CTA ====== */

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

const CTAButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
