import React from "react";
import { render, screen, fireEvent } from "./CustomRenderer";
import "@testing-library/jest-dom";
import NavBar from "../components/NavBar";
import { MemoryRouter } from "react-router-dom";

// integration test between AuthContext-NavBar-Login-Join Button and Login-Join Modal
describe("Integration tests for AuthContext-NavBar-Login-Join Button and Login-Join Modal", () => {
  test("Navigation bar contains Login and Join buttons", () => {
    render(
      // mock Router used for wrapping the NavBar
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // get the login button element from the screen using the text Login
    const loginButton = screen.getByText("Login");

    // get the join button element from the screen using the text Join
    const joinButton = screen.getByText("Join");

    // it is expected that the loginButton element is present in the document
    expect(loginButton).toBeInTheDocument();

    // it is expected that the joinButton element is present in the document
    expect(joinButton).toBeInTheDocument();
  });

  test("Upon click on Login button modal opens", () => {
    render(
      // mock Router used for wrapping the NavBar
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // get the login button element from the screen using the text Login
    const loginButton = screen.getByText("Login");

    // simulate a click event the button
    fireEvent.click(loginButton);

    // get the modal element from the screen using the role dialog
    const modal = screen.getByRole("dialog");

    // it is expected that the modal element is present in the document after the click
    expect(modal).toBeInTheDocument();
  });

  test("Upon click on Join button modal opens", () => {
    render(
      // mock Router used for wrapping the NavBar
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // get the join button element from the screen using the text Join
    const joinButton = screen.getByText("Join");

    // simulate a click event the button
    fireEvent.click(joinButton);

    // get the modal element from the screen using the role dialog
    const modal = screen.getByRole("dialog");

    // it is expected that the modal element is present in the document after the click
    expect(modal).toBeInTheDocument();
  });
});
