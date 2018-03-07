<template>
  <table class="table">
    <tr>
        <th>Id</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
    </tr>
    <tr v-for=" expense of expenses" :key="expense.id">
        <td>{{expense.id}}</td>
        <td>{{expense.category}}</td>
        <td>{{expense.amount}} €</td>
        <td>{{expense.date}}</td>
        <td><a @click="remove(expense.id)" href="#">remove</a></td>
    </tr>

  </table>
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
    methods: {
        remove(id){
            this.$emit('remove',id)
        }
    }

}
</script>

<style>

</style>
