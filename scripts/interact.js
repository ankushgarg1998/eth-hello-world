const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env; 
const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// PROVIDER - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider("ropsten", API_KEY);

// SIGNER - Me
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// CONTRACT INSTANCE
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("This is the new message");
    await tx.wait();


    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });