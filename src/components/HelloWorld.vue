<template>
  <v-container v-resize="onResize" class="pa-0" fluid>
    <div class="outer"
    :style="OUTER_STYLE">
      <div class="inner"
      :style="INNER_STYLE">
        <div>
          <ul>
            <li>innerCardHeight: {{innerCardHeight}}</li>
            <li>innerCardMaxHeight: {{innerCardMaxHeight}}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>outer: {{outer}}</li>
            <li>inner: {{inner}}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>cardSize: {{cardSize}}</li>
          </ul>
        </div>
        <v-checkbox v-model="cardWidthAuto"
         :label="`dialog card width:auto`"></v-checkbox>
        <v-text-field v-model="ratio" solo></v-text-field>
        <div class="aspect-test" :style="AS_STYLE"></div>
        <div class="dialog-area">
          <v-btn @click="dialogOpen">Dialog</v-btn>
          <v-dialog 
            v-model="dialog" 
            transition="fade-transition"
            :width="'auto'"
            :max-width="'80%'"
            @keydown="getICardRef">
            <v-card
              ref="iCard"
              class="dialog-card"
              :class="{'dialog-card-auto': cardWidthAuto}"
              :height="innerCardHeight"
              :max-height="innerCardMaxHeight"></v-card>
          </v-dialog>
        </div>
        
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      inner: {x: 0, y: 0},
      outer: {x: 0, y: 0},
      ratio: "1/1",
      dialog: false,
      cardWidthAuto: true,
      cardSize: {x: 0, y: 0},
    }),

    mounted() {
      this.onResize();
      console.log(this.$refs.iCard);
    },

    computed: {
      OUTER_STYLE(){
        const width = this.outer.x + "px";
        const height = this.outer.y + "px";
        console.log(width, height)
        return {width, height}
      },
      INNER_STYLE(){
        const width = this.inner.x + "px";
        const height = this.inner.y + "px";
        console.log(width, height)
        return {width, height}
      },
      AS_STYLE() {
        const height = this.inner.y / 5 + "px";
        const aspectRatio = this.ratio
        console.log(height, aspectRatio)
        return {height, aspectRatio}
      },

      innerCardHeight: function() {
        const aspectRatio = 4/3;
        let width = this.inner.x;
        const height = width / aspectRatio;
        return height
      },
      innerCardMaxHeight: function() {
        return Math.floor(this.inner.y * 0.9)
      }
    },

    methods: {
      onResize: function() {
        this.inner = {x: window.innerWidth, y: window.innerHeight}
        this.outer = {x: window.outerWidth, y: window.outerHeight}
        this.getICardRef();
      },
      dialogOpen: function() {
        this.dialog = true
      },
      getICardRef: function() {
        const el = this.$refs.iCard.$el;
        console.log(el)
        this.cardSize = {x: el.clientWidth, y: el.clientHeight}
      }
    }

  }
</script>

<style scoped>
  .outer{
    background-color: antiquewhite;
  }
  .inner{
    background-color: cadetblue;
  }
  .aspect-test{
    background-color: yellowgreen;
  }
  .aspect-test:before{
    content: '';
  }
  .dialog-card{
    aspect-ratio: 4/3;
    overflow: auto;
    width: 100%;
  }
  .dialog-card:before{
    content: ''
  }
  .dialog-card-auto{
    width: auto;
  }
</style>