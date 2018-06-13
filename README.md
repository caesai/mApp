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

- Creating ECDSA keys for authorization and signing up

First of all we need to use [crypto module from NodeJs](https://nodejs.org/api/crypto.html).
Then [secp256k1 library](https://www.npmjs.com/package/secp256k1) for generating private and public keys.
After installing all needed libraries we should create BTC and ETH addresses to our wallets.
[The whole implementation lays here](https://github.com/caesai/WebApp/blob/mnemonic/src/components/Key.js)

- Authorization and sign up

The main idea of authorization and sign up is to use public key which we created in previous step and send it to our Rust server with username and signature which will be verified on server side.

For signing our public key we can use [this implementation](https://github.com/cryptocoinjs/secp256k1-node/blob/master/API.md#signbuffer-message-buffer-privatekey--object-options---signature-buffer-recovery-number)

We send to server username, public key and signature in respond we will receive access token. Access token and keys should be kept in localstorage or some storage on client side, which we can retrieve in case user forgot his login key or some other important data by restoring private and other keys with mnemonic passphrase.

So we have client with libraries and functions to create private and public keys, we use these keys to create Bitcoin and Ethereum wallets, we send public key and username to our server to verify user, receive access token and let our user to manage app.

- Staging environment setup (docker-machine, ethereum testnet)

When keys and addresses ready we start testnet and create some users to test Wallets.

- Continuous integration and continuous delivery (CI/CD)

We make a new server which will keep our frontend appliction so we can start alpha testing.

- Adding WebAssembly module to an app

After we deploy frontend application we can add webassembly module which will be consist of hashing functions for creating keys and verifying user, also for mining.

- First pool implementation which serves as a proxy between the system and external pools (@ilerik)

### Sprint.3

- Frontend application and design alpha version
- Production environment setup, information security audit and backups logic
- Pool upgrades to be an autonomous miner (probably will work with Algorand) (@ilerik)

## hasher.js API

### methods
