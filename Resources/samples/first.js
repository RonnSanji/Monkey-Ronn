var win = Titanium.UI.createWindow({
    title : 'One',
    backgroundColor : 'white'
});

var monkey = Ti.UI.createImageView({
    image: './monkey.jpg'
});

win.add(monkey);
module.exports = win; 