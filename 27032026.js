// Criar Array

const fila = [1,2,3,4,5,6];

const filaStringAmigos = ["Kiara","Jennifer","Daniel","David"]

function lerAmigos(filaStringAmigos){
    console.log(`Você tem ${filaStringAmigos.lenght} amigos`)

    for(let i = 0; i < filaStringAmigos.lenght;i++){
        console.log(filaStringAmigos[i])
        if(filaStringAmigos[i] === "Daniel"){
            console.log(`Index do seu melhor amigo é $[i]`)
        }
    }
}
