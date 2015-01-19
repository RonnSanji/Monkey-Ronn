var Map = require('ti.map');

var win = Titanium.UI.createWindow({
    title : 'Two',
    backgroundColor : 'white'
});

var singapore = Map.createAnnotation({
    latitude:1.2961670,
    longitude:103.7870090,
    title:"Singapore Office",
    pincolor:Map.ANNOTATION_RED,
});

var mapview = Map.createView({
    mapType: Map.NORMAL_TYPE,
    region: {latitude:1.2961670, longitude:103.7870090,
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    userLocation:true,
    annotations:[singapore]
});

win.add(mapview);

module.exports = win; 