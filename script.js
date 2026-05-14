const sonidoCampana = new Audio('https://www.soundjay.com/buttons/sounds/button-37.mp3');

function registrarVenta() {
    const cliente = document.getElementById('cliente').value;
    const monto = parseFloat(document.getElementById('monto').value);
    const porc = parseFloat(document.getElementById('porcentaje').value);

    if (cliente && !isNaN(monto)) {
        const gananciaVendedor = (monto * porc) / 100;
        const gananciaDuenio = monto - gananciaVendedor;

        const tabla = document.getElementById('listaVentas');
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${cliente}</td>
            <td>$${monto.toFixed(2)}</td>
            <td>${porc}%</td>
            <td style="color:#ff00ea">$${gananciaVendedor.toFixed(2)}</td>
            <td style="color:#00f2ff">$${gananciaDuenio.toFixed(2)}</td>
        `;

        tabla.appendChild(fila);
        sonidoCampana.play();

        // Limpiar campos para la siguiente venta
        document.getElementById('cliente').value = '';
        document.getElementById('monto').value = '';
    } else {
        alert("Por favor rellena el nombre y el monto.");
    }
}
