import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionAddress = "0xe7Ba4502Fad6bfCac297CAA95b6287606b9AB015";

const editionDrop = sdk.getEditionDrop(editionAddress);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Madder Scientist NX",
        description: "This NFT will mark you as an owner and give you access to Madder Science DAO",
        // TODO: set this as a URL behind a CDN
        image: readFileSync("scripts/assets/madder-science-xn.mp4"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();