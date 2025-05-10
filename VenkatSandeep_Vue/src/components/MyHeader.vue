<template>
  <header class="header">
    <nav class="navContainer">
      <a href="#top" class="logo">BOOK WISE</a>
      <div class="navLinks">
        <a href="#about">About</a>
        <a href="#books">Books Collection</a>
        <a href="#tips">Tips</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style scoped>
.header {
  background-color: #2d3748;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  height: 70px;
}

.navContainer {
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100%;
  width: 100%;
  align-items: stretch;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: 0 2rem;
  background-color: #1a202c;
  display: grid;
  place-items: center;
}

.navLinks {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
}

.navLinks a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
}

.navLinks a:hover {
  background-color: #4a5568;
}

@media (max-width: 768px) {
  .navContainer {
    grid-template-columns: 1fr;
    height: auto;
  }
  
  .logo {
    width: 100%;
    padding: 1rem;
  }
  
  .navLinks {
    grid-template-columns: 1fr;
    width: 100%;
  }
  
  .navLinks a {
    padding: 1rem;
    border-right: none !important;
    border-bottom: 1px solid #4a5568;
  }
}
</style>