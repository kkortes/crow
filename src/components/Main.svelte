<script lang="ts">
  let { children } = $props();
</script>

<crow vertical up left class="p-6" use:inspect={{ component: 'Main', direction: 'up' }}>
  {@render children()}
</crow>
