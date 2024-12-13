export const validacaoFormularioUsuario = (email, senha) =>{
    let erros = [];

    if(!email ){
        erros.push("E-mail inválido");
    }

    if(!senha){
        erros.push("Senha inválida");
    }

    return erros;


}