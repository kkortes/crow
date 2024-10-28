<script lang="ts">
  import Accordion from '$components/Accordion.svelte';
  import CrowPreview from '$components/CrowPreview.svelte';
  import Icon from '$components/Icon.svelte';
  import { twMerge } from 'tailwind-merge';

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

<crow class="w-full !items-stretch gap-4 leading-[0]">
  <crow vertical left class="!justify-between">
    <div>
      <a href="/" class="crow left gap-2">
        <Icon class="text-3xl" name="crow" />
        <div class="text-lg font-thin tracking-wider">{'Crow'}</div>
      </a>
    </div>

    <crow class="flex-1 p-6" vertical>
      <Accordion isOpen={!showTutorial}>
        <div>
          <crow vertical class="flex-1 gap-8 p-2" left>
            <h1 class="font-[futura]">
              <span class="text-5xl text-blue-600">A CSS layout solution,</span><br />
              <span class="text-4xl tracking-wider text-blue-400">for your entire app</span>
            </h1>
            <p class="text-xl font-thin tracking-wide">
              Crow is an idiomatic way of building websites. It gets rid<br /> of a bunch of nonsense
              and gets straight to the point.
            </p>

            <crow class="gap-2">
              <a
                href="https://crow.korte.kim/crow.css"
                target="_blank"
                class="rounded-md border border-transparent bg-blue-600 px-5 py-3 font-thin leading-normal tracking-wider text-white outline-0 ring-2 ring-transparent transition-all duration-75 hover:bg-blue-600/90 focus:ring-blue-400/50"
              >
                Download CSS
              </a>
              <button
                onclick={() => (showTutorial = true)}
                class="rounded-md border border-blue-600 bg-transparent px-5 py-3 font-thin leading-normal tracking-wider text-blue-600 outline-0 ring-2 ring-transparent transition-all duration-75 hover:bg-blue-600/10 focus:ring-blue-400/50"
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

              <label class="crow gap-2 font-thin">
                <input
                  bind:checked={crowProps.up}
                  type="checkbox"
                  class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
                />
                Up
              </label>
              <label class="crow gap-2 font-thin">
                <input
                  bind:checked={crowProps.right}
                  type="checkbox"
                  class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
                />
                Right
              </label>
              <label class="crow gap-2 font-thin">
                <input
                  bind:checked={crowProps.down}
                  type="checkbox"
                  class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
                />
                Down
              </label>
              <label class="crow gap-2 font-thin">
                <input
                  bind:checked={crowProps.left}
                  type="checkbox"
                  class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
                />
                Left
              </label>
              <label class="crow gap-2 font-thin">
                <input
                  bind:checked={crowProps.vertical}
                  type="checkbox"
                  class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
                />
                Vertical
              </label>
            </crow>
            <crow class="gap-4" vertical left>
              <span class="font-medium"> {'Other settings'} </span>
              <label class="crow gap-2 font-thin">
                <input
                  bind:checked={squareWrapper}
                  type="checkbox"
                  class="h-6 w-11 appearance-none rounded-full border-2 border-gray-400 bg-gray-400 outline-0 ring-2 ring-transparent transition-all duration-75 before:block before:aspect-square before:h-full before:rounded-full before:bg-white before:transition-all before:duration-75 before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:ml-5 focus:ring-blue-400/50"
                />
                Square wrapper
              </label>
              <label class="crow gap-2 font-thin">
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

    <div
      class={twMerge(
        'duration-750 pointer-events-none -mb-3 -ml-3 w-full opacity-0 transition-opacity',
        showTutorial && 'pointer-events-auto opacity-100'
      )}
    >
      <crow class="!justify-between gap-2" down left>
        <button
          onclick={() => (showTutorial = false)}
          class="rounded-md border border-transparent bg-transparent px-3 py-2 text-sm font-thin tracking-wider text-blue-600 outline-0 ring-2 ring-transparent transition-all duration-200 hover:bg-blue-600/10 focus:ring-blue-400/50 active:translate-y-px"
        >
          <crow class="gap-2">
            <Icon class="text-[6px] leading-[0]" name="chevron-left" />
            <div>Back</div>
          </crow>
        </button>

        <crow right>
          <div class="border border-transparent px-3 py-2 text-sm font-medium text-black">
            Learn more
          </div>
          <a
            href="/philosophies"
            onclick={() => (showTutorial = true)}
            class="rounded-md border border-transparent bg-transparent px-3 py-2 text-sm font-thin leading-normal tracking-wider text-blue-600 outline-0 ring-2 ring-transparent transition-all duration-75 hover:bg-blue-600/10 focus:ring-blue-400/50"
          >
            Philosophies
          </a>

          <a
            href="/examples"
            onclick={() => (showTutorial = true)}
            class="rounded-md border border-transparent bg-transparent px-3 py-2 text-sm font-thin leading-normal tracking-wider text-blue-600 outline-0 ring-2 ring-transparent transition-all duration-75 hover:bg-blue-600/10 focus:ring-blue-400/50"
          >
            Examples
          </a>
        </crow>
      </crow>
    </div>
  </crow>

  <crow class="flex-none gap-8">
    <Accordion isOpen={showDebugger}>
      <div>
        <CrowPreview {...crowProps} {squareWrapper} {classBased} />
      </div>
    </Accordion>
  </crow>
</crow>
