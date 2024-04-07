const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// delete entire build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// Read Campaign.sol from contracts folder
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

// Compile both contratcs with solidity compiler
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
  // write json files
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract] // content
  );
}
