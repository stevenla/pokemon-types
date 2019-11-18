<script>
  export let name;
  export let size = "medium";
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
  .icon {
    display: flex;
    width: 48px;
    height: 48px;
    transition: transform 0.2s ease-out, background-color 0.1s ease-out,
      box-shadow 0.1s ease-out;
    border-radius: 50%;
    padding: 8px;
    margin: -8px;
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
    background-color: #fceee1;
    box-shadow: 0 0 0 3px #fca17d;
    transform: scale(1.1);
  }
  .active.small {
    box-shadow: 0 0 0 2px #fca17d;
  }
</style>

<div
  class="icon"
  class:active={isActive}
  class:small={size === 'small'}
  on:click={onClick}>
  <img src={`/icons/${name}.png`} alt={name} />
</div>
