import { createBitcoinAddress, createEthAddress } from 'core/crypto/utils';

const fakeUser = {
  name: 'John Smith',
  email: 'johnsmith@google.com',
  addresses: [
    { type: 'btc', value: createBitcoinAddress() },
    { type: 'eth', value: createEthAddress() },
    { type: 'xmr', value: 'asdadssaaa' },
  ],
};

export const registerUser = user => Promise.resolve(user);

export const login = user => Promise.resolve(user);

export const getProfile = () => Promise.resolve(fakeUser);
