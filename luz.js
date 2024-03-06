window.onload = function() {
    mostrarData();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('celular').value = "";
    document.getElementById('opciones').value = "";
    document.getElementById('fecha').value = "";
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
        html += "<td>"+elemento.nombre+"</td>";
        html += "<td>"+elemento.apellido+"</td>";
        html += "<td>"+elemento.celular+"</td>";
        html += "<td>"+elemento.opciones+"</td>";
        html += "<td>"+elemento.fecha+"</td>";
        html += "<td>"+"<button class='btn btn-dark' onclick='editar(" + index + ")'>Editar</button>" +" "+
            "<button class='btn btn-danger' onclick='eliminar(" + index + ")'>Eliminar</button>" + "</td>";
        html += "</tr>";
    });
    document.getElementById('tablaInsumos').getElementsByTagName('tbody')[0].innerHTML = html;
}

function guardarInsumo() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;

    let celular = document.getElementById('celular').value;


    let opciones1 = document.getElementById('opciones');
    let opciones = opciones1.options[opciones1.selectedIndex].value;
    let fecha = document.getElementById('fecha').value;
    var listaInsumos;
    
    if (localStorage.getItem('listaInsumos') == null) {
        listaInsumos = [];
    } else {
        listaInsumos = JSON.parse(localStorage.getItem('listaInsumos'));
    }
    listaInsumos.push({
       nombre: nombre,
       apellido : apellido,
       celular: celular,
       opciones: opciones,
       fecha: fecha
        
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
    document.getElementById('nombre').value= listaInsumos[index].nombre;
    document.getElementById("apellido").value= listaInsumos[index].apellido;
    document.getElementById("celular").value= listaInsumos[index].celular;
    document.getElementById("opciones").value= listaInsumos[index].opciones;
    document.getElementById("fecha").value= listaInsumos[index].fecha;

    document.querySelector('#btnActualizar').onclick = function() {
        listaInsumos[index].nombre = document.getElementById('nombre').value;
        listaInsumos[index].apellido = document.getElementById('apellido').value;
        listaInsumos[index].celular = document.getElementById('celular').value;
        listaInsumos[index].opciones = document.getElementById('opciones').value;
        listaInsumos[index].fecha = document.getElementById('fecha').value;
        localStorage.setItem('listaInsumos', JSON.stringify(listaInsumos));
        mostrarData();
        document.getElementById('btnGuardar').style.display = 'block';
        document.getElementById('btnActualizar').style.display = 'none';
    }
}

