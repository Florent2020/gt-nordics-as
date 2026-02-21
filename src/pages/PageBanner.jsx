import React from "react";
import styled from "styled-components";
import { Container } from "../components/UI";

export default function PageBanner({ title, subtitle, image, height = 320 }) {
  return (
    <Wrap $image={image} $height={height}>
      <Container>
        <Content>
          <Title>{title}</Title>
          {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
        </Content>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.section`
  min-height: ${(p) => p.$height}px;
  padding: 62px 0 46px;
  display: grid;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  background-image: ${({ $image }) => `
    radial-gradient(circle at left top, rgb(17, 27, 46), rgb(11, 18, 32) 60%),
    linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.60)),
    url(${$image})
  `};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    min-height: 240px;
    padding: 46px 0 34px;
  }
`;

const Content = styled.div`
  max-width: 860px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 950;
  letter-spacing: -0.04em;
  line-height: 1.04;
  font-size: clamp(28px, 4.2vw, 54px);
`;

const Subtitle = styled.p`
  margin: 12px 0 0;
  max-width: 70ch;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  font-size: clamp(14px, 2vw, 18px);
`;
