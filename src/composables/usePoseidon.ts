import { buildPoseidon } from 'poseidon'

let poseidon: any

export function usePoseidon() {
  onMounted(async () => {
    if (!poseidon)
      poseidon = await buildPoseidon()
  })

  function poseidonHash(inputs: Array<String>) {
    const hash = poseidon(inputs)
    const hashStr = poseidon.F.toString(hash)
    return `0x${BigInt(hashStr).toString(16).padStart(64, '0')}`
  }

  return { poseidonHash }
}
