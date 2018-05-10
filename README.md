# mApp

# Development stages and roadmap

Project consists of three main steps:

1. Rust Server

- Acts as proxy between the clients (the browser miners) and the pool server.
- Compilation of WebAssembly module which will be delivered to client-side

2. Pool server

- Algorand consensus implementation

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

### Sprint.2

- Staging environment setup (docker-machine, ethereum testnet)
- Continuous integration and continuous delivery (CI/CD)
- Adding WebAssembly module

### Sprint.3

- Frontend application and design alpha version
- Production environment setup, information security audit and backups logic

## hasher.js API

### methods
