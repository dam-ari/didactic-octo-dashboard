---
title: Creating YAML Files from Environment Variables with Ease
date: 2024-05-22 23:12:02
tags: [YAML, Environment Variables, Node.js, Automation, Dotenv]
# category: [Tutorial, Web Development]
category: Tutorial
---

In this tutorial, you'll learn how to create a YAML file from environment variables using a simple Node.js script. This approach is especially useful for applications that need to manage configuration dynamically.

## Introduction

Managing configurations through environment variables is a common practice in software development. However, there are times when you need to convert these variables into a YAML file for compatibility with other systems. In this guide, we will walk you through the process of creating a YAML file from environment variables using Node.js.

## Step-by-Step Guide

### Step 1: Initialize the Project

First, initialize a new Node.js project and install the required dependencies. Run the following commands in your project directory:

```bash
npm init -y
npm install dotenv
```

### Step 2: Create the .env File

Create a `.env` file in the root directory of your project. This file will contain the environment variables that you want to convert into a YAML file.

**Example `.env` file:**

```plaintext
CUSTOM_YML=optional-file-name.yml
MAIN_KEY='algolia'
SUBKEYS="appId: 'Z52OAHCPAD',\nadminApiKey: 'd8001ddb8369cff94da0e20be19e91a6',\nindexName: 'verse',\nfields: ['title', 'content', 'permalink', 'path', 'date', 'category', 'tags']"
```

### Step 3: Write the Script

Create an `index.js` file in the root directory of your project and add the following code:

```javascript
#!/usr/bin/env node

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const tab = '  ';

// Get environment variables
const { CUSTOM_YML, MAIN_KEY, SUBKEYS } = process.env;

// Parse SUBKEYS as an array
const subkeysArray = SUBKEYS.replace(/"\n/g, '').trim().split(';'); 

// Determine the file name
const fileName = CUSTOM_YML ? CUSTOM_YML : 'custom.yml';

// Construct the YML content
const ymlContent = `
${MAIN_KEY}:
${subkeysArray.map(key => {
    key = key.replace(/"/g, '').trim();
    return `${tab}${key}`
}).join('
')}
`;

// Write the YML content to the specified file
fs.writeFileSync(path.join(__dirname, fileName), ymlContent.trim(), 'utf8');

// Output success message
console.log(`YML file '${fileName}' created successfully with the following content:
`);
console.log(ymlContent);
```

### Step 4: Make the Script Executable

Make sure the script is executable by running the following command:

```bash
chmod +x index.js
```

### Step 5: Run the Script

Run the script to generate the YAML file from the environment variables:

```bash
node index.js
```
