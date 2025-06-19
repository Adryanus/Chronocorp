let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const itemsDiv = document.getElementById('items');
    const totalDiv = document.getElementById('total');
    itemsDiv.innerHTML = '';

    let total = 0;
    carrito.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'carrito-item';
        div.innerHTML = `${item.nombre} - USD ${item.precio.toLocaleString()} 
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        itemsDiv.appendChild(div);
        total += item.precio;
    });

    totalDiv.textContent = `Total: USD ${total.toLocaleString()}`;
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}