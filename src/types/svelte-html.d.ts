import type { HTMLAttributes } from 'svelte/elements';

declare module 'svelte/elements' {
  interface HTMLAttributes<T> {
    crow?: boolean;
  }
}
