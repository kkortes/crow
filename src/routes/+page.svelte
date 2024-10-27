<script lang="ts">
  import Accordion from '$components/Accordion.svelte';
  import AsyncExample from '$components/AsyncExample.svelte';
  import AsyncExampleCode from '$components/AsyncExampleCode.svelte';

  const paths = import.meta.glob('../components/examples/*.svelte', { eager: true });

  const urls = Object.keys(paths).map((url) => {
    const reversed = url.split('/').toReversed();
    return `${reversed[1]}/${reversed[0]}`;
  });

  let shiftBeingPressed = $state(false);
  let isOpen = $state(false);

  $effect(() => {
    setTimeout(() => {
      isOpen = true;
    }, 1000);

    const pressingShift = ({ shiftKey }) => {
      shiftBeingPressed = !!shiftKey;
    };
    const releasingShift = ({ shiftKey }) => {
      shiftBeingPressed = !!shiftKey;
    };

    document.addEventListener('keydown', pressingShift);
    document.addEventListener('keyup', releasingShift);

    return () => {
      document.removeEventListener('keydown', pressingShift);
      document.removeEventListener('keyup', releasingShift);
    };
  });
</script>

<crow class="w-full gap-4 px-8 pb-8 leading-[0]">
  <crow vertical class="flex-1 gap-8" left>
    <h1 class="font-[futura]">
      <span class="text-blue-600 text-5xl">A CSS layout solution,</span><br />
      <span class="text-blue-400 text-4xl tracking-wider">for your entire app</span>
    </h1>
    <p class="text-xl font-thin">
      Crow is an idiomatic way of building websites. It gets rid<br /> of a bunch of nonsense and gets
      straight to the point.
    </p>

    <crow class="gap-2">
      <a
        href="https://crow.korte.kim/crow.css"
        target="_blank"
        class="border active:translate-y-px leading-normal border-transparent bg-blue-600 text-white px-5 py-3 rounded-md font-thin tracking-wider hover:bg-blue-600/90"
      >
        Download CSS
      </a>
      <button
        class="border active:translate-y-px leading-normal border-blue-600 bg-transparent text-blue-600 px-5 py-3 rounded-md font-thin tracking-wider hover:bg-blue-600/10"
      >
        Interactive tutorial
      </button>
    </crow>
  </crow>

  <crow class="gap-8 flex-none">
    <Accordion {isOpen}>
      <div>
        {#each urls as url}
          <crow vertical class="min-w-[300px] max-w-[300px]">
            <crow class="bg-gray-200 w-full p-4 rounded-t-lg">
              <crow
                class="bg-white [&>*>*]:bg-fuchsia-400 [&>*]:text-xl [&>*]:text-white [&>*]:w-full [&>*>*]:px-4 [&>*>*]:py-2 [&>*>*]:border-fuchsia-700 [&>*>*]:border"
              >
                <AsyncExample component={url} />
              </crow>
            </crow>
            <div class="text-sm w-full rounded-b-lg overflow-hidden">
              <AsyncExampleCode component={url} />
            </div>
          </crow>
        {/each}
      </div>
    </Accordion>
  </crow>
</crow>
