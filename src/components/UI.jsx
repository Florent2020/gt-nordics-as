import React from "react";
import styled from "styled-components";

export function Container({ children }) {
  return <C>{children}</C>;
}

export function Section({ children }) {
  return <S>{children}</S>;
}

export function SectionHeading({ eyebrow, title, desc, align = "left" }) {
  return (
    <HeadingWrap $align={align}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Title>{title}</Title>
      {desc ? <Desc>{desc}</Desc> : null}
    </HeadingWrap>
  );
}

export function Button({ children, variant = "primary", ...props }) {
  return (
    <Btn $variant={variant} {...props}>
      {children}
    </Btn>
  );
}

export function Card({ children }) {
  return <CardWrap>{children}</CardWrap>;
}

const C = styled.div`
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 18px;
`;

const S = styled.section`
  padding: 76px 0;

  @media (max-width: 720px) {
    padding: 56px 0;
  }
`;

const HeadingWrap = styled.div`
  text-align: ${({ $align }) => $align};
  max-width: 760px;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--muted);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
`;

const Title = styled.h2`
  margin: 14px 0 0;
  font-size: clamp(34px, 4.6vw, 64px);
  line-height: 1.08;
  letter-spacing: -0.02em;
`;

const Desc = styled.p`
  /* margin: 12px 0 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7; */

  margin: 14px 0 0;
    color: var(--muted);
    font-size: 17px;
    line-height: 1.75;
    max-width: 67ch;
`;

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid var(--stroke);
  background: ${({ $variant }) =>
    $variant === "primary"
      ? "linear-gradient(135deg, rgba(124,92,255,.9), rgba(45,212,191,.75))"
      : "rgba(255,255,255,.06)"};
  color: rgba(255, 255, 255, 0.92);
  box-shadow: ${({ $variant }) =>
    $variant === "primary" ? "var(--shadow)" : "none"};
  cursor: pointer;
  transition:
    transform 0.18s ease,
    filter 0.18s ease,
    background 0.18s ease;
  user-select: none;
  font-weight: 700;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }
  &:active {
    transform: translateY(0px) scale(0.99);
  }
`;

const CardWrap = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--r);
  padding: 18px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
`;
