<script setup lang="ts">

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const milestones = [
  {
    year: '2014',
    event: 'First public release by Evan You, after working with AngularJS at Google.',
  },
  { year: '2016', event: 'Vue 2 released, with a virtual DOM and server-side rendering support.' },
  {
    year: '2020',
    event:
      'Vue 3 released: rewritten in TypeScript, Proxy-based reactivity and the Composition API.',
  },
  {
    year: '2023',
    event:
      'Vue 2 reached End of Life on 31 December 2023. No further fixes, including security fixes.',
  },
  {
    year: '2026',
    event:
      'Vue 3.5 is the current stable line; Vue 3.6 (with the optional "Vapor Mode") is at release-candidate stage.',
  },
]

const concepts = [
  {
    name: 'Declarative rendering',
    text: 'You describe what the page should look like for a given state using HTML-based templates. Vue works out the DOM updates.',
  },
  {
    name: 'Reactivity',
    text: 'Values created with ref() or reactive() are tracked. When they change, every part of the page that uses them updates automatically.',
  },
  {
    name: 'Components',
    text: 'The UI is split into reusable, self-contained pieces. Data flows into a component through props and back out through emitted events.',
  },
  {
    name: 'Single-File Components (SFC)',
    text: 'A .vue file keeps a component’s template, script and (optionally scoped) styles together in one file.',
  },
  {
    name: 'Directives',
    text: 'Special template attributes such as v-if, v-for, v-model, v-bind (:) and v-on (@) that add behaviour to HTML.',
  },
  {
    name: 'Options API vs Composition API',
    text: 'Two ways to write component logic. The Options API groups code by option (data, methods, computed); the Composition API (<script setup>) groups it by feature. Both are fully supported.',
  },
]

const ecosystem = [
  {
    tool: 'create-vue',
    role: 'Scaffolds a new project (npm create vue@latest).',
    official: 'Official',
  },
  {
    tool: 'Vite',
    role: 'Development server with instant hot reload, and the production build tool.',
    official: 'Created by Vue’s author; framework-agnostic',
  },
  {
    tool: 'Vue Router',
    role: 'Client-side routing between pages/views of a single-page application.',
    official: 'Official',
  },
  {
    tool: 'Pinia',
    role: 'State management: data shared between many components (successor to Vuex).',
    official: 'Official',
  },
  {
    tool: 'Vue DevTools',
    role: 'Browser / Vite plugin to inspect components, state and routes.',
    official: 'Official',
  },
  {
    tool: 'Nuxt',
    role: 'Full-stack meta-framework: server-side rendering, static generation, file-based routing, server routes.',
    official: 'Community (built on Vue)',
  },
  {
    tool: 'Vitest',
    role: 'Unit testing that reuses the Vite configuration.',
    official: 'Vite ecosystem',
  },
]

const comparison = [
  {
    criterion: 'What it is',
    vue: 'Progressive framework',
    react: 'UI library',
    angular: 'Full, opinionated framework',
    svelte: 'Compiler-based framework',
  },
  {
    criterion: 'Backed by',
    vue: 'Independent core team',
    react: 'Meta',
    angular: 'Google',
    svelte: 'Open-source core team',
  },
  {
    criterion: 'Writing UI',
    vue: 'HTML-based templates (JSX optional)',
    react: 'JSX',
    angular: 'HTML templates + TypeScript classes',
    svelte: 'HTML-like templates, compiled away',
  },
  {
    criterion: 'Reactivity',
    vue: 'Proxy-based refs; tracks exactly what each component uses',
    react: 'State change re-renders the component; virtual DOM diff',
    angular: 'Signals',
    svelte: 'Compiler + runes ($state)',
  },
  {
    criterion: 'Routing & shared state',
    vue: 'Official (Vue Router, Pinia)',
    react: 'Third-party choices',
    angular: 'Built in',
    svelte: 'Via SvelteKit / built in',
  },
  {
    criterion: 'Full-stack option',
    vue: 'Nuxt',
    react: 'Next.js, React Router',
    angular: 'Angular SSR',
    svelte: 'SvelteKit',
  },
  {
    criterion: 'Learning curve',
    vue: 'Gentle',
    react: 'Moderate',
    angular: 'Steep',
    svelte: 'Gentle',
  },
]

