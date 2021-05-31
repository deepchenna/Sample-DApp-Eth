// Import HDWalletProvider
const HDWalletProvider = require("truffle-hdwallet-provider");
// mnemonic string is secret, consider reading an environment variable
const mnemonic = "<add your mnemonic here>";
// RPC URL is secret, consider reading an environment variable
const ropstonUrl = "https://ropsten.infura.io/v3/<infure project key>";
const rinkebyUrl = "https://rinkeby.infura.io/<infure project key";
const poaUrl = "https://sokol.poa.network";

module.exports = {
  networks: {
    local: {
      host: "127.0.0.1",
      port: 7545,
      gas: 6000000,
      network_id: "*", // Match any network id
    },
    ropsten: {
      // Provider has to be wrapped into a function
      provider: () => new HDWalletProvider(mnemonic, ropstonUrl),
      network_id: "3",
      gas: 6000000,
    },
    rinkeby: {
      // Provider has to be wrapped into a function
      provider: () => new HDWalletProvider(mnemonic, rinkebyUrl),
      network_id: "4",
      gas: 6000000,
    },
    poa: {
      // Provider has to be wrapped into a function
      provider: () => new HDWalletProvider(mnemonic, poaUrl),
      network_id: "*", // Match any network id
      gas: 6000000,
    },
  },
  compilers: {
    solc: {
      version: "0.5.0", // ex:  "0.4.20". (Default: Truffle's installed solc)
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
