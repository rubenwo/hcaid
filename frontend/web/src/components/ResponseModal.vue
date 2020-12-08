<template>
    <b-modal size="xl" id="deviceModal" ref="modal" @ok="handleOk" @cancel="handleCancel" @close="handleCancel">
        <p>{{happiness}}</p>
        <p>{{confidence}}</p>
    </b-modal>
</template>

<script>
  export default {
    name: "ResponseModal",
    data() {
      return {
        happiness: 0,
        confidence: 0
      }
    },
    created() {
      this.$on('response', (response) => {
        console.log(response)
        this.happiness = response.happiness;
        this.confidence = response.confidence;
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
