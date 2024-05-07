# WebGIS com Flask e OpenLayers

## Descrição
Este projeto é um aplicativo WebGIS desenvolvido com Flask e OpenLayers. Ele integra funcionalidades de geoprocessamento com uma interface de usuário interativa, usando JavaScript para adicionar funcionalidades dinâmicas ao mapa.

## Estrutura de Diretórios
- `static/`: Contém arquivos estáticos como CSS e imagens.
  - `css/`: Para arquivos de estilo.
  - `js/`: Para scripts JavaScript.
  - `img/`: Para imagens.
- `templates/`: Contém os modelos HTML que são renderizados pelo Flask.
- `flask_app.py`: O arquivo principal do aplicativo Flask que configura e inicia o servidor.

## Configuração e Instalação
Para configurar e executar este projeto, siga os passos abaixo:
1. Instale o Flask e outras dependências necessárias usando `pip install -r requirements.txt` (Você precisará criar este arquivo com as dependências).
2. Configure seu ambiente de desenvolvimento local.

## Execução do Aplicativo
Para iniciar o aplicativo, execute o seguinte comando no terminal:
```
python flask_app.py
```
Acesse o aplicativo através do navegador em `localhost:5000`.

## Integração de Scripts JavaScript como Módulos
Para melhor organização e manutenção, os scripts JavaScript são modularizados e armazenados dentro da pasta `static/js`. Aqui está como integrar e usar módulos no seu aplicativo:
- Crie arquivos JS como módulos exportando funções, objetos ou classes que serão usados em outros módulos.
- Importe esses módulos no arquivo `main.js` para usar as funcionalidades exportadas.
- No HTML, inclua o `main.js` com `type="module"` para suportar a importação de módulos.

### Exemplo de Módulo
```javascript
// static/js/backgrounds.js
export function backgroundLayers() {
    // Código para definir as camadas de fundo do mapa
}

// static/js/layers.js
export function baseLayers() {
    // Código para definir as camadas base do mapa
}

// static/js/main.js
import { backgroundLayers } from './backgrounds.js';
import { baseLayers } from './layers.js';

document.addEventListener('DOMContentLoaded', function() {
    backgroundLayers(); // Aplica camadas de fundo
    baseLayers(); // Aplica camadas base
});
```
### Referência no HTML
```html
<script type="module" src="{{ url_for('static', filename='js/main.js') }}"></script>
```

## Testes
Certifique-se de que os scripts JavaScript estão carregados corretamente testando o aplicativo no navegador e verificando se todas as funcionalidades do mapa estão operacionais.
