import type { QueryClient } from '@tanstack/vue-query'
import type { AxiosInstance } from 'axios'

import type {
  ComponentCustomOptions as _ComponentCustomOptions,
  ComponentCustomProperties as _ComponentCustomProperties,
} from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends _ComponentCustomProperties {}
  interface ComponentCustomOptions extends _ComponentCustomOptions {}
}

// Plugin types
declare module '#app' {
  interface NuxtApp {
    $http: AxiosInstance
    $queryClient: QueryClient
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: AxiosInstance
    $queryClient: QueryClient
  }
}
