<script lang="ts">
import AppIntroduction from './docs/AppIntroduction.vue'
import ReactInfo from './docs/ReactInfo.vue'
import AppInstall from './docs/AppInstall.vue'
import FetchProvider from './docs/FetchProvider.vue'
import ErrorComponent from './docs/ErrorComponent.vue'
import UseFetchHook from './docs/UseFetchHook.vue'
import UseCache from './docs/UseCache.vue'
import AppRepository from './docs/AppRepository.vue'
import AppProperties from './docs/AppProperties.vue'
import CommonHeader from './docs/CommonHeader.vue'
import AppLastUpdates from './docs/AppLastUpdates.vue'
import GlobalErrorHandler from './docs/GlobalErrorHandler.vue'

export interface SubProps {
  title: string
  hash: string
  component: any
}

export interface DocProps {
  title: string
  subs: SubProps[]
}

export const docs: DocProps[] = [
  {
    title: 'Introduction',
    subs: [
      {
        title: 'Introduction',
        hash: '#introduction',
        component: AppIntroduction
      },
      {
        title: 'React Compatibility',
        hash: '#react',
        component: ReactInfo
      },
      {
        title: 'Last Updates',
        hash: '#last-updates',
        component: AppLastUpdates
      },
      {
        title: 'Install',
        hash: '#install',
        component: AppInstall
      }
    ]
  },
  {
    title: 'Usage',
    subs: [
      {
        title: 'Fetch Provider',
        hash: '#fetch-provider',
        component: FetchProvider
      },
      {
        title: 'Global Error Handler',
        hash: '#global-error-handler',
        component: GlobalErrorHandler
      },
      {
        title: 'Custom Error Component',
        hash: '#error-component',
        component: ErrorComponent
      },
      {
        title: 'useFetch hook',
        hash: '#use-fetch-hook',
        component: UseFetchHook
      },
      {
        title: 'Common Headers',
        hash: '#common-headers',
        component: CommonHeader
      },
      {
        title: 'useCache',
        hash: '#use-cache',
        component: UseCache
      },
      {
        title: 'Properties',
        hash: '#properties',
        component: AppProperties
      },
      {
        title: 'Example',
        hash: '#example',
        component: AppRepository
      }
    ]
  }
]

export default {
  setup() {
    return {
      docs
    }
  }
}
</script>

<template>
  <aside class="sidepanel">
    <div v-for="doc in docs" :key="doc.title">
      <a class="title" href="#">{{ doc.title }}</a>
      <a v-for="sub in doc.subs" :key="sub.title" class="section" :href="sub.hash">{{ sub.title }}</a>
      <div class="divider left"></div>
    </div>
  </aside>
</template>
