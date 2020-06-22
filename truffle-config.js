const path = require("path");
// Allows us to use ES6 in our migrations and tests.
require("babel-register");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          "chimney arrest curve orchard acoustic local love clog defy vault culture lens",
          "https://ropsten.infura.io/v3/cae063ed255246968685eb109c2c0765"
        )
      },
      network_id: 3
    },
    rinkeby: {
     provider: function() {
       return new HDWalletProvider(
         "scout sausage bleak fall clog load disease digital kingdom since raise smoke",
         "https://rinkeby.infura.io/v3/11c57d818d034511aa7782c8dd1a397d");
     },
     network_id: 4
   },
    development: {
      host: "http://127.0.0.1",
      port: 8545,
      network_id: process.env.NETWORK_ID
    }
  }
};
