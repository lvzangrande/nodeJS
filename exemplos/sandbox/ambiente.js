const obrigatorias = ['NOME_ALUNO','TURMA']

const ausentes = obrigatorias.filter((nome)=>!process.env[nome] ?.trim());

process.exitCode = 1;

if (ausentes.length){
    console.error(`Configure: ${ausentes.join(',')}`)
} else {
    console.log({estudante: process.env.NOME_ALUNO,turma:process.env.TURMA})
}