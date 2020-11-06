<script>
  import { replies } from "../stores.js";
  let valueStandardA = "";

  function fetchData(queryInput) {
    const myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "WR_SID=d65ddb31.5b35690561af3; JSESSIONID=136B5B4676AB214FFFA0ACEE2B86499C"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      // accessControlAllowOrigin: ''
    };

    fetch(
      `https://api.wolframalpha.com/v1/result?appid=7TX64H-P32AW25LLY&i=${queryInput}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => $replies.push(result))
      .catch((err) => console.log("Request Failed", err));
  }
</script>

<section>
  <input bind:value={valueStandardA} />
  <button on:click={fetchData(valueStandardA)}>Whats your query, dearie?</button>

  <!-- <pre class="status">The dearies weary query: {valueStandardA}</pre> -->
</section>
