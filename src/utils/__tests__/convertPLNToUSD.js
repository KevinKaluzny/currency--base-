import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('text')).toBeNaN();
    expect(convertPLNToUSD('nvioern')).toBeNaN();
    expect(convertPLNToUSD('25')).toBeNaN();
    expect(convertPLNToUSD('*^%^$&=-fh')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return error when input is not text or number', () => {
    expect(convertPLNToUSD(Array)).toBe('Error');
  });
  it('should return $0.00 when input is lower than zero', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-2)).toBe('$0.00');
    expect(convertPLNToUSD(-20)).toBe('$0.00');
    expect(convertPLNToUSD(-12)).toBe('$0.00');
  });
});