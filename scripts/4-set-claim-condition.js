import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xAb86591E7D6624375084B8977503A46bB7E56723",
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 21,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()
