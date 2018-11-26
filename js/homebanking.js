//Declaración de variables

var nombreUsuario = "Fernando Diaz";
var saldoCuenta = 5000;
var limiteExtraccion = 2000;

var servAgua = 350;
var servTel = 425;
var servLuz = 210;
var servInternet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var password = 1234;

var noContenido = undefined;
var varVacio = "";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

iniciarSesion();
//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var stringLimite = prompt('Ingrese el nuevo limite de extraccion');
    if (stringLimite == varVacio) {
        alert("No ingresaste ningun valor.")
        return;
    }
    nuevoLimite = parseInt(stringLimite);
    
    if (isNaN(nuevoLimite)){
        return;
    }
    alert("Tu nuevo limite de extraccion es: $" + nuevoLimite)
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();

}

function extraerDinero() {
    var stringResta = prompt('Ingrese la cantidad de dinero que desea extraer');
    cantidadResta = parseInt(stringResta);
    
    if (isNaN(cantidadResta)){

        return;
    }
    // Limite de extraccion
    if (cantidadResta > saldoCuenta) {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.")
    } else if (cantidadResta > limiteExtraccion) {
        alert("La cantidad de dinero que desea extraer es mayor a tu limite de extraccion.")
    } else if (cantidadResta % 100 !== 0) {
        alert('Solo puedes extraer billetes de 100');
    } else {
        saldoAnterior = saldoCuenta;

        saldoCuenta = saldoCuenta - cantidadResta;

        actualizarSaldoEnPantalla()
        alert("Has extraido: " + cantidadResta + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);

    }
}



function depositarDinero() {
    var stringSuma = prompt("Ingrese la cantidad  de dinero que desea depositar");

    if (stringSuma == varVacio) {
        alert("No ingresaste ningun valor.")
        return;
    }
    cantidadSuma = parseInt(stringSuma);
    if (isNaN(cantidadSuma)){
        return;
    }

    saldoAnterior = saldoCuenta;

    saldoCuenta = saldoCuenta + cantidadSuma;

    actualizarSaldoEnPantalla();
    alert("Has depositado: " + cantidadSuma + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);

}

function pagarServicio() {
    //pago de servicios
    var servicios = prompt("Ingrese el numero que corresponda con el servicio que queres pagar \n 1-Agua \n 2-Luz \n 3-Internet \n 4-Telefono");

    switch (servicios) {
        case "1":
            if (servAgua > saldoCuenta) {
                alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");

            } else {
                saldoAnterior = saldoCuenta;
                saldoCuenta = saldoCuenta - servAgua;
                alert("Haz pagado el servicio de Agua.\n Saldo Anterior: " + saldoAnterior + "\n Dinero descontado: " + servAgua + "\n Saldo actual:" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            break;

        case "2":
            if (servLuz > saldoCuenta) {
                alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
            } else {
                saldoAnterior = saldoCuenta;
                saldoCuenta = saldoCuenta - servLuz;
                alert("Haz pagado el servicio de Luz.\n Saldo Anterior: " + saldoAnterior + "\n Dinero descontado: " + servLuz + "\n Saldo actual:" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            break;

        case "3":
            if (servInternet > saldoCuenta) {
                alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
            } else {
                saldoAnterior = saldoCuenta;
                saldoCuenta = saldoCuenta - servInternet;
                alert("Haz pagado el servicio de Internet.\n Saldo Anterior: " + saldoAnterior + "\n Dinero descontado: " + servInternet + "\n Saldo actual:" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            break;

        case "4":
            if (servTel > saldoCuenta) {
                alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
            } else {
                saldoAnterior = saldoCuenta;
                saldoCuenta = saldoCuenta - servTel;
                alert("Haz pagado el servicio de Telefono.\n Saldo Anterior: " + saldoAnterior + "\n Dinero descontado: " + servTel + "\n Saldo actual:" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            break;

        default:
            alert("No existe el servicio que se ha seleccionado.");
    }
}

function transferirDinero() {
    var montoString = prompt("Ingrese el monto que desea transferir.");
    montoTrans = parseInt(montoString);
    if (isNaN(montoTrans)){
        return;
    }

    if (montoTrans > saldoCuenta) {
        alert("No puede transferir esa cantidad de dinero.");
    } else {
        var validarString = prompt("Ingrese el numero de cuenta al que desea transferir el dinero.");
        validarCuenta = parseInt(validarString);

        if (validarCuenta == cuentaAmiga1 || validarCuenta == cuentaAmiga2) {
            saldoCuenta = saldoCuenta - montoTrans;
            alert("Se han transferido: " + montoTrans + "\n Cuenta destino: " + validarCuenta);
            actualizarSaldoEnPantalla();
        } else {
            alert("Solo puede transferirse dinero a una cuenta amiga.");
        }


    }

}

function iniciarSesion() {

    var pwIngresado = prompt("Ingrese el codigo de su cuenta.");

    if (pwIngresado == password) {
        alert("Bienvenido/a Fernando Díaz ya puedes comenzar a realizar operaciones.");
    } else {
        alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }


}



//Operaciones de suma y resta del saldo

function sumaSaldo(cantidadSuma) {
    saldoCuenta = saldoCuenta + cantidadSuma;
}

function restaSaldo(cantidadResta) {
    saldoCuenta = saldoCuenta - cantidadResta;
}





//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}