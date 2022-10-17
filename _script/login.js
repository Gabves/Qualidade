//Array com base de chaves aleatórias de onde a chave de acesso é retirada
var keyBase = [[],[],[]];

//Gera uma nova array de chaves aleatórias sempre que um há um novo acesso
function generateAccessKey(){
	for(indiceUm = 0;indiceUm<3;indiceUm++){
		for(indiceDois = 0;indiceDois<10;indiceDois++){
			if(indiceUm==0){
				keyBase[indiceUm].push(Math.floor(Math.random()*(99999-10000)+10000));
			}
			if(indiceUm==1){
				keyBase[indiceUm].push(Math.floor(Math.random()*(9999999-1000000)+1000000));
			}
			if(indiceUm==2){
				keyBase[indiceUm].push(Math.floor(Math.random()*(999-100)+100));
			}
		}
	}
	console.log(keyBase);
	var randomCode = [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
	console.log(randomCode.join("")+"-"+keyBase[0][randomCode[0]]+"-"+keyBase[1][randomCode[1]]+"-"+keyBase[2][randomCode[2]])
}

//Verifica se a chave inserida é válida
function check(id){
	var element = document.getElementById(id);
	var accessKey = element.value;
	var checkKey = accessKey.split("-");
	console.log(keyBase);
	if(checkKey[1]==keyBase[0][checkKey[0][0]]&&checkKey[2]==keyBase[1][checkKey[0][1]]&&checkKey[3]==keyBase[2][checkKey[0][2]]){
		console.log("Chave verificada com sucesso, acesso permitido");
	}else{
		console.log("Erro, chave inexistente, acesso bloqueado");
	}
}