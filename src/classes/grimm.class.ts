
function imprimirConsola( constructorClase: Function ) {
    console.log( constructorClase );
}

@imprimirConsola
export class Grimm {
    constructor(
        public nombre:string,
        public estado:string,
    ) {}

    imprimir(){
        console.log(`${this.nombre} - ${this.estado}`);
    }
}



