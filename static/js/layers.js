export function initRasterLayers(map) {
    const rasterLayers = [];

    // Função para adicionar uma nova camada raster ao grupo de camadas WMS
    function addRasterLayerToGroup(layer) {
        rasterLayers.push(layer);
        layer.getSource().on('tileloadstart', () => {
            showLoadingIndicator();
        });
        layer.getSource().on('tileloadend', () => {
            hideLoadingIndicator();
        });
        layer.getSource().on('tileloaderror', () => {
            hideLoadingIndicator();
        });
    }

    // Inserir camadas raster
    // Exemplo de camada de precipitação
    const PrecipitacaoCamada = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http://192.168.10.74/geoserver/testagem_dashboards/wms',
            params: {
                'LAYERS': 'testagem_dashboards:precipitation_test',
                'TILED': true,
                'VERSION': '1.1.0', // Especifique a versão se necessário
                'FORMAT': 'image/png', // Defina o formato da imagem (exemplo: image/png)
                'SRS': 'EPSG:4674' // Sistema de referência espacial
            },
            serverType: 'geoserver'
        }),
        title: 'Precipitação',
        iconClass: 'fas fa-tint' // Ícone para a camada de precipitação
    });

    // Adicionando ao grupo de camadas raster
    PrecipitacaoCamada.setVisible(false); // Definindo a visibilidade como false

    addRasterLayerToGroup(PrecipitacaoCamada);
    const VaporCamada = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'https://view.eumetsat.int/geoserver/ows',
            params: {
                'LAYERS': 'msg_fes:wv062',
                'FORMAT': 'image/png',
                'VERSION': '1.3.0', // Versão do WMS
                'WIDTH': 20,
                'HEIGHT': 20
            },
            serverType: 'geoserver'
        }),
        title: 'EUMETSAT - Vapor de água',
        iconClass: 'fas fa-cloud', // Adicionando o ícone como um atributo
        // Adicionando uma legenda para a camada
        legendUrl: 'https://view.eumetsat.int/geoserver/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=msg_fes%3Awv062'
    });
    VaporCamada.setVisible(false); // Definindo a visibilidade como false

    addRasterLayerToGroup(VaporCamada);

    // Inserir mais camadas raster conforme necessário

    const RasterLayerGroup = new ol.layer.Group({
        layers: rasterLayers,
        title: 'Camadas Raster',
    });

    // Adiciona o grupo de camadas raster ao mapa
    map.addLayer(RasterLayerGroup);

    // Retorna as camadas raster para que possam ser acessadas em main.js
    return rasterLayers;
}

export function initVectorLayers(map) {
    const vectorLayers = [];

    // Função para adicionar uma nova camada vetorial ao grupo de camadas WMS
    function addVectorLayerToGroup(layer) {
        vectorLayers.push(layer);
    }

    // Inserir camadas vetoriais
    // Exemplo de camada vetorial
    // const minhaCamadaVector = ...

    // Adicionando ao grupo de camadas vetoriais
    // addVectorLayerToGroup(minhaCamadaVector);

    // Inserir mais camadas vetoriais conforme necessário

    // Retornar o grupo de camadas vetoriais
    // return vectorLayers;
}
function showLoadingIndicator() {
    document.getElementById('loading-overlay').style.display = 'block';
}

function hideLoadingIndicator() {
    document.getElementById('loading-overlay').style.display = 'none';
}