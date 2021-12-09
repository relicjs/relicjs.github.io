<div class="prose">

# Installation

## 1. Create a new Sveltekit project

In order to get started using Relic.JS you will need to create a new Sveltekit project and add Tailwind and DaisyUI to it.

Start by creating a new project.

```bash
$ npm init svelte@next my-app
$ cd my-app
$ npm install
```

> For more information on how to create and configure your Sveltekit project please refer to the official Sveltekit documentation at [kit.svelte.dev](https://kit.svelte.dev/docs).

## 2. Add TailwindCSS to your project

For the sake of simplicity we will be using the awesome [Svelte Add](https://github.com/svelte-add/svelte-add) library for that purpose. It simplifies the process of installing Tailwind and PostCSS with just one command.

```bash
$ npx svelte-add@latest tailwindcss
```

> We strongly recommend that you add the `Typography` and `Forms` plugins for Tailwind.

For usage in development environment it is also recommended to disable the Tailwind JIT mode in your `tailwind.config.cjs` config file:

```js
const config = {
    // ...

	// mode: 'jit', // <<< comment this line
    
    // ...
}
```

## 3. Add DaisyUI as a Tailwind plugin

You won't be using DaisyUI directly when dealing with RelicJS components but it should be installed and configured in your project.

```bash
$ npm i daisyui
```

And add daisyUI to your `tailwind.config.cjs`:

```js
module.exports = {

    plugins: [
      require('daisyui'),
    ],

  }
```

> For more information on how to install DaisyUI please check the official docs at [https://daisyui.com/docs/install](https://daisyui.com/docs/install)

## 4. Install RelicJS

The last step is to install RelicJS as a dependency in your project:

```bash
$ npm install relicjs
```

</div>