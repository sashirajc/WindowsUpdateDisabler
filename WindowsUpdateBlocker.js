const os = require('os');
const cmd = require('node-cmd');
const nodeWin = require('node-windows');
const fs = require('fs');


if (os.type() === 'Windows_NT') {
    cmd.get('sc query wuauserv', function (err, data) {
        if (err) writeLog(err);
        var state = data.split('\n')[3];
        if (state[29] === '4') {
            nodeWin.elevate("sc stop wuauserv", function (err, data) {
                if (err) writeLog(err);
                else writeLog(data)
            });
        }
    });
}

function writeLog(msg) {
    fs.appendFile('execLog.txt', msg, (err) => {
        if (err)
            console.log(err, 'error');
    });
}