export function Backgrounds(map) {
    const attributionElement = document.createElement('div');

    const openStreetMapsPadrao = new ol.layer.Tile({
        source: new ol.source.OSM(),
        title: 'OpenStreetMaps',
        bg_id: '1'
    });

    const stamenToner = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png',
            attributions: 'Map tiles by Stamen Design, under CC BY 4.0. Data by OpenStreetMap, under ODbL.',
        }),
        title: 'Stamen Toner',
        bg_id: '2'

    });

    const stamenTerrain = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
            attributions: 'Map tiles by Stamen Design, under CC BY 4.0. Data by OpenStreetMap, under ODbL.'
        }),
        title: 'Stamen Terrain',
        bg_id: '3'

    });

    const baseLayerGroup = new ol.layer.Group({
        layers: [openStreetMapsPadrao, stamenToner, stamenTerrain]
    });

    const attributionControl = new ol.control.Attribution({
        collapsible: true,
        tipLabel: 'Atribuição',
        collapsed: false,
        target: attributionElement
    });

    map.addControl(attributionControl);
    map.addLayer(baseLayerGroup);
}
export function eventChangeBackground(map, targetBg) {
    map.getLayers().forEach(function(layer) {
        const bg_id = layer.get('bg_id');
        if (bg_id === targetBg) {
            layer.setVisible(true);
        } else {
            layer.setVisible(false);
        }
    });
}
