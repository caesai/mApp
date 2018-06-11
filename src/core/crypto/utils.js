import bip39 from 'bip39';
import Web3 from 'web3';

export const generateMnemonic = () => bip39.generateMnemonic();

export const mnemonicToSeedHex = mnemonic => bip39.mnemonicToSeedHex(mnemonic);

export const createEthAddress = () => {
  const web3Instance = new Web3();
  const account = web3Instance.eth.accounts.create();

  return account.address;
};

export const createBitcoinAddress = () => mnemonicToSeedHex(generateMnemonic('test test'));
