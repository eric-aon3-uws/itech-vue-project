<script setup lang="ts"></script>
<template>
  <h1 class="text-3xl font-bold text-mist-300 mb-2">Building the Paisley Christmas Market Demo</h1>
  <hr class="border-b text-mist-800 mt-6 mb-4" />
  <div class="flex flex-col">
    <!-- ========================================== -->
    <!-- SECTION: Building the Christmas Market Page -->
    <!-- ========================================== -->

    <section class="mb-6">
      <div class="text-mist-600 flex flex-col gap-4">
        <p>
          Now that we have a base to work from, let's build something real: a landing page for a
          (fictional)
          <strong>Paisley Christmas Market</strong>. By the end, you will have used Vue's
          reactivity, components, props, and live filtering.
        </p>
      </div>
    </section>

    <!-- STEP 1 -->
    <section class="mb-6">
      <h2 class="text-xl font-bold text-mist-300 mb-2">
        Step 1: Clear the boilerplate and add the theme
      </h2>
      <div class="text-mist-600 flex flex-col gap-4">
        <ol class="list-decimal list-inside space-y-2 text-mist-600">
          <li>
            In the <code class="text-mist-300">src</code> folder, if you see a
            <code class="text-mist-300">components</code> folder, delete the files inside it.
            <em>(If you don't see one, you're already good to go!)</em>
          </li>
          <li>
            Open <code class="text-mist-300">src/App.vue</code>,
            <strong>delete everything inside it</strong>, and paste this exact code:
          </li>
        </ol>

        <div
          class="w-full min-w-0 max-w-full bg-[#030405] border border-mist-900 p-4 rounded-2xl text-mist-600 text-sm overflow-x-auto"
        >
          <p class="uppercase text-mist-300 font-mono text-xs mb-2">&lt;/&gt; vue: src/App.vue</p>
          <pre v-pre class="text-mist-400 font-mono text-xs leading-relaxed"><code>&lt;template&gt;
  &lt;div class="page"&gt;
    &lt;header class="hero"&gt;
      &lt;h1&gt;🎄 Paisley Christmas Market 🎄&lt;/h1&gt;
      &lt;p&gt;Festive food, crafts and gifts at the Abbey&lt;/p&gt;
    &lt;/header&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
/* By putting our CSS here without the word 'scoped', it applies to the whole page! */
:root {
  --red: #b3202f;
  --green: #1f6f4a;
  --gold: #e0a93b;
  --cream: #fdf7ec;
  --ink: #2b2b2b;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--cream);
  color: var(--ink);
  font-family: Georgia, 'Times New Roman', serif;
}
.page { max-width: 900px; margin: 0 auto; padding: 24px 16px 48px; }

