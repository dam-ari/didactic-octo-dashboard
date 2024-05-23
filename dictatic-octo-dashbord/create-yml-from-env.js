require('dotenv').config();
const fs = require('fs');
const path = require('path');
const tab = '  ';

// Get environment variables
const { CUSTOM_YML, INTEGRATE_YML ,MAIN_KEY, SUBKEYS } = process.env;

// Parse SUBKEYS as an array
const subkeysArray = process.env.SUBKEYS.replace(/"\n/g, '').trim().split(';'); 

// Determine the file name
const fileName = CUSTOM_YML ? CUSTOM_YML : 'custom.yml';
console.log(subkeysArray);
console.log(SUBKEYS);
// Construct the YML content
let ymlContent = `
${MAIN_KEY}:
${subkeysArray.map(key => {
    key = key.replace(/"/g, '').trim();
    console.log("key:", key);
    return `${tab}${key}`
}).join('\n')}
`;

// if INTEGRATE_YML is defined, add the content to the existing YML file
if (INTEGRATE_YML) {
  const existingYmlContent = fs.readFileSync(path.join(__dirname, INTEGRATE_YML), 'utf8');

  // if main key already exists, remove it and its subkeys
    if (existingYmlContent.includes(MAIN_KEY)) {
        const mainKeyIndex = existingYmlContent.indexOf(MAIN_KEY);
        const nextLineIndex = existingYmlContent.indexOf('\n', mainKeyIndex);
        const nextMainKeyIndex = existingYmlContent.indexOf(MAIN_KEY, nextLineIndex);
        if (nextMainKeyIndex !== -1) {
        ymlContent = existingYmlContent.substring(0, mainKeyIndex) + ymlContent.trim() + existingYmlContent.substring(nextMainKeyIndex);
        } else {
        ymlContent = existingYmlContent.substring(0, mainKeyIndex) + ymlContent.trim();
        }
    } else {
        ymlContent = existingYmlContent.trim() + '\n\n' + ymlContent.trim();
    }
}

// Write the YML content to the specified file
fs.writeFileSync(path.join(__dirname, fileName), ymlContent.trim(), 'utf8');

// Output success message
console.log(`YML file '${fileName}' created successfully with the following content:\n`);
console.log(ymlContent);
