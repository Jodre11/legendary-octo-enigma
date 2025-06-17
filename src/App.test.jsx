import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
  it('renders the heading "Stock Trading Algorithm Comparison"', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /Stock Trading Algorithm Comparison/i })
    expect(heading).toBeInTheDocument()
  })

  it('calculates and displays results for valid input', async () => {
    render(<App />)
    
    // Find and fill the input
    const input = screen.getByLabelText(/Enter stock prices/i)
    await userEvent.type(input, '7,1,5,3,6,4')
    
    // Click the calculate button
    const button = screen.getByRole('button', { name: /Calculate/i })
    await userEvent.click(button)
    
    // Check each algorithm's result is present and correct
    expect(screen.getByText('Accumulator Approach').parentElement).toHaveTextContent('Max Profit: 7')
    expect(screen.getByText('Dynamic Programming').parentElement).toHaveTextContent('Max Profit: 7')
    expect(screen.getByText('Divide & Conquer').parentElement).toHaveTextContent('Max Profit: 7')
    expect(screen.getByText('Peak Valley').parentElement).toHaveTextContent('Max Profit: 7')
  })

  it('shows error for invalid input', async () => {
    render(<App />)
    
    // Find and fill the input with invalid data
    const input = screen.getByLabelText(/Enter stock prices/i)
    await userEvent.type(input, 'invalid')
    
    // Click the calculate button
    const button = screen.getByRole('button', { name: /Calculate/i })
    await userEvent.click(button)
    
    // Check that error is displayed
    expect(screen.getByText('Please enter valid numbers separated by commas')).toBeInTheDocument()
  })
}) 