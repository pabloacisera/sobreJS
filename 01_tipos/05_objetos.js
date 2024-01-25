console.log("CREANDO OBJETOS- SINTAXIS: LLAVE-VALOR");

const nombre= "pablo";
const apellido= "cisera";
const edad= 37;
const domicilio= "calle 57 nº 2034";
let hobbie= "futbol";

const nuevoUsuario={
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    domicilio: domicilio,
    hobbie: hobbie,
}

console.log(nuevoUsuario);

/**existe dos formas de acceder a los datos guardados en un objeto, con parentesis y con corchetes(en la notacion por corchetes siempre se debe utilizar comillas para definir a la propiedad a la que queremos acceder) */
console.log(nuevoUsuario.nombre);
console.log(nuevoUsuario['apellido']);

console.log('El usuario incoporado es: '+ nuevoUsuario.nombre + " " + nuevoUsuario.apellido + ', tiene una edad de '+ nuevoUsuario.edad + ' años, y vive en ' + " " + nuevoUsuario.domicilio)

/**si queremos cambiar alguno de los elementos primero debemos asegurarnos de que no se trate de una constante */

nuevoUsuario.hobbie= "ajedrez";
console.log(nuevoUsuario.hobbie);

/**por ultimo podemos eliminar propiedades y sus valores */

delete nuevoUsuario['domicilio'];
console.log(nuevoUsuario);