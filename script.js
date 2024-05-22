document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    document.getElementById('response').innerText = `Gracias por tu pregunta: "${question}". Te responderé lo antes posible.`;
    document.getElementById('question').value = '';
});

document.getElementById('whatsapp-button').addEventListener('click', function() {
    const phoneNumber = '573012680042'; // Reemplaza con tu número de WhatsApp en formato internacional
    const url = `https://wa.me/${phoneNumber}`;
    window.location.href = url;
});
