const os = require('os');
const cmd = require('node-cmd');

if (os.type() === 'Windows_NT') {
  cmd.get('sc query wuauserv', function(err, data) {
    var state = data.split('\n')[3];
    if (state[29] === '4') {
      cmd.get(`runas /user:Sash "sc stop wuauserv"`, function(err, data) {
        // Figure out how to stop asking for password
        console.log(err, 'err2');
        console.log(data, 'data2');
      });
    }
  });
}
