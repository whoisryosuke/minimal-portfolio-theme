import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const ProjectContainer = styled.nav`
  max-width: 960px;
  font-size: 2em;
`;

export default function Projects() {
  return (
    <ProjectContainer>
      <ProjectItem
        title="Project Title"
        imageSrc="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <ProjectItem
        title="Another Title"
        imageSrc="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <ProjectItem
        title="The Projects Don't Stop"
        imageSrc="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
    </ProjectContainer>
  );
}
