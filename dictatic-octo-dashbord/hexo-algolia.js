// TODO: validate that this is working correctly with 'node hexo-algolia.js'

require('dotenv').config();
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Load the environment variable
const hexConfigName = process.env.CUSTOM_YML;

if (!hexConfigName) {
  console.error('CUSTOM_YML is not defined in the .env file');
  process.exit(1);
}

// Path to the custom config file
const customConfigPath = path.join(__dirname, hexConfigName);

// Check if the custom config file exists
if (!fs.existsSync(customConfigPath)) {
  console.error(`The custom config file ${hexConfigName} does not exist.`);
  process.exit(1);
}

// Execute "create-yml-from-env" to generate the custom config file
try {
  console.log('Executing create-yml-from-env script...');
  execSync('node create-yml-from-env', { stdio: 'inherit' });
  console.log(`create-yml-from-env executed successfully with custom config: ${hexConfigName}`);

  // Print the content of the custom config file
  const configContent = fs.readFileSync(customConfigPath, 'utf8');
  console.log(`Content of ${hexConfigName}:\n${configContent}`);

  // Execute "hexo algolia" with the custom config file
  try {
    console.log(`Executing hexo algolia with config file ${hexConfigName}...`);
    execSync(`hexo --config ${hexConfigName} algolia`);
    console.log('Hexo algolia executed successfully with custom config.');
  } catch (error) {
    console.error('Error executing hexo algolia:', error.message);
    console.error('stdout:', error.stdout && error.stdout.toString());
    console.error('stderr:', error.stderr && error.stderr.toString());
    process.exit(1);
  }
} catch (error) {
  console.error('Error executing create-yml-from-env:', error.message);
  console.error('stdout:', error.stdout && error.stdout.toString());
  console.error('stderr:', error.stderr && error.stderr.toString());
  process.exit(1);
}

// TODO: if  property GITIGNORE_YML is set to true, then add the custom config file to .gitignore
if (process.env.GITIGNORE_YML === 'true') {
  console.log('Adding custom config file to .gitignore...');
  fs.appendFileSync('.gitignore', `\n${hexConfigName}\n`);
  console.log('Custom config file added to .gitignore.');
}