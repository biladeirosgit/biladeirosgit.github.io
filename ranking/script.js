// Dados dos jogadores
var players = [
{ Nome: "Mestre Gui", Pts: 23   , Pr: 2 , Mpp : 11.5 , Pl: 1 },
{ Nome: "Wisdow"    , Pts: 16   , Pr: 1 , Mpp : 8    , Pl: 1 },
{ Nome: "Xadas"     , Pts: 18   , Pr: 2 , Mpp : 9    , Pl: 0 },
{ Nome: "Bárbara"   , Pts: 18   , Pr: 2 , Mpp : 9    , Pl: 0 },
{ Nome: "Simão"     , Pts: 8    , Pr: 1 , Mpp : 8    , Pl: 0 },
{ Nome: "Camilo"    , Pts: 8    , Pr: 1 , Mpp : 8    , Pl: 0 },
{ Nome: "Braz"      , Pts: 9    , Pr: 2 , Mpp : 4.5  , Pl: 0 },
{ Nome: "Cludos"    , Pts: 11   , Pr: 2 , Mpp : 5.5  , Pl: 0 },
{ Nome: "Geremias"  , Pts: 10   , Pr: 2 , Mpp : 5    , Pl: 0 },
{ Nome: "Esquilo"   , Pts: 5    , Pr: 1 , Mpp : 5    , Pl: 0 },
{ Nome: "Squnha"    , Pts: 9    , Pr: 2 , Mpp : 4.5  , Pl: 0 },
{ Nome: "Rodry"     , Pts: 5    , Pr: 1 , Mpp : 5    , Pl: 0 },
{ Nome: "Droga"     , Pts: 13   , Pr: 1 , Mpp : 13   , Pl: 1 },
{ Nome: "Hydra"     , Pts: 4    , Pr: 1 , Mpp : 4    , Pl: 0 },
{ Nome: "João Nuno" , Pts: 3    , Pr: 1 , Mpp : 3    , Pl: 0 },
{ Nome: "Lekky"     , Pts: 3    , Pr: 1 , Mpp : 3    , Pl: 0 }
]

// Função para criar a tabela
function criarTabela(players, sortBy, secondSortBy) {
    var tabela = document.getElementById("rankingBody");

    // Limpar tabela existente
    tabela.innerHTML = "";

    // Ordenar os jogadores
    players.sort(function(a, b) {
        if (a[sortBy] === b[sortBy]) {
            // Em caso de empate, ordenar pelo segundo critério
            return b[secondSortBy] - a[secondSortBy];
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
