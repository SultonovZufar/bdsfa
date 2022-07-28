const x = require ('./roate')
const { existsSync } = require('fs');

if (existsSync(x))
   console.log('The path exists.');
else 
   console.log("No, exists.");



module.exports = (a) => {}