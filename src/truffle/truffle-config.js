module.exports = {
  networks: {
    development: {
      host: "192.168.0.101",
      port: 7545,
      network_id: "5777"
    },
  },
  contracts_directory: './contracts',
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};