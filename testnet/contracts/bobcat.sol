// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract BobcatBazaar is
    Ownable,
    ERC721Enumerable,
    ERC721Burnable
{
    event PermanentURI(string _value, uint256 indexed _id);

    constructor() ERC721("BobcatBazaar", "BCBA") {
    }

    function mint() public onlyOwner {
      uint256 totalSupply = totalSupply();
      require (totalSupply < 10000);
      for (uint256 i = totalSupply; i < totalSupply + 100; i++) {
          _mint(owner(), i);
          string memory _tokenURI = super.tokenURI(i);
          emit PermanentURI(_tokenURI, i);
      }
    }

    function contractURI() public pure returns (string memory) {
        return "https://nfts-326700.uc.r.appspot.com/";
    }

    function _baseURI() override internal view virtual returns (string memory) {
        return "https://nfts-326700.uc.r.appspot.com/api/token/";
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 serialId
    ) internal virtual override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, serialId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function isApprovedForAll(address _owner, address _operator)
        public
        view
        override
        returns (bool isOperator)
    {
        // if OpenSea's ERC721 Proxy Address is detected, auto-return true
        if (_operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
            return true;
        }

        // otherwise, use the default ERC721.isApprovedForAll()
        return ERC721.isApprovedForAll(_owner, _operator);
    }

    /**
     * This is used instead of msg.sender as transactions won't be sent by the original token owner, but by OpenSea.
     */
    function _msgSender() internal view override returns (address sender) {
        return ContextMixin.msgSender();
    }
}