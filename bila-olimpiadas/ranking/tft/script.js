// Dados dos jogadores
var players2G = [
{"#": "1º", Nome: "Droga"     , J: 3 , ML : 1.67   , "1L": 1, "2L" : 2, "3L": 0, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "2º", Nome: "Bárbara"   , J: 3 , ML : 2.67   , "1L": 1, "2L" : 0, "3L": 1, "4L" : 1, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "3º", Nome: "Mestre Gui", J: 3 , ML : 2.67   , "1L": 0, "2L" : 1, "3L": 2, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "4º", Nome: "Cludos"    , J: 3 , ML : 3.00   , "1L": 1, "2L" : 0, "3L": 0, "4L" : 2, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "5º", Nome: "Wisdow"    , J: 3 , ML : 5.33   , "1L": 0, "2L" : 0, "3L": 0, "4L" : 0, "5L": 2, "6L" : 1, "7L": 0, "8L" : 0 },
{"#": "6º", Nome: "Braz"      , J: 3 , ML : 5.67   , "1L": 0, "2L" : 0, "3L": 0, "4L" : 0, "5L": 1, "6L" : 2, "7L": 0, "8L" : 0 }
]

var players1G = [
{"#": "1º", Nome: "Xadas"     , J: 3 , ML : 2.00   , "1L": 2, "2L" : 0, "3L": 0, "4L" : 1, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "2º", Nome: "Squnha"    , J: 3 , ML : 2.67   , "1L": 0, "2L" : 1, "3L": 2, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "3º", Nome: "Geremias"  , J: 3 , ML : 3.65   , "1L": 1, "2L" : 1, "3L": 0, "4L" : 0, "5L": 0, "6L" : 1, "7L": 0, "8L" : 0 },
{"#": "4º", Nome: "Hydra"     , J: 3 , ML : 4.00   , "1L": 0, "2L" : 1, "3L": 0, "4L" : 0, "5L": 2, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "5º", Nome: "João Nuno" , J: 3 , ML : 4.33   , "1L": 0, "2L" : 0, "3L": 0, "4L" : 1, "5L": 2, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "6º", Nome: "Lekky"     , J: 3 , ML : 5.00   , "1L": 0, "2L" : 0, "3L": 1, "4L" : 0, "5L": 0, "6L" : 2, "7L": 0, "8L" : 0 }
]



var playersFinal = [
{"#": "1º", Nome: "Droga"      ,J: 3 , ML : 2.33  , "1L": 1, "2L" : 0, "3L": 2, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "2º", Nome: "Mestre Gui" ,J: 3 , ML : 2.67  , "1L": 1, "2L" : 1, "3L": 0, "4L" : 0, "5L": 1, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "3º", Nome: "Xadas"      ,J: 3 , ML : 3.67  , "1L": 0, "2L" : 1, "3L": 1, "4L" : 0, "5L": 0, "6L" : 1, "7L": 0, "8L" : 0 },
{"#": "3º", Nome: "Bárbara"    ,J: 3 , ML : 3.67  , "1L": 0, "2L" : 1, "3L": 0, "4L" : 1, "5L": 1, "6L" : 0, "7L": 0, "8L" : 0 },
{"#": "5º", Nome: "Cludos"     ,J: 3 , ML : 4.00  , "1L": 1, "2L" : 0, "3L": 0, "4L" : 0, "5L": 1, "6L" : 1, "7L": 0, "8L" : 0 },
{"#": "6º", Nome: "Geremias"   ,J: 3 , ML : 4.67  , "1L": 0, "2L" : 0, "3L": 0, "4L" : 2, "5L": 0, "6L" : 1, "7L": 0, "8L" : 0 },
{"#": "7º", Nome: "Squnha"     ,J: 3 , ML : 7.00  , "1L": 0, "2L" : 0, "3L": 0, "4L" : 0, "5L": 0, "6L" : 0, "7L": 3, "8L" : 0 },
{"#": "8º", Nome: "Hydra"      ,J: 3 , ML : 8.00  , "1L": 0, "2L" : 0, "3L": 0, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 3 }
]



var playersTFT = [
// Dados dos jogadores
{"#": "1º", Nome: "Droga"      , Pts: "+13"},
{"#": "2º", Nome: "Mestre Gui" , Pts: "+10"},
{"#": "3º", Nome: "Xadas"      , Pts: "+8" },
{"#": "3º", Nome: "Bárbara"    , Pts: "+8" },
{"#": "5º", Nome: "Cludos"     , Pts: "+5" },
{"#": "6º", Nome: "Geremias"   , Pts: "+5" },
{"#": "7º", Nome: "Squnha"     , Pts: "+4" },
{"#": "8º", Nome: "Hydra"      , Pts: "+4" },
{"#": "9º", Nome: "João Nuno"  , Pts: "+3" },
{"#": "9º", Nome: "Wisdow"     , Pts: "+3" },
{"#": "10º", Nome: "Lekky"     , Pts: "+3" },
{"#": "10º", Nome: "Braz"      , Pts: "+3" }

]


// Função para criar a tabela
function criarTabela(players, sortBy, elementId) {
    var tabela = document.getElementById(elementId);

    // Limpar tabela existente
    tabela.innerHTML = "";

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
criarTabela(playersTFT, '#', 'rankingBodyTFT');
criarTabela(players1G, '#', 'rankingBody1G');
criarTabela(players2G, '#', 'rankingBody2G');
criarTabela(playersFinal, '#', 'rankingBodyFinal');
