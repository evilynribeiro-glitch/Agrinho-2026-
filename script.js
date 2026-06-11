// Lista de curiosidades sobre o Agronegócio
const curiosidades = [
    "O Brasil é o maior produtor e exportador de café, açúcar e suco de laranja do mundo.",
    "A tecnologia no campo permite que drones identifiquem pragas em plantações antes mesmo que elas se espalhem.",
    "O agronegócio é responsável por cerca de 1 a cada 3 empregos gerados no Brasil.",
    "A agricultura de precisão utiliza satélites GPS para aplicar a quantidade exata de água e nutrientes, evitando desperdícios.",
    "A técnica de rotação de culturas ajuda a manter o solo saudável naturalmente, sem o uso excessivo de produtos químicos."
];

// Seleção de Elementos
const btnTheme = document.getElementById('btn-theme');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnCuriosity = document.getElementById('btn-curiosity');
const curiosityBox = document.getElementById('curiosity-box');
const curiosityText = document.getElementById('curiosity-text');

// 1. Função de Alterar o Tema (Claro / Noturno)
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if(document.body.classList.contains('dark-mode')) {
        btnTheme.textContent = "☀️ Modo Claro";
    } else {
        btnTheme.textContent = "🌙 Modo Escuro";
    }
});

// 2. Função de Alterar Tamanho da Fonte
let currentFontSize = 16; // Tamanho padrão em pixels

btnIncrease.addEventListener('click', () => {
    if (currentFontSize < 24) { // Limite máximo para não quebrar o layout
        currentFontSize += 2;
        document.body.style.fontSize = currentFontSize + 'px';
    }
});

btnDecrease.addEventListener('click', () => {
    if (currentFontSize > 12) { // Limite mínimo de leitura
        currentFontSize -= 2;
        document.body.style.fontSize = currentFontSize + 'px';
    }
});

// 3. Função do Botão Interativo de Curiosidades
btnCuriosity.addEventListener('click', () => {
    // Sorteia uma curiosidade aleatória da lista
    const randomIndex = Math.floor(Math.random() * curiosidades.length);
    curiosityText.textContent = curiosidades[randomIndex];
    
    // Mostra a caixinha caso ela esteja escondida
    curiosityBox.classList.remove('hidden');
});
