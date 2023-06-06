## Instalación

- Instala [Node](https://nodejs.org/en/download) última versión (verifica node abriendo una terminal y escribe `node -v`, verifica npm `npm -v`)
- Instala [Angular](https://angular.io/guide/setup-local) instala globalmente `npm install -g @angular/cli@latest`
- Instala [Primeng](https://primeng.org/installation) isntala globalmente `npm i primeng@v16.0.0-rc.2`
- Instala [PrimeIcons](https://www.primefaces.org/diamond/icons.xhtml) instala globalmente `npm i primeicons`

## Proyecto

Clona el proyecto escribiendo en una terminal apuntando a la carpeta que desees `git clone https://github.com/LSystemsLabs/pokeapp.git`
Abre el proyecto desde vscode o desde la terminal dentro de la carpeta pokeapp `code .`

Abierto el proyecto abre una terminal `ng serve` para inciar el proyecto

Styles
Theme and Core styles are the necessary css files of the components, visit the Themes section for the complete list of available themes to choose from. Styles can either be imported at angular.json or src/styles.css file.

angular.json

````...
"styles": [
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    ...
]```

add in style.scss

````

@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeng/resources/primeng.css";
@import "primeicons/primeicons.css";

```


## Pokeapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
```
