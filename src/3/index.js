// Вывести таблицу 10×10, заполненную числами от 1 до 100 (таблица создана динамически)

const tableContainerEl = document.querySelector('#numberTable');

const createTRow = () => {
    const tRowElement = document.createElement('tr');
    tRowElement.classList.add('table__row');

    return tRowElement;
}

const createTCell = (data = '') => {
    const tCellElement = document.createElement('td');
    tCellElement.classList.add('table__cell')
    tCellElement.innerHTML = data;

    return tCellElement;
}

const createTable = (tContainer, tRowCount, tCellCount) => {
    for(let i = 0; i <= tRowCount - 1; i++) {
        let tRowEl = tContainer.appendChild(createTRow());

        for (let j = 1; j <= tCellCount; j++) {
            tRowEl.appendChild(createTCell(j + i * 10));
        }
    }
}

createTable(tableContainerEl, 10, 10);
