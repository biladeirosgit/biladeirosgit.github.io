// Dados dos jogadores
var player1 = { Nome: "Os Fora da LEI"           , Pt: 13   , J: 7 ,  V: 5  , D : 2, GM : 23, GS: 18 };
var player2 = { Nome: "Marra e Quilha"           , Pt: 10   , J: 6 ,  V: 4  , D : 1, GM : 18, GS: 15 };
var player3 = { Nome: "Vale Tudo"                , Pt: 8    , J: 3 ,  V: 1  , D : 2, GM : 8 , GS: 11 };
var player4 = { Nome: "Os Marrecos dos Matrecos" , Pt: 6    , J: 3 ,  V: 1  , D : 2, GM : 9 , GS: 11 };
var player5 = { Nome: "Duo Lipa"                 , Pt: 5    , J: 3 ,  V: 1  , D : 2, GM : 10, GS: 10 };
var player6 = { Nome: "Borussia Doutro Mundo"    , Pt: 5    , J: 2 ,  V: 0  , D : 2, GM : 5 , GS: 8 };

var players = [player1, player2, player3, player4, player5, player6];

// Função para criar a tabela
function criarTabela(players, sortBy, secondSortBy) {
    var tabela = document.getElementById("rankingBody");

    // Limpar tabela existente
    tabela.innerHTML = "";

    // Ordenar os jogadores
    players.sort(function(a, b) {
        if (a[sortBy] === b[sortBy]) {
            // Em caso de empate, ordenar pelo segundo critério
            return a[secondSortBy] - b[secondSortBy];
        }
        return b[sortBy] - a[sortBy];
    });

    // Cabeçalho da tabela
    var headerRow = tabela.insertRow();
    var posicaoHeader = document.createElement("th");
    posicaoHeader.textContent = "#";
    headerRow.appendChild(posicaoHeader);
    Object.keys(players[0]).forEach(function(prop) {
        var th = document.createElement("th");
        th.textContent = prop.replace(/_/g, ' ');
        headerRow.appendChild(th);
    });

    // Preencher a tabela com os jogadores ordenados
    players.forEach(function(player, index) {
        var row = tabela.insertRow();
        var cellPosicao = row.insertCell();
        cellPosicao.textContent = index + 1 + "º"; // Posição do jogador
        
        Object.keys(player).forEach(function(prop) {
            var cell = row.insertCell();
            cell.textContent = player[prop];
        });
    });
}


// Criar tabela inicialmente
criarTabela(players, 'Pt', 'V');
