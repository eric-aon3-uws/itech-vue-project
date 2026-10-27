<script setup lang="ts">


interface Card {
  title: string
  code: string
  note?: string
}
interface Section {
  id: string
  heading: string
  cards: Card[]
}

// Split so the .vue compiler doesn't mistake these strings for the real script tags.
const OPEN = '<' + 'script setup>'
const CLOSE = '</' + 'script>'

const sections: Section[] = [
  {
    id: 'start',
    heading: 'Project commands',
    cards: [
      {
        title: 'Create and run a project',
        code: 'npm create vue@latest\ncd my-app\nnpm install\nnpm run dev',
        note: 'Vite serves the app with hot reload: save a file and the browser updates.',
      },
      {
        title: 'Build for production',
        code: 'npm run build    # output goes to /dist\nnpm run preview  # test the built version',
      },
    ],
  },
  {
    id: 'template',
    heading: 'Template syntax',
    cards: [
      {
        title: 'Show data',
        code: '<p>{{ message }}</p>\n<p>{{ tickets * 2 }} seats</p>',
        note: 'Any JavaScript expression works inside {{ }}.',
      },
      {
        title: 'Bind an attribute  (v-bind  →  :)',
        code: '<img :src="photoUrl" :alt="stall.name" />\n<button :disabled="tickets === 0">−</button>',
      },
      {
        title: 'Dynamic classes and styles',
        code: '<p :class="{ active: isOpen, sold: soldOut }">…</p>\n<p :style="{ color: textColour }">…</p>',
      },
      {
        title: 'Listen to events  (v-on  →  @)',
        code: '<button @click="tickets++">+</button>\n<form @submit.prevent="save">…</form>\n<input @keyup.enter="search" />',
        note: '.prevent calls preventDefault(); .enter only fires on the Enter key.',
      },
      {
        title: 'Conditional rendering',
        code: '<p v-if="tickets > 5">Group booking!</p>\n<p v-else-if="tickets > 0">Booked</p>\n<p v-else>No tickets yet</p>\n\n<p v-show="isOpen">Market is open</p>',
        note: 'v-if adds/removes the element; v-show just hides it with CSS.',
      },
      {
        title: 'Lists',
        code: '<li v-for="stall in stalls" :key="stall.id">\n  {{ stall.name }}\n</li>\n\n<li v-for="(stall, i) in stalls" :key="stall.id">\n  {{ i + 1 }}. {{ stall.name }}\n</li>',
        note: 'Always give each item a unique :key.',
      },
      {
        title: 'Two-way binding  (v-model)',
        code: '<input v-model="search" />\n<input v-model.trim="name" />\n<input v-model.number="age" type="number" />\n<input v-model="agreed" type="checkbox" />\n<select v-model="category">…</select>',
      },
    ],
  },
  {
    id: 'script',
    heading: 'Reactive state (Composition API)',
    cards: [
      {
        title: 'ref: a reactive value',
        code: `${OPEN}\nimport { ref } from 'vue'\n\nconst tickets = ref(0)\nfunction addTicket() {\n  tickets.value++   // .value in script\n}\n${CLOSE}\n\n<p>{{ tickets }}</p> <!-- no .value in template -->`,
      },
      {
        title: 'reactive: a reactive object',
        code: "import { reactive } from 'vue'\n\nconst form = reactive({ name: '', email: '' })\nform.name = 'Shami'   // no .value needed",
      },
      {
        title: 'computed: derived values',
        code: "import { computed } from 'vue'\n\nconst total = computed(() => tickets.value * price.value)",
        note: 'Re-calculates only when tickets or price change.',
      },
      {
        title: 'watch: run code when something changes',
        code: "import { watch } from 'vue'\n\nwatch(search, (newValue, oldValue) => {\n  console.log('Search changed to', newValue)\n})",
      },
      {
        title: 'Lifecycle + fetching data',
        code: "import { ref, onMounted } from 'vue'\n\nconst stalls = ref([])\nonMounted(async () => {\n  const res = await fetch('/api/stalls')\n  stalls.value = await res.json()\n})",
      },
    ],
  },
  {
    id: 'components',
    heading: 'Components',
    cards: [
      {
        title: 'Use a component',
        code: `${OPEN}\nimport StallCard from './components/StallCard.vue'\n${CLOSE}\n\n<StallCard :stall="stall" />`,
      },
      {
        title: 'Props: data in',
        code: '// StallCard.vue (JavaScript)\nconst props = defineProps({\n  stall: { type: Object, required: true }\n})\n\n// TypeScript version\nconst props = defineProps<{ stall: Stall }>()',
        note: 'Props are read-only inside the child.',
      },
      {
        title: 'Emits: events out',
        code: "// Child\nconst emit = defineEmits(['favourite'])\nemit('favourite', props.stall.id)\n\n<!-- Parent -->\n<StallCard @favourite=\"addFavourite\" />",
      },
      {
        title: 'Slots: pass in HTML',
        code: '<!-- Panel.vue -->\n<section class="panel"><slot /></section>\n\n<!-- Parent -->\n<Panel><h2>Find a Stall</h2></Panel>',
      },
      {
        title: 'Scoped styles',
        code: '<style scoped>\n.card { border-top: 4px solid red; }\n</style>',
        note: 'scoped = only affects this component.',
      },
    ],
  },
  {
    id: 'more',
    heading: 'More template & component features',
    cards: [
      {
        title: 'Event and key modifiers',
        code: '<button @click.stop="like">♡</button>     <!-- stop bubbling -->\n<button @click.once="claimOffer">…</button> <!-- fire once -->\n<input @keyup.esc="search = \'\'" />\n<textarea @keydown.ctrl.enter="send" />\n<div @click.right.prevent="openMenu">…</div>',
        note: 'Modifiers can be chained: @click.stop.prevent',
      },
      {
        title: 'Raw HTML  (v-html)',
        code: '<div v-html="stall.descriptionHtml"></div>',
        note: 'Renders a string as HTML. Only use with content you trust, never with user input (XSS risk).',
      },
      {
        title: 'Template refs: reach a DOM element',
        code: "import { useTemplateRef, onMounted } from 'vue'\n\nconst searchBox = useTemplateRef('searchBox')\nonMounted(() => searchBox.value.focus())\n\n<input ref=\"searchBox\" />",
        note: 'useTemplateRef is Vue 3.5+. Older code uses const searchBox = ref(null) with the same name.',
      },
      {
        title: 'Lifecycle hooks',
        code: "// import whichever you use, e.g.\nimport { onMounted, onUnmounted } from 'vue'\n\nonBeforeMount(() => {})   // before first render\nonMounted(() => {})       // in the page: fetch data, focus inputs\nonBeforeUpdate(() => {})  // data changed, before re-render\nonUpdated(() => {})       // after re-render\nonBeforeUnmount(() => {}) // about to be removed\nonUnmounted(() => {})     // removed: clear timers/listeners",
        note: 'Options API equivalents: mounted(), updated(), unmounted()…',
      },
      {
        title: 'Composables: reusable logic',
        code: "// composables/useCounter.js\nimport { ref } from 'vue'\nexport function useCounter(start = 0) {\n  const count = ref(start)\n  const increment = () => count.value++\n  return { count, increment }\n}\n\n// Any component\nconst { count, increment } = useCounter()",
        note: 'Convention: name them useSomething.',
      },
      {
        title: 'Built-in components',
        code: '<Transition name="fade">\n  <p v-if="show">Animated in/out</p>\n</Transition>\n\n<KeepAlive>\n  <component :is="currentTab" />  <!-- dynamic component -->\n</KeepAlive>\n\n<Teleport to="body">\n  <div class="modal">Rendered at the end of body</div>\n</Teleport>',
        note: 'KeepAlive keeps a component’s state when you switch away from it.',
      },
    ],
  },
  {
    id: 'router',
    heading: 'Vue Router & Pinia',
    cards: [
      {
        title: 'Define routes',
        code: "const router = createRouter({\n  history: createWebHashHistory(),\n  routes: [\n    { path: '/', component: HomeView },\n    { path: '/stall/:id', component: StallView },\n  ],\n})",
      },
      {
        title: 'Links and the page outlet',
        code: '<RouterLink to="/">Home</RouterLink>\n<RouterLink :to="`/stall/${stall.id}`">Details</RouterLink>\n\n<RouterView />  <!-- current page renders here -->',
      },
      {
        title: 'Read params / navigate in code',
        code: "import { useRoute, useRouter } from 'vue-router'\n\nconst route = useRoute()\nconst id = route.params.id\n\nconst router = useRouter()\nrouter.push('/')",
      },
      {
        title: 'Pinia store (shared state)',
        code: "// stores/basket.js\nexport const useBasket = defineStore('basket', () => {\n  const items = ref([])\n  function add(item) { items.value.push(item) }\n  return { items, add }\n})\n\n// Any component\nconst basket = useBasket()\nbasket.add(stall)",
      },
    ],
  },
]

