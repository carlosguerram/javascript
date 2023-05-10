var idade = 16
console.log(`você têm ${idade} anos`)
if ( idade < 16){
    console.log('não vota')
} else if (idade <18 || idade > 65){
    console.log('voto opcional')
} else {
    console.log ('voto obrigatório')
}