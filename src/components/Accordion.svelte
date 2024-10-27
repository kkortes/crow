<script>
  import { onMount } from 'svelte';

  export let clamp = 'none';
  export let isOpen = false;

  const transitionClass = 'transition-grid-template-rows';
  let accordion;
  let clampedHeight = 0;
  let clamped = true;

  const calcClampedHeight = (clamp) => {
    if (clamp === 'none') return;
    const classes = [...accordion.classList];

    accordion.classList.remove(transitionClass);
    if (classes.includes('grid-rows-0fr')) accordion.classList.remove('grid-rows-0fr');
    if (classes.includes('grid-rows-1fr')) accordion.classList.remove('grid-rows-1fr');

    clampedHeight = accordion.children[0].getBoundingClientRect().height;
    console.log(clampedHeight);

    if (classes.includes('grid-rows-0fr')) accordion.classList.add('grid-rows-0fr');
    if (classes.includes('grid-rows-1fr')) accordion.classList.add('grid-rows-1fr');
    accordion.classList.add(transitionClass);
  };

  const transitionStarted = (e) => {
    if (e.target.classList.contains('grid-rows-1fr')) {
      clamped = !isOpen;
    }
  };
  const transitionEnded = (e) => {
    if (e.target.classList.contains('grid-rows-0fr')) {
      clamped = !isOpen;
    }
  };

  onMount(() => {
    calcClampedHeight(clamp);

    accordion.addEventListener('transitionstart', transitionStarted);
    accordion.addEventListener('transitionend', transitionEnded);

    clamped = !isOpen;

    return () => {
      accordion.removeEventListener('transitionstart', transitionStarted);
      accordion.removeEventListener('transitionend', transitionEnded);
    };
  });
</script>

<div
  bind:this={accordion}
  class="grid transition-grid-template-rows {isOpen ? 'grid-rows-1fr' : 'grid-rows-0fr'}"
>
  <div
    class="overflow-hidden clamp"
    class:clamped
    style="--clamp: {clamp}; --min-height: {clampedHeight}px;"
  >
    <slot />
  </div>
</div>

<style>
  .grid {
    display: grid;
  }
  .transition-grid-template-rows {
    transition: grid-template-rows 1000ms ease-out;
  }
  .grid-rows-1fr {
    grid-template-rows: 1fr;
  }
  .grid-rows-0fr {
    grid-template-rows: 0fr;
  }
  .overflow-hidden {
    overflow: hidden;
  }

  .clamped {
    -webkit-line-clamp: var(--clamp);
  }
  .clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    min-height: var(--min-height);
  }
</style>
