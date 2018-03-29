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
            Dao.add(expense).then(() => {
                Dao.getAll().then((response) => {
                    this.expenses = response.data
                    
                })
                
            })
        },
        remove(id){
        Dao.remove(id).then(() => {
            Dao.getAll().then((response) => {
                this.expenses = response.data
                    
            })

        })
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
