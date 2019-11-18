<script>
  import typeDatabase from "./types.json";
  import TypeIcon from "./TypeIcon.svelte";
  import ModifierText from "./ModifierText.svelte";
  import ModifierList from "./ModifierList.svelte";
</script>

<style>
  main {
    margin-top: 20px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  .row {
    margin-bottom: 20px;
  }
  .type {
    flex: 0;
    margin: 0 4px;
    align-items: center;
    flex-direction: column;
    font-weight: bolder;
    font-size: 10px;
  }
</style>

<main>
  {#each Object.entries(typeDatabase) as [typeName, typeInfo]}
    <div class="row">
      <ModifierList {typeInfo} direction="from" />
      <div class="type">
        <TypeIcon name={typeName} />
        {typeName.toUpperCase()}
      </div>
      <ModifierList {typeInfo} direction="to" />
    </div>
  {/each}
</main>
