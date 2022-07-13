<script setup lang='ts'>
import { buildPoseidon } from 'poseidon'

let poseidon: any
let isError = $ref(false)
let errorMsg = $ref('')

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
  try {
    const hash = poseidonHash(input.split(','))
    output = hash
    isError = false
    errorMsg = ''
  }
  catch (e: any) {
    isError = true
    errorMsg = e.toString()
  }
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
    <div v-if="!isError">
      {{ output }}
    </div>
    <div v-else text-red op-80>
      {{ errorMsg }}
    </div>
  </div>
</template>
