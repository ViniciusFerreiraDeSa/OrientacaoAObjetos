// Trabalhando com classes

// function User (nome, email){
//     this.nome = nome; // this são as propiedades, e o nome é o parâmetro da propriedade 
//     this.email = email;
    
//     this.exibirInfos = function(){
//         return `${this.nome}, ${this.email}`;
//     }
// }

// const newUser = new User("Vinicius", "vini@gmail.com");
// console.log(newUser.exibirInfos());

// function Admin (role){
//     // Para receber tudo que tem em USER método Call
//             // THIS se refere a User, essas duas são propriedades 
//     User.call(this, "Vinicius", "vini@gmail.com");
//     this.role = role || "estudante" 
// }

// // Passamos para dentro do protótipo Admin as propriedades de protótipo de Users 
// Admin.prototype = Object.create(User.prototype);
// const newUser = new Admin("admin");

// console.log(newUser.exibirInfos());
// console.log(newUser.role);

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function (){
        return `${this.nome}, ${this.email}`    
    }
}

const newUser = Object.create(user);
newUser.init("Vinicius", "vini@gmail.com");
console.log(newUser.exibirInfos());
// console.log(user.isPrototypeOf(newUser));