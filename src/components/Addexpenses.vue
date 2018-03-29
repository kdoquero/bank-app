<template>
  <div>
    <b-form v-on:submit.prevent="add()" inline  >      
      <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
        <label class="sr-only" for="category">Category</label>
        <select id="listeCategorie" required v-model="expense.category">
          <option value="" > --Choose-- </option>
          <option value="Emploi">Emploi</option>
          <option value="Logement">Logement</option>
          <option value="Alimentation">Alimentation</option>
          <option value="Loisirs">Loisirs</option>
          <option value="Sante">Santé</option>
          <option value="Habillement">Habillement</option>
          <option value="Meubles">Meubles</option>
          <option value="Transports">Transports</option>
          <option value="Communications">Communications</option>
          <option value="Enseignement">Enseignement</option>
          <option value="Restauration">Restauration et hôtels</option>
          <option value="Divers">Biens et services divers</option>
          <option value="Autres">Autres</option>
        </select>
        <label class="sr-only" for="amount">Amount</label>
        <b-input type="number" id="amount" placeholder="Amount €" v-model="expense.amount"/>
        <label class="sr-only" for="date">Date</label>
        <b-input type="date" id="date" v-model="expense.date" />
      </b-input-group>
      <b-button type="submit" variant="primary">submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: "addexpenses",
    data(){
      return {
        expense: {
    
          id : 0,
          category: "",
          amount: 0,
          date: ""
        },

        
      }
    },
    methods: {
      add() {
        this.$emit('action1',Object.assign({}, this.expense))
      }
      
    }
}
</script>

<style>

</style>
