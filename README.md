# MyCLI

A simple custom **Command Line Interface (CLI)** built with **Node.js + TypeScript** that provides useful commands like math operations, weather information, country details, Pokémon info, random quotes, and jokes.

This project demonstrates how to build a CLI tool using **Commander**, **Axios**, and **Chalk**, along with TypeScript compilation and local CLI linking.

---

# Features

The CLI includes several commands:

### Math Commands

* `add` – Add two numbers
* `subtract` – Subtract two numbers
* `multiply` – Multiply two numbers
* `divide` – Divide two numbers

### Information Commands

* `weather` – Fetch weather information
* `country` – Get information about India

### Fun Commands

* `pokemon` – Show information about Pikachu
* `quote` – Generate a random quote
* `joke` – Generate a random joke
* `greet` - Make the cli greet you

### Built-in CLI Features

* `-h` or `--help` for command help (provided by Commander)
* Colored output using Chalk

---

# Tech Stack

* Node.js (v20 required)
* TypeScript
* Commander
* Axios
* Chalk

---

# Installation

Clone the repository:

```bash
git clone https://github.com/your-username/mycli.git
cd mycli
```

Initialize the project:

```bash
npm init -y
```

Install dependencies:

```bash
npm install commander axios chalk
```

Install development dependencies:

```bash
npm install -D typescript ts-node nodemon @types/node
```

---

# TypeScript Setup

Initialize TypeScript configuration:

```bash
npx tsc --init
```

Update **tsconfig.json**:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./",
    "module": "CommonJS",
    "target": "ES2019",
    "esModuleInterop": true
  }
}
```

---

# Build the Project

Compile TypeScript into JavaScript:

```bash
npx tsc
```

This will generate compiled files in the **dist/** folder.

---

# Configure CLI Command

Add the following to **package.json**:

```json
"bin": {
  "mycli": "./dist/cli.js"
}
```

This allows the CLI to be executed using the `mycli` command.

---

# Shebang Setup

At the top of **cli.ts**, add:

```bash
#!/usr/bin/env node
```

This is called a **Shebang Operator** and tells the system which runtime should execute the file.

After adding it, compile again:

```bash
npx tsc
```

---

# Link the CLI Locally

To use the CLI globally on your machine without publishing it to npm:

```bash
npm link
```

Now you can run:

```bash
mycli
```

from anywhere in your terminal.

---

# Example Commands

### Math

```bash
mycli add 5 3
mycli subtract 10 4
mycli multiply 6 7
mycli divide 20 5
```

### Information

```bash
mycli weather
mycli country
```

### Fun

```bash
mycli pokemon
mycli quote
mycli joke
mycli greet <name>
```

---

# Help Menu

Commander automatically provides help commands:

```bash
mycli --help
mycli -h
```

You can also view help for a specific command:

```bash
mycli add --help
```

---

# Learning Goals

This project helped practice:

* Building CLI tools with Node.js
* Structuring TypeScript projects
* Using Commander for CLI command management
* Making HTTP requests with Axios
* Formatting CLI output with Chalk
* Linking local packages using `npm link`

---

# Author

Built as a learning project while exploring **Node.js CLI development with TypeScript**.

---

# Future Improvements

* Add more commands
* Improve error handling
* Add command autocomplete
* Publish the CLI to npm
