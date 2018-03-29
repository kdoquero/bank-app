<template>
    <div class="container">
        <canvas ref="canvas" width="400" height="200"></canvas>
    </div>
  
</template>

<script>
import { Bar } from 'vue-chartjs'
export default {
    name: "chart",
    extends: Bar,
    props: {
        expenses: {
            type: Array
        }
    },
    mounted () {
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: ['Emploi', 'Logement', 'Alimentation', 'Loisirs', 'Santé', 'Habillement', 'Meubles', 'Transports', 'Communications', 'Enseignement', 'Restauration et hôtels', 'Biens et services divers','Autres'],
            datasets: [
            {
            label: 'expenses',
            backgroundColor: '#f87979',
            data: []
            }
            ]
        })
    }

}
</script>

<style>

</style>
