<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import { twMerge } from 'tailwind-merge';

  let { squareWrapper, classBased, ...crowProps } = $props();

  let filteredProps = $derived(Object.entries(crowProps).filter(([_, value]) => value));
  let objectProps = $derived(
    filteredProps.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  );

  let element = $derived(!!classBased ? 'div' : 'crow');

  const renderProps = () => {
    let string = '';
    if (filteredProps.length) {
      string = `${filteredProps.map(([key]) => key).join(' ')}`;
    }
    if (!!classBased) {
      string = `class="crow${string ? ` ${string}` : ''}"`;
    }
    return string ? ` ${string}` : '';
  };

  let code = $derived(
    `<${element}${renderProps()}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</${element}>`
  );
</script>

<crow vertical class="min-w-[300px] max-w-[300px]">
  <crow class="w-full rounded-t-lg bg-gray-200 p-4">
    <crow
      class={twMerge(
        'flex-1 bg-white [&>*>*]:border [&>*>*]:border-fuchsia-700 [&>*>*]:bg-fuchsia-400 [&>*>*]:px-4 [&>*>*]:py-2 [&>*]:w-full [&>*]:text-xl [&>*]:text-white',
        !!squareWrapper && 'aspect-square'
      )}
    >
      <crow {...objectProps}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </crow>
    </crow>
  </crow>
  <div class="w-full overflow-hidden rounded-b-lg text-sm">
    <HighlightSvelte {code} />
  </div>
</crow>
