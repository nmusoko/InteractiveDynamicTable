document.getElementById('multiplication-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const hStart = parseInt(document.getElementById('hStart').value);
    const hEnd = parseInt(document.getElementById('hEnd').value);
    const vStart = parseInt(document.getElementById('vStart').value);
    const vEnd = parseInt(document.getElementById('vEnd').value);

    // Validate input
    if (isNaN(hStart) || isNaN(hEnd) || isNaN(vStart) || isNaN(vEnd)) {
        alert('Please enter valid numbers.');
        return;
    }
    if (hStart > hEnd || vStart > vEnd) {
        alert('Start value must be less than or equal to end value.');
        return;
    }

    // Generate table
    generateTable(hStart, hEnd, vStart, vEnd);
});

function generateTable(hStart, hEnd, vStart, vEnd) {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Clear previous table

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    const headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th')); // Top-left empty cell

    for (let h = hStart; h <= hEnd; h++) {
        const th = document.createElement('th');
        th.textContent = h;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);

    // Create table body
    for (let v = vStart; v <= vEnd; v++) {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = v;
        row.appendChild(th);

        for (let h = hStart; h <= hEnd; h++) {
            const td = document.createElement('td');
            td.textContent = h * v;
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}
