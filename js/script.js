function newItem(){
  
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
    alert("Must type something!");
    } else {
       let list = $('#list');
        list.append(li);
    }
    function crossOut() {
        li.toggleClass('strike');
    }

     li.on('dblclick',crossOut);

    let crossOutButton = $('<button></button>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem(){
        li.addClass('delete');
    }

    $('#list').sortable();

}