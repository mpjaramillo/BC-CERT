pragma solidity ^0.5.0;
contract Ballot {

struct Documents {

    string aadhar;

}


struct MultiSig
{

    address inst;
    address stud;
Documents documents;


}



mapping(address=>MultiSig) wallets ;







function createNewMultiSigbyUser(address instituteaddress) public {

        Ballot.MultiSig storage wa = wallets[msg.sender];
        wa.inst=instituteaddress;
        wa.stud=msg.sender;


}



function uploadAadhar(string memory a) public {

    Ballot.MultiSig storage wa=wallets[msg.sender];




}
}
