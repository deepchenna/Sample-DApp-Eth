const ethers = require("ethers");
const config = require("../config/config.development.json");
const Web3 = require("web3");

const privateKey = config.apiPrivKey;
const url = config.rpc;

const provider = new ethers.providers.JsonRpcProvider(url);
const wallet = new ethers.Wallet(privateKey, provider);
const web3 = new Web3(new Web3.providers.HttpProvider(url));

const getContractInstance = function (_contractAddress, _ABI) {
  //return new web3.eth.Contract(_ABI, _contractAddress);
  let contract = new ethers.Contract(_contractAddress, _ABI, wallet);
  return contract;
};

exports.getContractInstance = getContractInstance;
