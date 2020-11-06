<script>
  import Input from "./components/Input.svelte";
  import { replies } from "./stores";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  h3 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 400;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello Dearie! Welcome to wee morrigans knowledge box</h1>
  <Input />
  {#if $replies}
    {#each $replies as reply}
      <h3>{reply}</h3>
    {/each}
  {/if}
</main>
