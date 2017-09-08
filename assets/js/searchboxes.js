function searchByName() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("findblocks");
  filter = input.value.toUpperCase();
  table = document.getElementById("blocks");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function searchByID() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("findids");
  filter = input.value.toUpperCase();
  table = document.getElementById("blocks");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function searchByPrice() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("findprice");
  filter = input.value.toUpperCase();
  table = document.getElementById("blocks");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function searchByBuy() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("findbuy");
  filter = input.value.toUpperCase();
  table = document.getElementById("blocks");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
