<script setup lang="ts">
import { computed, ref } from 'vue'
import ChristmasMarket from '../demo/ChristmasMarket.vue'
import { stalls } from '../demo/stalls'

const steps = [
  {
    n: 1,
    label: 'Step 1',
    title: 'Clear the boilerplate and add the theme',
    adds: 'A styled red banner. No Vue features yet, just a template and global CSS.',
    concepts: ['Single-File Component (template + style)', 'Hot Module Replacement'],
    check: [
      'You see the red banner with a gold bottom border.',
      'The page background is cream, not white.',
      'Saving App.vue updates the browser without a refresh.',
    ],
  },
  {
    n: 2,
    label: 'Step 2',
    title: 'Reactivity: ticket reservations',
    adds: 'A ticket counter whose number updates as you click.',
    concepts: ['ref()', '{{ }} interpolation', '@click', ':disabled', 'v-if'],
    check: [
      'The − button is faded and unclickable at 0.',
      'The green "reserved" message only appears above 0.',
      'Watch "tickets" change in the Behind the scenes panel as you click.',
    ],
  },
  {
    n: 3,
    label: 'Step 3',
    title: 'Data and your first component',
    adds: 'Six stall cards generated from one StallCard component.',
    concepts: ['Components', 'Props', 'v-for with :key', 'Scoped styles'],
    check: [
      'Six cards appear, each with a green category tag.',
      'Cards wrap onto new rows when the window is narrow.',
      'If you see nothing, check the import paths in App.vue.',
    ],
  },
  {
    n: 4,
    label: 'Step 4 (final)',
    title: 'Live search and filtering',
    adds: 'A search box and category dropdown that filter the stalls as you type.',
    concepts: ['v-model', 'computed()', 'v-else (empty state)'],
    check: [
      'Typing "bake" leaves only Thistle Bakes.',
      'Choosing "Gifts" leaves two stalls.',
      'Typing "xyz" shows "No stalls match your search."',
    ],
  },
]

const step = ref(4)
const current = computed(() => steps.find((s) => s.n === step.value)!)

// The demo's reactive state lives here and is shared with the app via v-model,
// so we can show it live in the panel below the app.
const tickets = ref(0)
const search = ref('')
const category = ref('All')

const matching = computed(
  () =>
    stalls.filter(
      (s) =>
        (category.value === 'All' || s.category === category.value) &&
        s.name.toLowerCase().includes(search.value.toLowerCase()),
    ).length,
)

function reset() {
  tickets.value = 0
  search.value = ''
  category.value = 'All'
}
</script>

<template>
  <h1 class="text-3xl font-bold text-mist-300 mb-2">Live Demo</h1>
  <p class="text-mist-600">
    The finished Paisley Christmas Market app from the
    <RouterLink to="/tutorial2"><span>Development Tutorial</span></RouterLink
    >, running live inside this page. Pick a step to see what your app should look like at that
    point, then compare it with your own.
  </p>
  <hr class="border-b text-mist-800 mt-6 mb-4" />

  <!-- STEP PICKER -->
  <div class="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Tutorial step">
    <button
      v-for="s in steps"
      :key="s.n"
      role="tab"
      :aria-selected="step === s.n"
      class="text-sm px-4 py-1.5 rounded-full border transition-colors cursor-pointer"
      :class="
        step === s.n
          ? 'bg-emerald-600 border-emerald-600 text-white'
          : 'border-mist-800 text-mist-400 hover:border-emerald-600 hover:text-emerald-400'
      "
      @click="step = s.n"
    >
      {{ s.label }}
    </button>
  </div>

  <!-- STEP INFO -->
  <section class="bg-[#030405] border border-mist-900 rounded-2xl p-4 mb-4 text-mist-600 text-sm">
    <h2 class="text-lg font-bold text-mist-300 mb-1">{{ current.label }}: {{ current.title }}</h2>
    <p class="mb-3">{{ current.adds }}</p>
    <div class="flex flex-wrap gap-2 mb-3">
      <code
        v-for="c in current.concepts"
        :key="c"
        class="text-xs px-2 py-0.5 rounded-md bg-mist-900 text-emerald-400"
        >{{ c }}</code
      >
    </div>
    <p class="uppercase text-mist-300 font-mono text-xs mb-1">Check your version</p>
    <ul class="list-disc pl-5 space-y-1">
      <li v-for="c in current.check" :key="c">{{ c }}</li>
    </ul>
  </section>

  <!-- APP IN A BROWSER FRAME -->
  <div class="rounded-2xl overflow-hidden border border-mist-800 mb-4">
    <div class="flex items-center gap-2 bg-mist-900 px-3 py-2">
      <span class="w-3 h-3 rounded-full bg-rose-500"></span>
      <span class="w-3 h-3 rounded-full bg-amber-400"></span>
      <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
      <div
        class="ml-2 flex-1 text-xs font-mono text-mist-400 bg-mist-950 rounded-md px-3 py-1 truncate"
      >
        http://localhost:5173
      </div>
    </div>
    <ChristmasMarket
      v-model:tickets="tickets"
      v-model:search="search"
      v-model:category="category"
      :step="step"
    />
  </div>

  <!-- BEHIND THE SCENES -->
  <section
    v-if="step >= 2"
    class="bg-[#030405] border border-mist-900 rounded-2xl p-4 mb-6 text-sm text-mist-600"
  >
    <div class="flex items-center justify-between mb-2">
      <p class="uppercase text-mist-300 font-mono text-xs">Behind the scenes: reactive state</p>
      <button
        class="text-xs px-3 py-1 rounded-full border border-mist-800 hover:border-emerald-600 hover:text-emerald-400 cursor-pointer"
        @click="reset"
      >
        Reset
      </button>
    </div>
    <pre
      class="font-mono text-xs text-mist-400 leading-relaxed overflow-x-auto"
    ><code>tickets.value  = {{ tickets }}<template v-if="step >= 4">
search.value   = '{{ search }}'
category.value = '{{ category }}'
filteredStalls = {{ matching }} of {{ stalls.length }} stalls</template></code></pre>
    <p class="mt-2 text-xs">
      Interact with the app above and watch these values change. The page never updates the HTML by
      hand: it changes the data and Vue re-renders what depends on it.
    </p>
  </section>

  <p class="text-mist-600 text-sm mb-6">
    Want the code for a step? It's in the
    <RouterLink to="/tutorial2"><span>Development Tutorial</span></RouterLink
    >. Stall data is fictional and created for this tutorial.
  </p>
  <div class="h-50"></div>
</template>

<style scoped>
span {
  color: var(--color-emerald-600);
}
span:hover {
  color: var(--color-emerald-400);
}
</style>
