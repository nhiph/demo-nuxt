<template>
  <div>
    <div class="banner">
      <div class="thumbnail-banner"></div>
    </div>
    <div class="popular-decks">
      <h3 class="text_center mx_3">3 Popular decks for you</h3>
      <div class="r">
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 2</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.banner {
  height: 200px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .thumbnail-banner {
    background: url('https://previews.123rf.com/images/nataliias/nataliias1812/nataliias181200017/127109518-english-language-hand-drawn-doodles-and-lettering-education-banner-vector-illustration-.jpg')
      center center;
    // background: url('~assets/img/banner.jpg') center center;
    height: inherit;
    background-size: cover;
  }
}
</style>
