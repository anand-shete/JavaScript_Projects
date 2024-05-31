const tableBody = document.querySelector('tbody');

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let val = localStorage.getItem(key);

  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
        <td> ${i + 1} </td>
        <td> ${key} </td>
        <td> ${val}</td>
        <td> <button class= "btn btn-success" onclick="removeItem('${key}')" > Done</button></td>
    `;
  //items can be appended inside other elements , but they can be appneded in document only
  tableBody.appendChild(tableRow)
} console.log(localStorage);

addToList = () => {
  let title = prompt("Enter Title: ");
  let task = prompt("Enter task");
  localStorage.setItem(title, task);  
  // preventDefault()           If we dont want page to reload
  location.reload()             //reloading web page to see the changes in localStorage
}

myClear = () => {
  tableBody.innerHTML = "";
  localStorage.clear();
}
function removeItem(pos) {
  localStorage.removeItem(pos);
  location.reload();
}