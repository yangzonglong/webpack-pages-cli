const figlet = require('figlet');
figlet('dev end !', function(err, data) {
    console.log(data || '运行结束!')
})