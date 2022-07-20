// Como podemos melhorar o esse código usando TS? 

/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro" 
} */

// Resposta:

enum work {
    Atriz,
    Padeiro
}

type people = {
    name: string,
    age: number,
    Job: work
}

let person1: people = {
    name: 'Luana',
    age: 51,
    Job: work.Atriz
};

let person2: people = {
    name: 'Joaquim',
    age: 19,
    Job: work.Padeiro
};

let person3: people = {
    name: 'Paola',
    age: 40,
    Job: work.Atriz
};

let person4: people = {
    name: "Sergio",
    age: 32,
    Job: work.Padeiro
}