



const data = [
    {nome:"Tiago", idade:19, sexo:"masculino",gmail:"tiagomeng2@gmail.com"},
    {nome:"Camila", idade:20, sexo:"feminino",gmail:"camilasanto@gmail.com"},
    {nome:"Guilherme", idade:19, sexo:"masculino",gmail:"guilhermegomes@gmail.com"},
]

//find

const user = data.find((user4) => {
   return user4.idade == 19 && user4.nome == "Guilherme"
})


//Filter
const users = data.filter((user3) =>{
   return user3.idade == 19;
})

console.log(user3)
console.log(users)

//Find index
const Indexuser = data.findIndex((user2) =>{
   return user2.nome === "Camila"
})

console.log(Indexuser);

//map
const usermap = data.map((user1, index) =>{
  if (userq.idade <= 19){
    user1.idade +=1;
  }
  return{
    nome: user1.nome,
    idade: user1.idade,
    
  }
})

console.log(usermap);

console.log(data.reverse())

//Some

const usersome = data.some((user5) =>  {
  return user5.idade == 21;
})

console.log(usersome);

const data1 = [1,2,3,4,5,6,7,8,9,10]

const pares = data1.filter ((par) => {
  return par%2 == 0;
})

console.log(pares)

data.forEach((item,index,array) => {
    console.log(item)
    console.log(index)
})

for (datan in data1){
  console.log(datan)
}

for (datan of data1){
  console.log(datan)
}
console.log("Olá Node.js")


//PROMISE

let d = new Promise((resolve, reject) =>{
  let a = 1+1
  if (a==2){
     resolve('Sucess')
   } else{
   reject('Failed')
   }
})

d.then((message) => {
  console.log('This is in the then ' + message)
}).catch((err) => {
  console.log('This is the catch ' + err)
})


//SetTimeout

setTimeout( ()=> {
    
fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data =>{
    console.log(data)
})
.catch(error =>{
    console.error("Erro na aquisição" + error)
})

}, 2000)