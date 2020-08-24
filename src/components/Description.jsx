import React from "react";
import styled from "styled-components";

const DescriptionText = styled.h2`
  max-width: 450px;
  font-size: 1.5em;
  font-weight: normal;
  letter-spacing: 0;
`;

export default function Description() {
  return (
    <DescriptionText>
      I've been working as a <strong>designer</strong> and{" "}
      <strong>developer</strong> for <em>over 15 years now</em>, with over a
      decade of experience in the cannabis industry. From engineering{" "}
      <strong>web apps</strong> and <u>e-commerce solutions</u>, to designing{" "}
      <strong>brands</strong> and <strong>products</strong>, to producing{" "}
      <em>innovative digital media</em>, and even creating{" "}
      <a href="https://gfycat.com/@weedporndaily">
        <strong>famous ganja-related GIFs</strong>
      </a>{" "}
      -- my experience as an entrepreneur has broadened my skillset
      substantially.
    </DescriptionText>
  );
}
