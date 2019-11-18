<script>
  export let modifier = "double";

  let text = "";
  switch (modifier) {
    case "double":
      text = "2";
      break;
    case "half":
      text = "½";
      break;
    case "none":
      text = "0";
      break;
    default:
      throw new Error(`Unknown modifier ${modifier}`);
  }
</script>

<style>
  div {
    margin: 0 2px;
    font-family: monospace;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .double {
    color: #da627d;
  }
  .half {
    color: #2e66aa;
  }
  .none {
    color: #fca17d;
  }
  span {
    margin: 0 2px;
  }
</style>

<div
  class:double={modifier === 'double'}
  class:half={modifier === 'half'}
  class:none={modifier === 'none'}>
  <span>-</span>
  <span>{text}</span>
  <span>→</span>
</div>
