<script lang="ts">
  let { component, ...props }: { component: string } = $props();

  let [satisfy, vite] = $derived.by(() =>
    component.replace('./', '').replace('.svelte', '').split('/')
  );
</script>

{#await import(`./${satisfy}/${vite}.svelte`) then { default: component }}
  <svelte:component this={component} {...props} />
{:catch}
  <div class="text-red-500">Error loading component</div>
{/await}
