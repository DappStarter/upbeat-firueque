require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift rebel place exchange grace merry flock gather'; 
let testAccounts = [
"0x87f838ca56250ce86325d03bd8d5a369fda09ab958704454010fdd14ac3d382b",
"0xd2357df033de729758ff55bfa84804511cba38743864094d93270fa077de8e71",
"0x1179828ad0ca1e469634bdf9688a9a6322aae4383ce06d35ff18bf893450cd73",
"0xf41d831a7fffc0fd7dfdbecdca4318bbbcd76bd56be17ca4085066d828cf2d5f",
"0x1c3c4b1c1e855da7b73150c98b8687a7f1490cf0b94bc4ad6164365a461605de",
"0x420764b33685fde4def49530909eb7b95071aa277544793ce4c5cb23b248fb99",
"0x2db5c033654d4611b5e6023cba3f240a68176a541759dcbfa056f2f26a4f1635",
"0x5b979f5839c72e1a4ff6995a81f1652a1f9dd901a64d02910634fea2aba22408",
"0x54742ef1e0ae0d8843f88eb683551f4f3afd65ab4b4c56d324cb0462eeeebfbb",
"0x81651094cdbb858585085442266c9efd0fbe267c43e2aac0bf922d5e34ab829d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
