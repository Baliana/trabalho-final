/***
 * Data: 22/11/2024
* Autor: Fenando Baliana 
* Versão: 1.0
***/

var cursos = require ('./cursos')
const cursoLista = cursos.cursos

var alunos = require ('./alunos')
const alunosListas = alunos.alunos 


//Recupera uma lista de todos os cursos
function getCursosLista(){
    let cursosLista = {cursos: cursoLista}

    return  cursosLista
}

//
function getAlunosListas(){
    let alunoListas = {alunos: alunosListas}
    
    return alunoListas
}

// Recupera informações de um aluno
 function getDadosAlunos(Matricula){
    let NumMatricula = Matricula
    let Matriculas = false 
    
    alunosListas.forEach(function(aluno){
        if(aluno.matricula = NumMatricula){
            Matriculas = aluno 
        }
    })
    return Matriculas
 }

 //Recupera uma lista de todos os alunos matriculados no curso especificado. DS ou REDES 
 function alunoCursos(nameCurso){
    let noCurso = nameCurso
    let nomes = {curso : noCurso, alunos : []}
     
    alunosListas.forEach(function(aluno){
        aluno.curso.forEach(function(cursoDoAluno){
            if(cursoDoAluno.sigla = noCurso){
                nomes.alunos.push(aluno)
            }
        })
    })
    return nomes
 }

 
 function alunoStatusDoCurso(alunoStatus){
    let AluStatus = alunoStatus
    let status = {status : AluStatus, alunos : []}

    alunosListas.forEach(function(aluno){
        if(aluno.status = AluStatus){
            status.alunos.push(aluno)
        }
    })
    return status
 }

function statusAlunodisciplina(alunoStatus,nomeCurso){
    let noCurso = nomeCurso
    let AluStatus = alunoStatus
    let status = {AluStatus, nome: noCurso, Alunos : []}

    alunosListas.forEach(function(aluno){
        let reAluno = aluno 
        let statusDisciplina = []

        reAluno.curso.forEach(function(cursoAluno){
            let curAluno = cursoAluno
            if(curAluno.sigla == noCurso){
                cursoAluno.disciplinas.forEach(function(curDisciplina){
                    if(curDisciplina.status == AluStatus){
                        statusDisciplina.push(curDisciplina)
                    }
                    cursoAluno.disciplinas = statusDisciplina
                })
                reAluno.curso = curAluno
                status.Alunos.push(reAluno)
                
            }
        })
    })
    return status
 }

 // Função: Recupera lista de alunos em um curso específico que concluíram em um ano específico
function statusAlunoAno(nomeCurso, anoLetivo) {
    let alunosEncontrados = alunosListas.filter(aluno =>
        aluno.curso.some(curso => curso.sigla === nomeCurso && curso.conclusao === anoLetivo)
    );

    return { curso: nomeCurso, ano: anoLetivo, alunos: alunosEncontrados };
}




//console.log(getCursosLista())
//console.log(getAlunosListas())
//console.log(getDadosAlunos('20151001001')) //TESTAR 
//console.log(alunoCursos('DS'))
//console.log(alunoStatusDoCurso('cursando'))
//console.log(statusAlunodisciplina('EXAME', 'DS')) 
//console.log(statusAlunoAno('DS', "2022"))

module.exports ={
    getCursosLista,
    getAlunosListas,
    getDadosAlunos,
    alunoCursos,
    alunoStatusDoCurso,
    statusAlunodisciplina,
    statusAlunoAno,
}
