//Trabalhando com classes
// # para todas as propriedades privadas

export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
     // declaramos a propriedade privada
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;

    }
    
    // só conseguimos ler essa informação
    get nome(){
        if(this.#nome === ''){
            throw new Error("Campo não preenchido!");
        }else{
            return this.#nome
        }
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }
    // Set aceita um unico parâmetro
    set nome(novoNome){
        if(novoNome === ""){
            throw new Error("Inválido");
        }
        this.#nome = novoNome
    }
    // Comportamentos através de métodos
    // Sintaxe de função só precisamos do nome do método    
    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.#role}` ;
    }
} 

// Estanciando o Objeto

// const newUser = new User("Vinicius", "vini@gmail.com", "20/01/2005");
// console.log(newUser);
// console.log(newUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(newUser));    // true