const pros = [
  'Gentle learning curve: templates are plain HTML plus a few directives, so HTML/CSS/JS knowledge transfers directly (Vue.js, n.d.a).',
  'Progressive adoption: it can enhance a single existing page or power a whole single-page application (Vue.js, n.d.a).',
  'Official router, state management and tooling, so there is one recommended way to do common tasks (Vue Router, n.d.; Pinia, n.d.).',
  'Fine-grained reactivity means only the components that use changed data are updated (Vue.js, n.d.b).',
  'Single-File Components keep template, logic and styles for one feature in one place (Vue.js, n.d.e).',
]

const cons = [
  'Smaller ecosystem and job market than React, so fewer third-party libraries and tutorials.',
  'A purely client-rendered SPA ships an almost empty HTML page, which is slower to first display and harder for some crawlers to read. Server-side rendering or pre-rendering (e.g. with Nuxt) solves this but adds complexity (Vue.js, n.d.d).',
  'The Vue 2 → Vue 3 upgrade contained breaking changes and Vue 2 is no longer supported, which left many older projects needing migration (Vue.js, n.d.f; Vue.js, n.d.g).',
  'Two API styles (Options and Composition) mean tutorials and codebases can look very different from each other (Vue.js, n.d.c).',
  'Some reactivity details catch beginners out, e.g. needing .value on refs in script code, or losing reactivity by destructuring a reactive object (Vue.js, n.d.b).',
]

const references = [
  { text: 'Angular (n.d.) What is Angular?', url: 'https://angular.dev/overview' },
  { text: 'Made with Vue.js (n.d.) Nintendo.', url: 'https://madewithvuejs.com/nintendo' },
  {
    text: 'Monterail (n.d.) Top companies using Vue.js.',
    url: 'https://www.monterail.com/blog/top-companies-using-vue-js',
  },
  { text: 'npm (n.d.) vue.', url: 'https://www.npmjs.com/package/vue' },
  { text: 'Nuxt (n.d.) Nuxt documentation.', url: 'https://nuxt.com/docs' },
  { text: 'Pinia (n.d.) Pinia: the intuitive store for Vue.js.', url: 'https://pinia.vuejs.org/' },
  { text: 'React (n.d.) React.', url: 'https://react.dev/' },
  { text: 'Svelte (n.d.) Svelte.', url: 'https://svelte.dev/' },
  { text: 'Vite (n.d.) Vite: next generation frontend tooling.', url: 'https://vite.dev/' },
  { text: 'Vue Router (n.d.) Vue Router.', url: 'https://router.vuejs.org/' },
  {text: 'Vue School (2025) Vue.js – 2025 in review and a peek into 2026.',
    url: 'https://vueschool.io/articles/news/vue-js-2025-in-review-and-a-peek-into-2026/',
  },
  {text: 'Worldline (2016) Introduction to Vue.js.',
    url: 'https://worldline.github.io/vuejs-training/presentation/',
  },
  { text: 'Vue.js (n.d.a) Introduction.', url: 'https://vuejs.org/guide/introduction.html' },
  {
    text: 'Vue.js (n.d.b) Reactivity in depth.',
    url: 'https://vuejs.org/guide/extras/reactivity-in-depth.html',
  },
  {
    text: 'Vue.js (n.d.c) Composition API FAQ.',
    url: 'https://vuejs.org/guide/extras/composition-api-faq.html',
  },
  {
    text: 'Vue.js (n.d.d) Server-side rendering (SSR).',
    url: 'https://vuejs.org/guide/scaling-up/ssr.html',
  },
  {
    text: 'Vue.js (n.d.e) Single-file components.',
    url: 'https://vuejs.org/guide/scaling-up/sfc.html',
  },
  { text: 'Vue.js (n.d.f) Vue 3 migration guide.', url: 'https://v3-migration.vuejs.org/' },
  { text: 'Vue.js (n.d.g) Vue 2 has reached end of life.', url: 'https://v2.vuejs.org/eol/' },
  { text: 'Vue.js (n.d.h) Quick start.', url: 'https://vuejs.org/guide/quick-start.html' },
]
</script>

