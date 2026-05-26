function insert_Row() {

    // Get table
    let table = document.getElementById("sampleTable");

    // Insert new row at top (index 0)
    let row = table.insertRow(0);

    // Insert cells
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    // Add text
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}