function converter() {

    var decimal = Number(vt_decimal.value)

    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)
    let binaria = decimal.toString(2)

    console.log(decimal)
    console.log(octal)
    console.log(hexadecimal)
    console.log(binaria)

    document.getElementById("vt_decimal").innerHTML = ` ${decimal}`
    document.getElementById("vt_octal").innerHTML = `<div style="margin-left: 40%"><b>Octal:</b> ${octal}</div>`
    document.getElementById("vt_hexadecimal").innerHTML = `<div style="margin-left: 40%"<b>Hexadecimal:</b> ${hexadecimal}`
    document.getElementById("vt_binario").innerHTML = `<div style="margin-left: 40%"><b>Binário:</b> ${binaria}`
    
}