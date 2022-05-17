const peça = "Rei" ;
let peçaLow = peça.toLocaleLowerCase();



switch (peçaLow) {
    case "peao":
       console.log('Os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas');
       break;
    case "bispo":
       console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça');
       break;
    case "torre":
       console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça');
       break;
    case "cavalo":
        console.log('O cavalo é a peça mais especial no xadrez, possuindo uma flexibilidade que o torna poderoso. O cavalo é a única peça do tabuleiro que pode pular sobre outras peças');
        break;
    case "rainha":
        console.log('A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente');
        break;
    case "rei":
        console.log('O rei é a peça mais importante do xadrez. Se o rei for encurralado de modo que sua captura seja inevitável, o jogo termina e o este jogador perde. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente');
        break; 
    default:
        console.log('Erro! Nome incorreto, peça não identificada');           
}   