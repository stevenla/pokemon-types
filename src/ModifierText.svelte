<script>
  export let modifier = "2";

  function getModifierDisplay(mod) {
    switch (modifier) {
      case "0.5":
        return "½";
      case "0.25":
        return "¼";
      default:
        return mod;
    }
  }

  let text = getModifierDisplay(modifier);
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
  class:double={modifier === '2'}
  class:half={modifier === '0.5'}
  class:none={modifier === '0'}>
  <span>-</span>
  <span>{text}</span>
  <span>→</span>
</div>
