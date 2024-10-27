import autoImport from 'sveltekit-autoimport';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    autoImport({
      mapping: {
        inspect: "import inspect from '$src/utils/inspect.svelte'"
      }
    }),
    sveltekit()
  ]
});
