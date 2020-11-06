const WolframAlphaAPI = require("wolfram-alpha-node");
const waApi = WolframAlphaAPI("7TX64H-P32AW25LLY");

async function cheekyReply(queryInput) {
  let result = "";

  waApi
    .getShort(queryInput)
    .then((data) => {
      result = data.text();
    })
    .catch(console.error);

  return result;
}

export { cheekyReply };
