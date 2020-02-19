import { nrziDecoding } from '../src/helpers/stringHelper';

describe('NRZI', () => {
  it('test econding transmission empty', () => {
    const result = nrziDecoding('');
    expect(result).toEqual('');
  });

  it('test econding transmission first signal invalid', () => {
    const result = nrziDecoding('|');
    expect(result).toEqual('');
  });

  it('test encoding', () => {
    const result = nrziDecoding('¯|__|¯|___|¯¯');
    expect(result).toEqual('010110010');

    const result2 = nrziDecoding('_|¯¯¯|_|¯¯¯¯|_|¯¯');
    expect(result2).toEqual('010011000110');

    const result3 = nrziDecoding('¯|___|¯¯¯¯¯|___|¯|_|¯');
    expect(result3).toEqual('010010000100111');

    const result4 = nrziDecoding('|¯|___|¯¯¯¯¯|___|¯|_|¯');
    expect(result4).toEqual('110010000100111');
  });
});
