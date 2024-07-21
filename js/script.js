function encriptarTexto() {
    let inputTexto = document.getElementById("inputTexto").value;
    let textoEncriptado = inputTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("resultadoTexto").innerText = textoEncriptado;
}

//Lo hice de esta forma porque me parecio mas facil

function desencriptarTexto() {
    let inputTexto = document.getElementById("inputTexto").value;
    let textoDesencriptado = inputTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("resultadoTexto").innerText = textoDesencriptado;
}

function copiarTexto() {
    let resultadoTexto = document.getElementById("resultadoTexto");
    let textoACopiar = resultadoTexto.innerText;
    navigator.clipboard.writeText(textoACopiar).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        alert("Error al copiar el texto: ", err);
    });
}