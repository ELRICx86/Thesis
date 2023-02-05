// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.7.0;

contract paypal{

       event transactions(address indexed from, address to, uint amount, string symbol);
    event recipeints(address indexed reecipientOf, address recipient, string recipientName);

    function _transfer(address payable _to, string memory symbol) public payable {
        _to.transfer(msg.value);
        emit transactions(msg.sender, _to, msg.value, symbol);
    }
    function saveTx(address from, address to, uint amount, string memory symbol) public {
        emit transactions(from, to, amount, symbol);
    }

    function addressRecipient(address recipient,string memory name) public{
         emit recipeints(msg.sender, recipient, name);
    }
}

//0x59EcE8FF3220034608798C977020c2eBfb179962 -Gorelli Test net deployed
