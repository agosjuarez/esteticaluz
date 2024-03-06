window.onload = function() {
    mostrarData();
}

function limpiarFormulario() {
    document.getElementById('producto').value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("opciones").value = "";
    document.getElementById("precio").value = "";
}

function mostrarData() {
    var listaInsumos;
    if (localStorage.getItem('listaInsumos') == null) {
        listaInsumos = [];
    } else {
        listaInsumos = JSON.parse(localStorage.getItem('listaInsumos'));
    }
    var html = ""; 
    listaInsumos.forEach(function (elemento, index) {
        html+="<tr>";
        html += "<td>"+elemento.producto+"</td>";
        html += "<td>"+elemento.cantidad+"</td>";
        html += "<td>"+elemento.marca+"</td>";
        html += "<td>"+elemento.precio+"</td>";
        html += "<td>"+"<button class='btn btn-dark' onclick='editar(" + index + ")'>Editar</button>" +" "+
            "<button class='btn btn-danger' onclick='eliminar(" + index + ")'>Eliminar</button>" + "</td>";
        html += "</tr>";
    });
    document.getElementById('tablaInsumos').getElementsByTagName('tbody')[0].innerHTML = html;
}

function guardarInsumo() {
    let producto = document.getElementById('producto').value;
    let cantidad = document.getElementById('cantidad').value;
    let precio = document.getElementById('precio').value;
    let marcaSelect = document.getElementById('opciones');
    let marca = marcaSelect.options[marcaSelect.selectedIndex].value;
    var listaInsumos;
    
    if (localStorage.getItem('listaInsumos') == null) {
        listaInsumos = [];
    } else {
        listaInsumos = JSON.parse(localStorage.getItem('listaInsumos'));
    }
    listaInsumos.push({
       producto: producto,
       cantidad: cantidad,
       marca: marca,
       precio: precio,
        
    });
    localStorage.setItem('listaInsumos', JSON.stringify(listaInsumos));
    mostrarData();
    limpiarFormulario();
}

function eliminar(index) {
    var listaInsumos;
    if (localStorage.getItem('listaInsumos') == null) {
        listaInsumos = [];
    } else {
        listaInsumos = JSON.parse(localStorage.getItem('listaInsumos'));
    }
    listaInsumos.splice(index, 1); 
    localStorage.setItem('listaInsumos', JSON.stringify(listaInsumos));
    mostrarData();
}

function editar(index){
    document.getElementById('btnGuardar').style.display = 'none';
    document.getElementById('btnActualizar').style.display= 'block';
    var listaInsumos;
    if (localStorage.getItem('listaInsumos') == null) {
        listaInsumos = [];
    } else {
        listaInsumos = JSON.parse(localStorage.getItem('listaInsumos'));
    }
    document.getElementById('producto').value= listaInsumos[index].producto;
    document.getElementById("cantidad").value= listaInsumos[index].cantidad;
    document.getElementById("opciones").value= listaInsumos[index].marca;
    document.getElementById("precio").value= listaInsumos[index].precio;

    document.querySelector('#btnActualizar').onclick = function() {
        listaInsumos[index].producto = document.getElementById('producto').value;
        listaInsumos[index].cantidad = document.getElementById('cantidad').value;
        listaInsumos[index].marca = document.getElementById('opciones').value;
        listaInsumos[index].precio = document.getElementById('precio').value;
        localStorage.setItem('listaInsumos', JSON.stringify(listaInsumos));
        mostrarData();
        document.getElementById('btnGuardar').style.display = 'block';
        document.getElementById('btnActualizar').style.display = 'none';
    }
}