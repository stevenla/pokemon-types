<script>
  import typeDatabase from "./types.json";
  import ModifierRow from "./ModifierRow.svelte";
  import { active } from "./active.js";
</script>

<style>
  main {
    padding: 20px 8px 20px;
  }
</style>

<main on:click={() => active.set(null)}>
  {#each Object.entries(typeDatabase) as [typeName, typeInfo]}
    <ModifierRow {typeName} {typeInfo} />
  {/each}
</main>
