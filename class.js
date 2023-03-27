class Funcionario {
    constructor(ra, nome, dataNascimento, salario) {
    this.ra = ra;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.salario = salario;
    }

    aumentarSalario(porcentagem) {
        this.salario = this.salario * ( 1 + porcentagem/100)
    }
}