# Biladeiros — hub

Página de entrada dos sites dos Biladeiros. É uma página só, em HTML e CSS
simples, com uma banda colorida por site. Cada banda leva ao site respetivo.

- **Site:** https://biladeirosgit.github.io/

## Os sites

| Banda | Site | Repositório |
| --- | --- | --- |
| Laranja | [Clube de Cinema](https://biladeirosgit.github.io/clubedecinema/) | `biladeirosgit/clubedecinema` |
| Roxo | [Cantinho do Gueimer](https://biladeirosgit.github.io/cantinhodogueimer/) | `biladeirosgit/cantinhodogueimer` |
| Verde | [Bila-Olimpíadas](https://biladeirosgit.github.io/bila-olimpiadas/) | `biladeirosgit/bila-olimpiadas` |
| Azul | [Clube do Livro](https://biladeirosgit.github.io/clubedolivro/) | `biladeirosgit/clubedolivro` |

Cada site é um repositório à parte, com o seu próprio deploy. Este repositório
só tem os links. Todos os sites têm, na barra de navegação, um botão que volta
para aqui.

## Funcionalidades

- As bandas dividem o ecrã na vertical. No computador, a banda por baixo do
  rato cresce.
- Cada banda usa a cor de destaque do site para onde leva.
- As logos encolhem com a banda e nunca ficam esticadas. Abaixo de uma altura
  mínima, a página faz scroll em vez de as esmagar.
- Funciona em telemóvel (sem o efeito de crescer, que não faz sentido em toque).

## Ficheiros

| Ficheiro | O que é |
| --- | --- |
| `index.html` | As bandas: um `<a class="section ...">` por site, com a logo lá dentro |
| `style.css` | Layout, cores de cada banda e o efeito de hover |
| `logo_cdc.png`, `logo_cdg.png`, `logo.png`, `logo_cdl.png` | Logos do cinema, do gueimer, das olimpíadas e do livro |
| `favicon.ico` | Ícone do separador |

## Guia de comandos

### Ver a página no teu PC

Abre o `index.html` no browser (duplo clique). Não há build nem dependências.

Para a ver servida como no GitHub (útil para testar os links relativos):

```powershell
cd C:\Users\35191\Desktop\biladeirosgit.github.io
python -m http.server 8000
```

Abre http://localhost:8000. Os links para os sites só funcionam no site
publicado, porque os sites não estão nesta pasta.

### Publicar uma alteração

Este é o repositório `<utilizador>.github.io`, por isso o GitHub Pages publica
diretamente o branch `main`. Não há `npm run deploy`: o push é o deploy.

```powershell
cd C:\Users\35191\Desktop\biladeirosgit.github.io
git add -A
git commit -m "Descreve a alteração"
git push
```

A página atualiza em 1 a 2 minutos. Se continuares a ver a versão antiga, faz
Ctrl+F5.

### Acrescentar um site novo

1. Mete a logo na raiz (por exemplo `logo_xyz.png`). O formato das outras é
   800x576 com fundo transparente. Outros formatos funcionam, mas ficam com
   outro tamanho.
2. Em `index.html`, acrescenta uma banda antes do `</main>`:
   ```html
   <a class="section xyz" href="nomedorepositorio/">
       <img src="logo_xyz.png" alt="Nome do site">
   </a>
   ```
   O `href` é o nome do repositório do site, porque cada site fica em
   `biladeirosgit.github.io/<repositório>/`.
3. Em `style.css`, dá-lhe a cor e a cor do hover:
   ```css
   .xyz {
       background-color: #123456;
   }
   ```
   E, dentro do `@media (hover: hover)`:
   ```css
   .xyz:hover {
       background-color: #0e2a45;
   }
   ```
4. Sobe o `min-height` do `.container` em 180px por cada banda nova (cada banda
   tem no mínimo 180px).
5. Faz commit e push (ver acima).
