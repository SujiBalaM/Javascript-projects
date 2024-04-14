let selectedRow = null;
let searchDataInput = [];

function onSubmitForm() {
    if(validate()) {
        
        let formData = readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);
        else 
            updateRecord(formData)
        resetForm();
    }

}

function readFormData() {
 let formData = {};

 formData["fullName"] = document.getElementById("fullName").value 
 formData["email"] = document.getElementById("email").value 
 formData["task"] = document.getElementById("task").value 
 formData["chkbox"] = document.getElementById("chkbox").value 
searchDataInput.push(formData);
return formData;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("task").value = "";
    document.getElementById("chkbox").value = "";
    selectedRow = null;
}
let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
let newRow = table.insertRow(table.length);

function insertNewRecord(data) {
    // let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

     cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
     cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
     cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.task;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.chkbox;
     cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a><a onClick="onComplete(this)">Complete</a>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('task').value = selectedRow.cells[2].innerHTML;
    document.getElementById('chkbox').value = selectedRow.cells[3].innerHTML;
    

}
function onComplete(td) {
    selectedRow = td.parentElement.parentElement;
    selectedRow.style.backgroundColor = 'red';

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.task;
    selectedRow.cells[3].innerHTML = formData.chkbox;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}



function searchItems() {
    var input, filter, table, tr, td, cell, i, j;
    filter = document.getElementById('searchInput').value.toLowerCase();
    table = document.getElementById('employeeList');
    tr = table.getElementsByTagName('tr');
    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = 'none';
      const tdArray = tr[i].getElementsByTagName('td');
      for (var j = 0; j < tdArray.length; j++) {
        const cellValue = tdArray[j];
        if (cellValue && cellValue.innerHTML.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
          break;
        }
      }
    }
      }
  