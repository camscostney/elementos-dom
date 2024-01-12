const criandoH1 = document.createElement("h1");
criandoH1.id = "titulo";
criandoH1.innerText = "Pizzas"

let body = document.querySelector("body");
body.appendChild(criandoH1);

let informaçõesProduto = document.createElement("div");
informaçõesProduto.id = "descricao"
informaçõesProduto.innerHTML = 
`
<h2>Pizza de Calabresa</h2>
<p>borda de catupiry, molho de tomate especial, queijo, calabresa, cebola, orégano e azeitona</p>
<p><strong>R$ 30,00</strong></p>
`

body.appendChild(informaçõesProduto);
