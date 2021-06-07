import MetaMaskOnboarding from '@metamask/onboarding';
import Web3 from 'web3';
import Torus from "@toruslabs/torus-embed";

//Metamask
export const isMetamaskInstalled = () => {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
}

const MetamaskRedirect = () => {
    const onboarding = new MetaMaskOnboarding();
    onboarding.startOnboarding();
}

const MetamaskLogin = async () => {
    try {
        // Will open the MetaMask UI
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error(error);
      }
}

export const ConnectMetamask = async () => {
    if(!isMetamaskInstalled())
        MetamaskRedirect();
    else await MetamaskLogin();
}

//Check if user is logged in
export const LoggedIn = async () => {
    var accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if(!Array.isArray(accounts) || !accounts.length)
        return null;
    window.web3 = new Web3(window.ethereum);
    return accounts[0];
}


//TORUS WALLET
export const ConnectTorus = async () => {
    const torus = new Torus();
    await torus.init({
        showTorusButton: false
    });
    await torus.ethereum.enable();
    const web3 = new Web3(torus.provider);
    console.log(await web3.eth.getAccounts());
}