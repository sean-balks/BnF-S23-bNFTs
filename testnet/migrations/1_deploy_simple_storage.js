const SimpleStorage = artifacts.require("BobcatBazaar");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
