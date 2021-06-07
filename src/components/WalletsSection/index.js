import React from 'react'
import { WalletsContainer, WalletSVG } from './WalletsElements'
import { ReactComponent as MetamaskSVG } from '../../images/metamask.svg';
import { ReactComponent as TorusSVG } from '../../images/torus.svg';
import { ConnectMetamask, ConnectTorus } from './ConnectWallet';


const WalletsSection = () => {
    return (
            <WalletsContainer id="wallets">
                <h2 >Currently supported wallets</h2>
                <WalletSVG onClick={ConnectMetamask} >
                    <MetamaskSVG width="100%" height="100%" />
                </WalletSVG>
            </WalletsContainer>
    )
}

export default WalletsSection;
