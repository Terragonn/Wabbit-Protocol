//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./PoolToken.sol";

contract LPool is Ownable {
    // address private wabbit; // **** This should be the token that the profits generated by the treasury may eat into to back them - more used as a value token for the rest of the treasury, where these tokens are backed by the value of the treasurys generated liquidity

    mapping(address => address) private approvedAssetsMap;
    address[] private approvedAssets;

    constructor() {}

    /**
     *  @notice approves an asset to be used throughout the protocol and generate a new pool token for it
     *  @param _token address
     */
    function approveAsset(address _token, string memory _name, string memory _symbol) public onlyOwner {
        require(!isApprovedAsset(_token), "This token has already been approved");
        address newFarmToken = address(new PoolToken(_name, _symbol, 0)); 
        approvedAssets.push(_token);
        approvedAssetsMap[_token] = newFarmToken;
    }

    /**
     *  @notice returns whether a specified asset is approved
     *  @param _token address
     *  @return _isApproved bool
     */
    function isApprovedAsset(address _token) public view returns (bool _isApproved) {
        _isApproved = approvedAssetsMap[_token] != address(0);
    }

    /**
     *  @notice return the list of assets the protocol may accept
     *  @return _approvedAssets address[]
     */
    function getApproveAssets() public view returns (address[] memory _approvedAssets) {
        _approvedAssets = approvedAssets;
    }

    function getPoolToken(address _token) public view returns (address _poolToken) {
        require(isApprovedAsset(_token), "This asset is not approved");
        _poolToken = approvedAssetsMap[_token];
    }

    /**
     *  @notice deposits a given amount of assets into the pool and mints a portion of tokens to represent the share
     */
    function deposit(address _token, uint256 _amount) public {
        // **** Since the tokens represent a percentage of the total liquidity, they can only redeem the percentage of the pool which they own ?
        require(approvedAssetsMap[_token] == true, "Thi asset is not approved");
    }

    /**
     * @notice withdraws tokens in exchange for the percentage worth in the pool
     */
    function withdraw(address _token, uint256 _amount) public {

    }
}