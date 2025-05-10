<template>
    <div class="title"><strong>ABOUT</strong></div>
    <div class="topbooks">
        <div class="top" style="background-color: antiquewhite;"><br> BookWise is your personal book-finding companion, designed to help readers of all tastes discover their perfect next read. Whether you're seeking thrilling page-turners, thought-provoking nonfiction, or heartwarming stories, our smart recommendations and curated collections make finding great books effortless.</div>
    </div>
</template>
<script>

export default {
    name: 'TopBooks',
    props: {
        props: String 
    }
    
  }
  
</script>

<style>
.title{
    font-size: 30px;
    margin-top: 20px;
}
.topbooks{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-top: 20px;
    border-bottom: none;
}
.top{
    font-size: 30px;
}
</style>