var dateh4 =  document.getElementById('date');
var timeh4 = document.getElementById('time');
var tBody = document.getElementsByTagName('tbody')[0];
var accountBtn = document.getElementById('accountBtn');
var addAccountsBtn =    document.getElementById('addAccountsBtn');
var mainRow =  document.getElementById('mainRow');
var id_i =  document.getElementById('id_i');
var accForEdit;
var name_i =  document.getElementById('name_i');
var deposit_i =  document.getElementById('deposit_i');
var cCard_i =  document.getElementById('cCard_i');
var sub_i = document.getElementById('sub_i');
var editBtn =  document.getElementById('editBtn');
var edit_i = document.getElementById('edit_i');
edit_i.addEventListener('click',editDb);
editBtn.addEventListener('click',newTable);
addAccountsBtn.addEventListener('click',showForm);
accountBtn.addEventListener('click',displayAccounts);
sub_i.addEventListener('click',addToDb);
var text = "";

var db = [
  {
    id: 001,
    name: "Jane Doe",
    deposit: 210000,
    cCard: "Visa"
  },
  {
    id: 002,
    name: "John Doe",
    deposit: 180000,
    cCard: "Maestro"
  }
]
showDateandTime()
displayAccounts();
function showDateandTime() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var date = now.toDateString();
  if (h < 10) {
    h= "0"+h;
  }
  if (m < 10) {
    m = "0"+m;
  }
  if (s < 10) {
    s = "0"+s;
  }


  var time = h+":"+m+":"+s;
  timeh4.innerHTML = time;
  dateh4.innerHTML = date;


  setTimeout(showDateandTime,1000);
}

function displayAccounts(){
  mainRow.style.display = "block";
  formRow.style.display = "none";
  text = "";
  for(var i = 0; i < db.length;i++){
  text +='<tr><td>'+db[i].id+'</td><td>'+db[i].name+'</td><td>'+db[i].deposit+'</td><td>'+db[i].cCard+'</td></tr>'
  }

  tBody.innerHTML =  text;
}
function showForm(){
  id_i.value = "";
  name_i.value = "";
  deposit_i.value =  "";
  cCard_i.value = "";
  mainRow.style.display = "none";
  formRow.style.display = "block";
  sub_i.style.display = "block";
  edit_i.style.display = "none";
}

function addToDb(){
  var obj =    {
    id: id_i.value,
    name: name_i.value,
    deposit: deposit_i.value,
    cCard: cCard_i.value
  }
  db.push(obj);
  id_i.value = "";
  name_i.value = "";
  deposit_i.value =  "";
  cCard_i.value = "";
  displayAccounts();
}

function newTable(){
  mainRow.style.display = "block";
  formRow.style.display = "none";
  text = "";
  for(var i = 0; i < db.length;i++){
  text +='<tr><td>'+db[i].id+'</td><td>'+db[i].name+'</td><td>'+db[i].deposit+'</td><td>'+db[i].cCard+'</td><td><input type="button" value="edit" class="'+i+' tableBtns btn btn-sm btn-warning"></td><td><input type="button" value="delete" class="'+i+' tableBtns btn btn-sm btn-danger"></td></tr>'
  }

  tBody.innerHTML =  text;
  var allBtns = document.getElementsByClassName('tableBtns');
  for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click',editAccount);
  }
}
function editAccount() {
  if (this.value === "delete") {
    var accForDelete = this.className[0];
    db.splice(accForDelete,1);
    displayAccounts();
  }else {
      showForm();
      sub_i.style.display = "none";
      edit_i.style.display = "block";
      accForEdit = this.className[0];
      id_i.value = db[accForEdit].id;
      name_i.value = db[accForEdit].name;
      deposit_i.value =  db[accForEdit].deposit;
      cCard_i.value = db[accForEdit].cCard;
  }
}
function  editDb(){
  var obj =    {
    id: id_i.value,
    name: name_i.value,
    deposit: deposit_i.value,
    cCard: cCard_i.value
  }
  db[accForEdit] = obj;
  displayAccounts();
}
