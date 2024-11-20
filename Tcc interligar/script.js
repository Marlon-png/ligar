let correctMatches = 0;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData("text");
    const targetId = event.target.id;

    // Verifica se a associação está correta
    if ((draggedId === "salmonella" && targetId === "nome-salmonella") ||
        (draggedId === "bacteria" && targetId === "nome-bacteria")) {
        
        // Estilo de sucesso
        event.target.classList.add("correct");
        event.target.setAttribute("data-status", "correct");
        event.target.innerText = "Correto!";
        
        // Remove a imagem associada e incrementa pontuação
        document.getElementById(draggedId).style.display = "none";
        correctMatches++;

        // Verifica se todas as associações estão corretas
        if (correctMatches === 2) {
            document.getElementById("resultado").innerText = "Parabéns! Você acertou todas as associações!";
        }

    } else {
        // Estilo de erro
        event.target.classList.add("incorrect");
        event.target.setAttribute("data-status", "incorrect");
        event.target.innerText = "Tente novamente!";
        
        // Remove o estilo de erro após um tempo
        setTimeout(() => {
            event.target.classList.remove("incorrect");
            event.target.setAttribute("data-status", "default");
            event.target.innerText = targetId === "nome-salmonella" ? "Salmonella" : "Bactéria";
        }, 1000);
    }
}
