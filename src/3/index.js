// Вывести таблицу 10×10, заполненную числами от 1 до 100 (таблица создана динамически)

const tableContainerElement = document.querySelector('#numberTable');

const createTableRow = () => {
    const tableRowElement = document.createElement('tr');
    tableRowElement.classList.add('table__row');

    return tableRowElement;
}

const createTableCell = (data = '') => {
    const tableCellElement = document.createElement('td');
    tableCellElement.classList.add('table__cell')
    tableCellElement.innerHTML = data;

    return tableCellElement;
}

const createTable = (tableContainer, tableRowCount, tableCellCount) => {
    for(let i = 0; i <= tableRowCount - 1; i++) {
        let tableRowElement = tableContainer.appendChild(createTableRow());

        for (let j = 1; j <= tableCellCount; j++) {
            tableRowElement.appendChild(createTableCell(j + i * 10));
        }
    }
}

createTable(tableContainerElement, 10, 10);
