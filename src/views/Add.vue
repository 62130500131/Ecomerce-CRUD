<template>
  <div class="add">
      
    <nav-bar></nav-bar>
    <form @submit.prevent="submitForm">
    <base-card>
              <h2 class="heading ">
                Add New Product
              </h2>
            <br/>
              <label class="label" for="name">Name :</label>
              
              <input
                class="input"
                id="name"
                type="text"
                v-model.trim="enteredName"
              />
            <br/><br/>
            
              <label class="label" for="brand">Brand :</label>
              <input
                class="input"
                id="brand"
                type="text"
                v-model.trim="enteredBrand"
              />
              <br/><br/>
              <label class="label" for="description">Description :</label>

              <input
                class="input"
                id="description"
                type="text"
                v-model.trim="enteredDescription"
              />
              <br/><br/>
              <label class="label" for="price">Price :</label>

              <input
                class="input"
                id="description"
                type="text"
                v-model.trim="enteredPrice"
              />
            
              <h2 class="heading">Color</h2>
                
              <div>
                <input
                  type="radio"
                  name="color"
                  id="color-red"
                  value="red"
                  v-model="enteredColor"
                />
                <label class="label text-red-400" for="color-red">Red</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="color"
                  id="color-green"
                  value="green"
                  v-model="enteredColor"
                />
                <label class="label text-green-400" for="color-green">Green</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="color"
                  id="color-yellow"
                  value="yellow"
                  v-model="enteredColor"
                />
                <label class="label text-yellow-400" for="color-yellow">Yellow</label>
              </div><br/>

              <input @change="onFileChanged" class="hidden" id="upload-photo" type="file">
              <label for="upload-photo"  class="cursor-pointer border-green-500 border-2 mx-auto p-2 mt-2 hover:bg-green-500 hover:text-white" >Upload File</label>
              <br/><br/>
            </base-card>

            <button class="btn">
              Submit
            </button>
            </form >
            
  </div>
</template>
<script>
export default {
    data(){
        return {
            url: 'http://localhost:5000/surveyResults',
            enteredName : '', errorName : false,
            enteredBrand : '', errorBrand : false,
            enteredDescription : '', errorDescription : false,
            enteredPrice : '', errorPrice : false,
            enteredColor : '', errorColor : false,
            surveyResults: [],
            newSurvey: {
                name : '',
                brand : '',
                Color : '',
                Description : '',
                Price: ''
            }
        }
    },
    methods: {
        submitForm() {
      this.errorName = this.enteredName === '' ? true : false
      this.errorBrand = this.enteredBrand === '' ? true : false
      this.errorDescription = this.enteredDescription === '' ? true : false
      this.errorPrice = this.enteredPrice === '' ? true : false
      this.errorColor = this.enteredColor === '' ? true : false


      if(this.errorName||this.errorBrand||this.errorDescription||this.errorPrice||this.errorColor){
        alert('Fail to upload')
      }
      else{
      console.log(`name value: ${this.enteredName}`)
      console.log(`brand value: ${this.enteredBrand}`)
      console.log(`description value: ${this.enteredDescription}`)
      console.log(`price value: ${this.enteredPrice}`)
      console.log(`color value: ${this.enteredColor}`)
       this.newSurvey.name = this.enteredName
       this.newSurvey.brand = this.enteredBrand
       this.newSurvey.Color = this.enteredColor
       this.newSurvey.Description = this.enteredDescription
       this.newSurvey.Price = this.enteredPrice
       this.addNewSurvey(this.newSurvey)
        alert('Succes to upload')
       }
      

        },
    async addNewSurvey(newSurvey) {
      try {
        const res = await fetch(this.url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: newSurvey.name,
            brand: newSurvey.brand,
            Color: newSurvey.Color,
            Description: newSurvey.Description,
            Price: newSurvey.Price
          })
        })
        const data = await res.json()
        this.surveyResults = [...this.surveyResults, data]
      } catch (error) {
        console.log(`Could not save! ${error}`)
      }
    }
  }
  
    }

</script>