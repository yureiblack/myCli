const daxios = require("axios")
class QuoteCommand{
    program;
    constructor(program){
        this.program=program
    }
    register(){
        this.program
        .command("quote")
        .action(async()=> await this.addQuote())
    }
    async addQuote(){
        try{
        const res= await daxios.get(`https://zenquotes.io/api/random`)
            console.log(res.data[0].q)
            console.log(res.data[0].a)
        }
        catch(err){console.log(err)}
        }
}
module.exports=QuoteCommand