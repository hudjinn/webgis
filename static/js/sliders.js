// sliders.js

// No arquivo sliders.js

// Definir os valores de startdate e enddate com horas fixas
let startDate = new Date("2023-01-01T00:00:00");
let endDate = new Date("2023-12-31T23:00:00");

export function Sliders(map) {
    // Métodos para definir startdate e enddate
    const setStartDate = (date) => {
        startDate = date;
        // Atualizar o atributo 'min' do slider quando o startdate é definido
        slider.setAttribute('min', startDate.getTime());
    };

    const setEndDate = (date) => {
        endDate = date;
        // Atualizar o atributo 'max' do slider quando o enddate é definido
        slider.setAttribute('max', endDate.getTime());
    };

    // Criar ou modificar o slider
    const sliderContainer = document.getElementById('slider-container');
    const slider = document.createElement('input');
    slider.setAttribute('type', 'range');
    slider.setAttribute('class', 'slider');
    slider.setAttribute('id', 'slider');

    // Definir o valor padrão inicial para o slider como o início do intervalo
    slider.setAttribute('value', startDate.getTime());

    slider.setAttribute('min', startDate.getTime());
    slider.setAttribute('max', endDate.getTime());
    sliderContainer.appendChild(slider);

    // Adicionar evento de mudança ao slider
    slider.addEventListener('input', function() {
        updateSelectedDate(this.value);
    });

    // Função para atualizar a data selecionada
    function updateSelectedDate(value) {
        const selectedDate = document.getElementById('SelectedDate');
        const date = new Date(parseInt(value));
        const formattedDate = formatDate(date);
        selectedDate.textContent = formattedDate;
    }

    // Função para formatar a data
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    // Retornar os métodos setStartDate e setEndDate
    return {
        setStartDate,
        setEndDate
    };
}
