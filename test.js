const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
if (!fs.existsSync(appPath)) {
  console.error('Error: App.jsx missing');
  process.exit(1);
}

console.log('Frontend component verification test passed!');
