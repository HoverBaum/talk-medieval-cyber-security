import { defineAppSetup } from '@slidev/types'
import Particles from 'particles.vue3'
import { createHead } from '@vueuse/head'

//<meta name="monetization" content="$ilp.uphold.com/DbnmiKGQ4Khj" />

const head = createHead({
  meta: [
    {
      name: 'monetization',
      content: '$ilp.uphold.com/DbnmiKGQ4Khj',
    },
  ],
})

export default defineAppSetup(({ app }) => {
  // Vue App
  app.use(Particles)
  app.use(head)
})
