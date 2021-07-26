<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Received</th>
                    <th>Spent</th>
                    <th>Description</th>
                </tr>
            </thead>

            <!-- <tbody>
                <tr>
                    <td>12/08/2021</td>
                    <td>2000</td>
                    <td>500</td>
                    <td>ซื้อ Pizza</td>
                </tr>
            </tbody> -->

            <tbody>
                <tr v-for="(list, index) in ledger" :key="index">
                    <td>{{ list.date }}</td>

                    <td v-if="list.type === 'Received'">
                        {{ list.amount}}
                    </td>
                    <td v-if="list.type !== 'Spent'"></td>

                    <td v-if="list.type !== 'Received'"></td>
                    <td v-if="list.type === 'Spent'">
                        {{ list.amount }}
                    </td>
                
                    <td>{{ list.description }}</td>

                    <td>
                        <button @click="deleteList">x</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import LedgerStore from '@/store/ledgerStore'
export default {
    data() {
        return {
            ledger: [],
        }
    },
    created() {
        this.fetchList()
    },
    methods: {
        fetchList() {
            LedgerStore.dispatch('fetchList')
            this.ledger = LedgerStore.getters.ledger
        },
        deleteList() {
            // this.ledger = 
        },
        
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/theme";

table {
    width: 100%;
}

</style>