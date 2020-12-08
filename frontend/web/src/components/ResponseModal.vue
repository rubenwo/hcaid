<template>
    <b-modal size="xl" id="deviceModal" ref="modal" @ok="handleOk" @cancel="handleCancel" @close="handleCancel">
        <b-img :src="this.img_src" center width="100%"/>
        <br>

        <b-progress :value="confidence*100" :variant="this.progress_color" show-progress/>
        <br>
        <p>It seems you are {{happiness===1?"happy":"sad"}} with your current living situation.
        Based on our data the e</p>
    </b-modal>
</template>

<script>
  export default {
    name: "ResponseModal",
    data() {
      return {
        happiness: 0,
        confidence: 0,
        img_src: "",
        progress_color: "danger"
      }
    },
    created() {
      this.$on('response', (response) => {
        console.log(response)
        this.happiness = response.happiness;
        this.confidence = response.confidence;
        if (this.happiness === 0) {
          this.img_src = require('../assets/sad_face.png')
          this.progress_color = "danger"
        } else {
          this.img_src = require('../assets/happy_face.png')
          this.progress_color = "success"
        }
        this.$refs.modal.show()
      })
    },
    methods: {
      handleOk(evt) {
        // evt.preventDefault();
      },
      handleCancel() {
      },
    },
  }
</script>

<style scoped>

</style>
