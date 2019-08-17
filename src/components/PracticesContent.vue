<template>
  <div class="row main-practices__content" style="margin: 0">
    <div class="col-6">
      <h1>{{  data.title  }}</h1>
      <p>{{ data.content }}</p>
      <ul>
        <li v-for="(item, itemKey) in data.list"  :key="data.item">{{ (itemKey + 1) }}  {{   item.name }}  </li>
      </ul>
    </div>
    <div class="col-6">
      <button>Documentos</button>
      <button>Videos</button>
      <button>Otros archivos</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PracticesContent",
    props: ['data']
  }
</script>

<style scoped>

</style>