var mensagem = "alan tinoco dos santos"
var mensagemADesencriptar = "1l1n t3n%c% d%s s1nt%s"

encriptar = (mensagem) =>{
    
    let mensagemEncriptada;

    const mensagemArray = mensagem.split("");

    var mensagemEncriptadaArray = [];

    for (i = 0 ; i < mensagemArray.length; i++){
        
        let letra;

        switch (mensagemArray[i]) {
            case 'a':
                letra = "1";
                break;
            case 'e':
                letra = "@";
                break;
            case 'i':
                letra = "3";
                break;
            case 'o':
                letra = "%";
                break;
            case 'u':
                letra = "5";
                break;

            default:
                letra = mensagemArray[i];
                break;
        }

        mensagemEncriptadaArray.push(letra);
        

    }


    mensagemEncriptada = mensagemEncriptadaArray.join("");
    console.log("Mensagem Encriptada: ", mensagemEncriptada);

}


encriptar(mensagem);



desencriptar = (mensagemADesencriptar) => {
    
    let mensagemDesencriptada;

    const mensagemADesencriptarArray = mensagemADesencriptar.split("");

    let mensagemDesencriptadaArray = [];

    for (let i = 0; i < mensagemADesencriptarArray.length; i++) {
        
        let letraADesencriptar; 

        switch (mensagemADesencriptarArray[i]) {
            case '1':
                letraADesencriptar = "a";
                break;
            case '@':
                letraADesencriptar = "e";
                break;
            case '3':
                letraADesencriptar = "i";
                break;
            case '%':
                letraADesencriptar = "o";
                break;
            case '5':
                letraADesencriptar = "u";
                break;

            default:
                letraADesencriptar = mensagemADesencriptarArray[i];
                break;
        }

        mensagemDesencriptadaArray.push(letraADesencriptar);
        
        
    }


    mensagemDesencriptada = mensagemDesencriptadaArray.join("");
    console.log("Mensagem Desencriptada: ", mensagemDesencriptada);
    

}

desencriptar(mensagemADesencriptar);