<script setup lang='ts'>
import { buildPoseidon } from 'poseidon'

let poseidon: any

onMounted(async () => {
  poseidon = await buildPoseidon()
})

function poseidonHash(inputs: Array<String>) {
  const hash = poseidon(inputs)
  const hashStr = poseidon.F.toString(hash)
  return `0x${BigInt(hashStr).toString(16).padStart(64, '0')}`
}

const input = $ref('')
let output = $ref('')

function onClick() {
  output = poseidonHash(input.split(','))
}
</script>

<template>
  <div>
    <div flex justify-center items-center text-sm op-80>
      <span
        i-carbon-idea
      />

      <span>
        sperate input with comma
      </span>
    </div>
    <input
      v-model="input"
      type="text"
      min-w-60
      border
      border-blue
      @keyup.enter="onClick"
    >
    <button
      bg-blue
      border border-blue hover:op-60 active:op-80 px-2 @click="onClick"
    >
      poseidon hash
    </button>
    <div>{{ output }}</div>
  </div>
</template>
