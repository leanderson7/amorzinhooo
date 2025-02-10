const startDate = new Date("2024-10-13T00:00:00"); // Data de início: 13 de outubro de 2024

function updateCounter() {
    const now = new Date();
    const difference = now - startDate; // Calcula a diferença entre agora e a data de início

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const minutes = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("years").textContent = String(years).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCounter, 1000);
updateCounter(); // Chama a função uma vez para inicializar
