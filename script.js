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
    let matrizCodigo = [["e", "e2n7ter"], ["é", "r2t5r"], ["i", "i2m3es"],  ["í", "x5x2x"], ["a", "a5i4"], ["á", "jg3g"], ["o", "ob34er"],  ["ó", "v2x3v"], ["u", "u2f3at"], ["¿", "c3s3c"], ["?", "f3r2f"],  ["¡", "o2u4y5n"], ["!", "z6z2z"]];
    frase = frase.toLowerCase();
    for(let i= 0; i<matrizCodigo.length; i++){
        if(frase.includes(matrizCodigo[i][0])) {
            frase = frase.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return frase 
}


function desencriptar(fraseDesencriptada) {
    let matrizCodigo = [["e", "e2n7ter"], ["é", "r2t5r"], ["i", "i2m3es"],  ["í", "x5x2x"], ["a", "a5i4"], ["á", "jg3g"], ["o", "ob34er"],  ["ó", "v2x3v"], ["u", "u2f3at"], ["¿", "c3s3c"], ["?", "f3r2f"],  ["¡", "o2u4y5n"], ["!", "z6z2z"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase();
    for(let i= 0; i<matrizCodigo.length; i++){
        if(fraseDesencriptada.includes(matrizCodigo[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0] );
        }
    }
    return fraseDesencriptada 
}
