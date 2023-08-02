import React from "react";
import { Container, Image } from "react-bootstrap";
import "../styles/Hero.css";

// Hero section is for rendering basic information about the platform
const HeroSection = () => {
  return (
    <Container className="w-80 d-flex flex-column justify-content-center align-items-center">
      <Image className="hero-img" src="./hero_img.jpg" alt="Hero" />
      <p className="hero-text">
        Welcome to <b className="hero-highlight-text">BookSwap</b>, connect with
        fellow bookworms, discover literary adventures, and share the joy of
        reading. By clicking the <b className="hero-highlight-text">"Join"</b>{" "}
        button, you can easily become part of our community and embark on a
        delightful book swapping experience.
      </p>
      <Image
        className="hero-bookshelf"
        src="./book_covers_d.png"
        alt="Bookshelf"
      />
    </Container>
  );
};

export default HeroSection;