.hero {
  text-align: center; color: white; padding: 48px 24px; border-radius: 16px;
  background: linear-gradient(135deg, var(--red), #7d1220);
  border-bottom: 6px solid var(--gold);
}
.hero h1 { margin: 0 0 8px; font-size: 2.2rem; }
.hero p { margin: 0; opacity: .9; }

.panel {
  background: white; border-radius: 12px; padding: 24px; margin-top: 28px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}
.panel h2 { margin-top: 0; color: var(--red); }

.counter { display: flex; align-items: center; justify-content: center; gap: 20px; }
.counter span { font-size: 2rem; min-width: 2ch; text-align: center; }
.btn {
  background: var(--green); color: white; border: none; border-radius: 999px;
  padding: 10px 22px; font-size: 1.1rem; cursor: pointer; transition: transform .15s;
}
.btn:hover { transform: scale(1.06); }
.btn:disabled { opacity: .4; cursor: not-allowed; transform: none; }
.message { text-align: center; color: var(--green); font-weight: bold; margin-bottom: 0; }

.filters { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
.filters input, .filters select {
  padding: 10px 14px; font-size: 1rem; font-family: inherit;
  border: 2px solid #ddd; border-radius: 8px;
}
.filters input { flex: 1; min-width: 180px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
.empty { text-align: center; font-style: italic; color: #888; }
.footer { text-align: center; margin-top: 32px; font-size: .85rem; color: #888; }
&lt;/style&gt;</code></pre>
        </div>

        <p>
          Save and check your browser. You should see a festive red banner. Vite updates the page
          the moment you save, with no refresh needed (Hot Module Replacement).
        </p>
        <img
          src="../img/tutorial/step1_banner.png"
          alt="Paisley Christmas Market Banner"
          class="md:mb-6 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        />
        <div class="border-l-4 border-emerald-600 pl-4 flex flex-col gap-3">
          <p class="font-semibold text-mist-300">Page not updating when you save?</p>
          <p>
            If you're using Docker, Vite isn't told when you save a file from Windows, so the
            browser only changes when you refresh. To fix it, open
            <code class="text-mist-300">vite.config.ts</code> and add this
            <code class="text-mist-300">server</code> block between
            <code class="text-mist-300">plugins</code> and
            <code class="text-mist-300">resolve</code>:
          </p>
          <div
            class="w-full min-w-0 bg-[#030405] border border-mist-900 p-4 rounded-2xl text-sm overflow-x-auto"
          >
            <p class="uppercase text-mist-300 font-mono text-xs mb-2">
              &lt;/&gt; typescript: vite.config.ts
            </p>
            <pre
              v-pre
              class="font-mono text-xs text-mist-400 leading-relaxed"
            ><code>  server: {
    watch: {
      usePolling: true, // keep checking for saved changes
    },
  },</code></pre>
          </div>
          <p>
            Save it, stop the server with <strong>Ctrl+C</strong>, and run
            <code class="text-mist-300">npm run dev</code> again. From now on the browser updates
            on its own every time you save.
          </p>
        </div>
      </div>
    </section>

    <!-- STEP 2 -->
    <section class="mb-6">
      <h2 class="text-xl font-bold text-mist-300 mb-2">Step 2: Reactivity (Ticket Reservations)</h2>
      <div class="text-mist-600 flex flex-col gap-4">
        <p>
          Vue's main selling point is <strong>reactivity</strong>: when data changes, the page
          updates itself automatically. In your <code class="text-mist-300">App.vue</code> file,
          leave the <code class="text-mist-300">&lt;style&gt;</code> block at the bottom untouched,
          but replace the top portion with:
        </p>

        <div
          class="w-full min-w-0 max-w-full bg-[#030405] border border-mist-900 p-4 rounded-2xl text-mist-600 text-sm overflow-x-auto"
        >
          <p class="uppercase text-mist-300 font-mono text-xs mb-2">&lt;/&gt; vue: src/App.vue</p>
          <pre
            v-pre
            class="text-mist-400 font-mono text-xs leading-relaxed"
          ><code>&lt;script setup&gt;
import { ref } from 'vue'

// ref() makes a value reactive: Vue watches it and updates the page when it changes
const tickets = ref(0)
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="page"&gt;
    &lt;header class="hero"&gt;
      &lt;h1&gt;🎄 Paisley Christmas Market 🎄&lt;/h1&gt;
      &lt;p&gt;Festive food, crafts and gifts at the Abbey&lt;/p&gt;
    &lt;/header&gt;

    &lt;section class="panel"&gt;
      &lt;h2&gt;Reserve Your Tickets&lt;/h2&gt;
      &lt;div class="counter"&gt;
        &lt;button class="btn" @click="tickets--" :disabled="tickets === 0"&gt;−&lt;/button&gt;
        &lt;span&gt;{{ tickets }}&lt;/span&gt;
        &lt;button class="btn" @click="tickets++"&gt;+&lt;/button&gt;
      &lt;/div&gt;
      &lt;p v-if="tickets &gt; 0" class="message"&gt;🎟️ {{ tickets }} reserved. See you at the Abbey!&lt;/p&gt;
    &lt;/section&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>

        <p>Click the buttons in your browser. Four key Vue features are working together here:</p>
        <ul class="list-disc list-inside space-y-1">
          <li>
            <code class="text-mist-300">&#123;&#123; tickets &#125;&#125;</code>: displays the value
            and updates automatically.
          </li>
          <li><code class="text-mist-300">@click</code>: listens for button click events.</li>
          <li>
            <code class="text-mist-300">:disabled</code>: dynamically binds an HTML attribute so the
            minus button disables at 0.
          </li>
          <li>
            <code class="text-mist-300">v-if</code>: conditionally renders the reservation message
            only when tickets exceed 0.
          </li>
        </ul>

        <img
          src="../img/tutorial/step2_tickets.png"
          alt="Ticket Reservation Counter"
          class="md:mb-6 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        />
      </div>
    </section>

    <!-- STEP 3 -->
    <section class="mb-6">
      <h2 class="text-xl font-bold text-mist-300 mb-2">Step 3: Data and your first Component</h2>
      <div class="text-mist-600 flex flex-col gap-4">
        <p>
          Real sites show lists of items. We will store the market stalls as mock data and make a
          reusable "card" component to display each one.
        </p>
        <p>
          Inside your <code class="text-mist-300">src</code> folder, create a new folder named
          <code class="text-mist-300">data</code>. Inside that, create
          <code class="text-mist-300">stalls.js</code>:
        </p>

        <div
          class="w-full min-w-0 max-w-full bg-[#030405] border border-mist-900 p-4 rounded-2xl text-mist-600 text-sm overflow-x-auto"
        >
          <p class="uppercase text-mist-300 font-mono text-xs mb-2">
            &lt;/&gt; javascript: src/data/stalls.js
          </p>
          <pre
            v-pre
            class="text-mist-400 font-mono text-xs leading-relaxed"
          ><code>// Fictional demo data created for this tutorial
export const stalls = [
  { id: 1, name: 'Abbey Candle Co.', category: 'Crafts', location: 'Abbey Close', blurb: 'Hand-poured festive candles' },
  { id: 2, name: 'Paisley Pattern Prints', category: 'Gifts', location: 'High Street', blurb: 'Cards and prints in classic paisley designs' },
  { id: 3, name: 'Mulled Wine Corner', category: 'Food & Drink', location: 'Town Hall Steps', blurb: 'Warm, spiced and very festive' },
  { id: 4, name: 'Thistle Bakes', category: 'Food & Drink', location: 'Abbey Close', blurb: 'Shortbread, tablet and mince pies' },
  { id: 5, name: 'Loom & Lace', category: 'Crafts', location: 'High Street', blurb: 'Knitted scarves, hats and gloves' },
  { id: 6, name: 'Santa\'s Toy Shed', category: 'Gifts', location: 'Town Hall Steps', blurb: 'Wooden toys for all ages' }
]</code></pre>
        </div>

        <p>
          Next, inside <code class="text-mist-300">src</code>, create a new folder named
          <code class="text-mist-300">components</code> (a blank project doesn't have one). Inside
          it, create a <code class="text-mist-300">StallCard.vue</code> file:
        </p>

        <div
          class="w-full min-w-0 max-w-full bg-[#030405] border border-mist-900 p-4 rounded-2xl text-mist-600 text-sm overflow-x-auto"
        >
          <p class="uppercase text-mist-300 font-mono text-xs mb-2">
            &lt;/&gt; vue: src/components/StallCard.vue
          </p>
          <pre
            v-pre
            class="text-mist-400 font-mono text-xs leading-relaxed"
          ><code>&lt;script setup&gt;
// props: data passed IN from the parent component
defineProps({
  stall: { type: Object, required: true }
})
&lt;/script&gt;

&lt;template&gt;
  &lt;article class="card"&gt;
    &lt;span class="tag"&gt;{{ stall.category }}&lt;/span&gt;
    &lt;h3&gt;{{ stall.name }}&lt;/h3&gt;
    &lt;p&gt;{{ stall.blurb }}&lt;/p&gt;
    &lt;p class="where"&gt;📍 {{ stall.location }}&lt;/p&gt;
  &lt;/article&gt;
&lt;/template&gt;

&lt;style scoped&gt;
/* scoped: these styles only affect THIS specific component */
.card { background: var(--cream); border-radius: 10px; padding: 16px; border-top: 4px solid var(--red); }
.card h3 { margin: 10px 0 6px; }
.card p { margin: 0 0 6px; }
.tag { background: var(--green); color: white; font-size: .75rem; padding: 3px 10px; border-radius: 999px; }
.where { color: #666; font-size: .9rem; }
&lt;/style&gt;</code></pre>
        </div>

        <p>
          Now update <code class="text-mist-300">src/App.vue</code> to import the component and
          data:
        </p>

        <div
          class="w-full min-w-0 max-w-full bg-[#030405] border border-mist-900 p-4 rounded-2xl text-mist-600 text-sm overflow-x-auto"
        >
          <p class="uppercase text-mist-300 font-mono text-xs mb-2">&lt;/&gt; vue: src/App.vue</p>
          <pre
            v-pre
            class="text-mist-400 font-mono text-xs leading-relaxed"
          ><code>&lt;script setup&gt;
import { ref } from 'vue'
import StallCard from './components/StallCard.vue'
import { stalls } from './data/stalls.js'

const tickets = ref(0)
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="page"&gt;
    &lt;header class="hero"&gt;
      &lt;h1&gt;🎄 Paisley Christmas Market 🎄&lt;/h1&gt;
      &lt;p&gt;Festive food, crafts and gifts at the Abbey&lt;/p&gt;
    &lt;/header&gt;

    &lt;section class="panel"&gt;
      &lt;h2&gt;Reserve Your Tickets&lt;/h2&gt;
      &lt;div class="counter"&gt;
        &lt;button class="btn" @click="tickets--" :disabled="tickets === 0"&gt;−&lt;/button&gt;
        &lt;span&gt;{{ tickets }}&lt;/span&gt;
        &lt;button class="btn" @click="tickets++"&gt;+&lt;/button&gt;
      &lt;/div&gt;
      &lt;p v-if="tickets &gt; 0" class="message"&gt;🎟️ {{ tickets }} reserved. See you at the Abbey!&lt;/p&gt;
    &lt;/section&gt;

    &lt;section class="panel"&gt;
      &lt;h2&gt;Featured Stalls&lt;/h2&gt;
      &lt;div class="grid"&gt;
        &lt;StallCard :key="stall.id" :stall="stall" v-for="stall in stalls"/&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>

        <p>
          Notice how we wrote the card layout only once, and
          <code class="text-mist-300">v-for</code> generated all six items.
          <code class="text-mist-300">:stall="stall"</code> passes the data into each card as a
          prop.
        </p>

        <img
          src="../img/tutorial/step3_stalls.png"
          alt="Featured Stalls Grid"
          class="md:mb-6 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        />
      </div>
    </section>

    <!-- STEP 4 -->
    <section class="mb-6">
      <h2 class="text-xl font-bold text-mist-300 mb-2">Step 4: Live search and filtering</h2>
      <div class="text-mist-600 flex flex-col gap-4">
        <p>
          For our final feature, let's allow visitors to search and filter the stalls dynamically.
          Replace the top portion of <code class="text-mist-300">App.vue</code> with this final
          version:
        </p>

        <div
          class="w-full min-w-0 max-w-full bg-[#030405] border border-mist-900 p-4 rounded-2xl text-mist-600 text-sm overflow-x-auto"
        >
          <p class="uppercase text-mist-300 font-mono text-xs mb-2">&lt;/&gt; vue: src/App.vue</p>
          <pre
            v-pre
            class="text-mist-400 font-mono text-xs leading-relaxed"
          ><code>&lt;script setup&gt;
import { ref, computed } from 'vue'
import StallCard from './components/StallCard.vue'
import { stalls } from './data/stalls.js'

const tickets = ref(0)
const search = ref('')
const category = ref('All')

// Build the dropdown options dynamically from the data
const categories = ['All', ...new Set(stalls.map(s => s.category))]

// computed() re-runs automatically whenever search or category changes
const filteredStalls = computed(() =>
  stalls.filter(s =>
    (category.value === 'All' || s.category === category.value) &&
    s.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="page"&gt;
    &lt;header class="hero"&gt;
      &lt;h1&gt;🎄 Paisley Christmas Market 🎄&lt;/h1&gt;
      &lt;p&gt;Festive food, crafts and gifts at the Abbey&lt;/p&gt;
    &lt;/header&gt;

    &lt;section class="panel"&gt;
      &lt;h2&gt;Reserve Your Tickets&lt;/h2&gt;
      &lt;div class="counter"&gt;
        &lt;button class="btn" @click="tickets--" :disabled="tickets === 0"&gt;−&lt;/button&gt;
        &lt;span&gt;{{ tickets }}&lt;/span&gt;
        &lt;button class="btn" @click="tickets++"&gt;+&lt;/button&gt;
      &lt;/div&gt;
      &lt;p v-if="tickets &gt; 0" class="message"&gt;🎟️ {{ tickets }} reserved. See you at the Abbey!&lt;/p&gt;
    &lt;/section&gt;

    &lt;section class="panel"&gt;
      &lt;h2&gt;Find a Stall&lt;/h2&gt;
      &lt;div class="filters"&gt;
        &lt;input v-model="search" placeholder="Search stalls..." /&gt;
        &lt;select v-model="category"&gt;
          &lt;option v-for="c in categories" :key="c"&gt;{{ c }}&lt;/option&gt;
        &lt;/select&gt;
      &lt;/div&gt;

      &lt;div v-if="filteredStalls.length" class="grid"&gt;
        &lt;StallCard :key="stall.id" :stall="stall" v-for="stall in filteredStalls"/&gt;
      &lt;/div&gt;
      &lt;p v-else class="empty"&gt;No stalls match your search.&lt;/p&gt;
    &lt;/section&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>

        <p>
          Type in the search box and change the dropdown. The grid updates on every keystroke with
          zero manual event handling!
          <code class="text-mist-300">v-model</code> keeps inputs in sync, and
          <code class="text-mist-300">computed</code> recalculates the list automatically.
        </p>

        <img
          src="../img/tutorial/step4_final.png"
          alt="Search and filtering in action"
          class="md:mb-6 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        />
      </div>
    </section>

    <!-- WHAT YOU'VE LEARNED -->
    <section class="mb-6">
      <h2 class="text-xl font-bold text-mist-300 mb-3">What you've learned</h2>
      <div class="overflow-x-auto border border-mist-900 rounded-2xl">
        <table class="w-full text-left text-sm text-mist-600">
          <thead
            class="bg-[#030405] text-mist-300 border-b border-mist-900 uppercase font-mono text-xs"
          >
            <tr>
              <th class="p-3">Concept</th>
              <th class="p-3">Where you used it</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-mist-900">
            <tr>
              <td class="p-3 font-semibold text-mist-300">Reactivity (ref)</td>
              <td class="p-3">Ticket counter</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-mist-300">Event handling (@click)</td>
              <td class="p-3">+ / − buttons</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-mist-300">Attribute binding (:disabled)</td>
              <td class="p-3">Disabled − button</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-mist-300">Conditional rendering (v-if)</td>
              <td class="p-3">Reservation message, empty state</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-mist-300">List rendering (v-for)</td>
              <td class="p-3">Stall cards, dropdown options</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-mist-300">Components & props</td>
              <td class="p-3">StallCard.vue</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-mist-300">Two-way binding (v-model)</td>
              <td class="p-3">Search box and dropdown</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-mist-300">Computed values (computed)</td>
              <td class="p-3">Filtered stall list</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- CHALLENGES -->
    <section class="mb-6">
      <h2 class="text-xl font-bold text-mist-300 mb-2">Challenges</h2>
      <div class="text-mist-600 flex flex-col gap-3">
        <p>If you want to stretch your Vue skills, try these:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>
            Add a stall of your own to <code class="text-mist-300">stalls.js</code>, with your own
            category, and check that it appears in the dropdown automatically.
          </li>
          <li>
            Add a <span class="text-mist-300">"♡ Favourite"</span> button to
            <code class="text-mist-300">StallCard.vue</code> that toggles to
            <span class="text-rose-500">"♥"</span> when clicked (<em
              >hint: use a <code class="text-mist-300">ref</code> inside the card</em
            >).
          </li>
        </ul>
      </div>
    </section>
    <hr class="border-b text-mist-800 mt-2 mb-4" />
    <section class="mb-6 text-sm text-mist-600 flex flex-col gap-2">
      <h2 class="text-xl font-bold text-mist-300">Sources &amp; Credits</h2>
      <p>
        The Vue features in this tutorial follow the official Vue.js guide pages below. Group G's
        own work is the Paisley Christmas Market itself: the theme and design, the fictional stall
        data, the ticket and stall-search scenario, and how the features are built up step by step.
      </p>
      <p>
        Vue.js (n.d.a) Reactivity fundamentals. Available at:
        <a class="text-emerald-500 hover:underline break-all" href="https://vuejs.org/guide/essentials/reactivity-fundamentals.html" target="_blank">https://vuejs.org/guide/essentials/reactivity-fundamentals.html</a>
        (Accessed: 20 October 2026).
      </p>
      <p>
        Vue.js (n.d.b) Template syntax. Available at:
        <a class="text-emerald-500 hover:underline break-all" href="https://vuejs.org/guide/essentials/template-syntax.html" target="_blank">https://vuejs.org/guide/essentials/template-syntax.html</a>
        (Accessed: 20 October 2026).
      </p>
      <p>
        Vue.js (n.d.c) Event handling. Available at:
        <a class="text-emerald-500 hover:underline break-all" href="https://vuejs.org/guide/essentials/event-handling.html" target="_blank">https://vuejs.org/guide/essentials/event-handling.html</a>
        (Accessed: 20 October 2026).
      </p>
      <p>
        Vue.js (n.d.d) Conditional rendering. Available at:
        <a class="text-emerald-500 hover:underline break-all" href="https://vuejs.org/guide/essentials/conditional.html" target="_blank">https://vuejs.org/guide/essentials/conditional.html</a>
        (Accessed: 20 October 2026).
      </p>
      <p>
        Vue.js (n.d.e) List rendering. Available at:
        <a class="text-emerald-500 hover:underline break-all" href="https://vuejs.org/guide/essentials/list.html" target="_blank">https://vuejs.org/guide/essentials/list.html</a>
        (Accessed: 20 October 2026).
      </p>
      <p>
        Vue.js (n.d.f) Props. Available at:
        <a class="text-emerald-500 hover:underline break-all" href="https://vuejs.org/guide/components/props.html" target="_blank">https://vuejs.org/guide/components/props.html</a>
        (Accessed: 20 October 2026).
      </p>
      <p>
        Vue.js (n.d.g) Computed properties. Available at:
        <a class="text-emerald-500 hover:underline break-all" href="https://vuejs.org/guide/essentials/computed.html" target="_blank">https://vuejs.org/guide/essentials/computed.html</a>
        (Accessed: 20 October 2026).
      </p>
      <p>
        Vue.js (n.d.h) Form input bindings. Available at:
        <a class="text-emerald-500 hover:underline break-all" href="https://vuejs.org/guide/essentials/forms.html" target="_blank">https://vuejs.org/guide/essentials/forms.html</a>
        (Accessed: 20 October 2026).
      </p>
    </section>
  </div>
  
  <div class="h-50"></div>
</template>
<style scoped>
strong {
  color: var(--color-emerald-600);
}
</style>
