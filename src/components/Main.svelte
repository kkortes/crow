<script lang="ts">
  let { children } = $props();
</script>

<crow vertical up left class="p-6">
  {@render children()}
</crow>
