//  Создание HTML-основы игры
export default function renderClicksContainer() {
    // Контейнер для всей игры
    const clicksContainer = document.createElement('section');
    clicksContainer.classList.add("d-clicks-container")

    // Экран начала игры
    const startScreen = document.createElement('section');
    startScreen.classList.add("d-start-screen", "d-screen")
    startScreen.innerHTML = `
    <h1>Зельеварение</h1>
    <div class="d-start-content">
        <div class="d-start__plot">
            <p>Пуф! Злая ведьма похитила тебя и держит в своем волшебном замке, из которого не так просто выбраться. 
            На дверях и окнах лежат сложные заклинания, разрушить которые может волшебное зелье. 
            Пока ведьма отвлеклась, у тебя есть немного времени, чтобы приготовить нужное зелье из <span class="span-score">15</span>-ти компонентов. 
            Поторопись!</p>
        </div> 
        <div class="d-start__choice">
            <p>Выберите уровень сложности игры</p>
            <ul class="d-time-list" id="d-time-list">
                <li class="d-time-li">
                    <button class="d-btn d-time-btn" data-time="30">easy</button>
                    <p class="d-time-prompt" id="prompt-30">30 секунд</p>
                </li>
                <li class="d-time-li">
                    <button class="d-btn d-time-btn" data-time="20">medium</button>
                    <p class="d-time-prompt" id="prompt-20">20 секунд</p>
                </li>
                <li class="d-time-li">
                    <button class="d-btn d-time-btn" data-time="10">hard</button>
                    <p class="d-time-prompt" id="prompt-10">10 секунд</p>
                </li>
            </ul>
        </div>   
    </div>
    `

    // Экран игры
    const gameScreen = document.createElement('section');
    gameScreen.classList.add("d-game-screen", "d-screen")
    gameScreen.innerHTML = `
    <h3 class="d-game-timer">Осталось <span id="d-time">00:00</span></h3>
      <div class="d-conditions" id="d-conditions">
        <div class="d-condition"></div>
        <div class="d-score-table">Счёт: <span class="d-score"></span></div>
      </div>
      <div class="d-board" id="d-board"></div>
      <div class="d-magic-pot">
        <img class="d-magic-pot__img" src="https://cdn-icons-png.flaticon.com/512/5438/5438642.png" alt="">
      </div>
    `
    
    // Экран концовки
    const endScreen = document.createElement('div');
    endScreen.classList.add("d-end-screen", "d-screen")
    endScreen.innerHTML = `
    <h3>Cчет: <span class="d-result-score"></span></h3>
    <p class="d-result-text"></p> 
    <img class="d-magic-item__img">
    
    <button class="d-btn d-try-again">Начать сначала</button>
    `

    // Добавление в контейнер экранов
    clicksContainer.append(startScreen,gameScreen,endScreen);
    document.body.append(clicksContainer);

    return clicksContainer;
    }