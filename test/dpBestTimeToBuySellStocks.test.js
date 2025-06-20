import { describe, it, expect, vi } from 'vitest';
import dpBestTimeToBuySellStocks from '../src/dpBestTimeToBuySellStocks';

describe('dpBestTimeToBuySellStocks', () => {
  it('should find the best time to buy and sell stocks', () => {
    let visit;

    expect(dpBestTimeToBuySellStocks([1, 5])).toEqual(4);

    visit = vi.fn();
    expect(dpBestTimeToBuySellStocks([1], visit)).toEqual(0);
    expect(visit).toHaveBeenCalledTimes(1);

    visit = vi.fn();
    expect(dpBestTimeToBuySellStocks([1, 5], visit)).toEqual(4);
    expect(visit).toHaveBeenCalledTimes(2);

    visit = vi.fn();
    expect(dpBestTimeToBuySellStocks([5, 1], visit)).toEqual(0);
    expect(visit).toHaveBeenCalledTimes(2);

    visit = vi.fn();
    expect(dpBestTimeToBuySellStocks([1, 5, 10], visit)).toEqual(9);
    expect(visit).toHaveBeenCalledTimes(3);

    visit = vi.fn();
    expect(dpBestTimeToBuySellStocks([10, 1, 5, 20, 15, 21], visit)).toEqual(25);
    expect(visit).toHaveBeenCalledTimes(6);

    visit = vi.fn();
    expect(dpBestTimeToBuySellStocks([7, 1, 5, 3, 6, 4], visit)).toEqual(7);
    expect(visit).toHaveBeenCalledTimes(6);

    visit = vi.fn();
    expect(dpBestTimeToBuySellStocks([1, 2, 3, 4, 5], visit)).toEqual(4);
    expect(visit).toHaveBeenCalledTimes(5);

    visit = vi.fn();
    expect(dpBestTimeToBuySellStocks([7, 6, 4, 3, 1], visit)).toEqual(0);
    expect(visit).toHaveBeenCalledTimes(5);

    visit = vi.fn();
    expect(dpBestTimeToBuySellStocks(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      visit,
    )).toEqual(19);
    expect(visit).toHaveBeenCalledTimes(20);
  });
});
