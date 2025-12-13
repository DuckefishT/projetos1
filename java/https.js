if (self.fetch){
    console.log("Tem suporte"); 
  (async () =>{
    //const json1 = await obterPost(1)  
    //const json = await incluirPost({
       // userId: 1,
        //title: 'Meu Post',
        //body: 'Meu conteudo'
    //});

      const json = await atualizarPost({
        userId: 1,
        title: 'Meu Post',
        body: 'Meu conteudo'
    },1);

    console.log(json)
  })(); 

} else{
    console.log("Não tem suporte");
    
}

async function respostajson(resposta) {
     if(!resposta.ok){
        throw new Error(
            `${resposta.status} - ${resposta.statusText}`
        );
     }
    const json = await resposta.json();
    return json;
}



async function obterPost(id) {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   return  respostajson(resposta)
}

async function incluirPost(data) {
    const resposta =
    await fetch('https://jsonplaceholder.typicode.com/posts/', {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
         'Content-type': 'application/json;charset=UTF-8'
       }   
     });
    return respostajson(resposta)
}

async function atualizarPost(data, id) { const resposta =
    await fetch('https://jsonplaceholder.typicode.com/posts/' +1, {
       method: 'PUT',
       body: JSON.stringify(data),
       headers: {
         'Content-type': 'application/json;charset=UTF-8'

       }   
     });
    return respostajson(resposta)
   
}

async function atualizarPostunico(data, id) { const resposta =
    await fetch('https://jsonplaceholder.typicode.com/posts/' +1, {
       method: 'PATCH',
       body: JSON.stringify(data),
       headers: {
         'Content-type': 'application/json;charset=UTF-8'

       }   
     });
    return respostajson(resposta)
   
}

async function deletarPost(id) { const resposta =
    await fetch('https://jsonplaceholder.typicode.com/posts/' +id, {
       method: 'DELETE',
       body: JSON.stringify(data),
       headers: {
         'Content-type': 'application/json;charset=UTF-8'

       }   
     });
    return respostajson(resposta)
   
}