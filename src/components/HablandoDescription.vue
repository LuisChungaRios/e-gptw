<template lang="pug">

.main-practices(id="section-1")

  .card-carousel-wrapper
    .card-carousel--nav__left(
      @click="moveCarousel(-1)"
      :disabled="atHeadOfList"
    )
    .card-carousel
      .card-carousel--overflow-container
        .card-carousel-cards(:style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}")
          .card-carousel--card(v-for="(practice, index) in practices")
            button(class="button-practices" @click="setItem(index)"  :class="{isActive: practice.name == itemFocus.name}" data-toggle="tooltip" data-placement="top" :title="practice.name" )
              img(src="/img/hablando/carpeta.png" v-if="practice.name == itemFocus.name" )
              img(src="/img/folder_blank.png" v-else )

              span(v-if="practice.name.length > 5") {{practice.name.substring(0,9).toUpperCase()}}...
              span(v-else) {{practice.name.toUpperCase()}}

    .card-carousel--nav__right(
      @click="moveCarousel(1)"
      :disabled="atEndOfList")
  HablandoContent(:data="itemFocus")


</template>

<script>

  import { mapState  }from 'vuex'

  import HablandoContent from './HablandoContent'

  export default {
    name: "Practices",
    components: {
      HablandoContent,


    },
    data() {
      return {
        currentOffset: 0,
        windowSize: 5,
        paginationFactor: 200,
        itemFocus: {}

      }
    },
    computed: {


      ...mapState({

        practices: state => state.inspirando
      }),
      atEndOfList() {
        return this.currentOffset <= (this.paginationFactor * -1) * (this.practices.length - this.windowSize);
      },
      atHeadOfList() {
        return this.currentOffset === 0;
      },
    },
    methods: {
      showAlert() {
        alert('Hola')
      },
      moveCarousel(direction) {
        // Find a more elegant way to express the :style. consider using props to make it truly generic
        if (direction === 1 && !this.atEndOfList) {
          this.currentOffset -= this.paginationFactor;
        } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor;
        }
      },
      setItem(index) {

        this.itemFocus = this.practices[index]

      }
    },
    mounted() {
      this.itemFocus = this.practices[0]
    }
  }
</script>

<style scoped lang="scss">
  $vue-navy: #2c3e50;
  $vue-navy-light: #3a5169;
  $vue-teal: #42b883;
  $vue-teal-light: #42b983;
  $gray: #666a73;
  $light-gray: #f8f8f8;


  body {
    background: $light-gray;
    color: $vue-navy;
    font-family: 'Source Sans Pro', sans-serif;
    min-height: 1000px;
  }

  .card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 40px;
    color: $gray;
  }

  .card-carousel {
    display: flex;
    justify-content: center;
    width: 800px;

    &--overflow-container {
      overflow: hidden;
    }

    &--nav__left,
    &--nav__right {
      display: inline-block;
      width: 15px;
      height: 15px;
      padding: 10px;
      box-sizing: border-box;
      border-top: 5px solid $vue-teal;
      border-right: 5px solid $vue-teal;
      cursor: pointer;
      margin: 0 10px;
      transition: transform 150ms linear;
      &[disabled] {
        opacity: 0.2;
        border-color: black;
      }
    }

    &--nav__left {
      transform: rotate(-135deg);
      &:active {
        transform: rotate(-135deg) scale(0.9);
      }
    }

    &--nav__right {
      transform: rotate(45deg);
      &:active {
        transform: rotate(45deg) scale(0.9);
      }
    }
  }

  .card-carousel-cards {
    display: flex;
    transition: transform 150ms ease-out;
    transform: translatex(0px);

    .card-carousel--card {
      margin: 0 10px;
      cursor: pointer;

      z-index: 3;
      margin-bottom: 2px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      img {
        vertical-align: bottom;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        transition: opacity 150ms linear;
        user-select: none;

        &:hover {
          opacity: 0.5;
        }
      }

      &--footer {
        border-top: 0;
        padding: 7px 15px;

        p {
          padding: 3px 0;
          margin: 0;
          margin-bottom: 2px;
          font-size: 19px;
          font-weight: 500;
          color: $vue-navy;
          user-select: none;

          &:nth-of-type(2) {
            font-size: 12px;
            font-weight: 300;
            padding: 6px;
            background: rgba(40,44,53,.06);
            display: inline-block;
            position: relative;
            margin-left: 4px;
            color: $gray;

            &:before {
              content:"";
              float:left;
              position:absolute;
              top:0;
              left: -12px;
              width:0;
              height:0;
              border-color:transparent rgba(40,44,53,.06) transparent transparent;
              border-style:solid;
              border-width:12px 12px 12px 0;
            }

            &:after {
              content:"";
              position:absolute;
              top:10px;
              left:-1px;
              float:left;
              width:4px;
              height:4px;
              border-radius: 2px;
              background: white;
              box-shadow:-0px -0px 0px #004977;
            }
          }
        }
      }
    }
  }

  .container-practices {

    background: white;
    height: 100px;

  }
  .isActive {

    color: #ff8334;
    border: 2px solid #ff8334 !important;

  }
  .isActive:hover {

    border: 2px solid #ff8334;
    box-shadow: none;
  }
  .button-practices:focus {
    border: 2px solid #ff8334 !important;

    outline: none;
    box-shadow: none;

  }
  .btn {
    transition: none;
  }


</style>