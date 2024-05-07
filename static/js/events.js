// events.js
import { eventChangeBackground } from "./backgrounds.js";


// importar novos eventos conforme forem criados

// Função para lidar com o clique nos botões de mudança de background
export function handleBackgroundChange(map) {
    const btnsChangeBackground = document.querySelectorAll('.btnChangeBackground');

    btnsChangeBackground.forEach(btn => {
        btn.addEventListener('click', function() {
            const bgId = this.getAttribute('data-bg-id');
            eventChangeBackground(map, bgId);
        });
    });
}

