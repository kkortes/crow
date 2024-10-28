<script lang="ts">
  import AsyncExample from '$components/AsyncExample.svelte';
  import AsyncExampleCode from '$components/AsyncExampleCode.svelte';
  import { filterSplit } from '$src/utils/helpers';

  const previews = import.meta.glob('../../components/examples/*.example.svelte', {
    eager: true
  });
  const previewsCorrected = Object.keys(previews).map((url) => {
    const reversed = url.split('/').toReversed();
    return `${reversed[1]}/${reversed[0]}`;
  });

  const codes = import.meta.glob('../../components/examples/*.code.svelte', { eager: true });
  const codesCorrected = Object.keys(codes).map((url) => {
    const reversed = url.split('/').toReversed();
    return `${reversed[1]}/${reversed[0]}`;
  });

  const urls = previewsCorrected.map((url, i) => ({
    preview: url,
    code: codesCorrected[i]
  }));

  const [smalls, bigs] = filterSplit(
    urls,
    ({ preview }) =>
      preview.includes('Icon_+_text') ||
      preview.includes('Spinner') ||
      preview.includes('Link_list') ||
      preview.includes('User_details') ||
      preview.includes('Breadcrumb') ||
      preview.includes('Search_input')
  );
</script>

<crow vertical class="gap-4" left>
  <h1 class="text-3xl">Examples</h1>
  <p class="font-thin tracking-wide">
    Here are a few examples on how you could utilize {'<crow>'}. Embrace the idea of "everything is
    a list".<br />
    I left out styling from the code on purpose to reduce noise.
  </p>
</crow>

<crow vertical class="mt-20 gap-8">
  <div class="columns-3 gap-6">
    {#each smalls as { preview, code }, i}
      <div class="mb-6 w-[288px] overflow-hidden">
        {i + 1}. {preview.split('/').toReversed()[0].split('.')[0].replaceAll('_', ' ')}
        <hr
          class="mb-3 mt-2 h-px w-full border-none bg-gradient-to-r from-gray-200 to-transparent"
        />
        <crow class="w-full rounded-t-lg bg-gray-200 p-4">
          <crow class="bg-white [&>*]:w-full [&>*]:p-8">
            <AsyncExample component={code || preview} />
          </crow>
        </crow>
        <div class="w-full overflow-hidden rounded-b-lg text-sm">
          <AsyncExampleCode component={preview} />
        </div>
      </div>
    {/each}
  </div>

  <crow vertical class="w-full">
    {#each bigs as { preview, code }, i}
      <div class="mb-6 w-full overflow-hidden">
        {i + 1 + smalls.length}. {preview
          .split('/')
          .toReversed()[0]
          .split('.')[0]
          .replaceAll('_', ' ')}
        <hr
          class="mb-3 mt-2 h-px w-full border-none bg-gradient-to-r from-gray-200 to-transparent"
        />
        <crow class="w-full rounded-t-lg bg-gray-200 p-4">
          <crow class="bg-white [&>*]:w-full [&>*]:p-8">
            <AsyncExample component={code || preview} />
          </crow>
        </crow>
        <div class="w-full overflow-hidden rounded-b-lg text-sm">
          <AsyncExampleCode component={preview} />
        </div>
      </div>
    {/each}
  </crow>
</crow>
