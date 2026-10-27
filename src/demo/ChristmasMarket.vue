<script setup lang="ts">
// The Paisley Christmas Market app from the Development Tutorial, running inside this site.
// `step` shows the app as it should look at the end of each tutorial step, so students can
// compare it with their own. The reactive values are passed in with v-model (defineModel)
// so the Live Demo page can display them in its "Behind the scenes" panel.
import { computed } from 'vue'
import StallCard from './StallCard.vue'
import { stalls } from './stalls'

defineProps<{ step: number }>()

const tickets = defineModel<number>('tickets', { required: true })
const search = defineModel<string>('search', { required: true })
const category = defineModel<string>('category', { required: true })

// Build the dropdown options dynamically from the data
const categories = ['All', ...new Set(stalls.map((s) => s.category))]

// computed() re-runs automatically whenever search or category changes
const filteredStalls = computed(() =>
  stalls.filter(
    (s) =>
      (category.value === 'All' || s.category === category.value) &&
      s.name.toLowerCase().includes(search.value.toLowerCase()),
  ),
)
</script>

<template>
  <div class="market">
    <div class="page">
      <header class="hero">
        <h1>🎄 Paisley Christmas Market 🎄</h1>
        <p>Festive food, crafts and gifts at the Abbey</p>
      </header>

      <!-- Step 2+: reactivity -->
      <section v-if="step >= 2" class="panel">
        <h2>Reserve Your Tickets</h2>
        <div class="counter">
          <button class="btn" :disabled="tickets === 0" @click="tickets--">−</button>
          <span>{{ tickets }}</span>
          <button class="btn" @click="tickets++">+</button>
        </div>
        <p v-if="tickets > 0" class="message">🎟️ {{ tickets }} reserved. See you at the Abbey!</p>
      </section>

      <!-- Step 3: component + v-for -->
      <section v-if="step === 3" class="panel">
        <h2>Featured Stalls</h2>
        <div class="grid">
          <StallCard v-for="stall in stalls" :key="stall.id" :stall="stall" />
        </div>
      </section>

      <!-- Step 4: live search and filtering -->
      <section v-if="step >= 4" class="panel">
        <h2>Find a Stall</h2>
        <div class="filters">
          <input v-model="search" placeholder="Search stalls..." aria-label="Search stalls" />
          <select v-model="category" aria-label="Category">
            <option v-for="c in categories" :key="c">{{ c }}</option>
          </select>
        </div>

        <div v-if="filteredStalls.length" class="grid">
          <StallCard v-for="stall in filteredStalls" :key="stall.id" :stall="stall" />
        </div>
        <p v-else class="empty">No stalls match your search.</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* The tutorial puts these on :root and body. Here they are scoped to .market so they
   don't clash with the rest of this site. */
.market {
  --red: #b3202f;
  --green: #1f6f4a;
  --gold: #e0a93b;
  --cream: #fdf7ec;
  --ink: #2b2b2b;
  background: var(--cream);
  color: var(--ink);
  font-family: Georgia, 'Times New Roman', serif;
}
.page {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

.hero {
  text-align: center;
  color: white;
  padding: 48px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--red), #7d1220);
  border-bottom: 6px solid var(--gold);
}
.hero h1 {
  margin: 0 0 8px;
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1.2;
}
.hero p {
  margin: 0;
  opacity: 0.9;
}

.panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-top: 28px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.panel h2 {
  margin-top: 0;
  margin-bottom: 16px;
  color: var(--red);
  font-size: 1.5rem;
  font-weight: bold;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.counter span {
  font-size: 2rem;
  min-width: 2ch;
  text-align: center;
}
.btn {
  background: var(--green);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 10px 22px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.15s;
}
.btn:hover {
  transform: scale(1.06);
}
.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}
.message {
  text-align: center;
  color: var(--green);
  font-weight: bold;
  margin: 16px 0 0;
}

.filters {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.filters input,
.filters select {
  padding: 10px 14px;
  font-size: 1rem;
  font-family: inherit;
  background: white;
  border: 2px solid #ddd;
  border-radius: 8px;
}
.filters input {
  flex: 1;
  min-width: 180px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}
.empty {
  text-align: center;
  font-style: italic;
  color: #888;
}
</style>
