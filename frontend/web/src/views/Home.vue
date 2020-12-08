<template>
    <div class="home">
        <div v-if="state === 'questions'">
            <div v-bind:key="question.idx" v-for="question in this.questions">
                <p>{{question.question}}</p>
                <b-form-rating v-model="question.answer" variant="warning" class="mb-2"/>
            </div>
        </div>
        <div v-else>Hello</div>
        <b-button @click="submitQuestionnaire()" variant="success">Button</b-button>
    </div>
</template>

<script>
  // @ is an alias to /src
  import axios from 'axios';

  export default {
    name: 'Home',
    data() {
      return {
        state: "questions",
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
        const response = await axios.get("http://192.168.2.135/api/v1/devices");
        console.log(response)
        console.log(this.questions)
      },
    },
    components: {}
  }
</script>
