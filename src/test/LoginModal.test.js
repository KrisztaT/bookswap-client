import React from "react";
import { render, screen, fireEvent} from "./CustomRenderer";
import "@testing-library/jest-dom";
import NavBar from "../components/NavBar";
import { MemoryRouter } from "react-router-dom";
import LoginModal from "../components/LoginModal";


describe("Login Modal Integration Test", () => {
  test("should perform login, receive a token, and navigate to the borrowing page", async () => {
    // render the LoginModal inside the MemoryRouter and mock the Borrowing page component
    render(
      // mock Router used for wrapping the NavBar
      <MemoryRouter>
        <NavBar />
        <LoginModal show={false} handleClose={() => {}} />
      </MemoryRouter>
    );

    // click the Login button to open the LoginModal
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    // expect elements within the LoginModal to be present
    const loginModalTitle = screen.getByText("Log in to BookSwap");
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginModal = screen.getByTestId("login-modal");
    const loginSubmitButton = screen.getByTestId("login-button");

    // check if the elements are present within the LoginModal
    expect(loginModalTitle).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginSubmitButton).toBeInTheDocument();
    expect(loginModal).toBeInTheDocument();

    // simulate type in the username and password input fields
    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    // simulate click on the Login button inside the LoginModal to trigger the login process
    fireEvent.click(loginSubmitButton);
   
  });
});
