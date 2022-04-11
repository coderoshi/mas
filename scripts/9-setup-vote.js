import sdk from "./1-initialize-sdk.js";

const tokenAddress = "0x95155e455E0AF4EC02DA56Ad5C630eBbe566a18E";
const voteAddress = "0x03EEEC7E393cDBC46F0beF4a4CD51C78d8bE3172";

// This is our ERC-20 contract.
const token = sdk.getToken(tokenAddress);

// This is our governance contract.
const vote = sdk.getVote(voteAddress);

(async () => {
  try {
    // Give our treasury the power to mint additional token if needed.
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }

  try {
    // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
    // const ownedTokenBalance = await token.balanceOf(
    //   process.env.WALLET_ADDRESS
    // );

    // Grab 90% of the supply that we hold.
    // const ownedAmount = ownedTokenBalance.displayValue;
    // const percent90 = Number(ownedAmount) / 100 * 90;

    // 5M - distribution = 1,467,000 remaining
    const treasuryCount = 1467000;

    // Transfer 90% of the supply to our voting contract.
    await token.transfer(
      vote.getAddress(),
      treasuryCount
    );

    console.log("✅ Successfully transferred " + treasuryCount + " tokens to vote contract");
  } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})();