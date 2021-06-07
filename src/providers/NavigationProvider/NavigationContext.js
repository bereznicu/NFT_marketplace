import React, {useState, useEffect, createContext} from 'react';
import { LoggedIn } from '../../components/WalletsSection/ConnectWallet';

export const NavigationContext = createContext();

export const NavigationProvider = props => {
    //Sidebar state
    const [isOpen, setIsOpen] = useState(false);
    
    //Navbar state
    const [walletConnected, setWalletConnected] = useState(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const setWalletConnection = connection => {
        setWalletConnected(connection);
    }

    //Initialize the walletConnected state
    const checkWalletConnection = async () => {
        var loggedIn = await LoggedIn();
        setWalletConnection(loggedIn);
    }
    
    useEffect(() => {
        checkWalletConnection();
    }, []);

    //Watch for authentication events
    window.ethereum.on('accountsChanged', async (accounts) => {
        if(!Array.isArray(accounts) || !accounts.length)
            setWalletConnection(null);
        else {
            var accounts = await window.ethereum.request({ method: 'eth_accounts' });
            setWalletConnection(accounts[0]);}
    });
    

    return <NavigationContext.Provider value= {{ sidebar: [isOpen, toggleSidebar], wallet: [walletConnected, setWalletConnection] }}>{props.children}</NavigationContext.Provider>;
}