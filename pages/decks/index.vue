<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your decks</h3>
        <button class="btn btn_success" @click="openModal">
          CReate a Deck
        </button>
      </div>
      <ul class="decks-list">
        <Decklist
          v-for="deck in decks"
          :id="deck._id"
          :key="deck._id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
    <v-model :name="test">
      <h1>Hello test Modal</h1>
      <button class="btn btn_danger" @click="closeModal">Close</button>
    </v-model>
  </div>
</template>
<script>
import Decklist from '@/components/Decks/Decklist.vue'

// Nuxt hoat donjg: lan dau tien trang web refresh, nuxt se dung server de render DOM => engine doc,
// nen refresh lan dau: console.log data trong terminal server, lan refresh 2 tro len se do Vue xu ly, thuc thi tai client
export default {
  components: {
    Decklist,
  },
  // asyncData giup viec chay data co trinh tu, data tra ve trong asyncData dang promise
  asyncData(context) {
    // context la func co the truy cap router, axios, middleware, validate, lan refresh 1: get data, lan refresh 2: check validate, router, ...
    // asyncData thuc thi tren server, k phai browser, sau khi co data do ve DOM xu ly
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          decks: [
            {
              _id: 1,
              name: 'Learn English',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              thumbnail: 'https://picsum.photos/100',
            },
            {
              _id: 2,
              name: 'Learn Chinese',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              thumbnail: 'https://picsum.photos/200',
            },
            {
              _id: 3,
              name: 'Learn Japanese',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              thumbnail: 'https://picsum.photos/300',
            },
          ],
        })
      }, 1000)
    })
      .then((res) => {
        return res
        // context.store.dispatch('', res.decks)
        // doi vs fetch & phai context.store.dispatch('', res.decks) tai .then(res)
        // va tao computed properties de getters deck tu store
        // doi vs asynData thi created dispatch va k can computed
      })
      .catch((err) => {
        context.error(err)
      })
  },
  computed: {
    decks() {
      return this.$store.getters.decks
    },
  },
  // Sau khi asyncData lay data tu server thu duoc decks, created dua data len store vs decks vua lay tu asyncData
  created() {
    this.$store.dispatch('setDecks', this.decks)
    // eslint-disable-next-line
    console.log(this.$store.getters.decks)
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'test' })
    },
    closeModal() {
      this.$modal.close({ name: 'test' })
    },
  },
}
</script>
<style lang="scss">
.decks-list {
  margin: 0;
  padding: 0;
  .deck {
    display: block;
  }
  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .deck-card {
    display: flex;
    flex-direction: row;
    // height: 250px;
    img {
      width: 150px;
      height: auto;
    }
  }
}
</style>
