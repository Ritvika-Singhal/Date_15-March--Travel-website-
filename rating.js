let arr = [];

const Add = () => {
    let getSelectedValue = document.querySelector(   
        'input[name="rate"]:checked');   
        
        let rvw = {};
        let placeName = document.getElementById("place").value;
        if(getSelectedValue){
            var rating = getSelectedValue.value;
            if(rating == 1)
            {
                rating = '*';
            }
            else if(rating == 2)
            {
                rating = '**';
            }
    else if(rating == 3)
    {
        rating = '***';
    }
    else if(rating == 4)
    {
        rating = '****';
    }
    else{
        rating = '*****';
    }
    console.log(rating);
}
let feedback = document.getElementById("rev").value;
let err1 = document.getElementById("err1");
let err2 = document.getElementById("err2");

let edit = document.createElement("button");
edit.classList.add("btn", "btn-success", "btn-lg");
let Span1 = document.createElement("span");
Span1.setAttribute('class', 'glyphicon glyphicon-pencil');
edit.appendChild(Span1);

let del = document.createElement("button");
del.classList.add("btn", "btn-danger", "btn-lg");
let Span2 = document.createElement("span");
Span2.setAttribute('class', 'glyphicon glyphicon-trash');
del.appendChild(Span2);

if(placeName){
    if(getSelectedValue != null) {
        let table = document.getElementById("tbl");
        let tr = table.getElementsByTagName("tr");
        let total = document.getElementById("inp1");
        total.value = tr.length;

        rvw = {placeName,rating,feedback,edit,del,id:arr.length+1}
        arr.push(rvw);
        console.log(arr);
        err1.innerHTML = "";
        err2.innerHTML = "";
        changePage(1);
        document.getElementById("rev").value = '';
        document.getElementById("place").value = '';
        document.querySelector('input[name="rate"]:checked').checked = false;
        
    }
    else{
        err2.style.display = "block";
        // err2.innerHTML = "Please give ratings";
        toastr.error("Please give ratings");
    }
}
else
{
    err1.style.display = "block";
    // err1.innerHTML = "Please select any place to rate";
    toastr.error("Please select any place to rate");
    return false;
}
}


const search = () => {
//   var input, filter, table, tr, td, i, txtValue;
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("tbl");
  let tr = table.getElementsByTagName("tr");
  console.log(tr.length);
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

let records_per_page = 2;

var current_page = 1;

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("tbl");
    var page_span = document.getElementById("page");
    // let tr = listing_table.getElementsByTagName("tr");
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        if(arr[i] !== undefined) {
            let table = document.getElementById("tbl");
        let row = document.createElement('tr');

        let cell1 = document.createElement('td');
        cell1.textContent = arr[i].placeName;
        row.appendChild(cell1);
        let cell2 = document.createElement('td');
        cell2.textContent = arr[i].rating;
        row.appendChild(cell2);
        let cell3 = document.createElement('td');
        cell3.textContent = arr[i].feedback;
        row.appendChild(cell3);
        let cell4 = document.createElement('td');
        cell4.appendChild(arr[i].edit)
        row.appendChild(cell4);
        cell4.addEventListener("click", function() {
            cell3.contentEditable = true;
            cell3.style.backgroundColor = "#dddbdb";
          } );
          cell3.addEventListener("blur", function() {
            cell3.contentEditable = false;
            cell3.style.backgroundColor = "#f2f2f2";
          } );
       
        let cell5 = document.createElement('td');
        cell5.appendChild(arr[i].del);
        row.setAttribute("id",i)
        row.appendChild(cell5);
        
        listing_table.appendChild(row);
        cell5.addEventListener('click', event => {
            removeElement(row);            
        });
        }
    }
    page_span.innerHTML = page;


    function removeElement(row) {
        console.log(row.id);
        arr.splice((row.id),1);
        changePage(page)

    }
    
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(arr.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};


function showRows() {
    records_per_page = parseInt(document.getElementById("numOfRows").value);
 console.log(records_per_page);
 
 document.getElementById("tbl").innerHTML = "";
 changePage(1);
 }
