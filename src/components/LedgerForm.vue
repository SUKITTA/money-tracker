<template>
    <div class="ledger-table">
        <h2 id="balance">Balance: {{ balance }}</h2>
        <div class="form">
            <div class="textfield">
                <label class="label" for="date">Date</label>
                <input class="input" type="date" v-model="form.date">
            </div>
            
            <div class="textfield">
                <label class="label" for="type">Received or Spent</label>
                <select class="input" v-model="form.type">
                    <option disabled value="">Please select one</option>
                    <option value="Received">Received</option>
                    <option value="Spent">Spent</option>
                </select>
            </div>

            <div class="textfield">
                <label class="label" for="amount">Amount</label>
                <input class="input" type="text" v-model="form.amount">
            </div>

            <div class="textfield">
                <label class="label" for="description">Description</label>
                <!-- <input type="text" v-model="form.description"> -->
                <textarea class="input" cols="30" rows="5" v-model="form.description"></textarea>

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
                type: '',
                amount: '',
                description: '',
            },
        }
    },
    computed: {
        balance: function () {
            return LedgerStore.getters.balance
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
            // console.log(!isNaN(this.form.amount))
            if (!isNaN(this.form.amount)){
                const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                const date = new Date(this.form.date)
                let payload = {
                    date: `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`,
                    type: this.form.type,
                    amount: this.form.amount,
                    description: this.form.description,
                }

                LedgerStore.dispatch('addList', payload)
                console.log(payload)
                this.clearForm()
            }
            else {
                alert("Please enter number not string!")
            }
        },
        
    }
}
</script>

<style scoped lang="scss">

.ledger-table {
    padding-bottom: 64px;
}

#balance {
    margin-top: 32px;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .textfield {
        width: 350px;
        display: flex;
        padding: 8px 0;
        .label {
            min-width: 150px;
            text-align: left;
        }
        
        .input {
            width: 100%;
        }
    }
}

</style>