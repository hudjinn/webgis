function init() {
    const map = new ol.Map({
        target: 'map',
        view: new ol.View({
            center: ol.proj.fromLonLat([-38.5, -4.80]),
            zoom: 7,
            minZoom: 7,
            maxZoom: 15
        }),
    });

    map.getControls().clear();
    // Adicionar botões de zoom personalizados
    const zoomInIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/> <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/> </svg>'
    const zoomInButton = document.createElement('button');
    zoomInButton.innerHTML = zoomInIcon;
    zoomInButton.addEventListener('click', function() {
        const view = map.getView();
        const currentZoom = view.getZoom();
        view.setZoom(currentZoom + 1);
    });
    const zoomOutIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-out" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/> <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/> </svg>'
    const zoomOutButton = document.createElement('button');
    zoomOutButton.innerHTML = zoomOutIcon;
    zoomOutButton.addEventListener('click', function() {
        const view = map.getView();
        const currentZoom = view.getZoom();
        view.setZoom(currentZoom - 1);
    });
    const resetIcon = '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"> <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path> <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path> </g> </g></svg>'
    const resetViewButton = document.createElement('button');
    resetViewButton.innerHTML = resetIcon;
    resetViewButton.addEventListener('click', function(){
        const initialCenter = ol.proj.fromLonLat([-38.5, -4.80]);
        const initialZoom = 7;
  
        // Reset the view to the initial values
        map.getView().setCenter(initialCenter);
        map.getView().setZoom(initialZoom);
      });
        

    const customZoomControls = document.createElement('div');
    customZoomControls.className = 'custom-zoom-controls';
    customZoomControls.appendChild(zoomInButton);
    customZoomControls.appendChild(zoomOutButton);
    customZoomControls.appendChild(resetViewButton);
    
    map.addControl(new ol.control.Control({
        element: customZoomControls
    }));

    const AdutoraCamada = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: '192.168.10.74/geoserver/malha_dagua/wms',//
            params: {
                'LAYERS': 'malha_dagua:adutoras_ramais_ce',
                'TILED': true
            },
            serverType: 'geoserver'
        }),
        title: 'Adutoras e Ramais'
    });

    const EdificacaoCamada = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: '192.168.10.74/geoserver/malha_dagua/wms',//
            params: {
                'LAYERS': 'malha_dagua:edificacao_ceara',
                'TILED': true
            },
            serverType: 'geoserver'
        }),
        title: 'Edificações'
    });    // Camada WMS

    const LimitesMunicipaisCamada = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: '192.168.10.74/geoserver/malha_dagua/wms',//
            params: {
                'LAYERS': 'malha_dagua:limite_municipal_ce_ibge_sirgas_2000_utm_24s',
                'TILED': true
            },
            serverType: 'geoserver'
        }),
        title: 'Limites Municipais'
    });
    const PontoCaptacaoCamada = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: '192.168.10.74/geoserver/malha_dagua/wms',//
            params: {
                'LAYERS': 'malha_dagua:ponto_captacao_ceara',
                'TILED': true
            },
            serverType: 'geoserver'
        }),
        title: 'Pontos de Captação'
    });
    const PontosAbastecimentoCamada = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: '192.168.10.74/geoserver/malha_dagua/wms',//
            params: {
                'LAYERS': 'malha_dagua:ponto_abastecimento_ceara',
                'TILED': true
            },
            serverType: 'geoserver'
        }),
        title: 'Pontos de Abastecimento'
    });
 
    // Defina a visibilidade das camadas que deseja desabilitar
    EdificacaoCamada.setVisible(false);
    PontosAbastecimentoCamada.setVisible(false);
    PontoCaptacaoCamada.setVisible(false);

    const wmsLayerGroup = new ol.layer.Group({
        layers: [LimitesMunicipaisCamada, EdificacaoCamada, AdutoraCamada,  PontoCaptacaoCamada, PontosAbastecimentoCamada ],
        title: 'Camadas WMS'
    });
    // Layers de Fundo - Tiles
    const openStreetMapsPadrao = new ol.layer.Tile({
        source: new ol.source.OSM(
        
        ),
        title: 'OpenStreetMaps'
    });

    const stamenToner = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png',
            attributions: 'Map tiles by Stamen Design, under CC BY 4.0. Data by OpenStreetMap, under ODbL.',
        }),
        title: 'Stamen Toner'
    });

    const stamenTerrain = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
            
            attributions: 'Map tiles by Stamen Design, under CC BY 4.0. Data by OpenStreetMap, under ODbL.'
        }),
        title: 'Stamen Terrain'
    });

    // Grupo de Layers
    const baseLayerGroup = new ol.layer.Group({
        layers: [openStreetMapsPadrao, stamenToner, stamenTerrain]
    });

    const attributionElement = document.createElement('div');
    const attributionControl = new ol.control.Attribution({
        collapsible: true,
        tipLabel: 'Atribuição',
        collapsed: false,
        target: attributionElement
    });

    // criando view padrão

    map.addControl(attributionControl);
    map.addLayer(openStreetMapsPadrao);
    map.addLayer(wmsLayerGroup)
 
    // Adicione uma caixa para cada camada do grupo wmsLayerGroup, na ordem inversa

    const layerList = document.getElementById('layer-list');
    const layersArray = wmsLayerGroup.getLayers().getArray();
    for (let i = layersArray.length - 1; i >= 0; i--) {
        const layer = layersArray[i];

        const layerCheckbox = document.createElement('input');
        layerCheckbox.type = 'checkbox';
        layerCheckbox.checked = layer.getVisible();
        layerCheckbox.addEventListener('change', function () {
            layer.setVisible(this.checked);
        });

        const layerLabel = document.createElement('span');
        layerLabel.textContent = layer.get('title');

        const layerDiv = document.createElement('div');
        layerDiv.appendChild(layerCheckbox);
        layerDiv.appendChild(layerLabel);
        layerList.appendChild(layerDiv);
    }

    // Tornar a lista ordenável usando a biblioteca Sortable
    new Sortable(layerList, {
        animation: 150,
        onUpdate: function (evt) {
            const layers = wmsLayerGroup.getLayers().getArray();
            const movedLayer = layers.splice(evt.oldIndex, 1)[0];
            layers.splice(evt.newIndex, 0, movedLayer);
            wmsLayerGroup.setLayers(new ol.Collection(layers));
        }
    });


    // Event listener para os botões de opção do switcher
    const radioButtons = document.querySelectorAll('#switcher input[type="radio"]');
    const checkboxTextLabels = document.querySelector('#texto input[type="checkbox"]');

    for (let i = 0; i < radioButtons.length; i++) {
        
        radioButtons[i].addEventListener('click', function () {
            const selectedLayerIndex = parseInt(this.value, 10);
            const selectedLayer = baseLayerGroup.getLayers().item(selectedLayerIndex);

            map.getLayers().clear();
            map.addLayer(selectedLayer);
            map.addLayer(wmsLayerGroup);

            attributionControl.setCollapsed(false); // Expandir a attribution para exibir todos os dados
            
            // Atualizar os botões de rádio com base na opção selecionada
            for (let j = 0; j < radioButtons.length; j++) {
                radioButtons[j].checked = (j === selectedLayerIndex);
            }
        });

    }
    map.on('singleclick', function (evt) {
        document.getElementById('info').innerHTML = '';
        const viewResolution = /** @type {number} */ (map.getView().getResolution());
        const urlPromises = [];
    
        wmsLayerGroup.getLayers().forEach(function (layer) {
            if (layer.getVisible()) {
                const source = layer.getSource();
                if (source instanceof ol.source.TileWMS) {
                    const url = source.getFeatureInfoUrl(
                        evt.coordinate,
                        viewResolution,
                        'EPSG:3857',
                        {'INFO_FORMAT': 'text/html'}
                    );
                    if (url) {
                        urlPromises.push(
                            fetch(url)
                                .then((response) => response.text())
                        );
                    }
                }
            }
        });
    
        Promise.all(urlPromises)
            .then((responses) => {
                const html = responses.join('<hr>');
                document.getElementById('info').innerHTML = html;
            })
            .catch((error) => {
                console.error('Erro ao obter informações de atributos:', error);
            });
    });
    
    map.on('pointermove', function (evt) {
        if (evt.dragging) {
            return;
        }
        const hit = map.hasFeatureAtPixel(evt.pixel);
        map.getTargetElement().style.cursor = hit ? 'pointer' : '';
    });
    

    // Event listener para o checkbox de rótulos
    checkboxTextLabels.addEventListener('change', function () {
        if (this.checked) {
            // Alterar as URLs das camadas base que têm rótulos
            openStreetMapsPadrao.getSource().setUrl(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`);
            stamenToner.getSource().setUrl(`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png`);
            stamenTerrain.getSource().setUrl(`http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg`);
        } else {
            // Restaurar as URLs das camadas base sem rótulos
            openStreetMapsPadrao.getSource().setUrl(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`);
            stamenToner.getSource().setUrl(`https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}.png`);
            stamenTerrain.getSource().setUrl(`http://tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg`);
        }
        

    });


}


    window.onload = init;
