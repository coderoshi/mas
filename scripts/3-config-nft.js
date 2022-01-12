import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xAb86591E7D6624375084B8977503A46bB7E56723",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Madder Scientist",
        description: "This NFT will give you access to Madder Science DAO!",
        image: readFileSync("scripts/assets/mrglass.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
