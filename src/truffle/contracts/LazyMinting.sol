// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SingleNFT is ERC721 {
    constructor() ERC721("NFT", "ART") {}

    function safeMint(string memory _stringster) public payable {
        require(bytes(_stringster).length > 0);
        _safeMint(msg.sender, 3);
    }
}