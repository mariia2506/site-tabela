document.addEventListener("DOMContentLoaded", function() {
   
    const dadosIniciais = [
        ["João Silva", "joao@example.com", "Ficção"],
        ["Maria Oliveira", "maria@example.com", "Mistério"],
        ["Carlos Santos", "carlos@example.com", "Romance"],
        ["Ana Souza", "ana@example.com", "Fantasía"],
        ["Paulo Almeida", "paulo@example.com", "Terror"],
        ["Juliana Costa", "juliana@example.com", "Ficção"],
        ["Lucas Pereira", "lucas@example.com", "Mistério"],
        ["Fernanda Lima", "fernanda@example.com", "Romance"],
        ["Rafael Barbosa", "rafael@example.com", "Fantasía"],
        ["Beatriz Rocha", "beatriz@example.com", "Terror"]
    ];

    const tabelaCorpo = document.querySelector("table tbody");

  
    dadosIniciais.forEach(dado => {
        const novaLinha = document.createElement("tr");

        dado.forEach(info => {
            const celula = document.createElement("td");
            celula.textContent = info;
            novaLinha.appendChild(celula);
        });

        tabelaCorpo.appendChild(novaLinha);
    });

    
    document.getElementById("cadastroForm").addEventListener("submit", function(event) {
        event.preventDefault();  

      
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const genero = document.getElementById("genero").value;

        
        if (nome && email && genero) {
            const novaLinha = document.createElement("tr");

            const celulaNome = document.createElement("td");
            celulaNome.textContent = nome;

            const celulaEmail = document.createElement("td");
            celulaEmail.textContent = email;

            const celulaGenero = document.createElement("td");
            celulaGenero.textContent = genero;

            novaLinha.appendChild(celulaNome);
            novaLinha.appendChild(celulaEmail);
            novaLinha.appendChild(celulaGenero);

            tabelaCorpo.appendChild(novaLinha);

           
            document.getElementById("cadastroForm").reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});
