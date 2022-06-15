<script>
  export let name;
  export let size = "large";
</script>

<style>
  .icon {
    display: flex;
    width: 48px;
    height: 48px;
    transition: transform 0.2s ease-out, background-color 0.1s ease-out,
      box-shadow 0.1s ease-out;
    border-radius: 50%;
  }
  .medium {
    width: 32px;
    height: 32px;
  }
  .small {
    width: 16px;
    height: 16px;
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>

<div
  class="icon"
  class:medium={size === 'medium'}
  class:small={size === 'small'}>
  <img src={`icons/${name}.png`} alt={name} />
</div>
