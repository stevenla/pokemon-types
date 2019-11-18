<script>
  export let name;
  export let size = "medium";
</script>

<style>
  .icon {
    display: flex;
    width: 48px;
    height: 48px;
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

<div class="icon" class:small={size === 'small'}>
  <img src={`/icons/${name}.png`} alt={name} />
</div>
