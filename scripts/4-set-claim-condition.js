import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";
import { readFileSync } from "fs";

const editionAddress = "0xe7Ba4502Fad6bfCac297CAA95b6287606b9AB015";

const editionDrop = sdk.getEditionDrop(editionAddress);

(async () => {
  try {
    var data = readFileSync("scripts/assets/allowlist1.csv", "utf8");
    const allowList = data.split("\n");
    // const allowList = [];
    console.log(allowList);

    // const allowList = [];
    // We define our claim conditions, this is an array of objects because
    // we can have multiple phases starting at different times if we want to
    const claimConditions = [{
      // When people are gonna be able to start claiming the NFTs (now)
      startTime: new Date(2022, 4, 14),
      // The maximum number of NFTs that can be claimed.
      maxQuantity: 21,
      // The price of the XN NFT
      price: 1.5,
      // The amount of NFTs people can claim in one transaction.
      quantityLimitPerTransaction: 1,
      // We set the wait between transactions to MaxUint256, which means
      // people are only allowed to claim once.
      waitInSeconds: MaxUint256,
      // TODO: Populate with the allowList
      snapshot: allowList
    }]

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();