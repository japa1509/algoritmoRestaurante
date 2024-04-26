const usuario = {
    nombre:'jesus',
    edad:23,
    deuda:0
}

let pedido =[];
let costoPedido = 0 ;

const mostrarMenu = () => {
    console.log('CODIGO - PRODUCTO - COSTO');
    // productos.map(producto =>console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}`))
    for (let producto of productos){
        console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}`)
    }

}

const pedirProducto = cod => {
    if (!cod) return 'Ingrese un codigo valido'

    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    if (!productoEncontrado) return 'El producto no existe, ingrese un codigo valido'

    pedido.push(productoEncontrado)
    console.log('Su pedido a sido agregado exitosamente. Su oorden es:')
    return verPedido()
}

const verPedido =()=> pedido

const calcularCosto = () => {

    let costo =0
    for(producto of pedido){
        costo += producto.costo
    }
    costoPedido = costo
    return costoPedido
}

const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `${usuario.nombre}, el total de su pedido son ${usuario.deuda} dolares`

}

const pagarPedido = montoEntregado => {
    if (typeof montoEntregado === "number"){
        if (montoEntregado < usuario.deuda) {
            return `No te alcanza para pagar tu pedido.`
        }else if (montoEntregado === usuario.deuda){
            ventasRealizadas += usuario.deuda
            usuario.deuda = 0
            return`Su pedido a sido cancelado`
        }else{
            console.log(`Tu pedido a sido cancelado y tu cambio es ${montoEntregado-usuario.deuda}.`)
            ventasRealizadas += usuario.deuda
            return `tu deuda es ${usuario.deuda = 0}`
        }
    }else{
        console.error("Error ingrese un valor valido")
    }

}

let ventasRealizadas = 0;
 const verVentasRealizadas = () => `monto ventas total realizadas ${ventasRealizadas}`

