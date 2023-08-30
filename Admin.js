import User from "./User.js";
// Subclasses de USERS com a função exibiInfos.
        // herda/extende da classe User
export default class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        // Super classe "User" saõ propriedades a baixo
        super(nome, email, nascimento, role, ativo);
    }
    exibirInfos(){
        return `${this.email}, ${this.role}`
    }
    criarCurso(nomeCurso, vagas){
        return `Curso de ${nomeCurso}, com ${vagas} vagas.`;
    }
}
