import React from "react";
import { render, screen } from "./CustomRenderer";
import LendingPage from "../pages/LendingPage";

describe("Test for LendingPage", () => {
  test("Renders LendingPage and check if AddBook and LenderListing components are on it",  () => {
    render(<LendingPage />);

    // text rendering on Add Book to Swap Listing form on AddBook component
    const addBookText = screen.getByText("Add Book to Swap Listing");
    // check if the Add Book to Swap Listing text is rendered on the page
    expect(addBookText).toBeInTheDocument();

    // check if the form inputs are rendered
    const imgUrlInput = screen.getByPlaceholderText("Image Url");
    const titleInput = screen.getByPlaceholderText("Title (required)");
    const authorInput = screen.getByPlaceholderText("Author (required)");
    const pageInput = screen.getByPlaceholderText("Page");
    const releaseYearInput = screen.getByPlaceholderText("Release Year");
    const locationInput = screen.getByPlaceholderText("Location (required)");
    
    expect(imgUrlInput).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(authorInput).toBeInTheDocument();
    expect(pageInput).toBeInTheDocument();
    expect(releaseYearInput).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
  
    // check if the "Add" button is rendered
    const addButton = screen.getByRole("button", { name: "Add" });
    expect(addButton).toBeInTheDocument();

    // text rendering on Listed books on LenderListing component
    const bookList = screen.getByText("Listed books");
    // check if the Listed books text is rendered on the page
    expect(bookList).toBeInTheDocument();
  });

  });

