let heroName = getFirstName("Luis José Paulo")
let wins = saldoRankear(123,10)

if(wins <= 10){
    console.log("O Herói " + heroName + " tem de saldo de " + wins + ". E está no nível de Ferro")
    
}else if(wins>=11 && wins<=20){
    console.log("O Herói " + heroName + " tem de saldo de " + wins + ". E está no nível de Bronze")
    
}else if(wins>=21 && wins<=50){
    console.log("O Herói " + heroName + " tem de saldo de " + wins + ". E está no nível de Prata")
    
}else if(wins>=51 && wins<=80){
    console.log("O Herói " + heroName + " tem de saldo de " + wins + ". E está no nível de Ouro")
    
}else if(wins>=81 && wins<=90){
    console.log("O Herói " + heroName + " tem de saldo de " + wins + ". E está no nível de Platina")
    
}else if(wins>=91 && wins<=100){
    console.log("O Herói " + heroName + " tem de saldo de " + wins + ". E está no nível de Lendário")
    
}else{
    console.log("O Herói " + heroName + " tem de saldo de " + wins + ". E está no nível de Imortal")
    }

function getFirstName(name){
	let firstName = name.split(" ")[0]
    return firstName
}

function saldoRankear(vitorias,derrotas){
    let result = vitorias - derrotas
    return result
}