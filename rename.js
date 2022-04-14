var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var objs = {};

var rename = function (fromDir) {
    var files = fs.readdirSync(fromDir);
    for (var i = 0; i < files.length; i++) {
        var fileName = files[i];
        //绝对路径
        var fromPath = path.join(path.resolve(fromDir), fileName);
        console.log(path.resolve(fromDir));
        var stats = fs.lstatSync(fromPath);
        var isDir = stats.isDirectory();
        var isFile = stats.isFile();
        if (isDir) {
            rename(fromPath);
        } else if (isFile) {
            if (path.extname(fileName) == ".ts") {
                var baseName = path.basename(fromPath, ".ts");
                var tPath = path.join(path.resolve(fromDir), baseName + ".md");
                fs.renameSync(fromPath, tPath);
            }
        }
    }
}

rename('msg');