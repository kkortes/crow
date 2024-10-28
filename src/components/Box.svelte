<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    desc?: String;
    class?: string;
    children: Snippet;
  };

  let { desc, class: classes, children }: Props = $props();
</script>

<div class="flex flex-col items-center justify-between bg-gray-100 p-2 sm:p-4">
  <div class={twMerge('h-[96px] w-[96px] bg-white sm:h-[144px] sm:w-[144px]', classes)}>
    {@render children()}
  </div>
  {#if desc}
    <div class="mt-1 text-center text-sm text-gray-700">
      {desc}
    </div>
  {/if}
</div>
