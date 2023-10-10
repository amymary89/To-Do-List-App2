let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert("Must type something!");
} else {
    $('#list').append(li);
}
function crossOutButton() {
    li.toggleClass("strike");
}

li.on("dblclick", function strikeOut() {
    li.toggleClass("strike");
});

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton("click", deleteListItem);
function deleteListItem(){
    li.addClass("delete")
}

$('#list').sortable();