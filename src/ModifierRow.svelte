<script>
  export let typeName;
  export let dualTypeName = null;
  export let typeInfo;
  import TypeIcon from "./TypeIcon.svelte";
  import ModifierText from "./ModifierText.svelte";
  import ModifierList from "./ModifierList.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<style>
  .row {
    min-height: 80px;
    padding: 5px 0;
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .type {
    text-align: center;
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    font-weight: bolder;
    justify-content: center;
    left: 50%;
    margin-left: -24px;
    position: absolute;
    top: 0;
    width: 48px;
  }
  .dual-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    position: relative;
  }
  .dual-icon > div {
    position: absolute;
    width: 32px;
    height: 32px;
  }
  .dual-icon > div:first-of-type {
    position: absolute;
    left: 0;
    top: 0;
  }
  .dual-icon > div:last-of-type {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>

<div class="row" on:click={() => dispatch('click', { typeName })}>
  <div class="type">
    {#if dualTypeName}
      <div class="dual-icon">
        <div>
          <TypeIcon size="medium" name={typeName} />
        </div>
        <div>
          <TypeIcon size="medium" name={dualTypeName} />
        </div>
      </div>
      {typeName.toUpperCase()}
      <br />
      {dualTypeName.toUpperCase()}
    {:else}
      <TypeIcon name={typeName} />
      {typeName.toUpperCase()}
    {/if}
  </div>

  <ModifierList {typeInfo} direction="from" />
  <ModifierList {typeInfo} direction="to" />
</div>
