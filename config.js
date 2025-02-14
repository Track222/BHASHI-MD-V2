const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~bFgW0ayQ#zBDCq9_moB2Opm01-HsYEJ-fGLN_WO5Evgwhn-NVeJ0",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb://mongo:mkNXYJgXRnMXvdmeNhOPaAMVbZUQiLCa@roundhouse.proxy.rlwy.net:57267",

    
 
};
