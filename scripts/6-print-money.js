import sdk from "./1-initialize-sdk.js";

const tokenAddress = "0x95155e455E0AF4EC02DA56Ad5C630eBbe566a18E";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken(tokenAddress);

(async () => {
  try {
    // What's the max supply you want to set? 5M is a nice number
    const amount = 5_000_000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$HOKAGE in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();