import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appPath = path.join(__dirname, 'src', 'App.jsx');
if (!fs.existsSync(appPath)) {
  console.error('Error: App.jsx missing');
  process.exit(1);
}

console.log('Frontend ES module verification test passed!');
