<script>
  export let typeName;
  export let typeInfo;
  import TypeIcon from "./TypeIcon.svelte";
  import ModifierText from "./ModifierText.svelte";
  import ModifierList from "./ModifierList.svelte";
  import { active } from "./active.js";
</script>

<style>
  .row {
    min-height: 60px;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .type {
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
</style>

<div class="row">
  <div class="type">
    <TypeIcon name={typeName} />
    {typeName.toUpperCase()}
  </div>
  <ModifierList {typeInfo} direction="from" />
  <ModifierList {typeInfo} direction="to" />
</div>
