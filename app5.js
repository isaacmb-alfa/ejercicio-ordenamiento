class OrdenarCoordenadas {
    constructor(array) {
        this.array = array;
    }
    ordenarCoordenadas() {
        let n = this.array.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - 1; j++) {
                if ((this.array[j][0] + this.array[j][1]) > (this.array[j + 1][0] + this.array[j+1][1])) {
                    
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

const coordenadas = [[7, 3], [2, 2], [1, 0], [4, 3]];
const coor = new OrdenarCoordenadas(coordenadas);
const ordenarCoordenadas = coor.ordenarCoordenadas();
console.log(ordenarCoordenadas);
