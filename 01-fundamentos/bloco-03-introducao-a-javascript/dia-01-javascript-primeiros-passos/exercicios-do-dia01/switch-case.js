let peça = 'CavAalo'

switch (peça.toLowerCase()) {
    case 'peao':
    console.log('movimento: horizontalmente, para frente e uma casa por vez (exceto o primeiro movimento do peão que pode ser realizado pulando duas casas horizontalmente) e captura outras peças apenas na diagonal a ela.');
    break

    case 'cavalo':
    console.log('movimento: duas horizontais e uma vertical (ou duas verticais e uma horizontal) formando um L');
    break
    
    case 'bispo':
    console.log('movimento: diagonais, sem limite de casas.');
    break

    case 'torre':
        console.log('movimento:  vertical e horizontal, sem limite de casas.');
        break
        
    case 'rainha':
        console.log('movimento: verticais, horizontais e diagonais, sem limite de casas.');
        break
    case 'rei':
       console.log('movimento:  verticais, horizontais e diagonais, limite de uma casa por vez.');
       break
       
       default:
        console.log('Use apenas peças de Xadrez e em pt-br!(Rei, Rainha, Bispo, Torre, Cavalo e Peao)');
}
