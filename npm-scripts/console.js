const figlet = require('figlet');
figlet(process.env.TEXT, function(err, data) {
    console.log(data || '运行结束!')
})