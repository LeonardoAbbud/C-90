// Cria a função para adicionar usuários
function addUser() {

    /**recuperam os valores dos campos de entrada de nome dos 
     jogadores da página HTML usando o método "getElementById" do objeto "document". */

    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
  
    /** o método "setItem" do objeto "localStorage" para armazenar os nomes dos jogadores no armazenamento local do 
navegador. O "setItem" recebe como argumentos uma chave (no caso, "player1_name" e "player2_name") e o valor a ser armazenado (as variáveis "player1_name" e "player2_name"). */

      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);
  /**redireciona o navegador para a página "game_page.html" usando a propriedade "location" do objeto "window". 
Quando o usuário chegar à página "game_page.html", o código nessa página pode recuperar os nomes dos 
jogadores do armazenamento local usando o método "getItem" do objeto "localStorage". */
      window.location = "game.html";
  }
 

