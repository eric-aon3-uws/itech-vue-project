<script setup lang="ts"></script>

<template>
  <div class="bg-mist-950 min-h-screen">
    <!-- TITLE CARD -->
    <div class="flex justify-center py-4 md:py-8 gap-10">
      <svg
        class="h-12 w-12 md:h-20 md:w-20"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883"></path>
          <path d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z" fill="#35495E"></path>
        </g>
      </svg>
      <h1 class="text-2xl flex items-center">
        <div class="flex flex-col">
          <span class="text-mist-300">Vue.js</span>
          <span class="text-mist-500">Showcase Website</span>
        </div>
      </h1>
    </div>
    <!-- MAIN DIV -->
    <div
      class="flex flex-col md:flex-row min-h-[calc(100vh-8rem)] mt-2 w-full px-4 md:px-0 md:max-w-[50rem] mx-auto"
    >
      <!-- SIDEBAR -->
      <sidebar
        class="w-full md:w-1/5 md:min-w-[150px] md:max-w-[150px] mb-6 md:mb-0 md:mr-4 text-mist-600"
      >
        <h2 class="text-mist-300 font-bold md:ml-2 tracking-wider text-xs md:text-sm">
          N A V I G A T I O N
        </h2>
        <hr class="border-t border-mist-800 my-1" />
        <ul
          class="flex flex-row flex-wrap md:flex-nowrap md:flex-col gap-x-4 gap-y-1 md:gap-0 md:space-y-[0.5rem] mt-2"
        >
          <RouterLink
            to="/"
            class="relative hover:rounded-t-xl hover:text-mist-300 transition-all duration-200 block py-1"
          >
            <div
              class="active_indicator | absolute block md:hidden left-0 right-0 bottom-0 w-full h-1 rounded-sm transition-all"
            ></div>
            <div
              class="active_indicator | absolute hidden md:block top-0 bottom-0 w-0 rounded-sm transition-all"
            ></div>
            <p class="md:ml-2">Home</p>
          </RouterLink>
          <RouterLink
            to="/slides"
            class="relative hover:rounded-t-xl hover:text-mist-300 transition-all duration-200 block py-1"
          >
            <div
              class="active_indicator | absolute block md:hidden left-0 right-0 bottom-0 w-full h-1 rounded-sm transition-all"
            ></div>
            <div
              class="active_indicator | absolute hidden md:block top-0 bottom-0 w-0 rounded-sm transition-all"
            ></div>
            <p class="md:ml-2">Presentation</p>
          </RouterLink>
          <RouterLink
            to="/notes"
            class="relative hover:rounded-t-xl hover:text-mist-300 transition-all duration-200 block py-1"
          >
            <div
              class="active_indicator | absolute block md:hidden left-0 right-0 bottom-0 w-full h-1 rounded-sm transition-all"
            ></div>
            <div
              class="active_indicator | absolute hidden md:block top-0 bottom-0 w-0 rounded-sm transition-all"
            ></div>
            <p class="md:ml-2">Notes</p>
          </RouterLink>
          <RouterLink
            to="/cheatsheet"
            class="relative hover:rounded-t-xl hover:text-mist-300 transition-all duration-200 block py-1"
          >
            <div
              class="active_indicator | absolute block md:hidden left-0 right-0 bottom-0 w-full h-1 rounded-sm transition-all"
            ></div>
            <div
              class="active_indicator | absolute hidden md:block top-0 bottom-0 w-0 rounded-sm transition-all"
            ></div>
            <p class="md:ml-2">Cheat Sheet</p>
          </RouterLink>
          <RouterLink
            to="/tutorial"
            class="relative hover:rounded-t-xl hover:text-mist-300 transition-all duration-200 block py-1"
          >
            <div
              class="active_indicator | absolute block md:hidden left-0 right-0 bottom-0 w-full h-1 rounded-sm transition-all"
            ></div>
            <div
              class="active_indicator | absolute hidden md:block top-0 bottom-0 w-0 rounded-sm transition-all"
            ></div>
            <p class="md:ml-2">Setup Tutorial</p>
          </RouterLink>
          <RouterLink
            to="/tutorial2"
            class="relative hover:rounded-t-xl hover:text-mist-300 transition-all duration-200 block py-1"
          >
            <div
              class="active_indicator | absolute block md:hidden left-0 right-0 bottom-0 w-full h-1 rounded-sm transition-all"
            ></div>
            <div
              class="active_indicator | absolute hidden md:block top-0 bottom-0 w-0 rounded-sm transition-all"
            ></div>
            <p class="md:ml-2">Development Tutorial</p>
          </RouterLink>
          <RouterLink
            to="/demo"
            class="relative hover:rounded-t-xl hover:text-mist-300 transition-all duration-200 block py-1"
          >
            <div
              class="active_indicator | absolute block md:hidden left-0 right-0 bottom-0 w-full h-1 rounded-sm transition-all"
            ></div>
            <div
              class="active_indicator | absolute hidden md:block top-0 bottom-0 w-0 rounded-sm transition-all"
            ></div>
            <p class="md:ml-2">Live Demo</p>
          </RouterLink>
        </ul>
      </sidebar>
      <!-- PAGE CONTENT -->
      <div class="min-w-0 flex-1 w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: white;

  .active_indicator {
    transition-duration: 1;
    background-color: var(--color-emerald-500);

    @media (width >= 48rem) {
      width: 0.25rem;
    }
    @media (width < 48rem) {
      width: auto;
    }
  }
}
</style>
