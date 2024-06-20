const productos = {
    'A': { nombre: 'Producto A', precio: 270 },
    'B': { nombre: 'Producto B', precio: 340 },
    'C': { nombre: 'Producto C', precio: 390 }
};

const monedasAceptadas = [10, 50, 100];
let transacciones = [];
let numeroOperaciones = 0;

function comprar() {
    const nombreCliente = document.getElementById('nombre').value.trim();
    if (!nombreCliente) {
        alert('Ingrese su nombre.');
        return;
    }

    const productoElegido = document.getElementById('producto').value;
    const precioProducto = productos[productoElegido].precio;

    let montoIngresado = 0;

    function recibirMoneda() {
        const montoInput = parseInt(prompt(`Ingrese una moneda (${monedasAceptadas.join(', ')}):`), 10);
        if (isNaN(montoInput) || !monedasAceptadas.includes(montoInput)) {
            alert('Moneda no válida. Las monedas aceptadas son: ' + monedasAceptadas.join(', '));
            recibirMoneda();
            return;
        }
        montoIngresado += montoInput;
        if (montoIngresado < precioProducto) {
            recibirMoneda();
        } else {
            calcularCambio();
        }
    }

    function calcularCambio() {
        const cambio = montoIngresado - precioProducto;
        alert(`Pago recibido. Su cambio es $${cambio}.`);

        transacciones.push({
            cliente: nombreCliente,
            producto: productos[productoElegido].nombre,
            montoPagado: precioProducto,
            cambio: cambio
        });
        numeroOperaciones++;

       
        const resumen = `Resumen de la compra:\n\nCliente: ${nombreCliente}\nProducto: ${productos[productoElegido].nombre}\nMonto pagado: $${precioProducto}\nCambio: $${cambio}`;
        alert(resumen);

        const continuar = confirm('¿Desea realizar otra compra?');
        if (continuar) {
            comprar();
        } else {
            // Mostrar resumen final
            const resumenFinal = `Resumen Final:\n\nNúmero de operaciones realizadas: ${numeroOperaciones}`;
            alert(resumenFinal);
        }
    }

    recibirMoneda();
}