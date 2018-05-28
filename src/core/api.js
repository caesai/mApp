
const fakeUser = {
  name: 'John Smith',
  email: 'johnsmith@google.com',
  addresses: [
    { type: 'btc', value: 'adsajdnjrjnr' },
    { type: 'eth', value: 'adasdadada' },
    { type: 'xmr', value: 'asdadssaaa' },
  ],
};

export const registerUser = user => Promise.resolve(user);

export const login = user => Promise.resolve(user);

export const getProfile = () => Promise.resolve(fakeUser);
