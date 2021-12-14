<script>
  import { CodeSnippet } from 'relicjs/components'
</script>

<p>
  <img src="/relic-logo.png" alt="RelicJS Logo" class="w-32" />
</p>

<h1>Installation</h1>

<h2>1. Create a new Sveltekit project</h2>

<p>In order to get started using Relic.JS you will need to create a new Sveltekit project and add Tailwind and DaisyUI to it.</p>

<p>Start by creating a new project.</p>

<div class=" alert alert-error"><div class="flex-1"><svg class="inline-block text-error svelte-vivkue" style="width:24px;height:24px;" viewBox="0 0 24 24"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg> <div class="mx-2"><h4>Lorem ipsum dolor sit amet, consectetur adip!</h4> </div></div> </div>

<CodeSnippet>
{`$ npm init svelte@next my-app
$ cd my-app
$ npm install`}
</CodeSnippet>

<blockquote>
For more information on how to create and configure your Sveltekit project please refer to the official Sveltekit documentation at <a href="https://kit.svelte.dev/docs">kit.svelte.dev</a>.
</blockquote>

<h2>2. Add TailwindCSS to your project</h2>

For the sake of simplicity we will be using the awesome [Svelte Add](https://github.com/svelte-add/svelte-add) library for that purpose. It simplifies the process of installing Tailwind and PostCSS with just one command.

<CodeSnippet>
{`$ npx svelte-add@latest tailwindcss`}
</CodeSnippet>

<blockquote>
  We strongly recommend that you add the `Typography` and `Forms` plugins for Tailwind.
</blockquote>

<p>For usage in development environment it is also recommended to disable the Tailwind JIT mode in your `tailwind.config.cjs` config file:</p>

<CodeSnippet>
{` const config = {
    // ...

	// mode: 'jit', // <<< comment this line
    
    // ...
} `}
</CodeSnippet>

<p>3. Add DaisyUI as a Tailwind plugin</p>

<p>You won't be using DaisyUI directly when dealing with RelicJS components but it should be installed and configured in your project.</p>

<CodeSnippet>
{`$ npm i daisyui`}
</CodeSnippet>

<p>And add daisyUI to your `tailwind.config.cjs`:</p>

<CodeSnippet>
{`module.exports = {

    plugins: [
      require('daisyui'),
    ],

  }`}
</CodeSnippet>

<blockquote>
  For more information on how to install DaisyUI please check the official docs at [https://daisyui.com/docs/install](https://daisyui.com/docs/install)
</blockquote>

<h2>4. Install RelicJS</h2>

<p>The last step is to install RelicJS as a dependency in your project:</p>

<CodeSnippet>
{`$ npm install relicjs`}
</CodeSnippet>