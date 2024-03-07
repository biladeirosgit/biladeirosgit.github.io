// Dados dos jogadores
var player1 = { Nome: "Mestre Gui", Pt: 13   , Pr: 1 , Mpp : 13, Pl: 1 };
var player2 = { Nome: "Wisdow"    , Pt: 13   , Pr: 1 , Mpp : 13, Pl: 1 };
var player3 = { Nome: "Xadas"     , Pt: 10   , Pr: 1 , Mpp : 10, Pl: 0 };
var player4 = { Nome: "Bárbara"   , Pt: 10   , Pr: 1 , Mpp : 10, Pl: 0 };
var player5 = { Nome: "Simão"     , Pt: 8    , Pr: 1 , Mpp : 8 , Pl: 0 };
var player6 = { Nome: "Camilo"    , Pt: 8    , Pr: 1 , Mpp : 8 , Pl: 0 };
var player7 = { Nome: "Braz"      , Pt: 6    , Pr: 1 , Mpp : 6 , Pl: 0 };
var player8 = { Nome: "Cludos"    , Pt: 6    , Pr: 1 , Mpp : 6 , Pl: 0 };
var player9 = { Nome: "Geremias"  , Pt: 5    , Pr: 1 , Mpp : 5 , Pl: 0 };
var player10= { Nome: "Esquilo"   , Pt: 5    , Pr: 1 , Mpp : 5 , Pl: 0 };
var player11= { Nome: "Squnha"    , Pt: 5    , Pr: 1 , Mpp : 5 , Pl: 0 };
var player12= { Nome: "Rodry"     , Pt: 5    , Pr: 1 , Mpp : 5 , Pl: 0 };

var players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12];

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
        var cellFoto = row.insertCell();
        var foto = document.createElement("img");
        foto.src = "images/" + player.Nome + ".png"; // Define o src da imagem
        foto.alt = ""; // Define o texto alternativo da imagem
        foto.width = 50; // Define a largura da imagem
        cellFoto.appendChild(foto); // Adiciona a imagem à célula
        var nome = document.createElement("div")
        nome.textContent = player.Nome;
        cellFoto.appendChild(nome)
        
        Object.keys(player).forEach(function(prop) {
            if (prop!="Nome"){
            var cell = row.insertCell();
            cell.textContent = player[prop];
            }
        });
    });
}


// Criar tabela inicialmente
criarTabela(players, 'Pts', 'Pr');
