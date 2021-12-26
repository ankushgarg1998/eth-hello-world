# eth-hello-world
Hello World! smart contract on the test eth network (Ropsten test net).

[Click here](https://ropsten.etherscan.io/address/0x253775766ae8c360d9E7B175BEFe3246A0e536Cd) to interact with the smart contract.


<br/>

## Tools Used
**Alchemy** - Alchemy is a node provider that help us in deploying smart contracts (from local development) to the (actual) blockchain. [Alchemy does other things as well, over & above node providing]

**Metamask** - Metamask is a virtual wallet to interact with the Ethereum blockchain.

**Hardhat** - Hardhat is an IDE used to develop and test smart contracts.

**Etherscan** - Blockchain Explorer

**Ropsten** - Test Network for Ethereum development

**Ropsten Faucet** - Place where you can get some free test net Ether to your wallet for testing.

<br/>

## Hardhat Commands
#### To compile the smart contract
```
npx hardhat compile
```

#### To run the deploy script
```
npx hardhat run scripts/deploy.js --network ropsten
```

#### To run the interact script
```
npx hardhat run scripts/interact.js --network ropsten
```

#### To verify the smart contract (i.e. publish it on the blockchain)
```
npx hardhat verify --network ropsten 0x253775766ae8c360d9E7B175BEFe3246A0e536Cd 'Hello World!'
```