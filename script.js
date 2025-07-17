function copiarEmail(email) {
    const texto = email.innerText;

    navigator.clipboard.writeText(texto)
    
    .then(() => {
        alert(`Copiado: ${texto}`);
    })
    .catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// contador
// Define a data e hora alvo (ano, mês - 1, dia, hora, minuto, segundo)
const dataPostagem = new Date(2025, 6, 17, 15, 30, 0); // Julho é mês 6 (zero-based)

function atualizarContador() {
    const agora = new Date();
    const tempoRestante = dataPostagem - agora;

    if (tempoRestante <= 0) {
        document.getElementById("h2Timer").innerHTML = "Evento iniciado!";
        document.getElementById("paragrafoTimer").innerHTML = "";
        // clearInterval para o contador quando a hora chega
        clearInterval(intervalo);
        return;
    }

    // cálculo de cada variável
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
    const segundos = Math.floor((tempoRestante / 1000) % 60);

    // exibir no elemento
        document.getElementById("paragrafoTimer").innerHTML =
            `${String(dias).padStart(2, '0')}:`
          + `${String(horas).padStart(2, '0')}:`
          + `${String(minutos).padStart(2, '0')}:`
          + `${String(segundos).padStart(2, '0')}`;
}

const intervalo = setInterval(atualizarContador, 1000);
atualizarContador(); // Atualiza imediatamente ao carregar a página