let cachorros = [
    {
      nome: "Nick",
      raca: "SRD",
      peso: 15,
      idade: 3,
      cor: "Beje",
      porte: "Médio",
      sexo: "m",
      dono: "Bianca S .Pugliesi",
      alergias: ["Pulgas"],
      castrado: true,
      vacinas: [
        { nome: "Antirrábica", data: "10/11/2015" },
        { nome: "BC500", data: "10/12/2015" }
      ]
    },
    {
      nome: "Vintém",
      raca: "SRD",
      peso: 13,
      idade: 10,
      cor: "Dourado",
      porte: "Médio",
      sexo: "m",
      dono: "Sérgio Moura",
      alergias: [],
      castrado: false,
      vacinas: [{ nome: "Antirrábica", data: "12/01/2014" }]
    },
    {
      nome: "Loba",
      raca: "Husky Siberiano",
      peso: 30,
      idade: 7,
      cor: "Branco",
      porte: "Grande",
      sexo: "f",
      dono: "Dono da loba",
      alergias: [],
      castrado: false,
      vacinas: []
    }];
    let dadosNovos=JSON.stringify(cachorros)
    console.log(dadosNovos)

const contem = (agulha,palheiro) => palheiro.indexOf(agulha) >= 0;
 
    contem("oi","oi ok")
   // console.log("Array de Buscando Cachorros por nome")
 
 const buscaPorNome = (letras) => {
    let trueorfalse = cachorros.filter(
        (cachorro)=>{
           
         return contem(letras,cachorro.nome)
});
return trueorfalse;
}
console.log(buscaPorNome("ob"))



function informeCastrado(posicao) {
let cachorro = cachorros[posicao];
  console.log("Nome:"+  cachorro.nome);

  console.log("Castrado:" + (cachorro.castrado ? 'Sim' : 'Não'))
}

informeCastrado(2)

const buscaCastrados = () => {
    let filtrados = cachorros.filter(
        (cachorro) => {return cachorro.castrado;}
    )
return filtrados;
}
console.log(buscaCastrados())

let pets = require('./pets.json')
console.log(pets)


const darBanho = (pet) => {
    //adiciona dar banho ao pet.servicos
    pet.servicos.push({nome: "banho", data: new Date() })
    // imrpime: dando banho em Ataúlfo
    console.log("Dando banho em " + pet.nome)

    //dando banho em ${pet.nome}
//retorna pet
    return pet
}
console.log(darBanho(pets[1]))

const darVacinas = pet => {
    // testa se pet ja foi vacinado
    if (pet.vacinado){
           console.log( `${pet.nome} já foi vacinado`)
    }
    else {
        pet.servicos.push({nome: "vacina", data: new Date() })
        pet.vacinado = true
        console.log(`${pet.nome} está sendo vacinado`)
        return pet
    }
    }
    console.log(darVacinas(pets[2]))
    
    const tosar = pet => {
        pet.servicos.push({nome:"tosar", data: new Date() })
        console.log(`${pet.nome} está sendo tosado`   )
        return pet
    }

    console.log(tosar(pets[2]))

    const consulta = pet => {
        
            pet.servicos.push({nome:"consulta", data: new Date() })
            console.log(`${pet.nome} está em consulta`   )
            return pet
        }
    
        console.log(consulta(pets[2]))

        const mostrarServicos = pet => {
            let data = new Date();
            //percorrendo array de serviços
            for(let servico of pet.servicos){
                if(servico.data){
                    console.log(`${servico.nome}: ${servico.data.toLocaleDateString()}`)
                }
                else {
                    console.log(`${servico}: DATA INDEFINIDA`)
    
                }
            }
    
          
        }
    
       console.log(mostrarServicos(pets[2]))

       //let cao3 = pets[3]
       //darBanho(cao3)
        //darVacinas(cao3)
        //mostrarServicos(cao3)
        
        const aplicarServico = (pet, serv) => {
   return serv(pet)
        };
        let cao1 = pets[0]
    aplicarServico (cao1,tosar)
       
    //spreado operator é denotado por '...'
   
    let dono = {
        nome: "Lucas Pedroso",
        cpf: "025.232.333-09",
        telefone:"(11)99999-9999"
    }
     let pet2 = {
         nome:"Kaká",
         idade: 7,
         //se um dono então 
         dono: dono
         //se mais de um dono então donos: [dono1,dono2]
         //se colocar ...dono por os 2 terem o campo iguais (nome) um sobreescreve o outro ...dono copia os campos de dono para o pet
     }
     console.log(pet2)
  

    const aplicarServico2 = (pet,...servicos) => {
        for(const serv of servicos) {
            pet = serv(pet)
        }
        return pet;
    }
let cao3= pets[2]
    
    aplicarServico2(cao3,tosar,darBanho,darVacinas)
  