<template>
  <h1 class="text-3xl font-bold text-mist-300 mb-2">Reference Notes</h1>
  <p class="text-mist-600">
    Written notes on Vue.js to read alongside the presentation. For hands-on practice, follow the
    <RouterLink to="/tutorial"><span>Setup Tutorial</span></RouterLink
    >; for syntax at a glance, see the
    <RouterLink to="/cheatsheet"><span>Cheat Sheet</span></RouterLink
    >.
  </p>
  <hr class="border-b text-mist-800 mt-6 mb-4" />

  <!-- CONTENTS -->
  <nav class="mb-6 bg-[#030405] border border-mist-900 rounded-2xl p-4 text-sm">
    <p class="uppercase text-mist-300 font-mono text-xs mb-2">On this page</p>
    <ol class="list-decimal list-inside text-mist-600 space-y-1">
      <li><a href="" @click.prevent="scrollToSection('overview')">What is Vue.js?</a></li>
      <li><a href="" @click.prevent="scrollToSection('history')">A short history</a></li>
      <li><a href="" @click.prevent="scrollToSection('concepts')">Core concepts</a></li>
      <li><a href="" @click.prevent="scrollToSection('system')">How Vue fits into a system</a></li>
      <li><a href="" @click.prevent="scrollToSection('ecosystem')">The ecosystem</a></li>
      <li>
        <a href="" @click.prevent="scrollToSection('comparison')"
          >Vue compared with other frameworks</a
        >
      </li>
      <li><a href="" @click.prevent="scrollToSection('pros-cons')">Pros and cons</a></li>
      <li>
        <a href="" @click.prevent="scrollToSection('when')">When to use it (and when not to)</a>
      </li>
      <li><a href="" @click.prevent="scrollToSection('references')">References</a></li>
    </ol>
  </nav>

  <section id="overview" class="mb-6 text-mist-600 flex flex-col gap-3">
    <h2 class="text-xl font-bold text-mist-300">1. What is Vue.js?</h2>
    <p>
      Vue (pronounced <em>view</em>) is a free, open-source JavaScript framework for building user
      interfaces. It builds on standard HTML, CSS and JavaScript and adds a declarative,
      component-based way of describing what the page should show (Vue.js, n.d.a).
    </p>
    <p>
      Vue calls itself the <strong>progressive framework</strong>: you can use as little or as much
      of it as you need. It can be dropped into one existing HTML page to add a bit of
      interactivity, or used with its build tooling, router and state management to build a full
      single-page application (Vue.js, n.d.a).
    </p>
  </section>

  <section id="history" class="mb-6 text-mist-600 flex flex-col gap-3">
    <h2 class="text-xl font-bold text-mist-300">2. A short history</h2>
    <div class="overflow-x-auto border border-mist-900 rounded-2xl">
      <table class="w-full text-left text-sm">
        <thead
          class="bg-[#030405] text-mist-300 border-b border-mist-900 uppercase font-mono text-xs"
        >
          <tr>
            <th class="p-3">Year</th>
            <th class="p-3">Milestone</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-mist-900">
          <tr v-for="m in milestones" :key="m.year">
            <td class="p-3 font-semibold text-mist-300 whitespace-nowrap">{{ m.year }}</td>
            <td class="p-3">{{ m.event }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs">
      Sources: Vue.js (n.d.a; n.d.f; n.d.g); npm (n.d.), checked 26 October 2026.
    </p>
  </section>

  <section id="concepts" class="mb-6 text-mist-600 flex flex-col gap-3">
    <h2 class="text-xl font-bold text-mist-300">3. Core concepts</h2>
    <dl class="grid gap-3 md:grid-cols-2">
      <div
        v-for="c in concepts"
        :key="c.name"
        class="bg-[#030405] border border-mist-900 rounded-2xl p-4"
      >
        <dt class="font-semibold text-mist-300 mb-1">{{ c.name }}</dt>
        <dd class="text-sm">{{ c.text }}</dd>
      </div>
    </dl>
    <p>
      Every one of these is used in the
      <RouterLink to="/tutorial2"><span>Development Tutorial</span></RouterLink
      >, and you can try the finished result on the
      <RouterLink to="/demo"><span>Live Demo</span></RouterLink> page.
    </p>
  </section>

  <section id="system" class="mb-6 text-mist-600 flex flex-col gap-3">
    <h2 class="text-xl font-bold text-mist-300">4. How Vue fits into a system</h2>
    <p>
      Vue only handles the <strong>front end</strong>: what the user sees and interacts with in the
      browser. A complete web application normally adds a back end and a database, and Vue talks to
      them over HTTP, usually by fetching JSON from an API.
    </p>

    <!-- Simple architecture diagram -->
    <div
      class="flex flex-col md:flex-row items-stretch gap-2 text-sm"
      role="img"
      aria-label="Diagram: the Vue app in the browser exchanges JSON over HTTP with a back-end API, which reads and writes a database"
    >
      <div class="flex-1 border-2 border-emerald-600 rounded-2xl p-3">
        <p class="font-semibold text-mist-300">Browser</p>
        <p>Vue app: components, Vue Router, Pinia</p>
      </div>
      <div class="flex items-center justify-center text-emerald-500 font-mono">⇄ JSON ⇄</div>
      <div class="flex-1 border border-mist-700 rounded-2xl p-3">
        <p class="font-semibold text-mist-300">Back-end API</p>
        <p>e.g. Node/Express, Laravel, Django, or Nuxt server routes</p>
      </div>
      <div class="flex items-center justify-center text-mist-500 font-mono">⇄</div>
      <div class="flex-1 border border-mist-700 rounded-2xl p-3">
        <p class="font-semibold text-mist-300">Database</p>
        <p>e.g. PostgreSQL, MySQL, MongoDB</p>
      </div>
    </div>

    <p>
      Before deployment, <strong>Vite</strong> compiles the <code>.vue</code> files into plain HTML,
      CSS and JavaScript, which can be served from any static host or CDN (Vite, n.d.).
    </p>
    <div class="border-l-4 border-emerald-600 pl-4">
      <p class="font-semibold text-mist-300 mb-1">Case study: this website</p>
      <p>
        This site is itself a Vue + Vite single-page application. Running
        <code>npm run deploy</code> builds it and publishes the output to a
        <code>gh-pages</code> branch, which GitHub Pages serves. It uses <em>hash</em> routing (the
        <code>#/notes</code> in the address) because GitHub Pages cannot redirect unknown URLs back
        to <code>index.html</code>. Because the content is rendered in the browser, a tool that does
        not run JavaScript sees an almost empty page, which is a live example of the SEO drawback
        listed in section 7.
      </p>
    </div>
  </section>

  <section id="ecosystem" class="mb-6 text-mist-600 flex flex-col gap-3">
    <h2 class="text-xl font-bold text-mist-300">5. The ecosystem</h2>
    <div class="overflow-x-auto border border-mist-900 rounded-2xl">
      <table class="w-full text-left text-sm">
        <thead
          class="bg-[#030405] text-mist-300 border-b border-mist-900 uppercase font-mono text-xs"
        >
          <tr>
            <th class="p-3">Tool</th>
            <th class="p-3">What it does</th>
            <th class="p-3">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-mist-900">
          <tr v-for="e in ecosystem" :key="e.tool">
            <td class="p-3 font-semibold text-mist-300 whitespace-nowrap">{{ e.tool }}</td>
            <td class="p-3">{{ e.role }}</td>
            <td class="p-3">{{ e.official }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs">
      Sources: Vue.js (n.d.h); Vite (n.d.); Vue Router (n.d.); Pinia (n.d.); Nuxt (n.d.).
    </p>
  </section>

  <section id="comparison" class="mb-6 text-mist-600 flex flex-col gap-3">
    <h2 class="text-xl font-bold text-mist-300">6. Vue compared with other frameworks</h2>
    <p>
      All four tools solve the same problem, keeping the page in sync with the data, but make
      different trade-offs.
    </p>
    <div class="overflow-x-auto border border-mist-900 rounded-2xl">
      <table class="w-full min-w-[40rem] text-left text-sm">
        <thead
          class="bg-[#030405] text-mist-300 border-b border-mist-900 uppercase font-mono text-xs"
        >
          <tr>
            <th class="p-3"></th>
            <th class="p-3 text-emerald-500">Vue</th>
            <th class="p-3">React</th>
            <th class="p-3">Angular</th>
            <th class="p-3">Svelte</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-mist-900">
          <tr v-for="row in comparison" :key="row.criterion">
            <td class="p-3 font-semibold text-mist-300">{{ row.criterion }}</td>
            <td class="p-3 text-mist-400">{{ row.vue }}</td>
            <td class="p-3">{{ row.react }}</td>
            <td class="p-3">{{ row.angular }}</td>
            <td class="p-3">{{ row.svelte }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs">
      Sources: Vue.js (n.d.a; n.d.b); React (n.d.); Angular (n.d.); Svelte (n.d.). "Learning curve"
      is the group's own judgement.
    </p>
  </section>

  <section id="pros-cons" class="mb-6 text-mist-600 flex flex-col gap-3">
    <h2 class="text-xl font-bold text-mist-300">7. Pros and cons</h2>
    <div class="grid gap-3 md:grid-cols-2">
      <div class="bg-[#030405] border border-emerald-900 rounded-2xl p-4">
        <p class="font-semibold text-emerald-500 mb-2">Pros</p>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li v-for="p in pros" :key="p">{{ p }}</li>
        </ul>
      </div>
      <div class="bg-[#030405] border border-rose-900 rounded-2xl p-4">
        <p class="font-semibold text-rose-400 mb-2">Cons</p>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li v-for="c in cons" :key="c">{{ c }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="when" class="mb-6 text-mist-600 flex flex-col gap-3">
    <h2 class="text-xl font-bold text-mist-300">8. When to use it (and when not to)</h2>
    <p><strong>A good fit:</strong></p>
    <ul class="list-disc pl-5 space-y-1">
      <li>Adding interactive features to an existing site without rewriting it.</li>
      <li>Dashboards, admin panels and other data-driven interfaces.</li>
      <li>Single-page applications built by a team that is new to front-end frameworks.</li>
    </ul>
    <p><strong>Consider something else:</strong></p>
    <ul class="list-disc pl-5 space-y-1">
      <li>
        Mostly static, content-heavy sites (blogs, documentation): a static site generator or Nuxt's
        pre-rendering will load faster and index better.
      </li>
      <li>
        Projects that must hire from the largest possible pool of developers, where React's larger
        market matters.
      </li>
    </ul>
  </section>

  <hr class="border-b text-mist-800 mt-6 mb-4" />
  <section id="references" class="mb-6 text-mist-600 flex flex-col gap-3">
    <h2 class="text-xl font-bold text-mist-300">References</h2>
    <p class="text-xs">Here is a list of some of the resources we used to create this website that you may follow
        if you want to read up on Vue.js and its ecosystem (All sources accessed October 2026.):.</p>
    <ul class="space-y-2 text-sm">
      <li v-for="r in references" :key="r.url">
        {{ r.text }} Available at: <a :href="r.url" target="_blank" rel="noopener">{{ r.url }}</a>
      </li>
    </ul>
  </section>
  <div class="h-50"></div>
</template>

<style scoped>
strong {
  color: var(--color-emerald-600);
}
code {
  color: var(--color-mist-300);
}
span {
  color: var(--color-emerald-600);
}
span:hover {
  color: var(--color-emerald-400);
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
