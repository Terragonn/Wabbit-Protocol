/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Resolver, ResolverInterface } from "../Resolver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pokeMe_",
        type: "address",
      },
      {
        internalType: "address",
        name: "marginLong_",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool_",
        type: "address",
      },
      {
        internalType: "address",
        name: "converter_",
        type: "address",
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
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "ETH",
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
    inputs: [],
    name: "checkLiquidate",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkReset",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "converter",
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
        name: "account_",
        type: "address",
      },
    ],
    name: "executeLiquidate",
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
    name: "executeReset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gelato",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marginLong",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pokeMe",
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
    inputs: [],
    name: "pool",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "converter_",
        type: "address",
      },
    ],
    name: "setConverter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marginLong_",
        type: "address",
      },
    ],
    name: "setMarginLong",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool_",
        type: "address",
      },
    ],
    name: "setPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001f4838038062001f48833981016040819052620000349162000175565b8362000040336200010c565b6001600160a01b03811660808190526040805163573ea57560e01b8152905163573ea57591600480820192602092909190829003018186803b1580156200008657600080fd5b505afa1580156200009b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c19190620001dd565b6001600160a01b0390811660a052600280546001600160a01b031990811696831696909617905560038054861694821694909417909355506001805490931691161790555062000204565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200017257600080fd5b50565b600080600080608085870312156200018c57600080fd5b845162000199816200015c565b6020860151909450620001ac816200015c565b6040860151909350620001bf816200015c565b6060860151909250620001d2816200015c565b939692955090935050565b600060208284031215620001f057600080fd5b8151620001fd816200015c565b9392505050565b60805160a051611cfb6200024d6000396000818161016201528181611452015261151701526000818161023a015281816102cf0152818161060e01526109620152611cfb6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806386f041ba11610097578063b19337a411610066578063b19337a41461020f578063bd38837b14610222578063c84eee0d14610235578063f2fde38b1461025c57600080fd5b806386f041ba146101d05780638da5cb5b146101e357806395b7b581146101f4578063ae8cb7631461020757600080fd5b806358b27216116100d357806358b2721614610184578063715018a61461019a5780637e0b09b1146101a25780638322fff2146101b557600080fd5b806316f0115b146101055780634437152a146101355780635509708c1461014a578063573ea5751461015d575b600080fd5b600354610118906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610148610143366004611939565b61026f565b005b610148610158366004611939565b6102c4565b6101187f000000000000000000000000000000000000000000000000000000000000000081565b61018c6103d1565b60405161012c9291906119ae565b6101486105cd565b6101486101b0366004611939565b610603565b61011873eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b600254610118906001600160a01b031681565b6000546001600160a01b0316610118565b610148610202366004611939565b6106ab565b61018c6106f7565b61014861021d366004611939565b610876565b600154610118906001600160a01b031681565b6101187f000000000000000000000000000000000000000000000000000000000000000081565b61014861026a366004611939565b6108c2565b6000546001600160a01b031633146102a25760405162461bcd60e51b8152600401610299906119c9565b60405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103365760405162461bcd60e51b8152602060048201526017602482015276506f6b654d6552656164793a206f6e6c79506f6b654d6560481b6044820152606401610299565b6002546040516365189a7b60e11b81526001600160a01b038381166004830152600092839291169063ca3134f6906024015b600060405180830381600087803b15801561038257600080fd5b505af1158015610396573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103be9190810190611add565b915091506103cc828261095d565b505050565b600060606000600260009054906101000a90046001600160a01b03166001600160a01b0316636847e50b6040518163ffffffff1660e01b815260040160006040518083038186803b15801561042557600080fd5b505afa158015610439573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104619190810190611b98565b905060005b81518110156105b15760025482516001600160a01b039091169063ffec70af9084908490811061049857610498611bcd565b60200260200101516040518263ffffffff1660e01b81526004016104cb91906001600160a01b0391909116815260200190565b60206040518083038186803b1580156104e357600080fd5b505afa1580156104f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051b9190611be3565b1561059f5760019350637e0b09b160e01b82828151811061053e5761053e611bcd565b602002602001015160405160240161056591906001600160a01b0391909116815260200190565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152939492505050565b806105a981611c1b565b915050610466565b5060006040518060200160405280600081525092509250509091565b6000546001600160a01b031633146105f75760405162461bcd60e51b8152600401610299906119c9565b6106016000610b95565b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106755760405162461bcd60e51b8152602060048201526017602482015276506f6b654d6552656164793a206f6e6c79506f6b654d6560481b6044820152606401610299565b600254604051638ac5d4a360e01b81526001600160a01b0383811660048301526000928392911690638ac5d4a390602401610368565b6000546001600160a01b031633146106d55760405162461bcd60e51b8152600401610299906119c9565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600060606000600260009054906101000a90046001600160a01b03166001600160a01b0316636847e50b6040518163ffffffff1660e01b815260040160006040518083038186803b15801561074b57600080fd5b505afa15801561075f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107879190810190611b98565b905060005b81518110156105b15760025482516001600160a01b0390911690632dbaacdc908490849081106107be576107be611bcd565b60200260200101516040518263ffffffff1660e01b81526004016107f191906001600160a01b0391909116815260200190565b60206040518083038186803b15801561080957600080fd5b505afa15801561081d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108419190611be3565b156108645760019350635509708c60e01b82828151811061053e5761053e611bcd565b8061086e81611c1b565b91505061078c565b6000546001600160a01b031633146108a05760405162461bcd60e51b8152600401610299906119c9565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146108ec5760405162461bcd60e51b8152600401610299906119c9565b6001600160a01b0381166109515760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610299565b61095a81610b95565b50565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b810c6366040518163ffffffff1660e01b8152600401604080518083038186803b1580156109b857600080fd5b505afa1580156109cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f09190611c36565b90925090506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415610a2a57610a25848484610be5565b610a36565b610a3684848385610ff8565b610a408282611429565b60005b8451811015610b8e576000848281518110610a6057610a60611bcd565b60200260200101511115610b7c576003548451610acd916001600160a01b031690869084908110610a9357610a93611bcd565b6020026020010151878481518110610aad57610aad611bcd565b60200260200101516001600160a01b03166115409092919063ffffffff16565b60035485516001600160a01b03909116906347e7ef2490879084908110610af657610af6611bcd565b6020026020010151868481518110610b1057610b10611bcd565b60200260200101516040518363ffffffff1660e01b8152600401610b499291906001600160a01b03929092168252602082015260400190565b600060405180830381600087803b158015610b6357600080fd5b505af1158015610b77573d6000803e3d6000fd5b505050505b80610b8681611c1b565b915050610a43565b5050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8351811015610ff25760015484516000916001600160a01b03169063bd046e1a90879085908110610c1b57610c1b611bcd565b6020026020010151868581518110610c3557610c35611bcd565b60200260200101516040518363ffffffff1660e01b8152600401610c6e9291906001600160a01b03929092168252602082015260400190565b60206040518083038186803b158015610c8657600080fd5b505afa158015610c9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbe9190611c66565b905082811115610eb15760015485516000916001600160a01b03169063c0c3d39790889086908110610cf257610cf2611bcd565b6020026020010151866040518363ffffffff1660e01b8152600401610d2c9291906001600160a01b03929092168252602082015260400190565b60206040518083038186803b158015610d4457600080fd5b505afa158015610d58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7c9190611c66565b9050610daa600160009054906101000a90046001600160a01b031682888681518110610aad57610aad611bcd565b60015486516001600160a01b039091169063fcf5ee8d90889086908110610dd357610dd3611bcd565b6020026020010151836040518363ffffffff1660e01b8152600401610e0d9291906001600160a01b03929092168252602082015260400190565b602060405180830381600087803b158015610e2757600080fd5b505af1158015610e3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5f9190611c66565b50610e8c81868581518110610e7657610e76611bcd565b602002602001015161169790919063ffffffff16565b858481518110610e9e57610e9e611bcd565b6020026020010181815250505050610ff2565b6001548451610ef0916001600160a01b031690869085908110610ed657610ed6611bcd565b6020026020010151878581518110610aad57610aad611bcd565b60015485516001600160a01b039091169063fcf5ee8d90879085908110610f1957610f19611bcd565b6020026020010151868581518110610f3357610f33611bcd565b60200260200101516040518363ffffffff1660e01b8152600401610f6c9291906001600160a01b03929092168252602082015260400190565b602060405180830381600087803b158015610f8657600080fd5b505af1158015610f9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbe9190611c66565b506000848381518110610fd357610fd3611bcd565b6020026020010181815250505080610fea81611c1b565b915050610be8565b50505050565b60005b8451811015610b8e5760015485516000916001600160a01b03169063d868e12d9088908590811061102e5761102e611bcd565b602002602001015187858151811061104857611048611bcd565b60209081029190910101516040516001600160e01b031960e085901b1681526001600160a01b0392831660048201526024810191909152908716604482015260640160206040518083038186803b1580156110a257600080fd5b505afa1580156110b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110da9190611c66565b9050828111156112df5760015486516000916001600160a01b031690639994f75e9089908690811061110e5761110e611bcd565b60200260200101518789878151811061112957611129611bcd565b60209081029190910101516040516001600160e01b031960e086901b1681526001600160a01b039384166004820152929091166024830152604482015260640160206040518083038186803b15801561118157600080fd5b505afa158015611195573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b99190611c66565b90506111e7600160009054906101000a90046001600160a01b031682898681518110610aad57610aad611bcd565b60015487516001600160a01b03909116906373a1abe09089908690811061121057611210611bcd565b60209081029190910101516040516001600160e01b031960e084901b1681526001600160a01b039182166004820152602481018590529088166044820152606401602060405180830381600087803b15801561126b57600080fd5b505af115801561127f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a39190611c66565b506112ba81878581518110610e7657610e76611bcd565b8684815181106112cc576112cc611bcd565b6020026020010181815250505050610b8e565b600154855161131e916001600160a01b03169087908590811061130457611304611bcd565b6020026020010151888581518110610aad57610aad611bcd565b60015486516001600160a01b03909116906373a1abe09088908590811061134757611347611bcd565b602002602001015187858151811061136157611361611bcd565b60209081029190910101516040516001600160e01b031960e085901b1681526001600160a01b03928316600482015260248101919091529087166044820152606401602060405180830381600087803b1580156113bd57600080fd5b505af11580156113d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f59190611c66565b50600085838151811061140a5761140a611bcd565b602002602001018181525050508061142181611c1b565b915050610ffb565b6001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156115115760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168360405160006040518083038185875af1925050503d80600081146114bb576040519150601f19603f3d011682016040523d82523d6000602084013e6114c0565b606091505b50509050806103cc5760405162461bcd60e51b815260206004820152601e60248201527f5f7472616e736665723a20455448207472616e73666572206661696c656400006044820152606401610299565b61153c817f0000000000000000000000000000000000000000000000000000000000000000846116aa565b5050565b8015806115c95750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561158f57600080fd5b505afa1580156115a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c79190611c66565b155b6116345760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610299565b6040516001600160a01b0383166024820152604481018290526103cc90849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526116da565b60006116a38284611c7f565b9392505050565b6040516001600160a01b0383166024820152604481018290526103cc90849063a9059cbb60e01b90606401611660565b600061172f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166117ac9092919063ffffffff16565b8051909150156103cc578080602001905181019061174d9190611be3565b6103cc5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610299565b60606117bb84846000856117c3565b949350505050565b6060824710156118245760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610299565b843b6118725760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610299565b600080866001600160a01b0316858760405161188e9190611c96565b60006040518083038185875af1925050503d80600081146118cb576040519150601f19603f3d011682016040523d82523d6000602084013e6118d0565b606091505b50915091506118e08282866118eb565b979650505050505050565b606083156118fa5750816116a3565b82511561190a5782518084602001fd5b8160405162461bcd60e51b81526004016102999190611cb2565b6001600160a01b038116811461095a57600080fd5b60006020828403121561194b57600080fd5b81356116a381611924565b60005b83811015611971578181015183820152602001611959565b83811115610ff25750506000910152565b6000815180845261199a816020860160208601611956565b601f01601f19169290920160200192915050565b82151581526040602082015260006117bb6040830184611982565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611a3d57611a3d6119fe565b604052919050565b600067ffffffffffffffff821115611a5f57611a5f6119fe565b5060051b60200190565b600082601f830112611a7a57600080fd5b81516020611a8f611a8a83611a45565b611a14565b82815260059290921b84018101918181019086841115611aae57600080fd5b8286015b84811015611ad2578051611ac581611924565b8352918301918301611ab2565b509695505050505050565b60008060408385031215611af057600080fd5b825167ffffffffffffffff80821115611b0857600080fd5b611b1486838701611a69565b9350602091508185015181811115611b2b57600080fd5b85019050601f81018613611b3e57600080fd5b8051611b4c611a8a82611a45565b81815260059190911b82018301908381019088831115611b6b57600080fd5b928401925b82841015611b8957835182529284019290840190611b70565b80955050505050509250929050565b600060208284031215611baa57600080fd5b815167ffffffffffffffff811115611bc157600080fd5b6117bb84828501611a69565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611bf557600080fd5b815180151581146116a357600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611c2f57611c2f611c05565b5060010190565b60008060408385031215611c4957600080fd5b825191506020830151611c5b81611924565b809150509250929050565b600060208284031215611c7857600080fd5b5051919050565b600082821015611c9157611c91611c05565b500390565b60008251611ca8818460208701611956565b9190910192915050565b6020815260006116a3602083018461198256fea2646970667358221220ad99d29ec0bfc4e3b1d61877b26f7032261bf8a7c42e04d587cd3e85f5315ea864736f6c63430008090033";

type ResolverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ResolverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Resolver__factory extends ContractFactory {
  constructor(...args: ResolverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Resolver";
  }

  deploy(
    pokeMe_: string,
    marginLong_: string,
    pool_: string,
    converter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Resolver> {
    return super.deploy(
      pokeMe_,
      marginLong_,
      pool_,
      converter_,
      overrides || {}
    ) as Promise<Resolver>;
  }
  getDeployTransaction(
    pokeMe_: string,
    marginLong_: string,
    pool_: string,
    converter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      pokeMe_,
      marginLong_,
      pool_,
      converter_,
      overrides || {}
    );
  }
  attach(address: string): Resolver {
    return super.attach(address) as Resolver;
  }
  connect(signer: Signer): Resolver__factory {
    return super.connect(signer) as Resolver__factory;
  }
  static readonly contractName: "Resolver";
  public readonly contractName: "Resolver";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ResolverInterface {
    return new utils.Interface(_abi) as ResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Resolver {
    return new Contract(address, _abi, signerOrProvider) as Resolver;
  }
}
