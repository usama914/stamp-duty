<template>
  <div class="flex flex-col space-y-4">
    <div>
      <label for="callTime">Full Name</label>
      <InputText
        id="callTime"
        v-model="localFormData.name"
        placeholder="Enter your full name"
        class="w-full"
      />
    </div>
    <div>
      <div class="flex justify-between items-center">
        <label for="email">Email</label>
        <span v-if="emailError" class="text-red-500 text-sm">
          {{ emailError }}
        </span>
      </div>
      <div class="relative">
        <InputText
          id="email"
          placeholder="Enter email address"
          v-model="localFormData.email"
          @blur="validateEmail"
          :class="['w-full', { '!border-red-500': emailError }]"
        />
        <div class="absolute right-3 top-1/2 -translate-y-1/2">
          <Icon
            v-if="isValidatingEmail"
            icon="eos-icons:loading"
            class="text-gray-400 text-xl animate-spin"
          />
          <Icon
            v-else-if="isEmailValid && localFormData.email"
            icon="material-symbols:check-circle"
            class="text-green-500 text-xl"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="flex justify-between items-center">
        <label for="phone">Phone</label>
        <span v-if="phoneError" class="text-red-500 text-sm">
          {{ phoneError }}
        </span>
      </div>
      <div class="relative">
        <InputText
          id="phone"
          v-model="localFormData.phone"
          placeholder="Enter phone number"
          @blur="validatePhoneNumber"
          :class="['w-full', { '!border-red-500': phoneError }]"
        />
        <div class="absolute right-3 top-1/2 -translate-y-1/2">
          <Icon
            v-if="isValidating"
            icon="eos-icons:loading"
            class="text-gray-400 text-xl animate-spin"
          />
          <Icon
            v-else-if="isPhoneValid && localFormData.phone"
            icon="material-symbols:check-circle"
            class="text-green-500 text-xl"
          />
        </div>
      </div>
    </div>

    <div>
      <label for="callTime">Best Time to Call</label>

      <Select
        v-model="localFormData.callTime"
        :options="bestTimeToCall"
        optionLabel="label"
        optionValue="value"
        placeholder="Select Purchase Method"
        class="w-full"
      />
    </div>

    <div>
      <label for="postcode">Postcode</label>
      <InputText
        id="postcode"
        placeholder="Enter the postcode (e.g. SW1A 1AA)"
        v-model="localFormData.postcode"
        class="w-full"
      />
    </div>

    <div class="flex justify-between pt-4">
      <Button
        label="Back"
        class="secondary-btn !w-20 !border-none mr-2 md:mr-0 !text-black"
        @click="$emit('back')"
      />
      <Button
        :label="buttonLabel"
        class="primary-btn !w-full md:!w-80 !border-none"
        :disabled="!isFormValid || isSubmitting"
        @click="handleSubmit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { parsePhoneNumber, isValidPhoneNumber } from "libphonenumber-js";
import { useRouter } from "vue-router";
import { useUtmTracking } from "../../composables/useUtmTracking";

const emit = defineEmits(["next", "back", "update:formData"]);

interface FormData {
  name: string;
  email: string;
  phone: string;
  callTime: string | null;
  postcode: string;
}

const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
});

const localFormData = ref<FormData>({
  name: props.formData.name || "",
  email: props.formData.email || "",
  phone: props.formData.phone || "",
  callTime: props.formData.callTime || "",
  postcode: props.formData.postcode || "",
});

// Validation states
const isValidating = ref(false);
const isValidatingEmail = ref(false);
const phoneError = ref("");
const emailError = ref("");
const isPhoneValid = ref(false);
const isEmailValid = ref(false);

const router = useRouter();
const isSubmitting = ref(false);
const { getUtmParams } = useUtmTracking();

const validatePhoneNumber = (): void => {
  isValidating.value = true;
  phoneError.value = "";
  isPhoneValid.value = false;

  setTimeout(() => {
    try {
      if (localFormData.value.phone) {
        const parsedNumber = parsePhoneNumber(localFormData.value.phone, "GB");
        if (
          !parsedNumber ||
          !isValidPhoneNumber(localFormData.value.phone, "GB")
        ) {
          phoneError.value = "Incorrect phone number";
        } else {
          localFormData.value.phone = parsedNumber.format("INTERNATIONAL");
          isPhoneValid.value = true;
        }
      }
    } catch (error) {
      phoneError.value = "Invalid phone number";
    } finally {
      isValidating.value = false;
    }
  }, 500);
};

const validateEmail = (): void => {
  isValidatingEmail.value = true;
  emailError.value = "";
  isEmailValid.value = false;

  setTimeout(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      localFormData.value.email &&
      !emailRegex.test(localFormData.value.email)
    ) {
      emailError.value = "Incorrect Email";
    } else if (localFormData.value.email) {
      isEmailValid.value = true;
    }
    isValidatingEmail.value = false;
  }, 500);
};

// Watchers
watch(
  () => localFormData.value.phone,
  (newValue) => {
    if (newValue === "") {
      phoneError.value = "";
      isPhoneValid.value = false;
    }
  }
);

watch(
  () => localFormData.value.email,
  (newValue) => {
    if (newValue === "") {
      emailError.value = "";
      isEmailValid.value = false;
    }
  }
);

const isFormValid = computed(() => {
  return Boolean(
    localFormData.value.email &&
      isEmailValid.value &&
      isPhoneValid.value &&
      localFormData.value.callTime &&
      localFormData.value.postcode
  );
});

const handleSubmit = async () => {
  if (isFormValid.value) {
    try {
      isSubmitting.value = true;

      const completeFormData = {
        ...props.formData,
        ...localFormData.value,
        ...getUtmParams()
      };

      const { data: response } = await useFetch("/api/submit-form", {
        method: "POST",
        body: completeFormData,
      });

      if (response.value?.success) {
        await navigateTo({
          path: '/thank-you',
          query: {
            ref: response.value.referenceNumber,
          }
        })
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      isSubmitting.value = false;
    }
  }
};

// Update the button label to show loading state
const buttonLabel = computed(() => {
  if (isSubmitting.value) return "Submitting...";
  return isFormValid.value ? "Submit" : "Submit";
});

// Best time to call
const bestTimeToCall = [
  { label: "Morning", value: "morning" },
  { label: "Afternoon", value: "afternoon" },
  { label: "Evening", value: "evening" },
];
</script>

<style scoped>
.p-inputtext.border-red-500 {
  border-color: rgb(239 68 68) !important;
}

/* Add padding to accommodate the icon */
.p-inputtext {
  padding-right: 2.5rem !important;
}
</style>
