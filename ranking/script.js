// Dados dos jogadores
var player1 = { Nome: "Wisdow"    , Pontos: 13   , Participações: 1 , Média_de_Pontos_por_Participação : 13, Primeiros_Lugares: 1 };
var player2 = { Nome: "Mestre Gui", Pontos: 13   , Participações: 1 , Média_de_Pontos_por_Participação : 13, Primeiros_Lugares: 1 };
var player3 = { Nome: "Xadas"     , Pontos: 10   , Participações: 1 , Média_de_Pontos_por_Participação : 10, Primeiros_Lugares: 0 };
var player4 = { Nome: "Bárbara"   , Pontos: 10   , Participações: 1 , Média_de_Pontos_por_Participação : 10, Primeiros_Lugares: 0 };
var player5 = { Nome: "Simão"     , Pontos: 8    , Participações: 1 , Média_de_Pontos_por_Participação : 8 , Primeiros_Lugares: 0 };
var player6 = { Nome: "Camilo"    , Pontos: 8    , Participações: 1 , Média_de_Pontos_por_Participação : 8 , Primeiros_Lugares: 0 };
var player7 = { Nome: "Braz"      , Pontos: 6    , Participações: 1 , Média_de_Pontos_por_Participação : 6 , Primeiros_Lugares: 0 };
var player8 = { Nome: "Cludos"    , Pontos: 6    , Participações: 1 , Média_de_Pontos_por_Participação : 6 , Primeiros_Lugares: 0 };
var player9 = { Nome: "Geremias"  , Pontos: 5    , Participações: 1 , Média_de_Pontos_por_Participação : 5 , Primeiros_Lugares: 0 };
var player10= { Nome: "Esquilo"   , Pontos: 5    , Participações: 1 , Média_de_Pontos_por_Participação : 5 , Primeiros_Lugares: 0 };
var player11= { Nome: "Squnha"    , Pontos: 5    , Participações: 1 , Média_de_Pontos_por_Participação : 5 , Primeiros_Lugares: 0 };
var player12= { Nome: "Rodry"     , Pontos: 5    , Participações: 1 , Média_de_Pontos_por_Participação : 5 , Primeiros_Lugares: 0 };

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
    posicaoHeader.textContent = "Posição";
    headerRow.appendChild(posicaoHeader);
    var fotoHeader = document.createElement("th");
    fotoHeader.textContent = "Foto";
    headerRow.appendChild(fotoHeader);
    Object.keys(players[0]).forEach(function(prop) {
        var th = document.createElement("th");
        th.textContent = prop.replace(/_/g, ' ');
        headerRow.appendChild(th);
    });

    // Preencher a tabela com os jogadores ordenados
    players.forEach(function(player, index) {
        var row = tabela.insertRow();
        var cellPosicao = row.insertCell();
        cellPosicao.textContent = index + 1; // Posição do jogador
        
        var cellFoto = row.insertCell();
        var foto = document.createElement("img");
        foto.src = "images/" + player.Nome + ".png"; // Define o src da imagem
        foto.alt = player.Nome; // Define o texto alternativo da imagem
        foto.width = 50; // Define a largura da imagem
        cellFoto.appendChild(foto); // Adiciona a imagem à célula
        
        Object.keys(player).forEach(function(prop) {
            var cell = row.insertCell();
            cell.textContent = player[prop];
        });
    });
}


// Criar tabela inicialmente
criarTabela(players, 'Pontos', 'Participações');
