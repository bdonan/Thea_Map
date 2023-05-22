var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_THEAAwardsV6copy_1 = new ol.format.GeoJSON();
var features_THEAAwardsV6copy_1 = format_THEAAwardsV6copy_1.readFeatures(json_THEAAwardsV6copy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_THEAAwardsV6copy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THEAAwardsV6copy_1.addFeatures(features_THEAAwardsV6copy_1);
var lyr_THEAAwardsV6copy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_THEAAwardsV6copy_1, 
                style: style_THEAAwardsV6copy_1,
                interactive: true,
                title: 'THEA-Awards-V6 copy'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_THEAAwardsV6copy_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_THEAAwardsV6copy_1];
lyr_THEAAwardsV6copy_1.set('fieldAliases', {'Name': 'Name', 'Park / Venue': 'Park / Venue', 'City': 'City', 'IP Owner': 'IP Owner', 'Company': 'Company', 'Country': 'Country', 'State / Region': 'State / Region', 'Geopolitical Region': 'Geopolitical Region', 'THEA Year': 'THEA Year', 'Operating': 'Operating', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Award': 'Award', 'Category': 'Category', });
lyr_THEAAwardsV6copy_1.set('fieldImages', {'Name': 'TextEdit', 'Park / Venue': 'TextEdit', 'City': 'TextEdit', 'IP Owner': 'TextEdit', 'Company': 'TextEdit', 'Country': 'TextEdit', 'State / Region': 'TextEdit', 'Geopolitical Region': 'TextEdit', 'THEA Year': 'Range', 'Operating': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Award': 'TextEdit', 'Category': 'TextEdit', });
lyr_THEAAwardsV6copy_1.set('fieldLabels', {'Name': 'no label', 'Park / Venue': 'no label', 'City': 'no label', 'IP Owner': 'no label', 'Company': 'no label', 'Country': 'no label', 'State / Region': 'no label', 'Geopolitical Region': 'no label', 'THEA Year': 'no label', 'Operating': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Award': 'no label', 'Category': 'no label', });
lyr_THEAAwardsV6copy_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});