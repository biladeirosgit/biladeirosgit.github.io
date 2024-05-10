// Dados dos jogadores
var player1 = { "#" : "1º" ,Nome: "Os Fora da LEI"           , "Membros" : "Wisdow & Mestre Gui", Pt: "+13"   , J: 7 ,  V: 5  , D : 2, GM : 23, GS: 18 };
var player2 = { "#" : "2º" ,Nome: "Marra e Quilha"           , "Membros" : "Xadas & Bárbara"    , Pt: "+10"   , J: 6 ,  V: 4  , D : 1, GM : 18, GS: 15 };
var player3 = { "#" : "3º" ,Nome: "Vale Tudo"                , "Membros" : "Simão & Camilo"     , Pt: "+8"    , J: 3 ,  V: 1  , D : 2, GM : 8 , GS: 11 };
var player4 = { "#" : "4º" ,Nome: "Os Marrecos dos Matrecos" , "Membros" : "Cludos & Braz"      , Pt: "+6"    , J: 3 ,  V: 1  , D : 2, GM : 9 , GS: 11 };
var player5 = { "#" : "5º" ,Nome: "Duo Lipa"                 , "Membros" : "Geremias & Esquilo" , Pt: "+5"    , J: 3 ,  V: 1  , D : 2, GM : 10, GS: 10 };
var player6 = { "#" : "6º" ,Nome: "Borussia Doutro Mundo"    , "Membros" : "Squnha & Rodry"     , Pt: "+5"    , J: 2 ,  V: 0  , D : 2, GM : 5 , GS: 8  };

var players = [player1, player2, player3, player4, player5, player6];

// Função para criar a tabela
function criarTabela(players, sortBy) {
    var tabela = document.getElementById("rankingBody");

    // Limpar tabela existente
    tabela.innerHTML = "";

    // Ordenar os jogadores
    players.sort(function(a, b) {
        return b[sortBy] - a[sortBy];
    });

    // Cabeçalho da tabela
    var headerRow = tabela.insertRow();
    Object.keys(players[0]).forEach(function(prop) {
        var th = document.createElement("th");
        th.textContent = prop.replace(/_/g, ' ');
        headerRow.appendChild(th);
    });

    // Preencher a tabela com os jogadores ordenados
    players.forEach(function(player, index) {
        var row = tabela.insertRow();
        
        Object.keys(player).forEach(function(prop) {
            var cell = row.insertCell();
            cell.textContent = player[prop];
        });
    });
}


// Criar tabela inicialmente
criarTabela(players, '#');
