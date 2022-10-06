const productos = [
    {
        id: 1,
        nombre: "prod1",
        precio:  100
    },
    {
        id: 2,
        nombre: "prod2",
        precio: 200
    },
    {
        id: 3,
        nombre: "prod3",
        precio: 300
    },
    {
        id: 4,
        nombre: "prod4",
        precio: 400
    },
    {
        id: 5,
        nombre: "prod5",
        precio: 500
    },
    {
        id: 6,
        nombre: "prod6",
        precio: 600
    }
]

function mostrar(){
    console.log(productos)
}

function agregar (id, nombre, precio){
    let nuevoid = Number(prompt ("ingrese un nuevo id de producto"));
    let nuevonombre = prompt ("ingrese el nombre del producto");
    let nuevoprecio = Number(prompt ("ingrese el precio"));
    productos.push({id: nuevoid, nombre: nuevonombre, precio: nuevoprecio});
    console.log(productos)
}

function eliminar (id){
    ideliminar = prompt ("ingrese el id del producto que desea eliminar")
    const index = productos.findIndex((producto) => producto.id == ideliminar );
    if (index > -1) {
        productos.splice(index, 1);
    }
    else{
        alert ("El id no es válido")
    }
    console.log(productos)
}

function modificar (id){
    idmodificar = prompt ("ingrese el id del producto que desea modificar")
    const index = productos.findIndex((producto) => producto.id == idmodificar );
    if (index > -1) {
        let nuevonombre = prompt ("ingrese el nuevo nombre")
        let nuevoprecio = Number(prompt ("ingrese el nuevo precio"))
        productos[index].nombre = nuevonombre ;
        productos[index].precio = nuevoprecio ;
    }
    else{
        alert ("El id no es válido")
    }
    console.log (productos);
}


function ejecutar() {
    const opcion = prompt(`Seleccione una de las siguientes opciones: 
    1. Mostrar todos los productos 
    2. Agregar un producto 
    3. Eliminar un producto 
    4. Modificar un producto`)

    if (opcion == 1) {
        mostrar();
    } else if (opcion == 2) {
        agregar ();
    } else if (opcion == 3) {
        eliminar ();
    } else if (opcion == 4) {
        modificar();
    } else{
        alert(opcion + " no es una opcion válida");
    }
    
}


ejecutar()