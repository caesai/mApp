import exonumClient from 'exonum-client';
import axios from 'axios';
import { getCredentialFromStore } from 'auth/utils';

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

export const registerUser = (data) => {
  const { publicKey, secretKey } = getCredentialFromStore();

  const request = exonumClient.newMessage({
    protocol_version: 0,
    service_id: 128,
    message_id: 3,
    fields: [
      { name: 'pub_key', type: exonumClient.String },
      { name: 'name', type: exonumClient.String },
      { name: 'email', type: exonumClient.String },
      { name: 'password', type: exonumClient.String },
    ],
  });

  const signature = request.sign(secretKey, data);

  return axios.post('http://146.185.145.5:9200/api/services/simple_mining_pool/v1/transaction', {
    protocol_version: 0,
    service_id: 128,
    message_id: 3,
    signature,
    body: {
      pub_key: publicKey,
      ...data,
    },
  });
};

export const login = data => makeRequest('signin', data);

export const getProfile = () => Promise.resolve(fakeUser);

export const cashOut = data => Promise.resolve(data);
