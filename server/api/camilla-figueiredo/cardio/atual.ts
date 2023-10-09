export default defineEventHandler((event) => {
    return {
        // Treino A
        "cardioA": "Esteira",
        "cardioATime": "20 minutos",
        "cardioADescription": "Correr direto entre velocidade de 7.0 km/h a 8.5 km/h.",
        // Treino B
        "cardioB": "Escada",
        "cardioBTime": "15 minutos",
        "cardioBDescription": `Fazer intervalado: 1' minuto subindo o mais rápido possível, 
        3' com descanso ativo em velocidade menor.`,
        // Treino C
        "cardioC": "Bicicleta", 
        "cardioCTime": "20 minutos",
        "cardioCDescription": " Fazer pesado, direto o máximo que puder, mantendo o ritmo. "
    }
})
