const SingleNFT = artifacts.require("SingleNFT");

module.exports = function (deployer) {
  deployer.deploy(SingleNFT);
};
