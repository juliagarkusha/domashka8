// В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вывести изображение из этой папки полученное случайным образом (Math.random)
// по нажатию на кнопку выводить новую случайную картинку

const randomCatElement = document.getElementById('randomCat');
const showCatElement = document.getElementById('showCat');

const getRandomValue = (min, max) => (Math.random() * (max - min) + min).toFixed(0);

const getRandomPathHandler = () => `./images/${getRandomValue(1, 9)}.jpeg`;

const assignPathHandler = () => {
    randomCatElement.setAttribute('src', getRandomPathHandler());
}

showCatElement.addEventListener('click', assignPathHandler);

assignPathHandler();
