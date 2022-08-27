// На странице есть две кнопки. При нажатии на первую кнопку пользователь должен ввести в prompt ссылку,
// при нажатии на вторую – переадресовывается на другой сайт (по ранее введенной ссылке).
// document.location.href = “url_to_go”;

const btnShowFormElement = document.getElementById('showForm');
const btnFollowLinkElement = document.getElementById('followLink');
const userLinkElement = document.getElementById('userLink');

const getUserInfo = (message) => {
    const value = prompt(message);

    if (value === null) {
        return;
    }

    if (value === '') {
        getUserInfo(message);
    }

    return value;
}

const createLinkHandler = (linkValue, linkElement, btnLinkElement) => {
    linkElement.innerHTML = linkValue;
    linkElement.setAttribute('href', linkValue);
    btnLinkElement.setAttribute('data-href', linkValue);
    btnLinkElement.removeAttribute('disabled');
}

const followLinkHandler = () => {
    document.location.href = btnFollowLinkElement.getAttribute('data-href');
}

const showPromptHandler = () => {
    const userLink =  getUserInfo('Введите ссылку: ');

    if(!userLink) {
        return;
    }

    createLinkHandler(userLink, userLinkElement, btnFollowLinkElement);
}

btnShowFormElement.addEventListener('click', showPromptHandler);
btnFollowLinkElement.addEventListener('click', followLinkHandler);
