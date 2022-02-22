let texto = "hola, esta es una prueba para ver como se escucha el lector por js"
const hablar = texto => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))