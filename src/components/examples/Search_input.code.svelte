<script>
  import Icon from '$components/Icon.svelte';
</script>

<div>
  <crow class="gap-3 rounded-md bg-gray-50 p-3 shadow-md">
    <Icon class="text-xl text-gray-400" name="search" />
    <input
      type="text"
      placeholder="Type to search..."
      class="w-20 flex-1 border-gray-300 bg-transparent outline-none placeholder:text-gray-400"
    />
  </crow>
</div>
