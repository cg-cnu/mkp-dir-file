const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');

const isFolder = (inputPath) => {
    return inputPath.charAt(inputPath.length - 1) === path.sep;
}

const create = (inputPath) => {

    // TODO: raise an exception if no inputPath is provided
    if (!fs.existsSync(inputPath)) {

        if (isFolder(inputPath)) {
            // make folders
            mkdirp.sync(inputPath);
        } else {
            // make folders
            mkdirp.sync( path.dirname(inputPath) );
            // make file
            fs.closeSync(fs.openSync(inputPath, 'a'));
        }
    }
}

module.exports = {
  create
}