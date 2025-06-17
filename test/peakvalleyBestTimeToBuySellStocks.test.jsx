import { describe, it, expect, vi } from 'vitest';
import peakvalleyBestTimeToBuySellStocks from '../src/peakvalleyBestTimeToBuySellStocks';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('peakvalleyBestTimeToBuySellStocks', () => {
  it('should find the best time to buy and sell stocks', () => {
    let visit;

    expect(peakvalleyBestTimeToBuySellStocks([1, 5])).toEqual(4);

    visit = vi.fn();
    expect(peakvalleyBestTimeToBuySellStocks([1], visit)).toEqual(0);
    expect(visit).toHaveBeenCalledTimes(1);

    visit = vi.fn();
    expect(peakvalleyBestTimeToBuySellStocks([1, 5], visit)).toEqual(4);
    expect(visit).toHaveBeenCalledTimes(2);

    visit = vi.fn();
    expect(peakvalleyBestTimeToBuySellStocks([5, 1], visit)).toEqual(0);
    expect(visit).toHaveBeenCalledTimes(2);

    visit = vi.fn();
    expect(peakvalleyBestTimeToBuySellStocks([1, 5, 10], visit)).toEqual(9);
    expect(visit).toHaveBeenCalledTimes(3);

    visit = vi.fn();
    expect(peakvalleyBestTimeToBuySellStocks([10, 1, 5, 20, 15, 21], visit)).toEqual(25);
    expect(visit).toHaveBeenCalledTimes(6);

    visit = vi.fn();
    expect(peakvalleyBestTimeToBuySellStocks([7, 1, 5, 3, 6, 4], visit)).toEqual(7);
    expect(visit).toHaveBeenCalledTimes(6);

    visit = vi.fn();
    expect(peakvalleyBestTimeToBuySellStocks([1, 2, 3, 4, 5], visit)).toEqual(4);
    expect(visit).toHaveBeenCalledTimes(5);

    visit = vi.fn();
    expect(peakvalleyBestTimeToBuySellStocks([7, 6, 4, 3, 1], visit)).toEqual(0);
    expect(visit).toHaveBeenCalledTimes(5);

    visit = vi.fn();
    expect(peakvalleyBestTimeToBuySellStocks(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      visit,
    )).toEqual(19);
    expect(visit).toHaveBeenCalledTimes(20);
  });

  it('calculates and displays results for valid input', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const input = screen.getByLabelText(/Enter stock prices/i);
    await user.type(input, '7,1,5,3,6,4');
    
    const button = screen.getByRole('button', { name: /Calculate/i });
    await user.click(button);
    
    // There should be 4 results with 'Max Profit: 7'
    expect(screen.getAllByText('Max Profit: 7')).toHaveLength(4);
    expect(screen.getByText('Accumulator Approach')).toBeInTheDocument();
    expect(screen.getByText('Dynamic Programming')).toBeInTheDocument();
    expect(screen.getByText('Divide & Conquer')).toBeInTheDocument();
    expect(screen.getByText('Peak Valley')).toBeInTheDocument();
  });
});
