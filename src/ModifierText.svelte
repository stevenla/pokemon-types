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
  /*
   * Color scheme from:
   * https://coolors.co/f9dbbd-fca17d-da627d-9a348e-2e66aa
   */
  div {
    margin: 0 2px;
    font-family: monospace;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .quadruple {
    color: #8c243a;
  }
  .double {
    color: #da627d;
  }
  .half {
    color: #2e66aa;
  }
  .quarter {
    color: #a0b9d8;
  }
  .none {
    color: #fca17d;
  }
  span {
    margin: 0 2px;
  }
</style>

<div
  class:quadruple={modifier === '4'}
  class:double={modifier === '2'}
  class:half={modifier === '0.5'}
  class:quarter={modifier === '0.25'}
  class:none={modifier === '0'}>
  <span>-</span>
  <span>{text}</span>
  <span>→</span>
</div>
