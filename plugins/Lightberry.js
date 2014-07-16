
exports.action = function(data, callback, config, SARAH){

    config = config.modules.Lightberry;
	if (config.Lighberry_ip == "IP"){
		console.log("La variable Lighberry_ip n'est pas configurée");
		return callback({'tts' : "La variable, Lighberry,  IP, n'est pas configurée."});
	}

	if (config.Lighberry_ssh_port == "PORT"){
		console.log("La variable Lighberry_ssh_port n'est pas configurée");
		return callback({'tts' : "La variable, Lighberry, ssh, port, n'est pas configurée."});
	}

	if (config.Lighberry_user == "UTILISATEUR"){
		console.log("La variable Lighberry_user n'est pas configurée");
		return callback({'tts' : "La variable, Lighberry, user, n'est pas configurée."});
	}
	
	if (config.Lighberry_pass == "MOTDEPASSE"){
		console.log("La variable Lighberry_pass n'est pas configurée");
		return callback({'tts' : "La variable, Lighberry,  passe, n'est pas configurée."});
	}
	
    var exec = require('child_process').exec;
    var ip = config.Lighberry_ip;
    var port = config.Lighberry_ssh_port;
    var user = config.Lighberry_user;
    var pass = config.Lighberry_pass;
    var command = data.cmd_bash;

    var process = '%CD%/plugins/Lightberry/bin/putty';

    process += ' -ssh ' + user + '@' + ip + ' -P ' + port + ' -pw ' + pass + ' -m %CD%/plugins/Lightberry/bin/scripts/' + command + ' & exit &';
  console.log('LightBerry : ' + command + ' -> OK');
    var child = exec(process,function (error, stdout, stderr) {""});
    callback({'tts': "C'est fait."});
}
