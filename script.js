function processar(){
    let entrada = document.getElementById("entrada").value; // para capturar o valor dentro do elemento/TAG com o id "entrada" no documento HTML
    let resultado = document.getElementById("resultado") //para capturar o elemento/TAG  com id "resultado" no documento HTML   

    entrada= parseInt(entrada)

    if(!isNaN(entrada)){
        entrada -=1; // entrada = entrada -1    
        resultado.innerHTML = "O antecessor desse número é o " + entrada + "!"; // Substitui o conteúdo dentro do elemento capturado.

    }else{
        resultado.innerHTML= "<strong>Caractere inválido, digite um número.</strong>" 
    }
}    
