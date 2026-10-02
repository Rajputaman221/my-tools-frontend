import T from './src/tools.js';import fs from 'node:fs';
fs.writeFileSync('dist/tools-index.json',JSON.stringify(T.map(({cat,name})=>({cat,name}))));
fs.copyFileSync('src/content.js','dist/content.mjs');
console.log('index ok:',T.length,'client tools');
