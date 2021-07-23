<template>
    <div>
        <label for="date">Date</label>
        <input type="date" v-model="form.date">

        <label for="type">Received or Spent</label>
        <select v-model="form.type">
            <option disabled value="">Please select one</option>
            <option value="Received">Received</option>
            <option value="Spent">Spent</option>
        </select>

        <label for="amount">Amount</label>
        <input type="text" v-model="form.amount">

        <label for="description">Description</label>
        <input type="text" v-model="form.description">

        <button @click="addList">Add</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                date: '',
                type: '',
                amount: '',
                description: '',
            }
        }
    },
    methods: {
        clearForm() {
            this.form = {
                date: '',
                type: '',
                amount: '',
                description: '',
            }
        },
        addList() {
            let payload = {
                date: this.form.date,
                type: this.form.type,
                amount: this.form.amount,
                description: this.form.description,
            }

            // PokemonStore.dispatch('addPokemon', payload)
            console.log(payload)
            this.clearForm()
        }
    }
}
</script>

<style>

</style>