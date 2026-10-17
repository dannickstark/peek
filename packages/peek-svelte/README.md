# @doan-labs/peek-svelte

Deterministic SVG avatars from a name, as a Svelte 5 component. A Doan Labs
project. Same input, same avatar, on the server and the client.

Built on `@doan-labs/peek`: the identity, the geometry and the live rig are the
shared core, rendered here through Svelte.

## Install

```sh
npm install @doan-labs/peek-svelte @doan-labs/peek svelte
```

`svelte` is an optional peer dependency (Svelte 5).

## Usage

```svelte
<script>
  import { Peek } from '@doan-labs/peek-svelte'
</script>

<Peek name="Ada Lovelace" />
<Peek name="Linh" expression="happy" size={128} />
<Peek name="Doan Labs" animate gaze="pointer" />
```

## Props

- `name` (required): the string the avatar is derived from.
- `animate`: bring the face to life after mount. Off under
  prefers-reduced-motion. Default false.
- `gaze`: `[x, y]` in -1..1 for a fixed look, or `"pointer"` to follow the
  pointer (animate only).
- `expression`, `size`, `frame`, `square`, `riso`, `title`, `version`, the
  identity axes (`face`, `color`, `eyes`, `brows`, `mouth`, `cheeks`, `trait`)
  and the wardrobe slots (`eyewear`, `headwear`, `neckwear`): everything
  `@doan-labs/peek`'s options accept, passed straight through.
- `class`, `style`: applied to the root `<svg>`.
- `id`: see below.

## The `id` prop

Each avatar's internal SVG ids are derived from a hash of everything drawn, so
they are stable across the server and the client and unique per distinct
avatar. If you render two byte-identical avatars (same `name` and the same
options) on one page, they would share those ids. Pass an explicit `id` to keep
them distinct:

```svelte
<Peek name="Ada" id="hero" />
<Peek name="Ada" id="footer" />
```

## License

MIT
