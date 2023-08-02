import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

// unit tests for HomePage
describe("HomePage", () => {
  test("renders the hero image", () => {
    //render homepage
    render(<HomePage />);
    // get the hero image element from the screen using the alt text Hero
    const heroImage = screen.getByAltText("Hero");
    // check if the hero image is rendered on the page
    expect(heroImage).toBeInTheDocument();
  });

  test("renders the bookshelf image", () => {
    render(<HomePage />);
    // get the bookshelf image element from the screen using the alt text BookShelf
    const heroImage = screen.getByAltText("Bookshelf");
    // check if the bookshelf image is rendered on the page
    expect(heroImage).toBeInTheDocument();
  });

  test("renders the hero text correctly", () => {
    render(<HomePage />);
    // get the BookSwap text
    const heroTextElement = screen.getByText("BookSwap");
    // check if the BookSwap text is rendered on the page
    expect(heroTextElement).toBeInTheDocument();
  });
});
