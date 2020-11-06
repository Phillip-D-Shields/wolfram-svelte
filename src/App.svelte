<script>
  import { cheekyReply } from "./request";

  let valueStandardA = "";
  let currentReply = "";

  function handleClick() {
    currentReply = cheekyReply(valueStandardA);
  }
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
    color: rgb(48, 146, 3);
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
  <section>
    <input bind:value={valueStandardA} />
    <button on:click={handleClick}>Whats your query, dearie?</button>

    <!-- <pre class="status">The dearies weary query: {valueStandardA}</pre> -->
  </section>
  <h3>{currentReply || 'waiting...'}</h3>
</main>
