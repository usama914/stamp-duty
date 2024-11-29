<template>
  <div class="flex flex-col  space-y-4">
    <div>
      <label for="signature">Your Signature</label>
      <InputText
        id="signature"
        v-model="signature"
        class="w-full"
        placeholder="Sign here..."
      />
    </div>
    <div class="flex justify-between pt-4">
      <Button
        label="Back"
        class="secondary-btn !w-20 !border-none !text-black"
        @click="$emit('back')"
      />
      <Button label="Submit" class="primary-btn !w-20 !border-none" />
    </div>
  </div>
</template>

<script setup lang="ts">
const signature = ref("");
</script>
