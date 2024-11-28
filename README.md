# Welcome to Nuxt Skeleton

[![Nuxt](https://img.shields.io/badge/Nuxt-3.13.2-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com/docs)

This repository is created for our team to quickly build websites without the worry of installing all the dependencies manually. It provides a solid foundation with pre-installed and configured essential tools and libraries.

## Included Dependencies

[![Nuxt](https://img.shields.io/badge/Nuxt-3.13.2-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com/docs)
[![Vue](https://img.shields.io/badge/Vue-3.5.7-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/guide/introduction.html)
[![Vue Router](https://img.shields.io/badge/Vue_Router-4.4.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://router.vuejs.org/)
[![PrimeVue](https://img.shields.io/badge/PrimeVue-4.0.7-4CAF50?style=for-the-badge&logo=vue.js&logoColor=white)](https://primevue.org/installation)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.12-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/docs)
[![Iconify](https://img.shields.io/badge/Iconify-4.1.2-1769AA?style=for-the-badge&logo=iconify&logoColor=white)](https://icon-sets.iconify.design/ic/)
[![Nuxt Fonts](https://img.shields.io/badge/Nuxt_Fonts-0.8.0-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://github.com/nuxt-modules/fonts)
[![Nuxt Image](https://img.shields.io/badge/Nuxt_Image-1.8.0-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://image.nuxt.com/)

## Folder Structure

Our Nuxt Skeleton project follows a standard Nuxt.js directory structure:

```
nuxt-skeleton/
├── app.vue
├── assets/
│ └── css/
│ └── main.css
├── components/
│ ├── HeaderComponent.vue
│ └── FooterComponent.vue
├── layouts/
│ └── default.vue
├── pages/
│ ├── index.vue
│ └── about.vue
├── plugins/
│ └── iconify.ts
├── public/
├── server/
├── nuxt.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── node_modules/
```

This structure provides a clear separation of concerns and follows Nuxt.js best practices for organizing your project files.

## Getting Started

To use this Nuxt Skeleton project:

1. Clone this repository:
   
   Using HTTPS:
   ```bash
   git clone https://github.com/IOT-Expert/nuxt-skeleton.git
   ```
   
   Or using SSH:
   ```bash
   git clone git@github.com:IOT-Expert/nuxt-skeleton.git
   ```

   Then, navigate to the project directory:
   ```bash
   cd nuxt-skeleton
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Dependencies Installation (if you need to install manually)

### PrimeVue v4.0.7

PrimeVue is a rich set of open source UI Components for Vue.

```bash
npm install primevue@4.0.7
npm install --save-dev @primevue/nuxt-module@4.0.7
npm install @primevue/themes@4.0.7
```

#### Basic Usage Example

```vue
<template>
  <Button label="Click me!" />
</template>

<script setup>
import { Button } from 'primevue/button'
</script>
```

### Tailwind CSS v3.4.12

Tailwind CSS is a utility-first CSS framework.

```bash
npm install -D tailwindcss@3.4.12 postcss@8.4.47 autoprefixer@10.4.20
```

#### Basic Usage Example

```vue
<template>
  <div class="bg-blue-500 text-white p-4 rounded">
    This is a Tailwind styled div
  </div>
</template>
```

### Iconify v4.1.2

Iconify is a unified icon framework. Our preferred icon bundle is Google Material Icons.

```bash
npm install --save-dev @iconify/vue@4.1.2
```

You can browse and search for icons in the Google Material Icons set at [https://icon-sets.iconify.design/ic/](https://icon-sets.iconify.design/ic/). This collection offers a wide range of icons in various categories such as Action, Alert, AV, Communication, Content, Device, and more.

#### Basic Usage Example

```vue
<template>
  <Icon icon="ic:baseline-home" />
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
```

### Nuxt Fonts Module v0.8.0

The Nuxt Fonts module provides easy font integration for Nuxt projects.

```bash
npx nuxi@latest module add fonts@0.8.0
```

#### Basic Usage Example

In your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/fonts'],
  fonts: {
    google: {
      families: ['Roboto']
    }
  }
})
```

### Nuxt Image Module v1.8.0

The Nuxt Image module is a plugin for optimizing images in Nuxt applications.

```bash
npx nuxi@latest module add image@1.8.0
```

#### Basic Usage Example

```vue
<template>
  <nuxt-img src="/path/to/image.jpg" width="300" height="200" />
</template>
```

Now you have a fully set up Nuxt project with all the included dependencies ready to use!

Happy coding!