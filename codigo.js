const productoA = []
class Producto {
    constructor(nombre, categoria, precio, stock, img) {
        this.nombre = nombre;
        this.categorio = categoria;
        this.precio = precio;
        this.stock = stock;
        this.img = img;

    }

};

productoA.push(new Producto("Walt-Can Adulto", "Alimento Balanceado", 1000, 0, "./images/waltcanadulto.jpg"))
productoA.push(new Producto("Walt-Can Cachorro", "Alimento Balanceado", 1000, 0, "./images/waltcancachorro.png "))
productoA.push(new Producto("Jaspe Adulto", "Alimento Balanceado", 1000, 0, "./images/jaspeadulto.png"))
productoA.push(new Producto("Jaspe Cachorro", "Alimento Balanceado", 1000, 0, "./images/jaspecachorro.jpg"))
productoA.push(new Producto("Dog-Chow Adulto", "Alimento Balanceado", 1000, 0, "./images/dogchowadulto.png "))
productoA.push(new Producto("Dog-Chow Cachorro", "Alimento Balanceado", 1000, 0, "./images/dogchowcachorro.png"))
productoA.push(new Producto("Dogui", "Alimento Balanceado", 1000, 0, "./images/dogui.png "))
productoA.push(new Producto("Econocan", "Alimento Balanceado", 1000, 0, "./images/econocan.png"))
productoA.push(new Producto("Pedigree Adulto", "Alimento Balanceado", 1000, 0, "./images/pedigreeadulto.png "))
productoA.push(new Producto("Sabrositos Cachorro", "Alimento Balanceado", 1000, 0, "./images/sabrositoscachorr.png"))
productoA.push(new Producto("Sabrositos Adulto", "Alimento Balanceado", 1000, 0, "./images/sabrositosadulto.png "))

const card = document.getElementById("cardDinamica");
const productoL = document.createElement("div");

for (let array of productoA) {
    productoL.innerHTML += `<div class="row">
       <div class="item shadow mb-4 col-sm-4">
            <img class="imgArray" src="${array.img}" >
            <h3> ${ array.nombre } </h3>
            <p>$${array.precio}</p>
            <button class="btn btn-warning rounded-pill text-secondary" >Agregar al carrito</button>
             </div>
        </div>`
}
card.appendChild(productoL);

let fondoMenu = document.getElementById("menu");
fondoMenu.style.background = "black";
fondoMenu.style.color = "gray";
console.log(fondoMenu.innerHTML);

let textoBotonUno = document.getElementById("botonUno");
console.log(textoBotonUno.innerHTML);
textoBotonUno.innerHTML = "Inicio";

let textoBotonDos = document.getElementById("botonDos");
console.log(textoBotonDos.innerHTML);
textoBotonDos.innerHTML = "Tienda";