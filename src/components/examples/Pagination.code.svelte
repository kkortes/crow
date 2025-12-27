<script>
  import Icon from '$components/Icon.svelte';
</script>

<crow>
  <button
    class="crow aspect-square w-12 rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100 active:translate-y-px"
  >
    <Icon class="text-[8px]" name="chevron-left" />
  </button>
  <crow class="flex-1">
    <button
      class="crow -ml-px aspect-square w-12 rounded-l-md border border-gray-300 bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-100 active:translate-y-px"
    >
      1
    </button>
    <button
      class="crow -ml-px aspect-square w-12 border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100 active:translate-y-px"
    >
      2
    </button>
    <button
      class="crow -ml-px aspect-square w-12 border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100 active:translate-y-px"
    >
      ...
    </button>
    <button
      class="crow -ml-px aspect-square w-12 border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100 active:translate-y-px"
    >
      11
    </button>
    <button
      class="crow -ml-px aspect-square w-12 rounded-r-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100 active:translate-y-px"
    >
      12
    </button>
  </crow>
  <button
    class="crow -ml-px aspect-square w-12 rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100 active:translate-y-px"
  >
    <Icon class="scale-x-[-1] text-[8px]" name="chevron-left" />
  </button>
</crow>
