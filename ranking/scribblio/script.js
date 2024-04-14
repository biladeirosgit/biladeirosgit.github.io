// Dados dos jogadores
var player1  = { "#" : "1º"  , "Nome" : "Squnha"     , "Pt" : "+13", "Ps" : 32545};
var player2  = { "#" : "2º"  , "Nome" : "Braz"       , "Pt" : "+10", "Ps" : 32025};
var player3  = { "#" : "3º"  , "Nome" : "Mestre Gui" , "Pt" : "+8", "Ps" : 30705};
var player4  = { "#" : "4º"  , "Nome" : "Frazão"     , "Pt" : "+6", "Ps" : 29095};
var player5  = { "#" : "5º"  , "Nome" : "Geremias"   , "Pt" : "+5", "Ps" : 28410};
var player6  = { "#" : "6º"  , "Nome" : "Lemos"      , "Pt" : "+5", "Ps" : 27115};
var player7  = { "#" : "7º"  , "Nome" : "Cludos"     , "Pt" : "+4", "Ps" : 26295};
var player8  = { "#" : "8º"  , "Nome" : "Xadas"      , "Pt" : "+4", "Ps" : 25635};
var player9  = { "#" : "9º"  , "Nome" : "Bárbara"    , "Pt" : "+3", "Ps" : 25095};
var player10 = { "#" : "10º" , "Nome" : "Hydra"      , "Pt" : "+3", "Ps" : 23565};
var player11 = { "#" : "11º" , "Nome" : "Wisdow"     , "Pt" : "+2", "Ps" : 22235};
var player12 = { "#" : "12º" , "Nome" : "Lekky"      , "Pt" : "+2", "Ps" : 20325};



var players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12];

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
