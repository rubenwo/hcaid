<template>
    <b-modal size="xl" id="deviceModal" ref="modal" @ok="handleOk" @cancel="handleCancel" @close="handleCancel">
        <b-img :src="this.img_src" center width="100%"/>
        <br>

        <b-progress :value="confidence*100" :variant="this.progress_color" show-progress/>
        <br>
        <div style="text-align:center;">
            <p>Our model predicted that you are {{happiness===1?"happy":"sad"}} with your current living situation, with
                a confidence level of: {{confidence*100}}%. </p>
            <div v-if="recommendations.length !== 0">
                <p> Based on our data the happiness of your community could be increased by doing the following:</p>
                <div style="text-align:center;">
                    <h5 class="mt-2">Recommendations</h5>
                    <div v-bind:key="recommendation.idx" v-for="recommendation in this.recommendations">
                        <li>{{recommendation.content}}</li>
                    </div>
                </div>

            </div>
            <div v-else>
                <p>We don't have any suggestions at the moment for your particular situation.</p>
            </div>
        </div>
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
        progress_color: "danger",
        recommendations: []
      }
    },
    created() {
      this.$on('response', (response) => {
        console.log(response)
        this.happiness = response.happiness;
        this.confidence = response.confidence;
        this.recommendations = response.recommendations;
        if (this.recommendations === undefined) this.recommendations = []
        // this.recommendations = [
        //   {idx: 0, content: "Go outside"}
        // ]
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
