
const makeRequest = (path, data) => (
  fetch(`http://localhost:3000/${path}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
);

const fakeUser = {
  name: 'John Smith',
  email: 'johnsmith@google.com',
  addresses: [],
};

export const registerUser = data => makeRequest('signup', data);

export const login = data => makeRequest('signin', data);

export const getProfile = () => Promise.resolve(fakeUser);

export const cashOut = data => Promise.resolve(data);
