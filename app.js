const Blockchain = require('./blockchain');

const myChain = new Blockchain();
myChain.addBlock('second block');
myChain.addBlock('third block');
myChain.addBlock('fourth block');
myChain.addBlock('fifth block');
myChain.printChain();
