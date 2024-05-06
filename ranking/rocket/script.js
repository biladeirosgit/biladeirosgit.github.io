// Dados dos jogadores
var player1 = { "#" : "1º" ,Nome: "BrotherZ in PaRiS"        , "Membros" : "Hydra, Lekky & Squnha"          , Pt: "+8"};
var player2 = { "#" : "2º" ,Nome: "Winners Queue"            , "Membros" : "Gelly,  Tone & Lemos"           , Pt: "+6"};
var player3 = { "#" : "3º" ,Nome: "Douradinhos de Frango"    , "Membros" : "Braz, Escher & Atlas"           , Pt: "+4"};
var player4 = { "#" : "4º" ,Nome: "Falamos no FIFA"          , "Membros" : "Wisdow, Cludos & Sardoal"       , Pt: "+3"};
var player5 = { "#" : "5º" ,Nome: "Frazão sobre Rodas"       , "Membros" : "Frazão, Bárbara & Xadas"        , Pt: "+2"};
var player6 = { "#" : "5º" ,Nome: "O Verdadeiro Cunha"       , "Membros" : "Mestre Gui, Geremias & Alcunha" , Pt: "+2"};

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
