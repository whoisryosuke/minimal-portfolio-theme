import React, { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";

const ProjectItemContainer = styled.div`
  position: relative;

  &:hover {
    color: var(--colors-primary);
  }

  & img {
    opacity: 0;
    position: absolute;
    height: var(--project-image-height, auto);
    top: var(--project-image-offset, -50%);
    left: 4em;
    z-index: 7100;
  }

  &:hover img {
    opacity: 1;
    display: block;
  }
`;

export default function ProjectItem({
  title,
  imageSrc,
  imageAlt,
  maxHeight = 500
}) {
  const [imageHeight, setImageHeight] = useState();
  const [imageOffset, setImageOffset] = useState();
  const imageRef = useRef();

  // Make sure to scale image even smaller if bigger than user's window height
  const imageHeightHandler = useCallback(() => {
    // Reset height to max
    let newHeight = maxHeight;
    const clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    if (clientHeight && newHeight > clientHeight) newHeight = clientHeight;
    console.log(clientHeight, newHeight);
    setImageHeight(newHeight);

    let newOffset = `-${Math.round(newHeight / 2)}px`;
    // Check if image is positioned outside viewport
    // const currentImagePosition = imageRef.current.getBoundingClientRect();
    // console.log("position", currentImagePosition.y);
    // if (
    //   clientHeight &&
    //   currentImagePosition &&
    //   currentImagePosition.y + imageRef.current.clientHeight > clientHeight
    // ) {
    //   const difference =
    //     currentImagePosition.y + imageRef.current.clientHeight - clientHeight;
    //   newOffset = `-${Math.round(difference)}px`;
    // }
    setImageOffset(newOffset);
  }, [maxHeight, imageRef]);

  const handleResize = useCallback(() => {
    imageHeightHandler();
  }, [imageHeightHandler]);

  useEffect(() => {
    imageHeightHandler();
  }, [imageHeightHandler]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <ProjectItemContainer
      style={{
        "--project-image-offset": imageOffset,
        "--project-image-height": imageHeight ? `${imageHeight}px` : "auto"
      }}
    >
      <h3>{title}</h3>
      <img ref={imageRef} src={imageSrc} alt={imageAlt} width="auto" />
    </ProjectItemContainer>
  );
}
