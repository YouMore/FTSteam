let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let btnPlay = document.querySelector(".play");   // Берём кнопку проигрывания
let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека
let pauseOrPlay = true;// для смены картинки, когда переменная = истина, то кнопка play

// Массив с названиями песен
let playlist = [
    'FTS-ITS JUST LIFE.mp3',
    'AGIRRA-ЛП.mp3',
    'AGIRRA - PORTAS II.mp3',
    'AGIRRA-hah.mp3',
    'AGIRRA-BIRSDAY.mp3',
    'ILDARAL-ICE BABY 2.0.mp3',
    'ILDARAL-ИНСТАГРАММ.mp3',
    'ILDARAL-ПРЫЖОК.mp3',
    'ILDARAL-МЕРИН -БУМЕР.mp3',
    'GRUZ_200 - RELAX.mp3',
    'GRUZ_200 - 117.mp3',
    'GRUZ_200 - 298.mp3',
];
 
let treck; // Переменная с индексом трека
 
// Событие перед загрузкой страницы
window.onload = function() {
    treck = 0; // Присваиваем переменной ноль
}

function switchTreck (numTreck) {
    // Меняем значение атрибута src
    audio.src = 'audio/' + playlist[numTreck];
    // Назначаем время песни ноль
    audio.currentTime = 0;
    // Включаем песню
    btnPlay.src = 'photo/pause.png';// меняет картинку на play
    pauseOrPlay = false;
    audio.play();
}

btnPlay.addEventListener("click", function() {
    if (pauseOrPlay == true) {
        audio.play(); // Запуск песни
        btnPlay.src = 'photo/pause.png';//смена картинку на pause
        pauseOrPlay = false;
        // Запуск интервала
        let audioPlay = setInterval(function () {
            // Получаем значение на какой секунде песня
            let audioTime = Math.round(audio.currentTime);
            // Получаем всё время песни
            let audioLength = Math.round(audio.duration)
            // Назначаем ширину элементу time
            time.style.width = (audioTime * 100) / audioLength + '%';
            // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная treck меньше четырёх
            if (audioTime == audioLength && treck < 11) {
                treck++; // То Увеличиваем переменную
                switchTreck(treck); // Меняем трек
                // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
            } else if (audioTime == audioLength && treck >= 11) {
                treck = 0; // То присваиваем treck ноль
                switchTreck(treck); //Меняем трек
            }
        }, 10);
    }
    else {
        audio.pause(); // Останавливает песню
        btnPlay.src = 'photo/play.png';// меняет картинку на play
        //clearInterval(audioPlay); // Останавливает интервал
        pauseOrPlay = true;
    }
});
btnPrev.addEventListener("click", function() {
    // Проверяем что переменная treck больше нуля
    if (treck > 0) {
        treck--; // Если верно, то уменьшаем переменную на один
        switchTreck(treck); // Меняем песню.
    } else { // Иначе
        treck = 11; // Присваиваем три
        switchTreck(treck); // Меняем песню
    }
});

btnNext.addEventListener("click", function() {
    // Проверяем что переменная treck больше трёх
    if (treck < 11) { // Если да, то
        treck++; // Увеличиваем её на один
        switchTreck(treck); // Меняем песню 
    } else { // Иначе
        treck = 0; // Присваиваем ей ноль
        switchTreck(treck); // Меняем песню
    }
});




