import User from "./User.js";

export default class Docentes extends User{
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante}, passou no curso ${curso}.`;
    }
}

