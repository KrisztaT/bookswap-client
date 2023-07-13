import React from 'react';
import { render, screen, fireEvent } from './CustomRenderer';
import '@testing-library/jest-dom';
import NavBar from "../components/NavBar";

test('Navigation bar contains Login and Join buttons', () => {
  render(<NavBar />);

  const loginButton = screen.getByText('Login');
  const joinButton = screen.getByText('Join');

  expect(loginButton).toBeInTheDocument();
  expect(joinButton).toBeInTheDocument();
});
  
test('Upon click on Login button modal opens', () => {
  render(<NavBar />);

  const loginButton = screen.getByText('Login');
 
  fireEvent.click(loginButton);

  const modal = screen.getByRole('dialog');
  expect(modal).toBeInTheDocument();
});


test('Upon click on Join button modal opens', () => {
  render(<NavBar />);

  const joinButton = screen.getByText('Join');
 
  fireEvent.click(joinButton);

  const modal = screen.getByRole('dialog');
  expect(modal).toBeInTheDocument();
});