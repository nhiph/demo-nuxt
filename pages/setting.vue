<template>
  <div class="page">
    <div class="nav">
      <ul>
        <li>
          <nuxt-link to="/setting">General</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/setting/decks">Deck</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/setting/schedule">Schedule</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child />
  </div>
</template>
<style lang="scss">
.page {
  display: flex;
}
</style>
