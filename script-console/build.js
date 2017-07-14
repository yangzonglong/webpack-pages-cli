const figlet = require('figlet');
figlet('build ok !', function(err, data) {
    console.log(data || '打包成功!')
})