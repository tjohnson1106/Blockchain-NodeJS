 class Blockchain {
     constructor () {
         //creating chain and transaction
         this.chain = []
         this.current_transactions = []
         //Binding
         this.newBlock = this.newBlock.bind(this)
         this.newTransaction = this.newTransaction.bind(this)
         this.lastBlock = this.lastBlock.bind(this)
         this.proofOfWork = this.proofOfWork.bind(this)
     }

     newBlock ()

     newTransaction  ()

     hash (block) 

     lastBlock ()
 } 

 module.exports = Blockchain