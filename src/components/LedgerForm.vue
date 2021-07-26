<template>
    <div>
        <div>Balance: {{ balance }}</div>
        <div>
            <div>
                <label for="date">Date</label>
                <input type="date" v-model="form.date">
            </div>
            
            <div>
                <label for="type">Received or Spent</label>
                <select v-model="form.type">
                    <option disabled value="">Please select one</option>
                    <option value="Received">Received</option>
                    <option value="Spent">Spent</option>
                </select>
            </div>

            <div>
                <label for="amount">Amount</label>
                <input type="text" v-model="form.amount">
            </div>

            <div>
                <label for="description">Description</label>
                <!-- <input type="text" v-model="form.description"> -->
                <textarea name="description" id="description" cols="30" rows="5" v-model="form.description"></textarea>

            </div>
        </div>    
            
        <button @click="addList">Add</button>
        
    </div>
</template>

<script>
import LedgerStore from '@/store/ledgerStore'
export default {
    data() {
        return {
            form: {
                date: '',
                detail: {
                    type: '',
                    amount: '',
                    description: '',
                }
                // date: '',
                // type: '',
                // amount: '',
                // description: '',
            },
            balance: 0,
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

            LedgerStore.dispatch('addList', payload)
            console.log(payload)
            this.calculate()
            this.clearForm()
        },
        calculate() {
            if ( this.form.type === "Received" ){
                this.balance += parseInt(this.form.amount)
                console.log("Yeah")
            }
            else if ( this.form.type === "Spent" ) {
                this.balance -= parseInt(this.form.amount)
                console.log("Nahhh")
            }
           
        }
    }
}
</script>

<style>

</style>