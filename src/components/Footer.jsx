import React from "react";
import styled from "styled-components";

import logoImg from "../assets/logo.png";

export default function FooterGTNordics() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="gt-footer">
      <div className="gt-container">
        {/* Top grid */}
        <div className="gt-grid">
          {/* Brand */}
          <section className="gt-brand">
            <a
              href="/"
              className="gt-brandRow"
              aria-label="G.T Nordics AS Home"
            >
              <Logo to="/">
                <img src={logoImg} alt="logo" />
              </Logo>
            </a>

            <p className="gt-desc">
              Explore the forefront of electrical distribution systems and
              control panel technologies designed to enhance efficiency and
              safety.
            </p>
          </section>

          {/* Certifications */}
          <div className="gt-certStack">
            <h4 className="gt-heading">Certifications</h4>
            <a
              href="/pdf/ISO-9001.pdf"
              className="gt-certBtn"
              target="_blank"
              rel="noreferrer"
            >
              ISO 9001
            </a>

            <a
              href="/pdf/ISO-14001.pdf"
              className="gt-certBtn"
              target="_blank"
              rel="noreferrer"
            >
              ISO 14001
            </a>

            <a
              href="/pdf/ISO-45001.pdf"
              className="gt-certBtn"
              target="_blank"
              rel="noreferrer"
            >
              ISO 45001
            </a>
          </div>

          {/* Company */}
          <section className="gt-section">
            <h4 className="gt-heading">Company</h4>
            <nav aria-label="Company">
              <ul className="gt-linkList">
                <li>
                  <a className="gt-link" href="/">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="gt-link" href="/about">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="gt-link" href="/services">
                    SERVICES
                  </a>
                </li>
                <li>
                  <a className="gt-link" href="/career">
                    CAREER
                  </a>
                </li>
                <li>
                  <a className="gt-link" href="/contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          {/* Contact */}
          <section className="gt-section">
            <h4 className="gt-heading">Contact</h4>

            <div className="gt-contactBlock">
              <div className="gt-contactRow">
                <span className="gt-contactLabel">Email:</span>{" "}
                <a className="gt-link" href="mailto:postmottak@gted.no">
                  postmottak@gted.no
                </a>
              </div>

              <div className="gt-contactRow">
                <span className="gt-contactLabel">Phone:</span>{" "}
                <a className="gt-link" href="tel:+4735901440">
                  35 90 14 40
                </a>
              </div>

              <div className="gt-contactRow">
                <span className="gt-contactLabel">Address:</span>{" "}
                <a
                  className="gt-link"
                  href="https://maps.google.com/?q=Heddalsvegen%2011,%20Bygg%2055,%203674%20Notodden"
                  target="_blank"
                  rel="noreferrer"
                >
                  Heddalsvegen 11, Bygg 55, 3674 Notodden
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Follow Us */}
        <div className="gt-midRow">
          <div className="gt-rule" />
          <div className="gt-followWrap">
            <div className="gt-followTitle">Follow Us</div>
            <div className="gt-socialRow">
              <a
                href="https://www.facebook.com/gtedas/?locale=nb_NO"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="gt-socialBtn"
              >
                <IconFacebook />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="gt-socialBtn"
              >
                <IconX />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="gt-socialBtn"
              >
                <IconInstagram />
              </a>
            </div>
          </div>
          <div className="gt-rule" />
        </div>

        {/* Bottom bar */}
        <div className="gt-bottomBar">
          <div className="gt-bottomLeft">
            © {year} G.T Nordics AS |{" "}
            <a className="gt-link" href="/privacy-policy">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a className="gt-link" href="/transparency-act">
              Transparency Act
            </a>
          </div>

          <div className="gt-bottomRight">
            Designed &amp; Developed by{" "}
            <a
              className="gt-link"
              href="https://florent-hajdari.com/"
              target="_blank"
              rel="noreferrer"
            >
              Florent Hajdari
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        className="gt-toTop"
        aria-label="Back to top"
        title="Back to top"
      >
        <IconChevronUp />
      </button>

      <style>{css}</style>
    </footer>
  );
}

const Logo = styled.div`
  img {
    width: 185px;
  }
`;

