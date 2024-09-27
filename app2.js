class OrdenandoCaracteres {
    constructor(array) {
        this.array = array;
    }
    ordenarPorAscci() {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length - 1; j++) {

                let a = this.array[j].charCodeAt(0);
                console.log(a, this.array[j]);

                let b = this.array[j + 1].charCodeAt(0);
                console.log(b, this.array[j + 1]);

                if (a > b) {
                    console.log('entro');

                    // Intercambiar elementos
                    let temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;

                }

            }

        }
        return this.array;
    }
}

const caracteres = ['b', 'h', 'w', 'e', 'a'];
const ordenador = new OrdenandoCaracteres(caracteres);
const caracteresOrdenados = ordenador.ordenarPorAscci();
console.log(caracteresOrdenados);
