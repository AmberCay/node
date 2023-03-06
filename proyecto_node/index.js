const rc = require('./readConsole');
const { writeAndRead } = require('./writeAndReadObject');

rc.readConsole((user) => {
    writeAndRead('user.json', user)
})
;

