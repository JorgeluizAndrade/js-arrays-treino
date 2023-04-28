const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEmMedias = [alunos,medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEmMedias[0].includes(aluno)){
        // const alunos = listaDeAlunosEmMedias[0];
        // const medias = listaDeAlunosEmMedias[1];

        const [alunos,medias] = listaDeAlunosEmMedias;

        const indice = alunos.indexOf(aluno)
        
        const mediaDoAluno = medias[indice]

        console.log(`${aluno} tem a media ${mediaDoAluno}`)
    } else{
        console.log("aluno não encontrado")
    }
}

exibeNomeENota("Juliana")