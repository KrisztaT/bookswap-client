import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { useAuthContext } from "../hooks/useAuthContext";
import { MemoryRouter } from "react-router-dom";

// mock the useAuthContext hook
jest.mock("../hooks/useAuthContext", () => ({
  useAuthContext: jest.fn(),
}));
describe("Unit test for NavBar render with Login and Join Button", () => {
  // unit test for NavBar render with Login and Join Button
  test("Navigation bar contains Login and Join buttons", () => {
    // mock the return value of the useAuthContext hook
    useAuthContext.mockReturnValue({
      isAuthenticated: false,
      login: jest.fn(),
      join: jest.fn(),
    });

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
});
