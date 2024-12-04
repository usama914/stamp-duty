import { Plugin } from '@nuxt/types'

declare module '#app' {
  interface NuxtApp {
    $seo: (title: string, description: string) => void
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $seo: (title: string, description: string) => void
  }
}