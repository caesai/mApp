import * as exonumClient from 'exonum-client';
import { getCredentialFromStore } from 'auth/selectors';
import axios from 'axios';

const makeRequest = (path, data) => {
  return axios.post('http://146.185.133.26:8200/api/services/simple_mining_pool/v1/transaction', {
    body: data
  }).then(resp => console.log(resp)).catch(err => console.log(err));
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
    message_id: 2,
    fields: [
      { name: 'pub_key', type: exonumClient.PublicKey },
      { name: 'name', type: exonumClient.String },
    ],
  });

  const { publicKey } = getCredentialFromStore();
  console.log(publicKey, secretKey)
  const dataWithKey = {
    ...data,
    pub_key: publicKey,
  };

  const signature = request.sign(secretKey, dataWithKey);

  return makeRequest({
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
