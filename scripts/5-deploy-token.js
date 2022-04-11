import sdk from "./1-initialize-sdk.js";

const walletAddress = process.env.WALLET_ADDRESS;

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenAddress = await sdk.deployer.deployToken({
      // What's your token's name? Ex. "Ethereum"
      name: "Madder Science Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "MASY",
      // This will be in case we want to sell our token,
      // if we didn't, we set it to AddressZero.
      primary_sale_recipient: walletAddress,
    });

    // TODO: store tokenAddress in a database

    console.log(
      "✅ Successfully deployed token contract, address:",
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token contract", error);
  }
})();