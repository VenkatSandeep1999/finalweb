<template>
  <div class="bookContainer">
    <h2>{{ book.title }}</h2>
    <div class="imageButton">
      <img :src="book.cover_image" :alt="book.title + ' cover'" class="bookCover">
      <button @click="toggleDetails" class="toggleButton">
        {{ showDetails ? 'Hide Details' : 'Show Details' }}
      </button>
    </div>

    <div v-if="showDetails" class="detailsPanel">
      <h3>by {{ book.author }}</h3>
      <p>Published: {{ book.publication_date }}</p>
      <p>Genre: {{ book.genre }}</p>
      <p>Pages: {{ book.page_count }}</p>
      <p>Rating: {{ book.average_rating }}</p>
      <p>Publisher: {{ book.publisher }}</p>
      <p class="description">Description: {{ book.description }}</p>
      <p>ISBN: {{ book.isbn }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleBook',
  props: {
    book: Object
  },
  data() {
    return {
      showDetails: false
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
}
</script>

<style>
.titles{
  background-color: white;
  font-size: 20px;
}
.bookContainer {
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}

.imageButton {
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  gap: 15px;
  margin: 20px 0;
}

.bookCover {
  max-width: 200px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggleButton {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  width: fit-content;
}

.toggleButton:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.detailsPanel {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  animation: fadeIn 0.5s ease;
}

.detailsPanel h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.detailsPanel p {
  margin: 10px 0;
  color: #34495e;
  line-height: 1.6;
}

.description {
  font-style: italic;
  color: #7f8c8d !important;
}

.slideFadeLeaveActive {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slideFadeEnterFrom,
.slideFadeLeaveTo {
  transform: translateY(10px);
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>