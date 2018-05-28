import bip39 from 'bip39';
// import randomBytes from 'random-bytes';
// import bitcoin from 'bitcoinjs-lib';
// import ethUtils from 'ethereumjs-util';

export const generateMnemonic = () => bip39.generateMnemonic();

export const mnemonicToSeedHex = mnemonic => bip39.mnemonicToSeedHex(mnemonic);
