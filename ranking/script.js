// Dados dos jogadores
var players = [
{ "#": "1º" ,Nome: "Xadas"     , Pts: 26   , Pr: 3 , Mpp : 8.7  , Tg: 1 },
{ "#": "2º" ,Nome: "Wisdow"    , Pts: 24   , Pr: 3 , Mpp : 8    , Tg: 2 },
{ "#": "3º" ,Nome: "Mestre Gui", Pts: 23   , Pr: 2 , Mpp : 11.5 , Tg: 1 },
{ "#": "4º" ,Nome: "Bárbara"   , Pts: 22   , Pr: 3 , Mpp : 7.3  , Tg: 0 },
{ "#": "5º" ,Nome: "Geremias"  , Pts: 18   , Pr: 3 , Mpp : 6.0  , Tg: 1 },
{ "#": "6º" ,Nome: "Braz"      , Pts: 17   , Pr: 3 , Mpp : 5.7  , Tg: 1 },
{ "#": "6º" ,Nome: "Squnha"    , Pts: 17   , Pr: 3 , Mpp : 5.7  , Tg: 1 },
{ "#": "8º" ,Nome: "Cludos"    , Pts: 15   , Pr: 3 , Mpp : 5.0  , Tg: 0 },
{ "#": "9º" ,Nome: "Droga"     , Pts: 13   , Pr: 1 , Mpp : 13.0 , Tg: 1 },
{ "#": "10º" ,Nome: "Esquilo"   , Pts: 13   , Pr: 2 , Mpp : 6.5  , Tg: 1 },
{ "#": "10º" ,Nome: "Rodry"     , Pts: 13   , Pr: 2 , Mpp : 6.5  , Tg: 1 },
{ "#": "12º" ,Nome: "Filipe"    , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 1 },
{ "#": "12º" ,Nome: "Lemos"     , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 1 },
{ "#": "12º" ,Nome: "Sardoal"   , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 1 },
{ "#": "15º" ,Nome: "Simão"     , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 0 },
{ "#": "15º" ,Nome: "Camilo"    , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 0 },
{ "#": "17º" ,Nome: "Hydra"     , Pts: 8    , Pr: 2 , Mpp : 4.0  , Tg: 0 },
{ "#": "18º" ,Nome: "João Nuno" , Pts: 7    , Pr: 2 , Mpp : 3.5  , Tg: 0 },
{ "#": "19º" ,Nome: "Serino"    , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "19º" ,Nome: "Areias"    , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "19º" ,Nome: "Tone"      , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "19º" ,Nome: "Rui"       , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "19º" ,Nome: "Costa"     , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "19º" ,Nome: "Zé Afonso" , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "25º" ,Nome: "Lekky"     , Pts: 3    , Pr: 1 , Mpp : 3.0  , Tg: 0 },
]

// Função para criar a tabela
function criarTabela(players) {
    var tabela = document.getElementById("rankingBody");

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

        var cellPos = row.insertCell();
        cellPos.textContent = player["#"]

        var cellFoto = row.insertCell();
        var foto = document.createElement("img");
        foto.src = "images/" + player.Nome + ".png"; // Define o src da imagem
        foto.alt = ""; // Define o texto alternativo da imagem
        foto.width = 50; // Define a largura da imagem
        foto.style.borderRadius = "50%"; // Torna a imagem redonda
        cellFoto.appendChild(foto); // Adiciona a imagem à célula
        var nome = document.createElement("div")
        nome.textContent = player.Nome;
        cellFoto.appendChild(nome)
        
        Object.keys(player).forEach(function(prop) {
            if (prop!="Nome" && prop!="#"){
            var cell = row.insertCell();
            cell.textContent = player[prop];
            }
        });
    });
}


// Criar tabela inicialmente
criarTabela(players);
