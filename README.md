# Music-Suggestions :computer:

###### O Music-Suggestions é um projeto Front End desenvolvido em ReacJS com objetivo de por em prática o aprendizado em consumo de API REST em linguagem Java
---
# Sumário

- [O que é](#o-que-é)
- [Documentação](#documentação)
- [Instalação](#instalação)

### O que é
É uma aplicação que permite listar sugestões de playlist de acordo com região pesquisada.

### Documentação

**ATENÇÃO**
O app utili as API's abaixo:

`Spotify API`: https://developer.spotify.com/documentation/
`OpenWeather API`: https://openweathermap.org/current
`Music-Seggestion API v2`: https://github.com/JSouza27/Music-Suggestions-Api-v2

### Instalação

Clone o repositório com o comando abaixo
**Chave SSH**
```bash
git clone git@github.com:JSouza27/music-suggestions-frontend.git
```
**Chave HTTPS**
```bash
https://github.com/JSouza27/music-suggestions-frontend.git
```

entre na pasta
```bash
cd music-suggestions-frontend/
```

instale as dependencias com
```bash
npm install
```
ou
```bash
yarn install
```
é necessário ter clonado a Music-Seggestion API v2 e configurar um arquivo `.env` para configurar as variáveis de ambiente utilizando as chaves abaixo
```bash
REACT_APP_API_BASE_URL=Endereço na qual está rodando a API Music-Seggestion API v2
REACT_APP_API_OPEN_WEATHER_APPID=Chave gerada no cadastro do site da API
REACT_APP_CLIENT_ID=Chave gerada com cadastro no Spotify
REACT_APP_CLIENT_SECRET=Chave gerada com cadastro no Spotify
```

e inicie a aplicação
```bash
npm start
```

sua aplicação irá iniciar no seu ambiente local, e sua url de acesso será
```bash
http://localhost:3000/
```

Espero que se divita, lembrando que esse app ainda está em desenvolvimento.
