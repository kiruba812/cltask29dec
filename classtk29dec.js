class account {
    constructor(name,accountno,balance,address){
        this.name = name;
        this.accountno = accountno;
        this.balance = balance;    
   }
   getbalance(){
       return`the balance is : ${this.balance}`
   }
   withdraw(amount){
       if(this.balance >= amount){
           this.balance = this.balance - amount
           return this.getbalance()
       }else{
           return`Insufficient balance .${this.getbalance()}`
       }
    //task 1
    }
    deposit(amount){
        this.balance=this.balance+amount
        return this.getbalance()
    }
   }

const ganesh=new account("Ganesh",150,100000)
const vani=new account("Vani",151,200000)
const avinash=new account("Avinash",152,90000)
console.log(ganesh);
console.log(vani);
console.log(avinash);
console.log(vani.deposit(10000))
console.log(avinash.deposit(200000))
console.log(ganesh.deposit(50000))

