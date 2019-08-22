<template>
  <div class="container">
    <div class="row main-practices__content" style="margin: 0">
      <div class="offset-1 col-6 d-flex justify-content-center">
        <div class="">
          <h2 class="practices_title">{{  data.title  }}</h2>

          <p class="practices_title_description">{{ data.content }}</p>
          <ul>
           <template v-if="data.list.lenght > 0">
             <div>
                <li  class="practices_list" v-for="(item, itemKey) in data.list"  :key="data.item">{{ (itemKey + 1) }}  {{   item.name }}  </li>
             </div>
           </template>
          </ul>
        </div>
      </div>
      <div class="col-4 download-files">
        <p class="text-right evidencia">Evidencias:</p>
        <a :href="data.links.documents"  v-if="data.links.documents != '#'" target="_blank" class="btn practices_documents" > Documentos </a>
        <a :href="data.links.videos"     v-if="data.links.videos != '#'" target="_blank" class="btn practices_videos"> Videos </a>
        <a :href="data.links.otherFiles" v-if="data.links.otherFiles != '#'" target="_blank" class="btn  practices_other_files" > Otros archivos </a>
        <img src="img/agradeciendo/nave.png" alt="logo cuadro" class="img-footer">
      </div>
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
  .download-files img{

    width: 50%;
    margin-top: 50px;
    margin-left: 50px;
  }
</style>