<script setup lang='ts'>
let isError = $ref(false)
let errorMsg = $ref('')

const { poseidonHash } = usePoseidon()

const input = $ref('')
let output = $ref('')

function onClick() {
  try {
    output = poseidonHash(input.split(','))
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
      text-blue
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
