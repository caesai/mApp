import * as exonumClient from 'exonum-client';
import { getCredentialFromStore } from 'auth/selectors';

const makeRequest = (path, data) => {
  return fetch(`http://198.211.127.116:8200/api/services/simple_mining_pool/v1/${path}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const fakeUser = {
  name: 'John Smith',
  email: 'johnsmith@google.com',
  addresses: [],
};

export const registerUser = (data) => {
  const { secretKey } = getCredentialFromStore();

  const request = exonumClient.newMessage({
    protocol_version: 0,
    service_id: 128,
    message_id: 3,
    fields: [
      { name: 'pub_key', type: exonumClient.PublicKey },
      { name: 'name', type: exonumClient.String },
    ],
  });

  const { publicKey } = getCredentialFromStore();
  const dataWithKey = {
    ...data,
    pub_key: publicKey,
  };

  const signature = request.sign(secretKey, dataWithKey);

  return makeRequest('transaction', {
    protocol_version: 0,
    service_id: 128,
    message_id: 2,
    signature,
    body: dataWithKey,
  });
};

export const login = data => makeRequest('signin', data);

export const getProfile = () => Promise.resolve(fakeUser);

export const cashOut = data => Promise.resolve(data);
