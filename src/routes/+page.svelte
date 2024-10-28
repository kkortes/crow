<script lang="ts">
  import Accordion from '$components/Accordion.svelte';
  import CrowPreview from '$components/examples/CrowPreview.svelte';

  // const paths = import.meta.glob('../components/examples/*.svelte', { eager: true });

  // const urls = Object.keys(paths).map((url) => {
  //   const reversed = url.split('/').toReversed();
  //   return `${reversed[1]}/${reversed[0]}`;
  // });

  let shiftBeingPressed = $state(false);
  let showDebugger = $state(false);
  let showTutorial = $state(false);

  let squareWrapper = $state(true);
  let classBased = $state(false);
  let crowProps = $state({
    vertical: false,
    up: false,
    right: false,
    down: false,
    left: false
  });

  let snap = { ...crowProps };
  $effect(() => {
    if (!snap.up && crowProps.up) crowProps.down = false;
    if (!snap.down && crowProps.down) crowProps.up = false;

    if (!snap.right && crowProps.right) crowProps.left = false;
    if (!snap.left && crowProps.left) crowProps.right = false;

    snap = { ...crowProps };
  });

  $effect(() => {
    setTimeout(() => {
      showDebugger = true;
    }, 750);

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
  <crow vertical>
    <Accordion isOpen={!showTutorial}>
      <div>
        <crow vertical class="flex-1 gap-8 p-2" left>
          <h1 class="font-[futura]">
            <span class="text-5xl text-blue-600">A CSS layout solution,</span><br />
            <span class="text-4xl tracking-wider text-blue-400">for your entire app</span>
          </h1>
          <p class="text-xl font-thin">
            Crow is an idiomatic way of building websites. It gets rid<br /> of a bunch of nonsense and
            gets straight to the point.
          </p>

          <crow class="gap-2">
            <a
              href="https://crow.korte.kim/crow.css"
              target="_blank"
              class="rounded-md border border-transparent bg-blue-600 px-5 py-3 font-thin leading-normal tracking-wider text-white hover:bg-blue-600/90 active:translate-y-px"
            >
              Download CSS
            </a>
            <button
              onclick={() => (showTutorial = true)}
              class="rounded-md border border-blue-600 bg-transparent px-5 py-3 font-thin leading-normal tracking-wider text-blue-600 hover:bg-blue-600/10 active:translate-y-px"
            >
              Interactive tutorial
            </button>
          </crow>
        </crow>
      </div>
    </Accordion>
    <Accordion isOpen={showTutorial}>
      <div class="leading-normal">
        <crow class="gap-8 p-2" left up>
          <crow vertical class="gap-4" left up>
            <span class="font-medium"> {'Settings <crow>'} </span>

            <label class="crow gap-2">
              <input
                bind:checked={crowProps.up}
                type="checkbox"
                class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
              />
              Up
            </label>
            <label class="crow gap-2">
              <input
                bind:checked={crowProps.right}
                type="checkbox"
                class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
              />
              Right
            </label>
            <label class="crow gap-2">
              <input
                bind:checked={crowProps.down}
                type="checkbox"
                class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
              />
              Down
            </label>
            <label class="crow gap-2">
              <input
                bind:checked={crowProps.left}
                type="checkbox"
                class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
              />
              Left
            </label>
            <label class="crow gap-2">
              <input
                bind:checked={crowProps.vertical}
                type="checkbox"
                class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
              />
              Vertical
            </label>

            <button
              onclick={() => (showTutorial = false)}
              class="mt-4 rounded-md border border-blue-600 bg-transparent px-3 py-2 text-sm font-thin leading-normal tracking-wider text-blue-600 hover:bg-blue-600/10 active:translate-y-px"
            >
              Go back
            </button>
          </crow>
          <crow class="gap-4" vertical left>
            <span class="font-medium"> {'Other settings'} </span>
            <label class="crow gap-2">
              <input
                bind:checked={squareWrapper}
                type="checkbox"
                class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
              />
              Square wrapper
            </label>
            <label class="crow gap-2">
              <input
                bind:checked={classBased}
                type="checkbox"
                class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
              />
              Class based
            </label>
          </crow>
        </crow>
      </div>
    </Accordion>
  </crow>

  <crow class="flex-none gap-8">
    <Accordion isOpen={showDebugger}>
      <div>
        <CrowPreview {...crowProps} {squareWrapper} {classBased} />
        <!-- {#each urls as url}
          <crow vertical class="min-w-[300px] max-w-[300px]">
            <crow class="w-full rounded-t-lg bg-gray-200 p-4">
              <crow
                class="bg-white [&>*>*]:border [&>*>*]:border-fuchsia-700 [&>*>*]:bg-fuchsia-400 [&>*>*]:px-4 [&>*>*]:py-2 [&>*]:aspect-square [&>*]:w-full [&>*]:text-xl [&>*]:text-white"
              >
                <AsyncExample component={url} />
              </crow>
            </crow>
            <div class="w-full overflow-hidden rounded-b-lg text-sm">
              <AsyncExampleCode component={url} />
            </div>
          </crow>
        {/each} -->
      </div>
    </Accordion>
  </crow>
</crow>
