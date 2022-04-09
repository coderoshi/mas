import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "Madder Science",
      description: "Madder Science DAO Membership",
      image: readFileSync("scripts/assets/masy-edition.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      // primary_sale_recipient: '0x55a7b15d82bA5a9879651dcDE704fb0b573b8951'
      primary_sale_recipient: AddressZero,
    });
    
    // this initialization returns the address of our contract
    // we use this to initialize the contract on the thirdweb sdk
    const editionDrop = sdk.getEditionDrop(editionDropAddress);

    // TODO: store editionDropAddress in a database

    // with this, we can get the metadata of our contract
    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();
