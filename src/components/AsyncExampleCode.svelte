<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';

  let { component, ...props }: { component: string } = $props();

  let [satisfy, vite] = $derived.by(() =>
    component.replace('./', '').replace('.svelte', '').split('/')
  );
</script>

{#await import(`./${satisfy}/${vite}.svelte?raw`) then { default: component }}
  <HighlightSvelte code={component.replace(/\s+use:inspect=\{\{.*?\}\}/g, '')} {...props} />
{:catch}
  <div class="text-red-500">Error loading code</div>
{/await}
