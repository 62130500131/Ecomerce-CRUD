<template>

  <div class="home" >
    <nav-bar></nav-bar>
    <grid-item>
     <ul v-for="survey in surveyResults" :key="survey.id">
            
            <base-card><li>
              <span><img src='../assets/productPhoto/LB.png' class='rounded-md mx-auto w-24 h-24' /></span>
              <span> name : {{survey.name}} </span> <br/>
              <span> brand : {{survey.brand}} </span><br/>
              <span> color : {{survey.Color}} </span><br/>
              <span> description : {{survey.Description}} </span><br/>
              <span> Price : {{survey.Price}} </span><br/>
              <router-link class="border-black border-1 bg-green-500  m-1  font-bold" :to="{name:'Edit', params:{oldId:survey.id,oldName:survey.name,oldBrand:survey.brand,oldDescription:survey.Description,oldColor:survey.Color,oldPrice:survey.Price}}" >
                 edit
              </router-link>
              <button   @click="deleteSurvey(survey.id)" class="border-black border-1 bg-red-300 m-1 rounded-md  font-bold">
                delete
              </button>
            </li></base-card>
            
      </ul>
    
  </grid-item>
  </div>
</template>

<script>
import GridItem from '../components/GridItem.vue'
import NavBar from '../components/NavBar.vue'


export default {
  components: { NavBar, GridItem },
  name: 'Home',
  data() {
    return {
      url: 'http://localhost:5000/surveyResults',
      surveyResults: []
    }
  },
  methods:{
    async getSurveyResult() {
      try {
        const res = await fetch(this.url)
        const data = await res.json()
        return data
      } catch (error) {
        console.log(`Could not get! ${error}`)
      }
    },
    async deleteSurvey(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: 'DELETE'
        })
        //filter - higher order function
        this.surveyResults = this.surveyResults.filter(
          (survey) => survey.id !== deleteId
          
        )
        alert(`Succes to Delete id : ${deleteId}`)
      } catch (error) {
        console.log(`Could not delete! ${error}`)
      }
    }
  },
    async created() {
    this.surveyResults = await this.getSurveyResult()
  }
}
</script>
