# Weather-app

<details>
<summary>Table of content</summary>

- [Description](#description)
- [Screenshots 🖵](#screenshots-)
- [Project structure](#project-structure)
- [Installation 📥](#installation-)
- [How to use](#how-to-use)
- [Tech/Framework used 🧰](#techframework-used-)
- [APIs used](#apis-used)
- [Deployment/Live Demo](#deploymentlive-demo)
</details>

## Description

Return a weather forecast based on user's input location.

## Screenshots 🖵

<details>
<summary>Home page</summary>

![home page](https://user-images.githubusercontent.com/77184432/215291138-711a6f7a-9b56-4ece-b764-8e68e415a45f.png)

</details>

<details>
<summary>Getting weather forecast data for USA</summary>
    
![USA weather forecast](https://user-images.githubusercontent.com/77184432/215291229-2ed58180-84e5-41c2-9924-c0dfc9b79947.png)

</details>

<details>
<summary>Help page</summary>
    
![Help page](https://user-images.githubusercontent.com/77184432/215291289-95bf1cf9-bd8e-4e47-8396-28317c266215.png)
    
</details>

<details>
<summary>About page</summary>
    
![About me page](https://user-images.githubusercontent.com/77184432/215291362-bfe60ebe-9d8a-4d24-bead-01fac9a07da9.png)

</details>

## Project structure

<details>
<summary>Click to expand!</summary>

```bash
## Project Structure

📦Weather-app
 ┣ 📂public
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📂img
 ┃ ┃ ┣ 📜favicon.png
 ┃ ┃ ┗ 📜me.jpg
 ┃ ┗ 📂js
 ┃ ┃ ┗ 📜scribt.js
 ┣ 📂src
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜forecast.js
 ┃ ┃ ┗ 📜geocode.js
 ┃ ┗ 📜app.js
 ┣ 📂templates
 ┃ ┣ 📂partials
 ┃ ┃ ┣ 📜footer.hbs
 ┃ ┃ ┗ 📜header.hbs
 ┃ ┗ 📂views
 ┃ ┃ ┣ 📜404.hbs
 ┃ ┃ ┣ 📜about.hbs
 ┃ ┃ ┣ 📜help.hbs
 ┃ ┃ ┗ 📜index.hbs
 ┣ 📜.gitignore
 ┣ 📜package.json
 ┗ 📜README.md

```

</details>

## Installation 📥

Install my-project with npm

```bash
> git clone https://github.com/AbdelrahmanShaheen/Weather-app
> cd Weather-app/
> npm install
```

## How to use

use the scripts in package.json

```bash
> npm run start
or
> npm run dev
```

or

```bash
> node src/app.js
or
> nodemon src/app.js -e js,hbs
```

the backend server will be running on prot 3000

## Tech/Framework used 🧰

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/)
- [hbs](https://www.npmjs.com/package/hbs)

## APIs used

- [apilayer](https://apilayer.com/) for forward geocoding.
- [weatherstack](https://weatherstack.com/) to return the weather forecast for a given town/place.

## Deployment/Live Demo

Deployed Website: [weather app](https://abdelrahmanshaheen-weather-app.onrender.com/)
