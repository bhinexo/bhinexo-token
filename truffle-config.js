require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const {
    INFURA_API_KEY,
    WALLET_PRIVATE_KEY,
    ETHERSCAN,
    AVALANCHE
} = process.env;

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*'
        },
        ethereum: {
            provider: () =>
                new HDWalletProvider(
                    WALLET_PRIVATE_KEY,
                    `https://mainnet.infura.io/v3/${INFURA_API_KEY}`
                ),
            network_id: 3,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        ropsten: {
            provider: () =>
                new HDWalletProvider(
                    WALLET_PRIVATE_KEY,
                    `https://ropsten.infura.io/v3/${INFURA_API_KEY}`
                ),
            network_id: 3,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        kovan: {
            provider: () =>
                new HDWalletProvider(
                    WALLET_PRIVATE_KEY,
                    `https://kovan.infura.io/v3/${INFURA_API_KEY}`
                ),
            network_id: 3,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        avalanche: {
            provider: () =>
                new HDWalletProvider(
                    WALLET_PRIVATE_KEY,
                    `https://api.avax.network/ext/bc/C/rpc`
                ),
            network_id: 43114,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        fuji: {
            provider: () =>
                new HDWalletProvider(
                    WALLET_PRIVATE_KEY,
                    `https://api.avax-test.network/ext/bc/C/rpc`
                ),
            network_id: '*',
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    plugins: ['truffle-plugin-verify'],
    api_keys: {
        etherscan: ETHERSCAN,
        avalanche: AVALANCHE
    },
    compilers: {
        solc: {
            version: '0.8.6',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                },
                evmVersion: 'byzantium'
            }
        }
    },
    db: {
        enabled: false
    }
};
