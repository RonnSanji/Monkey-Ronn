var firstWin = require('./samples/first');
var secondWin = require('./samples/second');
var thirdWin = require('./samples/third');

function buttonTo(nextWin) {
    var button = Ti.UI.createButton({
        title : 'Next',
        top : '10dp',
        right : '10dp'
    });

    button.addEventListener('click', function() {
        navWin.openWindow(nextWin, {
            animated : true
        });   
    });
    
    return button;
}

firstWin.add(buttonTo(secondWin));
secondWin.add(buttonTo(thirdWin));

var navWin = Titanium.UI.iOS.createNavigationWindow({
   window: firstWin
});
navWin.open();