const gotchas = [
  'Use .value on refs in <script>, but not in the template.',
  'Every v-for needs a unique :key, ideally an id rather than the index.',
  "Don't put v-if and v-for on the same element; in Vue 3 v-if runs first. Wrap with <template v-for> instead.",
  'Destructuring a reactive() object breaks reactivity. Use toRefs() or keep using the object.',
  "A child can't change its props. Emit an event and let the parent change the data.",
  'Vue only renders inside the element you mount to (#app); anything outside it is plain HTML.',
  'Never pass user input to v-html: it is inserted as real HTML and can run scripts.',
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <h1 class="text-3xl font-bold text-mist-300 mb-2">Cheat Sheet</h1>
  <p class="text-mist-600">
    Vue 3 syntax at a glance, using the Composition API (<code>&lt;script setup&gt;</code>) as in
    our tutorial. Examples use the Paisley Christmas Market where possible. Based on the official
    Vue guide and API reference (Vue.js, n.d.a; n.d.b), Vue Router (n.d.) and Pinia (n.d.)
    documentation.
  </p>
  <hr class="border-b text-mist-800 mt-6 mb-4" />

  <!-- Jump-to chips -->
  <div class="flex flex-wrap gap-2 mb-6">
    <button
      v-for="s in sections"
      :key="s.id"
      class="text-xs px-3 py-1 rounded-full border border-mist-800 text-mist-400 hover:border-emerald-600 hover:text-emerald-400 transition-colors cursor-pointer"
      @click="scrollToSection(s.id)"
    >
      {{ s.heading }}
    </button>
    <button
      class="text-xs px-3 py-1 rounded-full border border-mist-800 text-mist-400 hover:border-rose-600 hover:text-rose-400 transition-colors cursor-pointer"
      @click="scrollToSection('gotchas')"
    >
      Common mistakes
    </button>
  </div>

  <section v-for="s in sections" :id="s.id" :key="s.id" class="mb-8">
    <h2 class="text-xl font-bold text-mist-300 mb-3">{{ s.heading }}</h2>
    <div class="grid gap-3 md:grid-cols-2">
      <article
        v-for="card in s.cards"
        :key="card.title"
        class="min-w-0 bg-[#030405] border border-mist-900 rounded-2xl p-4 flex flex-col gap-2"
      >
        <h3 class="text-sm font-semibold text-emerald-500">{{ card.title }}</h3>
        <pre
          class="text-mist-400 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words"
        ><code>{{ card.code }}</code></pre>
        <p v-if="card.note" class="text-xs text-mist-600 mt-auto">{{ card.note }}</p>
      </article>
    </div>
  </section>

  <section id="gotchas" class="mb-8">
    <h2 class="text-xl font-bold text-mist-300 mb-3">Common mistakes</h2>
    <ul
      class="bg-[#030405] border border-rose-900 rounded-2xl p-4 pl-9 list-disc space-y-2 text-sm text-mist-600"
    >
      <li v-for="g in gotchas" :key="g">{{ g }}</li>
    </ul>
  </section>

  <hr class="border-b text-mist-800 mt-6 mb-4" />
  <section class="mb-6 text-sm text-mist-600 flex flex-col gap-2">
    <h2 class="text-xl font-bold text-mist-300">References</h2>
    <p>
      Pinia (n.d.) Pinia: the intuitive store for Vue.js. Available at:
      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">https://pinia.vuejs.org/</a>
      (Accessed: 26 October 2026).
    </p>
    <p>
      Vue Router (n.d.) Vue Router. Available at:
      <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
        >https://router.vuejs.org/</a
      >
      (Accessed: 26 October 2026).
    </p>
    <p>
      Vue.js (n.d.a) API reference. Available at:
      <a href="https://vuejs.org/api/" target="_blank" rel="noopener">https://vuejs.org/api/</a>
      (Accessed: 26 October 2026).
    </p>
    <p>
      Vue.js (n.d.b) Guide: introduction. Available at:
      <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener"
        >https://vuejs.org/guide/introduction.html</a
      >
      (Accessed: 26 October 2026).
    </p>
    <h3 class="text-base font-bold text-mist-300 mt-2">Further reading</h3>
    <p>
      ThemeSelection (2024) Vue CheatSheet. Available at:
      <a
        href="https://vue-cheatsheet.themeselection.com/vue/basic.html"
        target="_blank"
        rel="noopener"
        >https://vue-cheatsheet.themeselection.com/vue/basic.html</a
      >
      (Accessed: 27 October 2026). A longer, general-purpose reference if you want more detail than
      this page.
    </p>
  </section>
  <div class="h-50"></div>
</template>

<style scoped>
code {
  color: var(--color-mist-300);
}
pre code {
  color: inherit;
}
a {
  color: var(--color-emerald-500);
  overflow-wrap: anywhere;
}
a:hover {
  text-decoration: underline;
}
section {
  scroll-margin-top: 1rem;
}
</style>
