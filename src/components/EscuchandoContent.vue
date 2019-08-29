<template>
  <div class="container">
    <div class="row main-practices__content" style="margin: 0">
      <div class="offset-lg-2 col-lg-5 col-6 offset-xl-1 col-xl-6 d-flex justify-content-center di">
        <div class="">
          <h2 class="practices_title">{{  data.title  }}</h2>

          <p class="practices_title_description" v-html="data.content"></p>
          <ul>
           <template v-if="data.list.lenght > 0">
             <div>
                <li  class="practices_list" v-for="(item, itemKey) in data.list"  :key="data.item">{{ (itemKey + 1) }}  {{   item.name }}  </li>
             </div>
           </template>
          </ul>
        </div>
      </div>
      <div class="col-lg-4 col-xl-4 download-files">
        <p class="text-right evidencia">Evidencias:</p>
        <a :href="data.links.documents"  v-if="data.links.documents != '#'" target="_blank" class="btn practices_documents" @click.prevent="newWindow(data.links.documents)"> Documentos </a>
        <a :href="data.links.videos"     v-if="data.links.videos != '#'" target="_blank" class="btn practices_videos" @click.prevent="newWindow(data.links.videos)"> Videos </a>
        <a :href="data.links.otherFiles" v-if="data.links.otherFiles != '#'" target="_blank" class="btn  practices_other_files" @click.prevent="newWindow(data.links.otherFiles)"> Otros archivos </a>
        <img src="img/escuchando/carita.png" alt="logo cuadro" class="img-footer">
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: "PracticesContent",
    props: ['data'],
     methods: {
      ...mapActions(['newWindow'])
    }
  }
</script>

<style scoped>
  .download-files img{

    width: 50%;
    margin-top: 50px;
    margin-left: 50px;
  }
</style>