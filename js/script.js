var page = require('webpage').create();
page.viewportSize = { width: 1920, height: 1080 };

page.open('https://trello.com/b/W2ToEZzp.html', function (status) {
page.evaluate(function() {
    
    document.body.style.margin = '10px 0px 0px 100px';
    document.getElementsByClassName('trello-lists')[0].style.backgroundColor = 'black';
    document.getElementsByClassName('trello-lists')[0].style.cssText = 'overflow:visible; background-color: black; white-space: normal;';
    document.getElementsByClassName('trello-board')[0].style.cssText = 'border:none; ';
    document.getElementsByClassName('trello-board-header')[0].remove();
    var elements = document.getElementsByClassName('trello-card-members');
    for (i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName('trello-list');
    for (i = 0; i < elements.length; i++) {
        elements[i].style.cssText = 'margin: 25px 5px; width : 220px;';
    }
    var el = document.getElementsByClassName('trello-list');
    el[el.length-1].style.cssText = 'position: absolute; bottom: 40px; left: 125px; width:160px;';
    el[el.length-2].style.cssText = 'position: absolute; bottom: 40px; right: 125px; width:160px;';
    var elements = document.getElementsByClassName('trello-list-name');
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    // var yyyy = today.getFullYear();

    // today = dd + '.' + mm ;
    // for (i = 0; i < elements.length; i++) {
    //     elements[i].style.textAlign = 'center';

    //     if(elements[i].textContent == " "+today+" "){elements[i].parentNode.style.cssText = 'background-color: #ffaacc; ';}
    // }
    
});
// var content = page.content;
// fs.write(path,content,'w');
	page.render('../src/github.png');
phantom.exit();
});
