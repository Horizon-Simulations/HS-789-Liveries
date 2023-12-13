require('dotenv').config();
const fs = require('fs-extra');

const source = process.env.BUILD_DIR_NAME ? 'external/hs789-liveries/' + process.env.BUILD_DIR_NAME : 'external/hs789-liveries';
console.log('installManifest source is: ' + source);

const installManifest = fs.readJSONSync('./hs-789-liveries/out/horizonsim-aircraft-787-9-livery-package/install.json');
installManifest.source = source;
fs.writeJSONSync('./hs-789-liveries/out/horizonsim-aircraft-787-9-livery-package/install.json', installManifest);
