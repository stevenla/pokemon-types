<script>
  import typeDatabase from "./types.json";
  import ModifierRow from "./ModifierRow.svelte";
  import memoize from "lodash/memoize";
  import { fly } from "svelte-transitions";

  const ALL_TYPES = Object.keys(typeDatabase);

  let active = null;
  function onRowClick(event) {
    const { typeName } = event.detail;
    if (active !== typeName) {
      active = event.detail.typeName;
    } else {
      active = null;
    }
  }

  const getModifier = memoize(
    (from, to) => {
      const typeInfo = typeDatabase[from];
      for (const [modifier, typesList] of Object.entries(typeInfo.to)) {
        if (typesList.includes(to)) {
          return Number(modifier);
        }
      }
      return 1;
    },
    (from, to) => from + to
  );

  function getMatches(direction, aType, bType, mod) {
    if (direction === "from") {
      return ALL_TYPES.filter(
        name => getModifier(name, aType) * getModifier(name, bType) === mod
      );
    } else {
      return ALL_TYPES.filter(
        name => getModifier(aType, name) * getModifier(bType, name) === mod
      );
    }
  }

  function getDualTypes(typeName) {
    if (typeName === null) {
      return [];
    }
    const ret = Object.entries(typeDatabase).map(([otherName, otherInfo]) => {
      const newInfo = {
        from: {
          "0": getMatches("from", typeName, otherName, 0),
          "0.25": getMatches("from", typeName, otherName, 0.25),
          "0.5": getMatches("from", typeName, otherName, 0.5),
          "2": getMatches("from", typeName, otherName, 2),
          "4": getMatches("from", typeName, otherName, 4)
        },
        to: {
          "0": getMatches("to", typeName, otherName, 0),
          "0.25": getMatches("to", typeName, otherName, 0.25),
          "0.5": getMatches("to", typeName, otherName, 0.5),
          "2": getMatches("to", typeName, otherName, 2),
          "4": getMatches("to", typeName, otherName, 4)
        }
      };
      return [otherName, newInfo];
    });
    return ret;
  }
  $: dualTypeInfo = getDualTypes(active);
</script>

<style>
  main {
    padding: 20px 8px 20px;
  }
  div {
    border-radius: 10px;
    transition: background-color 0.3s ease-out;
  }
  .active {
    background-color: #eee;
  }
</style>

<main>
  {#each Object.entries(typeDatabase) as [typeName, typeInfo]}
    <div class:active={active === typeName}>
      <ModifierRow on:click={onRowClick} {typeName} {typeInfo} />
      {#if active === typeName}
        <div transition:fly={{ y: 100, duration: 300 }}>
          {#each dualTypeInfo as [dualTypeName, dualTypeInfo]}
            {#if dualTypeName !== typeName}
              <ModifierRow {typeName} {dualTypeName} typeInfo={dualTypeInfo} />
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</main>
