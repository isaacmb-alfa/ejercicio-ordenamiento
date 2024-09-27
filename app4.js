class OrdenarPalabras {
    constructor(array) {
        this.array = array;
    }
    ordenarPorLongitud() {
        let n = this.array.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (this.array[j].length > this.array[j + 1].length) {

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

const palabras = ["que", "de", "no", "a", "la", "el", "es", "y", "en", "lo", "un", "por", "qué", "me", "una", "te", "los", "se", "con", "para", "mi", "está", "si", "bien", "pero", "yo", "eso", "las", "sí", "su", "tu", "aquí", "del", "al", "como", "le", "más", "esto", "ya", "todo", "esta", "vamos", "muy", "hay", "ahora", "algo", "estoy", "tengo", "nos", "tú", "nada", "cuando", "ha", "este", "sé", "estás", "así", "puedo", "cómo", "quiero", "sólo", "soy", "tiene", "gracias", "o", "él", "bueno", "fue", "ser", "hacer", "son", "todos", "era", "eres", "vez", "tienes", "creo", "ella", "he", "ese", "voy", "puede", "sabes", "hola", "sus", "porque", "dios", "quién", "nunca", "dónde", "quieres", "casa", "favor", "esa", "dos", "tan", "señor", "tiempo", "verdad", "estaba", "mejor", "están", "va", "hombre", "usted", "mucho", "hace", "entonces", "siento", "tenemos", "puedes", "ahí", "ti", "vida", "ver", "alguien", "sr", "hasta", "sin", "mí", "solo", "años", "sobre", "decir", "uno", "siempre", "oh", "ir", "cosas", "también", "antes", "has", "ni", "mis", "día", "estar", "estamos", "noche", "nadie", "otra", "quiere", "parece", "nosotros", "poco", "padre", "trabajo", "gente", "mira", "vas", "sea", "les", "donde", "mismo", "hecho", "ellos", "dijo", "pasa", "dinero", "hijo", "tal", "otro", "hablar", "seguro", "claro", "estas", "lugar", "mundo", "amigo", "espera", "mierda", "han", "tus", "sabe", "después", "momento", "desde", "fuera", "cosa", "tipo", "mañana", "podemos", "dije", "gran", "necesito"];
const ordenador = new OrdenarPalabras(palabras);
const palabrasOrdenadas = ordenador.ordenarPorLongitud();
console.log(palabrasOrdenadas);
