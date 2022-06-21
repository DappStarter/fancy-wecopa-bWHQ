require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture student razor misery unlock gentle light army gauge'; 
let testAccounts = [
"0x3c99f32fea5c1229dc1213b6282831520f2a652773cf0647d90536fcc4f81516",
"0xb0386f20c30802c05e66a95d15008180b8e184f44bfa04776de306a9a1118190",
"0xb8f396bf7447f19ecea21f3a1975f3278bb071727144310455901b78d42ea7c0",
"0x6500d553812a077ff44643dc5599156efa9e93cd729c2b4edc495a6478182b36",
"0x89d7b44d7cb3f605332a1e5479b2052595ea856ae356999e8a300ecc5d94411b",
"0x469b3a242606d63986102b57404a14ca6d941c1e0edf4b506cd75cb4bdd25577",
"0x796f3151fb574bf671c32c81628d60c258a6a5920df646072432edd4801d3daa",
"0x6de7f0df1ed4b777d40a8abc2df47a7250dc5a600a34dfb44b054b5aa310022c",
"0x4eee67a608f74c72ef46527a1eff4373a553e3ec89b7d1693fa7b35534275d1e",
"0x1cc20a68b498f5e58007f2e87ae06ac08590243a24507a7c9a65ebdba805cee5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

