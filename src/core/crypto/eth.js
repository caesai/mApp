import ethUtils from 'ethereumjs-util';
import Web3 from 'web3';

const web3Instance = new Web3();

export const createEthAddress = key => ethUtils.privateToAddress(key);

export const createEthAccount = () => web3Instance.eth.accounts.create();

export const decrypt = (data, password) => web3Instance.eth.accounts.decrypt(data, password);

export const encryptAccount = (account, password) => {
  const encryptedAccount = account.encrypt(password);

  return btoa(JSON.stringify(encryptedAccount));
};

