// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  uint _storedData;

  event DataUpdated(uint oldData,uint newData);

  function set(uint newData_) public {
    emit DataUpdated(_storedData,newData_);
    _storedData = newData_;
  }

  function get() public view returns (uint) {
    return _storedData;
  }
}