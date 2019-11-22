#!/usr/bin/env node
const util = require('util');
const fetch = require('node-fetch');

async function getTypeInfo(cur) {
  const url = `https://pokeapi.co/api/v2/type/${cur}/`;
  const response = await fetch(url);
  const json = await response.json();
  const relations = json.damage_relations;

  const ret = {
    from: {
      '2': relations.double_damage_from.map(({ name }) => name),
      '0.5': relations.half_damage_from.map(({ name }) => name),
      '0': relations.no_damage_from.map(({ name }) => name)
    },
    to: {
      '2': relations.double_damage_to.map(({ name }) => name),
      '0.5': relations.half_damage_to.map(({ name }) => name),
      '0': relations.no_damage_to.map(({ name }) => name)
    }
  };
  return ret;
}

async function getTypesList() {
  const response = await fetch('https://pokeapi.co/api/v2/type/');
  const json = await response.json();
  return json.results
    .map(({ name }) => name)
    .filter(name => !['shadow', 'unknown'].includes(name));
}

async function main() {
  const typesList = await getTypesList();
  const ret = {};
  const typeInfoList = await Promise.all(
    typesList.map(typeName => getTypeInfo(typeName))
  );
  for (let i = 0; i < typesList.length; i++) {
    const typeName = typesList[i];
    const typeInfo = typeInfoList[i];
    ret[typeName] = typeInfo;
  }

  console.log(JSON.stringify(ret, null, 2));
}

main();
