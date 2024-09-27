class OrdenarNumeros{
    constructor(array) {
        this.array = array;
    }
    ordenarArr(){
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length - 1; j++) {
                if(this.array[j] < this.array[j +1]){
                    //Intercambiar elementos
                    let temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                }
                
            }
        }

        return this.array;
    }

}

const numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];
let ordenamiento = new OrdenarNumeros(numeros);
const numerosOrdenados = ordenamiento.ordenarArr();
console.log(numerosOrdenados);


