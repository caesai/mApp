import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { createAccount } from '../src/utils/';

const mock = new MockAdapter(axios);

const keyPair = {
  publicKey: '814bca90d29c116b62e6d97a11a7178ac43920b6169654a79ed457a863b0f53e',
  secretKey: '0a8779e7a5edeaf71455a06205493fd5c4b4623d24755edc4013238145cd7982814bca90d29c116b62e6d97a11a7178ac43920b6169654a79ed457a863b0f53e'
};
const name = 'John Doe';
// Mocking signup transactions
mock.onPost('http://146.185.145.5:9200/api/services/simple_mining_pool/v1/transaction', {
  'protocol_version': 0,
  'service_id': 128,
  'message_id': 2,
  'signature': '9736ea9a39db660c72fb8f866a675e0889a63b8d354db3a13b5666112e39e3fb1ed24bf5f3411f5628654695253f04d7675e463b7612564c59051f7183b1f30d',
  'body': {
    'pub_key': '814bca90d29c116b62e6d97a11a7178ac43920b6169654a79ed457a863b0f53e',
    'name': 'John Doe'
  }
}).replyOnce(200, {
  'tx_hash': '8055cd33cf11106f16321feb37777c3a92cbeaa23b9f7984a5b819ae51fee596'
});

describe('SignUp/SignIn transactions', () => {

  it('Send signup transaction', async () => {
    const data = await createAccount(keyPair, name);

    expect(data.data).toEqual({
      'tx_hash': '8055cd33cf11106f16321feb37777c3a92cbeaa23b9f7984a5b819ae51fee596'
    });
  });
});