const css = `
  .gt-footer{
    position: relative;
    color: rgba(255,255,255,0.85);
    background: radial-gradient(circle at left top, rgb(17, 27, 46), rgb(11, 18, 32) 60%);
    overflow: hidden;
  }

  .gt-container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 44px 20px 22px;
  }

  /* ✅ Desktop 4 columns */
  .gt-grid{
    display: grid;
    grid-template-columns: 1.35fr 0.9fr 0.7fr 1.05fr;
    gap: 36px;
    align-items: start;
  }

  .gt-brandRow{
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: inherit;
  }

  .gt-brandName{
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.2px;
  }

  .gt-accent{ color: #5cc6ff; }
  .gt-accentSoft{ color: rgba(92,198,255,0.9); font-weight: 600; }
  .gt-strong{ color: rgba(255,255,255,0.92); }

  .gt-desc{
    margin-top: 14px;
    max-width: 360px;
    line-height: 1.55;
    font-size: 13.5px;
    color: rgba(255,255,255,0.62);
  }

  .gt-heading{
    margin: 4px 0 14px;
    font-size: 18px;
    font-weight: 700;
    color: rgba(255,255,255,0.9);
  }

  .gt-certStack{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: fit-content;
  }

  .gt-certBtn{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  min-width: 170px;
  border-radius: 999px;
  text-decoration: none;

  /* ✅ Matches glassy style */
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.14);
  color: rgba(255,255,255,0.9);

  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 12.5px;

  box-shadow: 0 14px 45px rgba(0,0,0,0.28);
  transition: transform .18s ease, filter .18s ease, background .18s ease, border-color .18s ease;
}

.gt-certBtn:hover{
  transform: translateY(-2px);
  filter: brightness(1.06);
  background: linear-gradient(
    135deg,
    rgba(124,92,255,0.20),
    rgba(45,212,191,0.14)
  );
  border-color: rgba(255,255,255,0.18);
}

.gt-certBtn:active{
  transform: translateY(0px) scale(0.99);
}
  

  .gt-linkList{
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 10px;
  }

.gt-link{
  color: rgba(255,255,255,0.78);
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.06em;
  transition: color .18s ease, filter .18s ease;
}

.gt-link:hover{
  color: rgba(124,92,255,1);
  filter: none;
}

  .gt-contactBlock{
    display: grid;
    gap: 10px;
    color: rgba(255,255,255,0.72);
    font-size: 14px;
    line-height: 1.5;
  }
  .gt-contactLabel{
    color: rgba(255,255,255,0.8);
    font-weight: 700;
  }

  .gt-midRow{
    margin-top: 34px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 18px;
    align-items: center;
  }

  .gt-rule{
    height: 1px;
    background: rgba(92,198,255,0.35);
    box-shadow: 0 0 24px rgba(92,198,255,0.15);
  }

  .gt-followWrap{
    display: grid;
    justify-items: center;
    gap: 10px;
    padding: 12px 16px;
  }

  .gt-followTitle{
    font-weight: 800;
    font-size: 18px;
    color: rgba(255,255,255,0.78);
  }

  .gt-socialRow{
    display: flex;
    gap: 14px;
    align-items: center;
    margin-top: 1rem;
  }

  .gt-socialBtn{
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    color: rgba(92,198,255,0.9);
    text-decoration: none;
    transition: transform .15s ease, filter .15s ease, border-color .15s ease;
  }
  .gt-socialBtn:hover{
    transform: translateY(-1px);
    filter: brightness(1.1);
    border-color: rgba(92,198,255,0.28);
  }

  .gt-bottomBar{
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    padding-top: 16px;
    border-top: 1px solid rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.65);
    font-size: 14px;
  }
  .gt-bottomLeft, .gt-bottomRight{ line-height: 1.6; }

  .gt-toTop{
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 46px;
    height: 46px;
    border-radius: 8px;
    border: 1px solid rgba(92,198,255,0.35);
    background: rgba(0, 170, 255, 0.45);
    color: rgba(255,255,255,0.95);
    cursor: pointer;
    box-shadow: 0 12px 30px rgba(0,0,0,0.35);
    transition: transform .15s ease, filter .15s ease;
  }
  .gt-toTop:hover{ transform: translateY(-1px); filter: brightness(1.05); }

  .gt-link:hover{ filter: brightness(1.12); }
  .gt-link:focus-visible, .gt-toTop:focus-visible, .gt-certBtn:focus-visible, .gt-socialBtn:focus-visible{
    outline: 2px solid rgba(92,198,255,0.7);
    outline-offset: 3px;
  }

  /* ✅ Tablet: 2 columns */
  @media (max-width: 1023px){
    .gt-grid{
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    .gt-desc{ max-width: 520px; }
  }

  /* ✅ Mobile: 1 column stacked (no chaos) */
  @media (max-width: 767px){
    .gt-container{ padding: 36px 16px 18px; }

    .gt-grid{
      grid-template-columns: 1fr;   /* <-- the key */
      gap: 22px;
    }

    .gt-certBtn{
      width: 100%;
      min-width: 0;
      justify-content: center;
    }

    .gt-midRow{
      grid-template-columns: 1fr;   /* <-- stack */
      gap: 14px;
      margin-top: 26px;
    }

    .gt-rule{ width: 100%; }
    .gt-followWrap{ padding: 6px 0; }

    .gt-bottomBar{
      flex-direction: column;       /* <-- stack bottom bar */
      align-items: flex-start;
      gap: 8px;
    }

    .gt-toTop{
      right: 14px;
      bottom: 14px;
      width: 44px;
      height: 44px;
    }
  }
`;

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.6V5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7V11H7v3h2.8v8h3.7Z"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2Zm-1.1 18h1.7L6.1 3.9H4.3L17.8 20Z"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.8A5.2 5.2 0 1 1 6.8 14 5.2 5.2 0 0 1 12 8.8Zm0 2A3.2 3.2 0 1 0 15.2 14 3.2 3.2 0 0 0 12 10.8ZM18 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}

function IconChevronUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 8.3 5.6 14.7l1.4 1.4L12 11.1l5 5 1.4-1.4L12 8.3Z"
      />
    </svg>
  );
}
