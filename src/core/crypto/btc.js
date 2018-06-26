import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';

export const generateMnemonic = key => bip39.entropyToMnemonic(key);

export const mnemonicToSeedHex = mnemonic => bip39.mnemonicToSeedHex(mnemonic);

export const createBitcoinAddress = () => mnemonicToSeedHex(generateMnemonic());

export const createAddress = (mnemonic) => {
  const seedBuffer = bip39.mnemonicToSeed(mnemonic);
  const masterNode = bitcoin.HDNode.fromSeedBuffer(seedBuffer);
  const account0 = masterNode.derivePath("m/44'/0'/0'");
  const xpubString = account0.neutered().toBase58();

  const key0 = account0.derivePath('0/0').keyPair;
  const key0FromXpub = account0.neutered().derivePath('0/0').keyPair;

  const address0 = key0.getAddress();
  const address0FromXpub = key0FromXpub.getAddress();
  const address0FromXpubKey = bitcoin.HDNode.fromBase58(xpubString);

  return {
    address0,
    address0FromXpub,
    address0FromXpubKey,
  };
};
