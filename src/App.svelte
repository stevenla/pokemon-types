<script>
  import typeDatabase from "./types.json";
  import TypeIcon from "./TypeIcon.svelte";
  import ModifierText from "./ModifierText.svelte";
</script>

<style>
  main {
    margin-top: 16px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  .row {
    margin-bottom: 16px;
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
    padding: 0 4px;
    margin-bottom: 2px;
    flex-shrink: 1;
    align-items: center;
  }
  .modifier-types {
    flex-shrink: 1;
    max-width: calc(16px * 6);
    flex-wrap: wrap;
  }
  .from .modifier-types {
    justify-content: flex-end;
  }
  .modifier-list:last-of-type {
    margin: 0;
  }
  .type {
    flex: 0;
    margin: 0 4px;
    align-items: center;
  }
</style>

<main>
  {#each Object.entries(typeDatabase) as [typeName, typeInfo]}
    <div class="row">
      <div class="from">
        {#each Object.entries(typeInfo.from) as [modifier, typesList]}
          {#if typesList.length > 0}
            <div class="modifier-list">
              <div class="modifier-types">
                {#each typesList as modifiedType}
                  <TypeIcon name={modifiedType} size="small" />
                {/each}
              </div>
              <ModifierText {modifier} />
            </div>
          {/if}
        {/each}
      </div>
      <div class="type">
        <TypeIcon name={typeName} />
      </div>
      <div class="to">
        {#each Object.entries(typeInfo.to) as [modifier, typesList]}
          {#if typesList.length > 0}
            <div class="modifier-list">
              <ModifierText {modifier} />
              <div class="modifier-types">
                {#each typesList as modifiedType}
                  <TypeIcon name={modifiedType} size="small" />
                {/each}
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/each}
</main>
