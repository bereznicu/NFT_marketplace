import Web3 from 'web3';
import SingleNFT from './truffle/build/contracts/SingleNFT.json'

export const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId(console.log);
    const networkData = SingleNFT.networks[networkId];
    const abi = SingleNFT.abi;
    const address = networkData.address;
    const contract = new web3.eth.Contract(abi, address);
    // contract.methods.safeMint("SALIUT").send({from: accounts[0]})
    // .once('receipt', async (receipt) => {
    //     console.log(receipt);
    // });
    
}