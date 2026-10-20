<script setup lang="ts"></script>
<template>
  <h1 class="text-3xl font-bold text-mist-300 mb-2">Presentation</h1>
  <hr class="border-b text-mist-800 mt-6 mb-4" />
  <div class="flex flex-col gap-4">
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">1 - Introduction to Vue.js</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/1.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>YUSAF</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Hi everyone, we're Group G and today we are introducing Vue.js, the progressive
            JavaScript framework. I'll start with an introduction and overview. Shami will then show
            what Vue does with some simple examples, Eric will explain how it integrates and walk
            through a use case, and Luqman will finish with the pros and cons.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">2 - Origins & Identity</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/3.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>YUSAF</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue is pronounced 'view', like the word. Its purpose is to build user interfaces,
            meaning the parts of a website people see and interact with. It's completely free and
            open source. Evan You created it in 2014 after working with AngularJS at Google. His
            goal was to keep the parts he liked, but make it lighter and simpler to use.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">3 - Why Progressive?</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/4.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>YUSAF</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue is called the progressive framework because it's incrementally adoptable: you only
            use the features you need right now. You can drop it into a single existing HTML page
            with very little setup. As your project grows, you build reusable components. And
            eventually, it can power a complete single-page application. In short, you start small
            and scale up as far as you need.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">4 - A Quick History</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/5.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>YUSAF</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue has over a decade of continuous development. It was first released in 2014. Vue 2
            followed in 2016; it was faster and became widely adopted. In 2020, Vue 3 was a full
            rewrite in TypeScript, which modernised it. Today, with Vue 3.5, it's mature, stable and
            still actively updated.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">5 - The Numbers</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/6.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>YUSAF</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            The numbers show how popular it is. Vue has over 212,000 stars on GitHub, making it one
            of the most starred open-source projects ever. It gets between 15 and 20 million
            downloads every week through npm. Developer surveys consistently rank it among the top
            front-end frameworks, and developers who use it report very high satisfaction, with most
            saying they'd choose it again.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">6 - Who uses Vue?</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/7.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>YUSAF</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue is trusted by companies across many industries: tech firms like IBM, Adobe and
            GitLab, retailers like Alibaba and Sainsbury's, and consumer brands like Nintendo.
            GitLab is a great example of that progressive idea. In 2016, they began replacing their
            older jQuery front end with Vue, but gradually, piece by piece, with no full rewrite.
            Now Shami will show you what Vue can actually do.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">7 - What can Vue do?</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/8.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>SHAMI</strong>
        <div class="flex mt-1 mb-2">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            So, before we go through our examples, it’s important to understand what makes Vue
            different. Vue is a progressive JavaScript framework, which basically means you don’t
            have to use everything it offers straight away. You could start by adding a small
            interactive feature to an existing website, and as your project grows, you can introduce
            components and other tools to build a complete application.
          </p>
        </div>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue can also work with Web Components, support single-page applications, and use
            additional tools for server-side rendering and static site generation. Its wider
            ecosystem even allows developers to build experiences beyond the browser. Let’s look at
            three practical examples using our Christmas market website.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">8 : 1&2 - Reactivity & Event Handling</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/9.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2 mb-4">
        <strong>SHAMI</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            First, we have reactivity and event handling, using our ticket counter. As you can see,
            we can increase or decrease the number of tickets using these buttons, and the number
            displayed on screen updates immediately. This works because we use ref to create
            reactive state. In simple terms, Vue keeps track of that value and updates the interface
            when it changes.
          </p>
        </div>
      </div>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/10.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>SHAMI</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            The @click directive handles the button clicks, while :disabled prevents us from
            reducing the ticket count below zero. We also use v-if to display a reservation message
            when at least one ticket has been selected. So, instead of manually changing the HTML
            every time something happens, we update the state, and Vue takes care of keeping the
            interface in sync.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">9 : 1&2 - Components & Reusable UI</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/11.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2 mb-4">
        <strong>SHAMI</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Next, we have components and reusable user interface elements. For our Christmas market,
            each stall is displayed as a card containing its name, category, description and
            location.
          </p>
        </div>
      </div>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/12.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>SHAMI</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Instead of writing separate HTML for every stall, we created one reusable component
            called StallCard.vue. We then pass different stall information into that component using
            props, and use v-for to generate a card for every stall in our data. This means every
            card follows the same design, but the information changes depending on the stall. The
            main benefit is maintainability. If we want to change the appearance of every stall
            card, we can update the component once instead of editing each card individually.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">10 : 1&2 - Search & Filtering</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/13.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2 mb-4">
        <strong>SHAMI</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Finally, we added search and filtering to make the market easier to explore. Users can
            type a stall name into the search field and select a category from the dropdown menu.
            The results update automatically as these selections change.
          </p>
        </div>
      </div>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/14.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>SHAMI</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            We use v-model to connect the input fields to Vue's reactive state and computed to work
            out which stalls match the selected search and category. We also handle the situation
            where nothing matches, displaying a message instead of leaving the results area blank.
            Together, these three demos show how Vue's reactive state, reusable components and
            built-in directives can work together to create an interactive application without
            manually updating the page.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">11 - What else can Vue do?</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/15.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>SHAMI</strong>
        <div class="flex mt-1 mb-2">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            But these examples have only scratched the surface. Vue can be used for much larger
            applications, including single-page applications with client-side routing, shared state
            management using tools like Pinia, and server-side rendering or static site generation
            with supporting frameworks. Its ecosystem also includes development, testing and
            TypeScript tools, and it can integrate with backend services and APIs.
          </p>
        </div>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            So, Vue is not just useful for small interactive features. It can form the frontend of a
            much larger system.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">12 - Where does Vue fit?</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/16.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>ERIC</strong>
        <div class="flex mt-1 mb-2">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            To understand where Vue fits into a web application, it's useful to think about the
            different parts that make an application work together. Vue primarily operates on the
            front end, which is the part of an application that the user sees and interacts with.An
            application might also have a backend responsible for processing requests or applying
            business logic, and a database for storing information.
          </p>
        </div>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue can communicate with these parts through APIs, allowing the interface to display
            information and send user input to the rest of the system. So, Vue's role isn't to
            replace the entire web application stack. It's to provide an interactive interface that
            works together with the other components.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">13 - The Vue Ecosystem</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/18.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>ERIC</strong>
        <div class="flex mt-1 mb-2">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <div class="p-2 border border-mist-800 rounded-xl">
            Vue also has an ecosystem of tools that help developers build applications more
            efficiently. For example:
            <li class="ml-6">
              Vue Router handles navigation between different views or pages in a single-page
              application, without necessarily requiring a full page reload each time.
            </li>
            <li class="ml-6">
              Pinia can be used for state management, particularly when data needs to be shared
              between multiple components.
            </li>
            <li class="ml-6">
              Vite provides the development server and build tooling, helping us run the application
              during development and prepare it for deployment.
            </li>
            <li class="ml-6">
              There are also component libraries and styling frameworks that provide reusable
              interface elements and styling utilities. These tools serve different purposes.
            </li>
          </div>
        </div>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue provides the core framework for building the interface, while the surrounding
            ecosystem helps us manage navigation, shared state, development, and presentation.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">14 - Full-Stack Integration (Nuxt)</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/19.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>ERIC</strong>
        <div class="flex mt-1 mb-2">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            So far, we've looked at Vue as the front-end part of an application, working alongside
            separate backend services. But what if we want a framework that brings more of the
            application structure together?
          </p>
        </div>
        <div class="flex mt-1 mb-2">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Nuxt is a framework built on top of Vue that provides additional features and
            conventions for building web applications. It supports things like file-based routing,
            server-side rendering, and server-side code through server routes. This means a project
            can contain both the Vue-based interface and certain backend functionality within the
            same overall codebase. For example, a page could display information using Vue
            components, while a server route handles a request for data.
          </p>
        </div>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Nuxt doesn't mean that every application must keep its backend and database in the same
            project. Instead, it offers another way to organise a full-stack application while
            building on Vue's existing component model.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">15 - Scenario: Paisley Christmas Market</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/20.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>ERIC</strong>
        <div class="flex mt-1 mb-2">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            To bring these ideas together, imagine we're building a website for a Christmas market.
            A visitor might use the interface to browse stalls, search for particular products, or
            filter events by category. Vue would handle the interactive parts of that experience,
            updating the displayed information when the visitor changes a filter or selects an
            option. This illustrates how Vue fits into a larger system. It provides the interactive
            user experience, and the other tools and services contribute the functionality needed to
            make the overall website work.
          </p>
        </div>
        <div class="flex mt-1 mb-2">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue Router could let visitors navigate between sections, while reusable components could
            provide consistent layouts for stall listings or event cards. If the website retrieves
            information from an external API or a backend, Vue can display the returned data and
            respond when it changes. If we built the application using Nuxt, we could also use its
            server-side functionality to handle certain requests or prepare pages for delivery.
          </p>
        </div>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue can communicate with these parts through APIs, allowing the interface to display
            information and send user input to the rest of the system. So, Vue's role isn't to
            replace the entire web application stack. It's to provide an interactive interface that
            works together with the other components.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">16 - Just another framework?</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/21.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>LUQMAN</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue balances a lightweight and flexible design with strong official support. While React
            relies on third-party solutions and commands the largest community ecosystem, and
            Angular provides an all-in-one framework, Vue offers official tools like Pinia alongside
            a mid-sized ecosystem. Ultimately, while all of these frameworks handle reactivity to
            update the page in their own ways, Vue strikes a balance by delivering a flexible
            environment backed by official tools.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">
        17 - Just another framework? (Car Example)
      </h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/22.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>LUQMAN</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Vue is the Toyota Camry of frameworks—easy, reliable, and scaling well for what most
            people can pick up and use. In contrast, React behaves like an F1 car because it is
            powerful and requires extra parts, making it less suitable for everyone. Angular acts as
            a heavy pickup truck that arrives fully loaded but is slow to start, while Svelte
            functions like a lightweight electric car that is incredibly fast but supported by only
            a small community.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">18 - Challenges</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/23.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>LUQMAN</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Even though Vue is reliable, it still faces challenges that developers must navigate.
            First, it has a smaller job market and fewer libraries compared to market leader React.
            Second, search engines struggle to read Vue's standard setup, which requires developers
            to use Nuxt to fix SEO performance. Third, the transition from Vue 2 to Vue 3 broke
            older code, leaving Vue 2 completely unsupported today. Finally, the framework offers
            two different coding styles: the Options API and the Composition API, which can confuse
            newcomers.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">19 - Conclusion</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/24.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>LUQMAN</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl">
            Ultimately, Vue's benefits outweigh its challenges, making it a highly accessible and
            lightweight framework. It is exceptionally easy to learn for anyone who already knows
            HTML and JavaScript, and it allows teams to adopt it gradually just as GitLab did.
            Unlike competitors that rely heavily on third-party packages, Vue provides excellent
            official tools like Vue Router and Pinia, all supported by great documentation.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">20 - Conclusion</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/25.png"
        alt=""
      />
      <div class="text-mist-600 flex flex-col mt-2">
        <strong>LUQMAN</strong>
        <div class="flex mt-1">
          <div class="min-w-1.5 max-w-1.5 bg-mist-800 mr-2 rounded-sm"></div>
          <p class="p-2 border border-mist-800 rounded-xl w-full">
            Thank you for listening. Any questions?
          </p>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">21 - References</h2>
      <img
        class="md:mb-2 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        src="../img/slides/27.png"
        alt=""
      />
    </section>
  </div>
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
  color: var(--color-emerald-800);
}

a:hover {
  text-decoration: underline;
}
</style>
