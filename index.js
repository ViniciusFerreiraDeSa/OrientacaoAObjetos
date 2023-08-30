import User from "./User.js";
import Docentes from "./Docente.js";
import Admin from "./Admin.js";

// Usuarios
const newUser = new User("Vinicius", "vini@gmail.com", "20/01/2005");
console.log(newUser.exibirInfos());

// Admins
const newAdmin = new Admin("Wanessa" ,"nessa@gmail.com","30/03/2002");
console.log(newAdmin.exibirInfos());


// console.log(newAdmin.nome);
// newAdmin.nome = "";
// console.log(newAdmin.nome);

const newDocente = new Docentes("Rodrigo", "RDG@gmail.com" , "09/02/1999");
console.log(newDocente.exibirInfos());