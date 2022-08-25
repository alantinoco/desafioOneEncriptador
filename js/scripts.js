// CRIPTOGRAFAR
const mensagem = document.getElementById("resultado");

function botaoCriptografar(texto) {
    const textoInserido = document.getElementById("textoInserido").value;
    criptografar(textoInserido)
}

function criptografar(textoInserido) {
    
    let textInseridoArray = textoInserido.toLowerCase().split("");

    var textoCriptografadoArray = [];

    for (i = 0 ; i < textInseridoArray.length; i++){
        
        let letra;

        switch (textInseridoArray[i]) {
            case 'a':
                letra = "ai";
                break;
            case 'e':
                letra = "enter";
                break;
            case 'i':
                letra = "imes";
                break;
            case 'o':
                letra = "ober";
                break;
            case 'u':
                letra = "ufat";
                break;

            default:
                letra = textInseridoArray[i];
                break;
        }

        textoCriptografadoArray.push(letra); 
    }

    textoCriptografado = textoCriptografadoArray.join("");

    document.getElementById("resultado").innerHTML = textoCriptografado;
    
}


// DESCRIPTOGRAFAR

function botaoDescriptografar(texto) {
    textoInserido = document.getElementById("textoInserido").value;
    descriptografar(textoInserido);
}


function descriptografar(textoInserido) {

    let texto = textoInserido.toLowerCase();
    
    if (texto.includes("ai" || "enter" || "imes" || "ober" || "ufat")) {
        texto = texto.replaceAll("ai", "a");
        texto = texto.replaceAll("enter", "e");
        texto = texto.replaceAll("imes", "i");
        texto = texto.replaceAll("ober", "o");
        texto = texto.replaceAll("ufat", "u");
        document.getElementById("resultado").innerHTML = texto;
    }  
             
    }


