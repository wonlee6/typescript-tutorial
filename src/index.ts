class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public tiemstamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.tiemstamp = timestamp;
  }
}
const genesisBlock: Block = new Block(0, '23232323', '', 'Hello', 123456);
// blockchain = block 연결
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);
export {};
