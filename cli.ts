#!/usr/bin/env node

const cli_engine=require("./cli_engine/engine")
const add_Command=require("./commands/addCommand")
const greetCommand=require("./commands/greetCommand")
const subCommand=require("./commands/subCommand")
const jokeCommand=require("./commands/jokeCommand")
const mulCommand=require("./commands/mulCommand")
const quoteCommand=require("./commands/quoteCommand")
const divCommand=require("./commands/divCommand")
const pokemonCommand=require("./commands/pokemonCommand")
const countryCommand=require("./commands/countryCommand")
const weatherCommand=require("./commands/weatherCommand")
const engine=new cli_engine()
engine.registerCommands([weatherCommand,countryCommand,pokemonCommand,divCommand,add_Command,greetCommand,quoteCommand,subCommand,jokeCommand,mulCommand])
engine.run()

// const {Command} = require("commander") //command object
// const axios = require("axios") //axios class has axios as default export
// const program = new Command() //create instance of command object

// program
//     .command("greet <name>") //variables are put in <>
//     .action((name) => {
//         console.log(`Hello ${name}`) //the function that gets into action upon the above command
//     }) 

// program
//     .command("add <num1> <num2>")
//     .description("Add two numbers")
//     .action((num1, num2) => {
//         console.log(Number(num1) + Number(num2))
//     })

// program
//     .command("subtract <num1> <num2>")
//     .description("Subtract two numbers")
//     .action((num1, num2) => {
//         console.log(Number(num1) - Number(num2))
//     })

// program
//     .command("multiply <num1> <num2>")
//     .description("Multiply two numbers")
//     .action((num1, num2) => {
//         console.log(Number(num1) * Number(num2))
//     })

// program
//     .command("divide <num1> <num2>")
//     .description("Divide two numbers")
//     .action((num1, num2) => {
//         if (Number(num2) == 0){
//             console.log("Cannot divide by zero")
//         } else{
//             console.log(Number(num1) / Number(num2))
//         }
//     })

// program
//     .command("joke")
//     .description("Tell a random joke")
//     .action(async () => {
//         try{
//             const joke = await axios.get("https://official-joke-api.appspot.com/random_joke")
//             console.log(joke.data.setup)
//             console.log(joke.data.punchline)
//         }
//         catch(error){
//             console.log(error)
//         }
//     })

// program
//     .command("quote")
//     .description("Tell a quote")
//     .action(async () => {
//         try{
//             const quote = await axios.get("https://zenquotes.io/api/random")
//             console.log(quote.data[0].q)
//             console.log(quote.data[0].a)
//         }
//         catch(error){
//             console.log(error)
//         }
//     })
// program.parse() //This happens only once at the end of the program after all the commands are defined