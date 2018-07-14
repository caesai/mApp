import { restoreKey, generatePrivateKey } from '../src/utils/';
const hexRegex = /[0-9A-Fa-f]+/i;

describe('Restore keys and access to App', () => {
  it('Should generate new signing key pair', async () => {
    const keyPair = await generatePrivateKey()

    expect(keyPair.publicKey).toMatch(hexRegex)
    expect(keyPair.publicKey).toHaveLength(64)
    expect(keyPair.secretKey).toMatch(hexRegex)
    expect(keyPair.secretKey).toHaveLength(128)
  });

  it('Should restore key pair', () => {
    const restoredKeyPair = restoreKey('joke ice sentence escape stick cluster heavy kitten speak shrimp spice hurt ride bronze coil pave nephew grace gown wish banana harbor embark embark')
    expect(restoredKeyPair).toEqual({
      'privKey': '784e070fa68d5a58da9bdad0d8e74637eb96394b550c944cad94fe4122d2121202f10316b99e54f7def0a2af84d908ddbd28bd1fee05a9caac03bfc8676e4d40',
      'pubKey': '02f10316b99e54f7def0a2af84d908ddbd28bd1fee05a9caac03bfc8676e4d40'
    })
  });
});
