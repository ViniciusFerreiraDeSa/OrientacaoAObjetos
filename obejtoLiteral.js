const objUser = {
    nome: "Vinicius",
    email: "vini@gmail.com",
    nascimento: "2023/01/01",
    role: "estudante",
    ativo: true, //bollean 
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const objAdmin = {
    nome: "Guilherme",
    email: "gui@gmail.com",
    role: "admin",
    criarCurso(){
        console.log("Curso criado");
    } 
}

Object.setPrototypeOf(objAdmin, objUser )

objAdmin.criarCurso();
objAdmin.exibirInfos();
