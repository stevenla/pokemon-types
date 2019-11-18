<script>
  export let direction = "from";
  export let typeInfo;

  import TypeIcon from "./TypeIcon.svelte";
  import ModifierText from "./ModifierText.svelte";
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
  }
  .from,
  .to {
    flex: 1 0 0px;
    flex-direction: column;
    justify-content: center;
  }
  .from {
    align-items: flex-end;
  }
  .modifier-list {
    margin-bottom: 4px;
    flex-shrink: 1;
    align-items: center;
  }
  .modifier-list:last-of-type {
    margin: 0;
  }
  .modifier-types {
    flex-shrink: 1;
    max-width: calc(16px * 8);
    flex-wrap: wrap;
  }
  .from .modifier-types {
    justify-content: flex-end;
  }
</style>

<div class:from={direction === 'from'} class:to={direction === 'to'}>
  {#each Object.entries(typeInfo[direction]) as [modifier, typesList]}
    {#if typesList.length > 0}
      <div class="modifier-list">
        {#if direction === 'to'}
          <ModifierText {modifier} />
        {/if}
        <div class="modifier-types">
          {#each typesList as modifiedType}
            <TypeIcon name={modifiedType} size="small" />
          {/each}
        </div>
        {#if direction === 'from'}
          <ModifierText {modifier} />
        {/if}
      </div>
    {/if}
  {/each}
</div>
