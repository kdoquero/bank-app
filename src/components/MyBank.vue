<template>
  <main>
      <ExpenseTable :expenses= "expenses" @remove= "id => remove(id)"></ExpenseTable>
      <Addexpenses @action1="expense => addedExpense(expense)"></Addexpenses>
      <Charts :expenses= "expenses" />  
  </main>
</template>

<script>
import Addexpenses from './Addexpenses'
import ExpenseTable from './ExpenseTable.vue'
import Savings from './Savings.vue'
import Charts from './Charts.vue'
import {Dao} from '../entities/Dao'

export default {
    name: "mybank",
    components:{
        ExpenseTable,
        Savings,
        Addexpenses,
        Charts
    },
    data(){
        return {
            expenses: []
        }

    },
    methods: {
        addedExpense(expense){
            Dao.add(expense)
        },
        remove(id){
        this.expenses = this.expenses.filter(expense => expense.id !== id)
      }
    },
    beforeCreate(){
        Dao.getAll().then((response)=>{
            this.expenses = response.data
        })
        
    }

}
</script>

<style>

</style>
