document.addEventListener("DOMContentLoaded", () => {
    const typewriterElement = document.getElementById("typeWriter");
    const phrases = typewriterElement.getAttribute("data-text").split("|");
    let phraseIndex = 0;
    let letterIndex = 0;
    const typingSpeed = 100; // Velocidade de digitação (ms)
    const deletingSpeed = 20; // Velocidade de apagar (ms)
    const pauseBetweenPhrases = 2000; // Pausa entre as frases (ms)
    const pauseBeforeDeleting = 1000; // Pausa antes de começar a apagar (ms)

    function type() {
        if (phraseIndex < phrases.length) {
            const currentPhrase = phrases[phraseIndex];
            if (letterIndex < currentPhrase.length) {
                typewriterElement.textContent += currentPhrase.charAt(letterIndex);
                letterIndex++;
                setTimeout(type, typingSpeed);
            } else {
                // Pausa antes de começar a apagar a frase
                setTimeout(deleteText, pauseBeforeDeleting);
            }
        } else {
            // Reinicia a animação após todas as frases serem exibidas
            phraseIndex = 0;
            type();
        }
    }

    function deleteText() {
        const currentPhrase = phrases[phraseIndex];
        if (letterIndex > 0) {
            typewriterElement.textContent = currentPhrase.substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            // Quando terminar de apagar, passa para a próxima frase
            phraseIndex++;
            if (phraseIndex >= phrases.length) {
                phraseIndex = 0; // Reinicia para a primeira frase quando todas tiverem sido mostradas
            }
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

