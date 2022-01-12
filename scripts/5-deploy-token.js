import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x97467b3FF8853a1e5B42793DA101164C3E31cB14");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "MaSDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "MADDS",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
