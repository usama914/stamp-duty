<template>
  <div class="flex flex-col space-y-4">
    <div>
      <label for="email">Email</label>
      <InputText
        id="email"
        placeholder="Enter email address"
        v-model="formData.email"
        class="w-full"
      />
    </div>
    <div class="flex flex-col">
      <label for="phone">Phone</label>
      <InputMask
        id="basic"
        v-model="formData.phone"
        mask="(+44) - 9999999999"
        placeholder="(+44) - 9999999999"
      />
    </div>
    <div>
      <label for="phone">Best Time to Call</label>
      <InputText
        id="time"
        v-model="formData.callTime"
        placeholder="eg: after 10AM in weekdays"
        class="w-full"
      />
    </div>
    <div>
      <label for="postcode">Postcode</label>
      <InputText
        id="postcode"
        placeholder="Enter the postal code"
        v-model="formData.postcode"
        class="w-full"
      />
    </div>
    <div class="flex justify-between pt-4">
      <Button
        label="Back"
        class="secondary-btn !w-20 !border-none !text-black"
        @click="$emit('back')"
      />
      <Button
        label="Next"
        class="primary-btn !w-20 !border-none"
        @click="$emit('next')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = ref({
  email: "",
  phone: "",
  callTime: null,
  postcode: "",
});

const timeOptions = [
  { label: "Morning (9AM-12PM)", value: "morning" },
  { label: "Afternoon (12PM-3PM)", value: "afternoon" },
  { label: "Evening (3PM-6PM)", value: "evening" },
];
</script>
