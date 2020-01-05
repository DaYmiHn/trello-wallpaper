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
    for (i = 0; i < document.getElementsByClassName('trello-card--label').length; i++) {
        var el = document.getElementsByClassName('trello-card--label')[i].parentNode;
        el = el.parentNode;
        el.innerHTML = el.innerHTML.strike();
    }
	var el = document.getElementsByClassName('trello-list-name');
	for (i = 1; i < el.length; i++) {
	    if (i==6|i==7|i==13|i==14|i==20|i==21) {el[i-1].style.color = 'red'}
	}
    
});
// var content = page.content;
// fs.write(path,content,'w');
	page.render('../src/github.png');
phantom.exit();
});
