<script>
export let valueStandardA = '';
export let handleClick
</script>

<section>
  <input bind:value={valueStandardA} />
  <button on:click={handleClick}>Whats your query, dearie?</button>

  <!-- <pre class="status">The dearies weary query: {valueStandardA}</pre> -->
</section>
