# mApp

[![Build Status](https://travis-ci.org/caesai/mApp.svg?branch=master)](https://travis-ci.org/caesai/mApp)

[Working Example](https://mining-889ab.firebaseapp.com/)


# Development stages and roadmap

Project consists of three main steps:

1. Rust Server

- Acts as proxy between the clients (the browser miners) and the pool server
- WebAssembly module which will be delivered to client-side, containing efficient proof-of-work implementation

2. Pool server

- External pools managment and proxy logic, system's key managment (systems wallets)
- Internal PoW pool which distributes computational puzzle to clients
- Algorand consensus implementation as an attempt to have autonomous mining (since we think that algorand scales in just the right way)

3. Client

Website and native app for mobile devices

- Account settings (private key and wallet to interact with mining-pool and blockchain)
- Hashing functions
- WebAssembly module

## Client(Web)
### Sprint.1

- Sign up / sign in logic and basic authorization (@midan888)
- Profile page with creating private key and wallet
We will use hierarchical deterministic flow to make wallet. [Some info about HD Wallets](https://bits.media/hd-wallet/). We need to use Bitcoin Improvement Protocol [BitcoinJs Lib](https://github.com/bitcoinjs/bitcoinjs-lib), [BIP32](https://github.com/bitcoinjs/bip32-utils), [BIP39](https://github.com/bitcoinjs/bip39), [BIP44](https://github.com/bitcoinjs/bip44-constants).(@midan888)

[Also info about creating bitcoin address](http://procbits.com/2013/08/27/generating-a-bitcoin-address-with-javascript)

[Yet another way to make address](https://github.com/bitcoinjs/bitcoinjs-lib/issues/997)

[Some info to make ether address](https://ethereum.stackexchange.com/questions/39384/how-to-generate-private-key-public-key-and-address)

[Also sources to investigate how to make monero address](https://moneroaddress.org/)

[Base58 encoding scheme](https://monerodocs.org/cryptography/base58/)

[Reddit about monero addresses](https://www.reddit.com/r/Monero/comments/70kpg7/writing_a_js_miner_client_where_to_start/)
- Prepare module for hashing functions
- Research on Algorand, Monero and Zcash mining and consensus. WebAssembly + rust setup. (@ilerik)

### Sprint.2

- Staging environment setup (docker-machine, ethereum testnet)
- Continuous integration and continuous delivery (CI/CD)
- Adding WebAssembly module to an app
- First pool implementation which serves as a proxy between the system and external pools (@ilerik)

### Sprint.3

- Frontend application and design alpha version
- Production environment setup, information security audit and backups logic
- Pool upgrades to be an autonomous miner (probably will work with Algorand) (@ilerik)

## hasher.js API

### methods
