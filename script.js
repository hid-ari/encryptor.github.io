const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-area-two");
const encriptarBtn = document.querySelector(".btn-encriptar");
const desencriptarBtn = document.querySelector(".btn-desencriptar");
const copiarBtn = document.querySelector(".copiar");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    paragraphOne.innerHTML = "";
    paragraphTwo.innerHTML = "";
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    paragraphOne.innerHTML = "";
    paragraphTwo.innerHTML = "";
}


function btnCopiar() {
    copiar();
    textArea.value = "";
    mensaje.value = "";
}

function copiar() {
    const copyText = document.querySelector(".text-area-two");
    copyText.select();
    copyText.setSelectionRange(0,999999);
    navigator.clipboard.writeText(copyText.value);

}

function encriptar(frase) {
    let matrizCodigo = [["e", "3r#"], ["i", "z8~"], ["a", "p5k!"], ["o", "y6%r"], ["u", "h7!t"]];
    frase = frase.toLowerCase();
    for(let i= 0; i<matrizCodigo.length; i++){
        if(frase.includes(matrizCodigo[i][0])) {
            frase = frase.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return frase 
}


function desencriptar(fraseDesencriptada) {
    let matrizCodigo = [["e", "3r#"], ["i", "z8~"], ["a", "p5k!"], ["o", "y6%r"], ["u", "h7!t"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase();
    for(let i= 0; i<matrizCodigo.length; i++){
        if(fraseDesencriptada.includes(matrizCodigo[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0] );
        }
    }
    return fraseDesencriptada 
}
