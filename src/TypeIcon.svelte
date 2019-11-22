<script>
  export let name;
  export let size = "medium";
  export let modifier = "0";

  import { active } from "./active.js";

  let isActive;
  active.subscribe(value => {
    isActive = value === name;
  });

  function onClick(event) {
    active.set(name);
    event.preventDefault();
    event.stopPropagation();
  }
</script>

<style>
  /*
   * Color scheme from:
   * https://coolors.co/f9dbbd-fca17d-da627d-9a348e-2e66aa
   */
  .icon {
    display: flex;
    width: 48px;
    height: 48px;
    transition: transform 0.2s ease-out, background-color 0.1s ease-out,
      box-shadow 0.1s ease-out;
    border-radius: 50%;
    padding: 4px;
    margin: -4px;
  }
  .small {
    width: 16px;
    height: 16px;
    padding: 2px;
    margin: -2px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .active {
    transform: scale(1.2);
  }
  .active.double {
    background-color: #f8e2e7;
    box-shadow: 0 0 0 2px #da627d;
  }
  .active.half {
    background-color: #d9e3ef;
    box-shadow: 0 0 0 2px #2e66aa;
  }
  .active.none {
    background-color: #feede7;
    box-shadow: 0 0 0 2px #fca17d;
  }
</style>

<div
  class="icon"
  class:double={modifier === '2'}
  class:half={modifier === '0.5'}
  class:none={modifier === '0'}
  class:active={isActive}
  class:small={size === 'small'}
  on:click={onClick}>
  <img src={`/icons/${name}.png`} alt={name} />
</div>
