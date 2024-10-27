<script lang="ts">
  import Icon from '$components/Icon.svelte';
  import Navigation from '$components/Navigation.svelte';
</script>

<header class="crow left w-full py-4 px-8" use:inspect={{ component: 'Header', direction: 'up' }}>
  <a href="/" class="crow gap-2 left">
    <Icon class="text-5xl scale-x-[-1]" name="crow-09" />
    <div class="text-2xl font-thin tracking-wider">{'Crow'}</div>
  </a>
  <Navigation />
</header>
