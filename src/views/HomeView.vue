<script setup lang="ts"></script>
<template>
  <h1 class="text-3xl font-bold text-mist-300 mb-2">Home</h1>
  <hr class="border-b text-mist-800 mt-6 mb-4" />
  <section class="text-mist-600 font-medium mb-4">
    <h2 class="text-xl font-bold text-mist-300 mb-1">What is this website?</h2>
    <div class="text-mist-600 flex flex-col gap-4">
      <p>
        This is a showcase website created by <strong>Group G</strong> to accompany the presentation
        given for the <strong>Internet Technologies</strong> module on the topic of
        <strong>Vue.js</strong>. Group G consists of members <strong>Yusaf Safdar</strong>,
        <strong>Eric Apetrei</strong>, <strong>Mohammed Shami</strong> &
        <strong>Luqman Bashir</strong>.
      </p>
      <p>
        In fact, this entire website was built as a SPA (Single-Page Application) using
        <strong>Vue</strong> & TailwindCSS! Not only that but it is fully mobile-responsive! Pretty
        neat, huh?
      </p>
    </div>
  </section>
  <section class="mb-4">
    <h2 class="text-xl font-bold text-mist-300 mb-1">Where to from here?</h2>
    <div class="text-mist-600 flex flex-col gap-4">
      <p>Under the navigation bar you will be able to find:</p>
      <li>
        <RouterLink to="/slides"><span>Presentation</span></RouterLink> — Hosts a copy of our
        Presentation, including some commentary that was used during the presentation itself
      </li>
      <li>
        <RouterLink to="/tutorial"><span>Setup Tutorial</span></RouterLink> — Follow through the
        tutorial to set up Vue.js + Vite on your machine! The tutorial was made with the
        in-university machines & Docker in mind.
      </li>
      <li>
        <RouterLink to="/tutorial2"><span>Development Tutorial</span></RouterLink> — Now that you've
        created a Vue + Vite environment, let's create a simple website to showcase some of Vue's
        functions.
      </li>
    </div>
  </section>
  <hr class="border-b text-mist-800 mt-6 mb-4" />
  <section class="mb-4">
    <h2 class="text-xl font-bold text-mist-300 mb-1">Further Reading</h2>
    <div class="text-mist-600 flex flex-col gap-4">
      <p>
        Here is a list of some of the resources we used to create this website that you may follow
        if you want to read up on Vue.js and its ecosystem:
      </p>
      <p>
        Github.io. (2016). Presentation of vue.js | introduction to vue.js. Available at:
        <a href="https://worldline.github.io/vuejs-training/presentation/"
          >https://worldline.github.io/vuejs-training/presentation/</a
        >
        <br />npm (n.d.) vue. Available at:
        <a href="https://www.npmjs.com/package/vue">https://www.npmjs.com/package/vue</a> <br />Vue
        Router (n. d.) Vue Router. Available at
        <a href="https://router.vuejs.org/">https://router.vuejs.org/</a> <br />Nuxt (n. d.) Nuxt
        documentation. Available at <a href="https://nuxt.com/docs">https://nuxt.com/docs</a>
        <br />Vue School (2025) Vue.js – 2025 In Review and a Peek into 2026. Available at:
        <a href="https://vueschool.io/articles/news/vue-js-2025-in-review-and-a-peek-into-2026/"
          >https://vueschool.io/articles/news/vue-js-2025-in-review-and-a-peek-into-2026/</a
        >
        <br />Monterail (n.d.) Top companies using Vue.js. Available at:
        <a href="https://www.monterail.com/blog/top-companies-using-vue-js"
          >https://www.monterail.com/blog/top-companies-using-vue-js</a
        >
        <br />Made with Vue.js (n.d.) Nintendo. Available at:
        <a href="https://madewithvuejs.com/nintendo">https://madewithvuejs.com/nintendo</a>
      </p>
    </div>
  </section>
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
  color: var(--color-emerald-800);
}

a:hover {
  text-decoration: underline;
}
</style>
