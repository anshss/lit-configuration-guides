const connect = jest.fn(() => Promise.resolve());

export const LitNodeClient = jest.fn().mockImplementation(() => {
  return { connect };
});


jest.mock('@walletconnect/utils', () => ({
  someFunction: jest.fn(),
}));

jest.mock('uint8arrays', () => ({
  base16: {
    decode: jest.fn(),
    encode: jest.fn(),
  },
}));