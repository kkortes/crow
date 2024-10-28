<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import Box from '$components/Box.svelte';
</script>

<div>
  Let's look at these areas of facebook.com:
  <br /><br />
  <div class="bg-gray-100 p-0 md:px-20 md:py-4">
    <img src="/facebook-layout-4.png" alt="" />
  </div>
  <br />
  There are thousands of ways we could go about creating these. But if you think about it,
  <span class="font-medium">everything is a list</span>:
  <br /><br />
  <div class="row-up gap-2 text-xs">
    <div class="flex-1">
      <Box class="column-left gap-2">
        <div class="row gap-1">
          <div class="h-6 w-6 rounded-full bg-gray-300" />
          Josephine
        </div>
        <div class="row gap-1">
          <div class="h-6 w-6 bg-gray-300" />
          Watch
        </div>
        <div class="row gap-1">
          <div class="h-6 w-6 bg-gray-300" />
          Events
        </div>
      </Box>
      <div class="overflow-hidden rounded-b-md text-xs">
        <HighlightSvelte
          code={`<crow vertical left>
  <crow>
    <svg />
    Josephine
  </crow>
  <crow>
    <svg class="square" />
    Watch
  </crow>
  <crow>
    <svg class="square" />
    Events
  </crow>
</crow>
`.replace('*{}', '')}
        />
      </div>
    </div>
    <div class="flex-1">
      <Box class="row-left w-[300px] gap-1 sm:w-[300px]">
        <div class="h-6 w-6 rounded-full bg-gray-300" />
        Josephine
        <div class="h-6 w-6 rounded-full bg-gray-300" />
        <div class="h-6 w-6 rounded-full bg-gray-300" />
        <div class="h-6 w-6 rounded-full bg-gray-300" />
        <div class="h-6 w-6 rounded-full bg-gray-300" />
      </Box>

      <div class="overflow-hidden rounded-b-md text-xs">
        <HighlightSvelte
          code={`<crow left>
  <svg />
  Josephine
  <svg />
  <svg />
  <svg />
  <svg />
</crow>
`.replace(' *{}', '')}
        />
      </div>
    </div>
  </div>
  <br />
  If that's not considered clean & semantic code, I don't know what is.
</div>
