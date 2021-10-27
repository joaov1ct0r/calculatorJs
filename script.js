const visor = document.getElementById("visor");

function calcular(tipo, valor) {
    if (tipo === "acao") {
        if (valor === "c") {
            visor.value = "";
        } else if (
            valor === "+" ||
            valor === "-" ||
            valor === "*" ||
            valor === "/" ||
            valor === "."
        ) {
            if (visor.value != "") {
                visor.value += valor;
            }
        } else if (valor === "=") {
            let resultado = eval(visor.value);
            visor.value = resultado;
        }
    } else if (tipo === "numero") {
        visor.value += valor;
    }
}
