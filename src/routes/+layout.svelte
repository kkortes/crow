<script lang="ts">
  import '../app.css';
  import onedark from 'svelte-highlight/styles/onedark';
  import MouseTracker from '$components/MouseTracker.svelte';
  import Header from '$components/Header.svelte';
  import Main from '$components/Main.svelte';

  let { children } = $props();
</script>

<svelte:head>
  {@html onedark}
</svelte:head>

<crow class="min-h-screen bg-gradient-to-bl from-sky-100 to-sky-700 py-20">
  <crow vertical class="max-w-[1000px] rounded-lg bg-white shadow-lg">
    <!-- <Header /> -->
    <Main {children} />
  </crow>
</crow>

<MouseTracker />
