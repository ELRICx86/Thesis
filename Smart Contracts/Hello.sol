// SPDX-License-Identifier: MIT
pragma solidity 0.8.8;

contract SimpleStorage{

    uint256 public num;



    function  myfunc(uint256 num1)public{
        num=num1;
    }

    function get() public view returns(uint256){
        return num;
    }

}

//0xd9145CCE52D386f254917e481eB44e9943F39138