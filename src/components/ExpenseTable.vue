<template>
    <div>
        <table class="table">
            <tr>
                <th>Id</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
            <tr v-for=" expense of expenses" :key="expense.id">
                <td>{{expense.id}}</td>
                <td>{{expense.category}}</td>
                <td>{{expense.amount}} €</td>
                <td>{{expense.date}}</td>
                <td><a @click="remove(expense.id)" href="#">remove</a></td>
            </tr>
           
            
        </table>
        <p>Total : {{ totalAmount }} €</p>
    </div>
</template>

<script>
export default {
    name: "expensetable",
    props: {
        expenses: {
            type: Array,
            required: true
        }

    },
    data(){
        return {
        
        }
        
    },
    methods: {
        remove(id){
            this.$emit('remove',id)
        },
        totalAmount() {

            
    
        }

        
    },
    computed:{
        totalAmount: function () {
            let total = 0;
            for (let i = 0; i < this.expenses.length; i++) {
                total = total + parseInt(this.expenses[i].amount)    
            }
            return total
        }
        
    },
    created(){
            
       
    }

}
</script>

<style>

</style>
