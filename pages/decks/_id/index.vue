<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck #{{ $route.params.id }} {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary">Create a card</button>
        </div>
        <hr class="divide" />
        <div class="r">
          <Cardlist
            v-for="card in cards"
            :key="card._id"
            :picture="card.picture"
            :keyword="card.keyword"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Cardlist from '@/components/Cards/Cardlist.vue'
export default {
  components: {
    Cardlist,
  },
  validate({ params }) {
    return /^[0-9]$/.test(params.id)
  },
  asyncData(context) {
    // eslint-disable-next-line no-console
    console.log(context)
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          deck: {
            _id: 1,
            name: `Learn English by deck ${context.params.id}`,
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            thumbnail: 'https://picsum.photos/100',
          },
        })
      }, 1500)
    })
      .then((data) => {
        return data
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture: 'https://picsum.photos/110',
          keyword: 'Road 1',
        },
        {
          _id: 2,
          picture: 'https://picsum.photos/120',
          keyword: 'Road 2',
        },
        {
          _id: 3,
          picture: 'https://picsum.photos/130',
          keyword: 'Road 3',
        },
        {
          _id: 4,
          picture: 'https://picsum.photos/140',
          keyword: 'Road 4',
        },
        {
          _id: 5,
          picture: 'https://picsum.photos/150',
          keyword: 'Road 5',
        },
      ],
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    },
    openModal() {
      this.$modal.open({ name: 'CreateCardModal' })
    },
  },
}
</script>
<style lang="scss">
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
  }
  .divide {
    margin: 2rem;
  }
}
</style>
