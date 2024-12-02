<template>
  <div class="flex flex-col space-y-4">
    <div>
      <label for="signature">Your Signature</label>
      <!-- Dynamically loaded SignaturePad component -->
      <Suspense>
        <template #default>
          <SignaturePad />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
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
// Dynamically import SignaturePad component
const SignaturePad = defineAsyncComponent(() =>
  import('./SignaturePad.vue')
);

const signature = ref("");
</script>
