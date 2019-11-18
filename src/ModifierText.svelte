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
    width: 48px;
    height: 16px;
    font-family: monospace;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    /* color: white; */
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
  .from {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .to {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
</style>

<div
  class:double={modifier === 'double'}
  class:half={modifier === 'half'}
  class:none={modifier === 'none'}>
  - {text} →
</div>
