// Есть блок с текстом на странице и кнопку. При нажатии на кнопку текст изменяет цвет.
// При повторном нажатии – возвращается предыдущий цвет

const btnTextElement = document.getElementById('btnText');
const textElements = document.querySelectorAll('.text--gray');

const textViewHandler = () => {
    textElements.forEach(item => {
        item.classList.toggle('text--gray');
    })
}

btnTextElement.addEventListener('click', textViewHandler)
