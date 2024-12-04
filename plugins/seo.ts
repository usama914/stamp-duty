import { defineNuxtPlugin, useRoute, useRuntimeConfig, useHead } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('seo', (title: string, description: string) => {
    const route = useRoute();
    const config = useRuntimeConfig();
    const baseUrl = config.public.baseUrl || 'https://stampduty-refund.co.uk';

    useHead({
      title,
      meta: [
        { name: 'description', content: description },
      ],
      link: [
        { rel: 'canonical', href: `${baseUrl}${route.path}` }
      ]
    });
  });
});