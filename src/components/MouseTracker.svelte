<script lang="ts">
  import store from '$src/store.svelte';
  import Tooltip from '$components/Tooltip.svelte';
  import { HighlightSvelte } from 'svelte-highlight';

  let x = $state(0);
  let y = $state(0);
  let parent = $state();

  const trackCursor = ({ clientX, clientY }) => {
    if (freeze) return;

    x = clientX;
    y = clientY;
  };

  let { visible, title, render, direction, freeze } = $derived(store.tooltip);

  let style = $derived.by(
    () => `left: calc(${0}px + ${x}px);top: calc(${-60 * +(direction === 'up')}px + ${y + 40}px);`
  );

  let code = $derived(title ? `${title}\n\n${render}` : render);
</script>

<div class:visible class:freeze class="mouse-tracker" {style} bind:this={parent}>
  <Tooltip xy={`${x}${y}`} {parent} {direction} width={280} margin="8px 8px 8px 8px">
    <HighlightSvelte {code} />
  </Tooltip>
</div>

<svelte:window on:mousemove={trackCursor} />

<style>
  :global(.support-icon .mtg-icon) {
    transform: translateY(2px);
  }
  .mouse-tracker {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    z-index: 1;
    pointer-events: none;
  }
  :global(.tooltip) {
    opacity: 0;
  }
  :global(.visible .tooltip) {
    opacity: 1;
  }
  :global(.tooltip-content) {
    background: black;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
  }
  .freeze {
    pointer-events: auto;
  }
  :global(.freeze .tooltip) {
    pointer-events: auto;
  }
</style>
