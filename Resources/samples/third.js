var win = Ti.UI.createWindow({
    title : 'Three',
    backgroundColor: 'white',
    monkeyId: 'root_win'
});

var animator = Ti.UI.iOS.createAnimator({referenceView: win});

var block = Ti.UI.createView({
    width: 50,
    height: 50,
    backgroundColor: 'green',
    monkeyId: 'green_block'
});
var blockDynamic = Ti.UI.iOS.createDynamicItemBehavior({
    friction: 0.5,
});
blockDynamic.addItem(block);
animator.addBehavior(blockDynamic);

var collision = Ti.UI.iOS.createCollisionBehavior();
collision.addItem(block);
animator.addBehavior(collision);

var push = Ti.UI.iOS.createPushBehavior({
    pushMode: Ti.UI.iOS.PUSH_MODE_INSTANTANEOUS
});
push.addItem(block);
animator.addBehavior(push);

function randomMovement() {
    var animateBlock = Titanium.UI.createAnimation({
        transform: Ti.UI.create2DMatrix().rotate(48),
        duration: 1000 
    }); 
    block.animate(animateBlock);
    
    // r = (degress * pi)/180
    push.angle = ((Math.random() * 360 + 1) * Math.PI)/180;
    push.magnitude = Math.random() + 1;
    push.active = true;
}

animator.addEventListener('resume', function() {
    block.backgroundColor = 'red';
    block.removeEventListener('click', randomMovement);
});

animator.addEventListener('pause', function() {
    block.backgroundColor = 'green';
    block.addEventListener('click', randomMovement);    
});

win.addEventListener('open', function(e){
    animator.startAnimator();   
});

win.addEventListener('blur', function(e){
    animator.stopAnimator();
});

win.addEventListener('click', function(e) {
    
    if(e.source.monkeyId === 'root_win') {
        var capX = Ti.Platform.displayCaps.platformWidth/2;
        var capY = Ti.Platform.displayCaps.platformHeight/2;
        
        var movToX =  e.x < capX ? (-1 * ((e.x/100) + 1)): e.x/100; 
        var movToY =  e.y < capY ? (-1 * ((e.y/100) + 2)): e.y/100;
        
        push.setPushDirection({x:movToX, y:movToY});
        push.active = true;   
    }
});

win.add(block);

module.exports = win; 