// main.js

import { CustomControls } from "./controls.js";
import { Backgrounds } from "./backgrounds.js";
import { initRasterLayers, initVectorLayers } from "./layers.js";
import { Sliders } from "./sliders.js";
import "./events.js";

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

    // Adicionar controles customizados
    CustomControls(map);

    // Adicionar camadas de fundo
    Backgrounds(map);

    // Inicializar camadas raster e obter referência às camadas
    const rasterLayers = initRasterLayers(map);

    // Inicializar camadas vetoriais (se necessário)
    // const vectorLayers = initVectorLayers(map);

    // Adicionar sliders
    Sliders(map);

   // Adicionar botões de camadas raster ao DOM
   const layersPanel = document.getElementById('layers-panel');

   rasterLayers.forEach(layer => {
       const button = document.createElement('button');
       button.classList.add('layer-button');
       button.dataset.layer = layer.get('title');
       button.innerHTML = `<i class="${layer.get('iconClass')}"></i>`; // Lendo o ícone da camada
       button.title = layer.get('title'); // Adicionando o título como dica de ferramenta

       button.addEventListener('click', () => {
           // Verificar se a camada correspondente está ativa
           const isActive = layer.getVisible();

           // Desativar todas as camadas raster
           rasterLayers.forEach(l => l.setVisible(false));
           // Remover a classe 'active' de todos os botões
           document.querySelectorAll('.layer-button').forEach(btn => btn.classList.remove('active'));

           // Ativar a camada correspondente apenas se estiver desativada
           if (!isActive) {
               layer.setVisible(true);
               button.classList.add('active');
           } else {
               button.classList.remove('active');
           }
       });

       layersPanel.appendChild(button);
   });



    // Adicionar botões de camadas vetor ao DOM

}

window.onload = init;
