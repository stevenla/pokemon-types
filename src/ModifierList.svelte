<script>
  export let direction = "from";
  export let typeInfo;

  import TypeIcon from "./TypeIcon.svelte";
  import ModifierText from "./ModifierText.svelte";
  const sortedTypeInfo = Object.entries(typeInfo[direction]).sort((a, b) => {
    return -1 * (Number(a[0]) - Number(b[0]));
  });
</script>

<style>
  .list {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .from {
    align-items: flex-end;
    padding-right: 28px;
  }
  .to {
    padding-left: 28px;
  }
  .modifier-list {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-shrink: 1;
    margin-bottom: 4px;
  }
  .modifier-list:last-of-type {
    margin: 0;
  }
  .modifier-types {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 0;
  }
  .from .modifier-types {
    justify-content: flex-end;
  }
</style>

<div
  class="list"
  class:from={direction === 'from'}
  class:to={direction === 'to'}>
  {#each sortedTypeInfo as [modifier, typesList]}
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
