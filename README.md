# mApp

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

- Sign up / sign in logic and basic authorization
- Profile page with creating private key and wallet
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
