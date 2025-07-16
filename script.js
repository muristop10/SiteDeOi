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