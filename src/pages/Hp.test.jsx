// Hp.test.js
import React from 'react';
import {  fireEvent, render, screen } from '@testing-library/react';
import { it } from 'vitest';
import Hp from './Hp';


describe('Unit Testing', () => { 
  
it('renders the Hp component', () => {
  render(<Hp />);
  screen.debug()
  // Check for the presence of emoji elements
  const sadEmoji = screen.getByText('😢');
  const happyEmoji = screen.getByText('😊');
  const exhaustedEmoji = screen.getByText('😫');
  const excitedEmoji = screen.getByText('😃');
  const tiredEmoji = screen.getByText('😴');
  const confusedEmoji = screen.getByText('😕');
  
  // Assert that all emojis are present
  expect(sadEmoji).toBeInTheDocument();
  expect(happyEmoji).toBeInTheDocument();
  expect(exhaustedEmoji).toBeInTheDocument();
  expect(excitedEmoji).toBeInTheDocument();
  expect(tiredEmoji).toBeInTheDocument();
  expect(confusedEmoji).toBeInTheDocument();
});
 })