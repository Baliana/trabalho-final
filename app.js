const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

const functiocoes = require('./module/functions')



app.use((request, response, next) =>{

    // de onde vai vim a requesição
    response.header('Acces-Control-Allow-Origin', '*')
    // Permissão de aceso para liberar os verbos da requisição da API
    response.header('Acces-Control-Allow-Methods', 'GET')

    //ativando as configurações no cors
    app.use(cors()) 

    next()
})


app.get('/v1/lion-school/cursos', cors(), async function(request, response) {
    let cursosLista = functiocoes.getCursosLista();

    if (cursosLista) {
        response.status(200);
        response.json(cursosLista);
    } else {
        response.status(404);
        response.json({'status': 404, 'message': "Not found"});
    }
});



app.get('/v1/lion-school/alunos', cors(), async function(request, response) {
   
    let NumMatricula = functiocoes.getAlunosListas();

    
    if(NumMatricula){
        response.status(200);
        response.json(NumMatricula); 
    } else {
        response.status(404);
        response.json({'status': 404, 'message': "Not found"}); 
    }
});


app.get('/v1/lion-school/alunos/:matricula', cors(), async function(request, response) {

    let uf = request.params.matricula; 

    let Matriculas = functiocoes.getDadosAlunos(uf);

    if(Matriculas){
        response.status(200);
        response.json(Matriculas);
    } else{
        response.status(404);
        response.json({'status': 404, 'message': "Not found"}); 
    }

}); 

app.get('/v1/lion-school/alunos/cursos/:matriculados', cors(), async function(request, response) {

    let uf = request.params.matriculados;

    let matriculados = functiocoes.alunoCursos(uf);

    if(matriculados){
        response.status(200);
        response.json(matriculados);
    } else{
        response.status(404);
        response.json({'status': 404, 'message': "Not found"}); 
    }
});


app.get('/v1/lion-school/alunos/filtro', cors(), async function(request, response) {

    let AluStatuscur = request.query.alunoStatus
    let statusAludis = request.query.statusdisciplina
    let statusAluAno = request.query.statusAno
    let alunoCursos = request.query.alunoCursos

    if(AluStatuscur){
        response.status(200);
        response.json(AluStatuscur);
   
    }else if (statusAludis != '' && alunoCursos != ''){
    let statusAludis = request.query.statusAludis(staDisciplna, alunoCursos)

    if(statusAludis){
        response.status(200);
        response.json(AluStatuscur);
   
    }else if(statusAluAno != '' && alunoCursos != ''){
        let statusAluAno = request.query.statusAluAno(staAluno, alunoCursos)

        if(statusAluAno){
            response.status(200);
            response.json(AluStatuscur);
        }
    }
    
    } else{
        response.status(404);
        response.json({'status': 404, 'message': "Not found"}); 
    }
});

//para a função ouvir (aguardar requirições)
app.listen('8080', function(){
    console.log('API agauardando requisições...')
})
