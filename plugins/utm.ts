import { useUtmTracking } from "~/composables/useUtmTracking"

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const { saveUtmParams } = useUtmTracking()

  if (process.client) {
    // Save UTM parameters on initial page load
    saveUtmParams(route)

    // Watch for route changes to capture UTM parameters
    watch(() => route.query, (newQuery) => {
      if (Object.keys(newQuery).some(key => key.startsWith('utm_'))) {
        saveUtmParams(route)
      }
    })
  }
})
