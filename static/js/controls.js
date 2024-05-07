// controls.js
export function CustomControls(map) {   
    // Remover controladores padrão
    map.getControls().clear();

    // Adicionar botões de zoom personalizados
    const zoomInIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/> <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/> </svg>'
    const zoomInButton = document.createElement('button');
    zoomInButton.innerHTML = zoomInIcon;
    zoomInButton.addEventListener('click', function() {
        // Lógica para zoom in
        const view = map.getView();
        const currentZoom = view.getZoom();
        view.setZoom(currentZoom + 1);
    });
    const zoomOutIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-out" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/> <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/> </svg>'
    const zoomOutButton = document.createElement('button');
    zoomOutButton.innerHTML = zoomOutIcon;
    zoomOutButton.addEventListener('click', function() {
        // Lógica para zoom out
        const view = map.getView();
        const currentZoom = view.getZoom();
        view.setZoom(currentZoom - 1);
    });
    // Botão de resetar a visualização do mapa
    const resetIcon = '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"> <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path> <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path> </g> </g></svg>'
    const resetViewButton = document.createElement('button');
    resetViewButton.innerHTML = resetIcon;
    resetViewButton.addEventListener('click', function(){
        // Lógica para resetar a visualização do mapa
        const initialCenter = ol.proj.fromLonLat([-38.5, -4.80]);
        const initialZoom = 7;

        // Reset the view to the initial values
        map.getView().setCenter(initialCenter);
        map.getView().setZoom(initialZoom);
    });
        
    // Controles personalizados de zoom
    const customZoomControls = document.createElement('div');
    customZoomControls.className = 'custom-zoom-controls';
    customZoomControls.appendChild(zoomInButton);
    customZoomControls.appendChild(zoomOutButton);
    customZoomControls.appendChild(resetViewButton);

    // Adiciona os controles ao mapa
    map.getTargetElement().appendChild(customZoomControls);
}
