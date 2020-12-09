<template>
    <div class="home">
        <div v-if="!this.submitting">
            <div v-if="state === 'questions'">
                <div v-bind:key="question.idx" v-for="question in this.questions">
                    <p>{{question.question}}</p>
                    <b-form-rating v-model="question.answer" variant="warning" class="mb-2"/>
                </div>
                <b-button @click="back()" style="width: 15%" variant="">Back</b-button>
                <b-button @click="submitQuestionnaire()" style="width: 15%" variant="success">Submit</b-button>
            </div>
            <div v-else-if="state === 'welcome'">
                <welcome-comp/>
                <b-button @click="next()" style="width: 15%" variant="success">Next</b-button>
            </div>


        </div>
        <div v-else>
            <h3>Loading results...</h3>
            <Loading :active.sync="this.submitting"
                     :is-full-page="true"/>
        </div>
        <response-modal ref="modal"/>
    </div>
</template>

<script>
  // @ is an alias to /src
  import axios from 'axios';
  import ResponseModal from "../components/ResponseModal";
  import Loading from 'vue-loading-overlay'
  import WelcomeComp from "../components/WelcomeComp";

  export default {
    name: 'Home',
    data() {
      return {
        state: "welcome",
        submitting: false,
        questions: [
          {
            idx: 0,
            question: "How easily is the information about your city services reachable?",
            answer: 1
          },
          {
            idx: 1,
            question: "How would you rate the average cost of housing?",
            answer: 1
          },
          {
            idx: 2,
            question: "What is the overall quality of public schools in your area?",
            answer: 1
          },
          {
            idx: 3,
            question: "Do you have trust in your local police?",
            answer: 1
          },
          {
            idx: 4,
            question: "How well are the streets and sidewalks maintained in your area?",
            answer: 1
          },
          {
            idx: 5,
            question: "Are there often social community events in your area?",
            answer: 1
          }
        ]

      }
    },
    methods: {
      async submitQuestionnaire() {
        console.log("submitting...");
        this.submitting = true;

        const data = {
          X1: this.questions[0].answer,
          X2: this.questions[1].answer,
          X3: this.questions[2].answer,
          X4: this.questions[3].answer,
          X5: this.questions[4].answer,
          X6: this.questions[5].answer
        };
        const response = await axios.post("/api/v1/happiness", data);
        console.log(response);
        this.submitting = false;
        this.$refs.modal.$emit('response', response.data)

      },
      next() {
        if (this.state === 'welcome') this.state = 'questions';
      },
      back() {
        if (this.state === 'questions') this.state = 'welcome';
      },
    },
    components: {WelcomeComp, ResponseModal, Loading}
  }
</script>
<style>
    .home {
        width: 50%;
        margin: auto;
    }

</style>
