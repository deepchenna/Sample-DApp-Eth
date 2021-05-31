const web3Util = require("../Web3I/web3Util");
const config = require("../config/config.development.json");

const contractAddress = "0x7AD5653abBe476823E8be2E0Eb3A0cB1664a639c";
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "oldData",
        type: "uint256",
      },
      {
        indexed: false,
        name: "newData",
        type: "uint256",
      },
    ],
    name: "DataUpdated",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newData_",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "get",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const set = async function (_value) {
  console.log("Submitting Transaction To Blockchain");
  let contractInstance = web3Util.getContractInstance(contractAddress, abi);
  let status = await contractInstance.set(_value);
  console.log("Transaction Completed");
  console.log(status);
  return true;
};

const get = async function () {
  console.log("Reading data from SmartContract");
  let contractInstance = web3Util.getContractInstance(contractAddress, abi);
  let data = await contractInstance.get();
  return data.toNumber();
};

const run = async function () {
  console.log(await get());
  //await set(13213);
};

run();
