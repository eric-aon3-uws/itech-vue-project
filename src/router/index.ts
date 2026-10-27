import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TutorialView from '../views/TutorialView.vue'
import TutorialView2 from '../views/Tutorial2View.vue'
import SlidesView from '../views/SlidesView.vue'
import NotesView from '../views/NotesView.vue'
import CheatSheetView from '../views/CheatSheetView.vue'
import DemoView from '../views/DemoView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/tutorial', component: TutorialView },
    { path: '/tutorial2', component: TutorialView2 },
    { path: '/slides', component: SlidesView },
    { path: '/notes', component: NotesView },
    { path: '/cheatsheet', component: CheatSheetView },
    { path: '/demo', component: DemoView },
  ],
  // Start each page at the top when navigating
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
