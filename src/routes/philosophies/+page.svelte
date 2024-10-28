<script>
  import EverythingIsAList from '$components/EverythingIsAList.svelte';
  import Icon from '$components/Icon.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<crow vertical class="gap-4 font-thin tracking-wide" left>
  <h1 class="font-[futura] text-3xl">Philosophies</h1>

  <hr class="h-px w-full border-none bg-gray-300" />

  <h2 class="font-[futura] text-xl text-blue-400">Everything is a list</h2>
  <EverythingIsAList />

  <hr class="my-12 h-px w-full border-none bg-gray-300" />

  <h2 class="font-[futura] text-xl text-blue-400">Isolation of concern</h2>
  <p class="font-thin tracking-wide">All to often I see something like this:</p>
  <crow class="gap-4">
    <div class="overflow-hidden rounded-md text-xs">
      <HighlightSvelte
        code={`<div class="menu">
  <div class="headline">Dishes</div>
  <ul class="list">
    <li><a>Meatballs</a></li>
    <li><a>Pad thai</a></li>
    <li><a>Carbonara</a></li>
  </ul>
</div>

<style>
  .menu {
    background: lightgray;
    padding: 16px;
  }
  .headline {
    margin-bottom: 16px;
  }
  .list > li {
    margin-bottom: 8px;
  }
</style>
`.replace('*{}', '')}
      />
    </div>
    <Icon name="chevron-right" />
    <div class="rounded-md bg-gray-100 p-4">
      <div class="mb-4 text-xl">Dishes</div>
      <ul>
        <li class="mb-2"><a class="font-thin text-blue-500">Meatballs</a></li>
        <li class="mb-2"><a class="font-thin text-blue-500">Pad thai</a></li>
        <li class="mb-2"><a class="font-thin text-blue-500">Carbonara</a></li>
      </ul>
    </div>
  </crow>

  <p class="font-thin tracking-wide">
    Notice the extra <strong>8px</strong> margin at the bottom. This is a very common issue and
    almost every website have a few of these.<br />
    In some cases, for example when listing elements horizontally, you can get away with it - because
    it's not noticable:
  </p>
  <crow class="gap-4">
    <div class="overflow-hidden rounded-md text-xs">
      <HighlightSvelte
        code={`<div class="breadcrumb">
  <div>User</div>
  <div>/</div>
  <div>Details</div>
  <div>/</div>
  <div>Edit</div>
</div>

<style>
  .breadcrumb {
    background: lightgray;
    padding: 16px;
  }
  .breadcrumb > div {
    margin-right: 8px;
  }
</style>
`.replace('*{}', '')}
      />
    </div>
    <Icon name="chevron-right" />
    <div class="flex rounded-md bg-gray-100 px-8 py-4 font-thin">
      <div class="mr-2">User</div>
      <div class="mr-2">/</div>
      <div class="mr-2">Details</div>
      <div class="mr-2">/</div>
      <div class="mr-2">Edit</div>
    </div>
    <Icon name="chevron-right" />
    <div class="flex rounded-md bg-gray-100 px-8 py-4 font-thin">
      <div class="mr-2">User</div>
      <div class="mr-2">/</div>
      <div class="mr-2">Details</div>
      <div class="mr-2">/</div>
      <div>Edit</div>
      <div class="w-2 bg-red-400"></div>
    </div>
  </crow>
  <p class="font-thin tracking-wide">
    Luckily if you are using a modern CSS-framework such as Tailwind they do take care of these
    things for you.
    <br /><br />
    However, going back to the first example you would still have the .headline push the list down by
    16px by manually applying margin. So even if you are using smart utility classes (such as Tailwind's
    "space-y-2") you'll still encounter situations where you feel the urge to push elements manually.
    <br /><br />
    Working with crow you have nothing of that. Each element "minds its own business", if you will:
  </p>
  <crow class="gap-4">
    <div class="overflow-hidden rounded-md text-xs">
      <HighlightSvelte
        code={`<div class="menu crow vertical left gap-4">
  Dishes
  <ul class="crow vertical left gap-2">
    <li><a>Meatballs</a></li>
    <li><a>Pad thai</a></li>
    <li><a>Carbonara</a></li>
  </ul>
</div>

<style>
  .menu {
    background: lightgray;
    padding: 16px;
  }
</style>
`.replace('*{}', '')}
      />
    </div>
    <Icon name="chevron-right" />
    <div class="crow vertical left gap-4 rounded-md bg-gray-100 p-4">
      <div class="text-xl">Dishes</div>
      <ul class="crow vertical left gap-2">
        <li><a class="font-thin text-blue-500">Meatballs</a></li>
        <li><a class="font-thin text-blue-500">Pad thai</a></li>
        <li><a class="font-thin text-blue-500">Carbonara</a></li>
      </ul>
    </div>
  </crow>
  <p class="font-thin tracking-wide">
    Working this way we get more predictable results & elements/components that will work in
    isolation.
  </p>
</crow>
