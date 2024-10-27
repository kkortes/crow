import store from '$src/store.svelte';
import Navigation from '$src/components/Navigation.svelte?raw';
import Header from '$src/components/Header.svelte?raw';
import Main from '$src/components/Main.svelte?raw';

const components = {
  Navigation,
  Header,
  Main
};

export default (node, props) => {
  const mouseover = (e) => {
    const { component, direction } = props;
    if (!e.shiftKey) {
      mouseleave();
      return;
    }
    e.stopPropagation();

    const fileName = node?.__svelte_meta?.loc?.file || '';
    const reversedFileName = fileName.split('/').toReversed();
    const title = reversedFileName[0];

    const render = components[component].replace(/\s+use:inspect=\{\{.*?\}\}/g, '');
    node.classList.add('ring', 'transition-all', 'duration-200');
    store.tooltip = {
      ...store.tooltip,
      title,
      render,
      visible: true,
      direction
    };
  };

  const mouseleave = () => {
    node.classList.remove('ring', 'transition-all', 'duration-200');
    store.tooltip = {
      ...store.tooltip,
      visible: false
    };
  };

  node.addEventListener('mouseover', mouseover);
  node.addEventListener('mouseleave', mouseleave);

  return {
    destroy: () => {
      node.removeEventListener('mouseover', mouseover);
      node.removeEventListener('mouseleave', mouseleave);
    }
  };
};
