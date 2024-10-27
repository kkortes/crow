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

<crow class="min-h-screen bg-gradient-to-bl from-sky-100 to-sky-700">
  <crow vertical class="max-w-[1000px] bg-white shadow-lg rounded-lg">
    <Header />
    <Main {children} />
  </crow>
</crow>

<MouseTracker />
