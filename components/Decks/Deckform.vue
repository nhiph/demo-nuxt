<template>
<form action="">
  <div class="form_group">
    <label for="">Name:</label>
    <input
      class="form_control"
      type="text"
      placeholder="Please enter your name"
    />
  </div>
  <div class="form_group">
    <label for="">Description:</label>
    <textarea
      class="form_control"
      placeholder="Please enter your description"
    />
  </div>
  <div class="form_group">
    <label for="">Thumbnail:</label>
    <input
      class="form_control"
      type="file"
    />
    <div class="preview"></div>
  </div>
  <div class="form_group d_flex justify_content_end">
    <button class="btn btn_danger" @click.prevent="closeModal">
      Close
    </button>
    <button class="btn btn_success ml_3" @click.prevent="createDeck">
      Create
    </button>
  </div>
</form>
</template>
