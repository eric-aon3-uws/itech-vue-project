<script setup lang="ts">
// Same component as src/components/StallCard.vue in the Development Tutorial (typed version).
import type { Stall } from './stalls'

defineProps<{ stall: Stall }>()
</script>

<template>
  <article class="card">
    <span class="tag">{{ stall.category }}</span>
    <h3>{{ stall.name }}</h3>
    <p>{{ stall.blurb }}</p>
    <p class="where">📍 {{ stall.location }}</p>
  </article>
</template>

<style scoped>
.card {
  background: var(--cream);
  border-radius: 10px;
  padding: 16px;
  border-top: 4px solid var(--red);
}
.card h3 {
  margin: 10px 0 6px;
  font-size: 1.15rem;
  font-weight: bold;
}
.card p {
  margin: 0 0 6px;
}
.tag {
  background: var(--green);
  color: white;
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 999px;
}
.where {
  color: #666;
  font-size: 0.9rem;
}
</style>
