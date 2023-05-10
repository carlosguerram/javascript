var x = new Date()
var agora = x.getHours()
console.log(`agora são ${agora} horas.`)
if (agora < 12){
    console.log('bom dia')
} else if (agora <= 18 ){
    console.log('boa tarde')
} else {
    console.log('boa noite')
}