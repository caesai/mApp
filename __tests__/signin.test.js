import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getAccountAccess } from '../src/utils/';

const mock = new MockAdapter(axios);

const keyPair = {
  publicKey: '814bca90d29c116b62e6d97a11a7178ac43920b6169654a79ed457a863b0f53e',
  secretKey: '0a8779e7a5edeaf71455a06205493fd5c4b4623d24755edc4013238145cd7982814bca90d29c116b62e6d97a11a7178ac43920b6169654a79ed457a863b0f53e'
};
const name = 'John Doe';
// Mocking signin transactions
mock.onPost('http://146.185.145.5:9200/api/services/simple_mining_pool/v1/transaction', {
  'protocol_version': 0,
  'service_id': 128,
  'message_id': 3,
  'signature': 'fb6254582700522008f0fec805889f17b5a45b18471efab932d8b7225a5b20379763e7a664bf9557f8e9bacac701478544506b95e5c92b1a70f90cbe7ea35c04',
  'body': {
    'pub_key': '814bca90d29c116b62e6d97a11a7178ac43920b6169654a79ed457a863b0f53e',
    'name': 'John Doe'
  }
}).replyOnce(200, {
  'tx_hash': '8055cd33cf11106f16321feb37777c3a92cbeaa23b9f7984a5b819ae51fee596',
  'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
});

describe('SignUp/SignIn transactions', () => {

  it('Send signin transaction', async () => {
    const data = await getAccountAccess(keyPair, name);

    expect(data.data).toEqual({
      'tx_hash': '8055cd33cf11106f16321feb37777c3a92cbeaa23b9f7984a5b819ae51fee596',
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    });
  });
});
