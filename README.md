# Gerador e Validador de CPFs

Este é um projeto simples que fornece uma interface web para gerar e validar CPFs (Cadastro de Pessoas Físicas) no Brasil. Ele foi construído utilizando HTML, CSS e JavaScript, e é dividido em diferentes módulos para melhor organização e manutenção do código.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:


### Descrição dos Diretórios e Arquivos

- **/node_modules**: Contém as dependências do projeto instaladas via npm.
- **/public**: Contém os arquivos HTML e os assets compilados (JavaScript e CSS).
  - **/assets/js**: Arquivos JavaScript minificados e suas sourcemaps.
  - **gerador.html**: Página para gerar CPFs.
  - **home.html**: Página inicial do projeto.
  - **sobre.html**: Página com informações sobre o projeto.
  - **validador.html**: Página para validar CPFs.
- **/src**: Contém os arquivos-fonte do projeto.
  - **/assets/css**: Arquivos CSS utilizados para o estilo das páginas.
    - **/modules**: Módulos CSS para componentes específicos como a barra de navegação.
  - **style.css**: Estilos principais do site.
  - **styles.css**: Estilos adicionais.
- **/img**: (Pasta para imagens, caso necessário).
- **/modules**: Contém módulos JavaScript específicos:
  - **GeraCPF.js**: Módulo para gerar CPFs válidos.
  - **ValidaCPF.js**: Módulo para validar a autenticidade de um CPF.
- **main.js**: Script principal que gerencia a interação com o DOM e eventos.
- **.gitignore**: Arquivo que especifica os arquivos e diretórios que o Git deve ignorar.
- **package-lock.json**: Arquivo gerado automaticamente pelo npm que mantém o registro exato das versões instaladas das dependências.
- **package.json**: Arquivo de configuração do npm que contém as dependências do projeto e scripts de build.
- **webpack.config.js**: Configuração do Webpack para a compilação dos arquivos JavaScript e CSS.

## Funcionalidades

- **Gerar CPF**: Gera um CPF válido com base em regras definidas.
- **Validar CPF**: Verifica se um CPF inserido é válido.
- **Interface Responsiva**: A interface foi desenhada para ser responsiva, funcionando bem tanto em dispositivos móveis quanto em desktops.

## Como Usar

1. Clone o repositório em sua máquina local:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Instale as dependências utilizando o npm:
    ```sh
    npm install
    ```

3. Para compilar os arquivos JavaScript e CSS, utilize o Webpack:
    ```sh
    npm run build
    ```

4. Abra os arquivos HTML no seu navegador para acessar as funcionalidades de geração e validação de CPFs.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Webpack**

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.