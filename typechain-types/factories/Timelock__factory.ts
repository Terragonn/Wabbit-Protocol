/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timelock, TimelockInterface } from "../Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay_",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers_",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors_",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "taxPercentageNumerator_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "taxPercentageDenominator_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "taxCooldown_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "claimTax",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTax",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "setTaxAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taxAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "taxClaimAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taxCooldown",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taxPercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002524380380620025248339810160408190526200003491620003e6565b82828288888862000055600080516020620024c4833981519152806200020b565b6200007f600080516020620024e4833981519152600080516020620024c48339815191526200020b565b620000a960008051602062002504833981519152600080516020620024c48339815191526200020b565b620000c4600080516020620024c48339815191523362000256565b620000df600080516020620024c48339815191523062000256565b60005b82518110156200013c5762000129600080516020620024e483398151915284838151811062000115576200011562000476565b60200260200101516200025660201b60201c565b62000134816200048c565b9050620000e2565b5060005b81518110156200018657620001736000805160206200250483398151915283838151811062000115576200011562000476565b6200017e816200048c565b905062000140565b5060028390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150620001d29150503390565b600380546001600160a01b0319166001600160a01b039290921691909117905560049290925560055560805250620004b6945050505050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000262828262000266565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000262576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002c23390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200033457600080fd5b919050565b600082601f8301126200034b57600080fd5b815160206001600160401b03808311156200036a576200036a62000306565b8260051b604051601f19603f8301168101818110848211171562000392576200039262000306565b604052938452858101830193838101925087851115620003b157600080fd5b83870191505b84821015620003db57620003cb826200031c565b83529183019190830190620003b7565b979650505050505050565b60008060008060008060c087890312156200040057600080fd5b865160208801519096506001600160401b03808211156200042057600080fd5b6200042e8a838b0162000339565b965060408901519150808211156200044557600080fd5b506200045489828a0162000339565b945050606087015192506080870151915060a087015190509295509295509295565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620004af57634e487b7160e01b600052601160045260246000fd5b5060010190565b608051611feb620004d9600039600081816105880152610ba70152611feb6000f3fe6080604052600436106101dc5760003560e01c80638065657f11610102578063b1c5f42711610095578063d45c443511610064578063d45c4435146105ca578063d547741f146105f7578063e38335e514610617578063f27a0c921461062a57600080fd5b8063b1c5f42714610536578063c4d252f514610556578063c9d15a0214610576578063d0385b5e146105aa57600080fd5b80639c2394f8116100d15780639c2394f8146104b9578063a217fddf146104d9578063aa0b28ff146104ee578063ae7b6d161461050e57600080fd5b80638065657f146104375780638f2a0bb0146104575780638f61f4f51461047757806391d148541461049957600080fd5b80632ab0f5291161017a578063584b153e11610149578063584b153e146103a95780636184c164146103c957806364d623531461040157806372ed01ec1461042157600080fd5b80632ab0f529146103185780632f2ff15d1461034957806331d507501461036957806336568abe1461038957600080fd5b80630d3cf6fc116101b65780630d3cf6fc14610281578063134008d3146102b557806313bc9f20146102c8578063248a9ca3146102e857600080fd5b806301d5062a146101e857806301ffc9a71461020a57806307bd02651461023f57600080fd5b366101e357005b600080fd5b3480156101f457600080fd5b50610208610203366004611787565b61063f565b005b34801561021657600080fd5b5061022a6102253660046117fc565b6106c3565b60405190151581526020015b60405180910390f35b34801561024b57600080fd5b506102737fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610236565b34801561028d57600080fd5b506102737f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6102086102c3366004611826565b6106fa565b3480156102d457600080fd5b5061022a6102e3366004611892565b610772565b3480156102f457600080fd5b50610273610303366004611892565b60009081526020819052604090206001015490565b34801561032457600080fd5b5061022a610333366004611892565b6000908152600160208190526040909120541490565b34801561035557600080fd5b506102086103643660046118ab565b610798565b34801561037557600080fd5b5061022a610384366004611892565b6107c3565b34801561039557600080fd5b506102086103a43660046118ab565b6107dc565b3480156103b557600080fd5b5061022a6103c4366004611892565b61085f565b3480156103d557600080fd5b506003546103e9906001600160a01b031681565b6040516001600160a01b039091168152602001610236565b34801561040d57600080fd5b5061020861041c366004611892565b610875565b34801561042d57600080fd5b5061027360065481565b34801561044357600080fd5b50610273610452366004611826565b610919565b34801561046357600080fd5b5061020861047236600461191c565b610958565b34801561048357600080fd5b50610273600080516020611f9683398151915281565b3480156104a557600080fd5b5061022a6104b43660046118ab565b610a99565b3480156104c557600080fd5b506102736104d43660046119ce565b610ac2565b3480156104e557600080fd5b50610273600081565b3480156104fa57600080fd5b506102736105093660046119ce565b610b68565b34801561051a57600080fd5b5060045460055460408051928352602083019190915201610236565b34801561054257600080fd5b506102736105513660046119e9565b610c5a565b34801561056257600080fd5b50610208610571366004611892565b610c9f565b34801561058257600080fd5b506102737f000000000000000000000000000000000000000000000000000000000000000081565b3480156105b657600080fd5b506102086105c53660046119ce565b610d63565b3480156105d657600080fd5b506102736105e5366004611892565b60009081526001602052604090205490565b34801561060357600080fd5b506102086106123660046118ab565b610db8565b6102086106253660046119e9565b610dde565b34801561063657600080fd5b50600254610273565b600080516020611f968339815191526106588133610f13565b6000610668898989898989610919565b90506106748184610f77565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516106b096959493929190611abb565b60405180910390a3505050505050505050565b60006001600160e01b03198216637965db0b60e01b14806106f457506301ffc9a760e01b6001600160e01b03198316145b92915050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610726816000610a99565b610734576107348133610f13565b6000610744888888888888610919565b90506107508185611066565b61075f8160008a8a8a8a611102565b61076881611216565b5050505050505050565b6000818152600160205260408120546001811180156107915750428111155b9392505050565b6000828152602081905260409020600101546107b48133610f13565b6107be838361124f565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146108515760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61085b82826112d3565b5050565b60008181526001602081905260408220546107d5565b3330146108d85760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b6064820152608401610848565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161093696959493929190611abb565b6040516020818303038152906040528051906020012090509695505050505050565b600080516020611f968339815191526109718133610f13565b8887146109905760405162461bcd60e51b815260040161084890611af8565b8885146109af5760405162461bcd60e51b815260040161084890611af8565b60006109c18b8b8b8b8b8b8b8b610c5a565b90506109cd8184610f77565b60005b8a811015610a8b5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610a0d57610a0d611b3b565b9050602002016020810190610a2291906119ce565b8d8d86818110610a3457610a34611b3b565b905060200201358c8c87818110610a4d57610a4d611b3b565b9050602002810190610a5f9190611b51565b8c8b604051610a7396959493929190611abb565b60405180910390a3610a8481611bae565b90506109d0565b505050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6040516370a0823160e01b815230600482015260009081906001600160a01b038416906370a082319060240160206040518083038186803b158015610b0657600080fd5b505afa158015610b1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3e9190611bc9565b600554600454919250600091610b609190610b5a908590611338565b90611344565b949350505050565b6003546000906001600160a01b0316336001600160a01b031614610b9e5760405162461bcd60e51b815260040161084890611be2565b600654610bcb907f0000000000000000000000000000000000000000000000000000000000000000611350565b421015610c265760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b5461783a20546f6f206561726c7920746f20636c61696d206044820152620e8c2f60eb1b6064820152608401610848565b6000610c3183610ac2565b600354909150610c4e906001600160a01b0385811691168361135c565b4260065590505b919050565b60008888888888888888604051602001610c7b989796959493929190611cc2565b60405160208183030381529060405280519060200120905098975050505050505050565b600080516020611f96833981519152610cb88133610f13565b610cc18261085f565b610d275760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b6064820152608401610848565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b6003546001600160a01b0316336001600160a01b031614610d965760405162461bcd60e51b815260040161084890611be2565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600082815260208190526040902060010154610dd48133610f13565b6107be83836112d3565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610e0a816000610a99565b610e1857610e188133610f13565b878614610e375760405162461bcd60e51b815260040161084890611af8565b878414610e565760405162461bcd60e51b815260040161084890611af8565b6000610e688a8a8a8a8a8a8a8a610c5a565b9050610e748185611066565b60005b89811015610efd57610eed82828d8d85818110610e9657610e96611b3b565b9050602002016020810190610eab91906119ce565b8c8c86818110610ebd57610ebd611b3b565b905060200201358b8b87818110610ed657610ed6611b3b565b9050602002810190610ee89190611b51565b611102565b610ef681611bae565b9050610e77565b50610f0781611216565b50505050505050505050565b610f1d8282610a99565b61085b57610f35816001600160a01b031660146113ae565b610f408360206113ae565b604051602001610f51929190611d9d565b60408051601f198184030181529082905262461bcd60e51b825261084891600401611e12565b610f80826107c3565b15610fe55760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b6064820152608401610848565b6002548110156110465760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b6064820152608401610848565b6110508142611e45565b6000928352600160205260409092209190915550565b61106f82610772565b61108b5760405162461bcd60e51b815260040161084890611e5d565b8015806110a75750600081815260016020819052604090912054145b61085b5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b6064820152608401610848565b6000846001600160a01b031684848460405161111f929190611ea7565b60006040518083038185875af1925050503d806000811461115c576040519150601f19603f3d011682016040523d82523d6000602084013e611161565b606091505b50509050806111ce5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b6064820152608401610848565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58878787876040516112059493929190611eb7565b60405180910390a350505050505050565b61121f81610772565b61123b5760405162461bcd60e51b815260040161084890611e5d565b600090815260016020819052604090912055565b6112598282610a99565b61085b576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561128f3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6112dd8282610a99565b1561085b576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006107918284611ee9565b60006107918284611f08565b60006107918284611e45565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526107be90849061154a565b606060006113bd836002611ee9565b6113c8906002611e45565b67ffffffffffffffff8111156113e0576113e0611f2a565b6040519080825280601f01601f19166020018201604052801561140a576020820181803683370190505b509050600360fc1b8160008151811061142557611425611b3b565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061145457611454611b3b565b60200101906001600160f81b031916908160001a9053506000611478846002611ee9565b611483906001611e45565b90505b60018111156114fb576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106114b7576114b7611b3b565b1a60f81b8282815181106114cd576114cd611b3b565b60200101906001600160f81b031916908160001a90535060049490941c936114f481611f40565b9050611486565b5083156107915760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610848565b600061159f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661161c9092919063ffffffff16565b8051909150156107be57808060200190518101906115bd9190611f57565b6107be5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610848565b6060610b60848460008585843b6116755760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610848565b600080866001600160a01b031685876040516116919190611f79565b60006040518083038185875af1925050503d80600081146116ce576040519150601f19603f3d011682016040523d82523d6000602084013e6116d3565b606091505b50915091506116e38282866116ee565b979650505050505050565b606083156116fd575081610791565b82511561170d5782518084602001fd5b8160405162461bcd60e51b81526004016108489190611e12565b80356001600160a01b0381168114610c5557600080fd5b60008083601f84011261175057600080fd5b50813567ffffffffffffffff81111561176857600080fd5b60208301915083602082850101111561178057600080fd5b9250929050565b600080600080600080600060c0888a0312156117a257600080fd5b6117ab88611727565b965060208801359550604088013567ffffffffffffffff8111156117ce57600080fd5b6117da8a828b0161173e565b989b979a50986060810135976080820135975060a09091013595509350505050565b60006020828403121561180e57600080fd5b81356001600160e01b03198116811461079157600080fd5b60008060008060008060a0878903121561183f57600080fd5b61184887611727565b955060208701359450604087013567ffffffffffffffff81111561186b57600080fd5b61187789828a0161173e565b979a9699509760608101359660809091013595509350505050565b6000602082840312156118a457600080fd5b5035919050565b600080604083850312156118be57600080fd5b823591506118ce60208401611727565b90509250929050565b60008083601f8401126118e957600080fd5b50813567ffffffffffffffff81111561190157600080fd5b6020830191508360208260051b850101111561178057600080fd5b600080600080600080600080600060c08a8c03121561193a57600080fd5b893567ffffffffffffffff8082111561195257600080fd5b61195e8d838e016118d7565b909b50995060208c013591508082111561197757600080fd5b6119838d838e016118d7565b909950975060408c013591508082111561199c57600080fd5b506119a98c828d016118d7565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b6000602082840312156119e057600080fd5b61079182611727565b60008060008060008060008060a0898b031215611a0557600080fd5b883567ffffffffffffffff80821115611a1d57600080fd5b611a298c838d016118d7565b909a50985060208b0135915080821115611a4257600080fd5b611a4e8c838d016118d7565b909850965060408b0135915080821115611a6757600080fd5b50611a748b828c016118d7565b999c989b509699959896976060870135966080013595509350505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a060408201526000611ae360a083018688611a92565b60608301949094525060800152949350505050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112611b6857600080fd5b83018035915067ffffffffffffffff821115611b8357600080fd5b60200191503681900382131561178057600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611bc257611bc2611b98565b5060010190565b600060208284031215611bdb57600080fd5b5051919050565b6020808252602f908201527f54696d656c6f636b5461783a204f6e6c792074686520746178206163636f756e60408201526e74206d61792063616c6c207468697360881b606082015260800190565b81835260006020808501808196508560051b810191508460005b87811015611cb55782840389528135601e19883603018112611c6c57600080fd5b8701803567ffffffffffffffff811115611c8557600080fd5b803603891315611c9457600080fd5b611ca18682898501611a92565b9a87019a9550505090840190600101611c4b565b5091979650505050505050565b60a0808252810188905260008960c08301825b8b811015611d03576001600160a01b03611cee84611727565b16825260209283019290910190600101611cd5565b5083810360208501528881526001600160fb1b03891115611d2357600080fd5b8860051b9150818a602083013781810191505060208101600081526020848303016040850152611d5481888a611c31565b6060850196909652505050608001529695505050505050565b60005b83811015611d88578181015183820152602001611d70565b83811115611d97576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611dd5816017850160208801611d6d565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611e06816028840160208801611d6d565b01602801949350505050565b6020815260008251806020840152611e31816040850160208701611d6d565b601f01601f19169190910160400192915050565b60008219821115611e5857611e58611b98565b500190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b8183823760009101908152919050565b60018060a01b0385168152836020820152606060408201526000611edf606083018486611a92565b9695505050505050565b6000816000190483118215151615611f0357611f03611b98565b500290565b600082611f2557634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052604160045260246000fd5b600081611f4f57611f4f611b98565b506000190190565b600060208284031215611f6957600080fd5b8151801515811461079157600080fd5b60008251611f8b818460208701611d6d565b919091019291505056feb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1a2646970667358221220b2f4d91c0b01cf447b862e729c38ec2b2b1356ddaeef1da8e7fd25773577d40764736f6c634300080900335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63";

type TimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timelock__factory extends ContractFactory {
  constructor(...args: TimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Timelock";
  }

  deploy(
    minDelay_: BigNumberish,
    proposers_: string[],
    executors_: string[],
    taxPercentageNumerator_: BigNumberish,
    taxPercentageDenominator_: BigNumberish,
    taxCooldown_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(
      minDelay_,
      proposers_,
      executors_,
      taxPercentageNumerator_,
      taxPercentageDenominator_,
      taxCooldown_,
      overrides || {}
    ) as Promise<Timelock>;
  }
  getDeployTransaction(
    minDelay_: BigNumberish,
    proposers_: string[],
    executors_: string[],
    taxPercentageNumerator_: BigNumberish,
    taxPercentageDenominator_: BigNumberish,
    taxCooldown_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay_,
      proposers_,
      executors_,
      taxPercentageNumerator_,
      taxPercentageDenominator_,
      taxCooldown_,
      overrides || {}
    );
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static readonly contractName: "Timelock";
  public readonly contractName: "Timelock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}
