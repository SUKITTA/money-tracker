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

            <tbody>
                <tr v-for="(list, index) in ledger" :key="index">
                    <td class="date" >{{ list.date }}</td>

                    <td class="received" v-if="list.type === 'Received'">
                        {{ list.amount}}
                    </td>
                    <td v-if="list.type !== 'Spent'"></td>

                    <td v-if="list.type !== 'Received'"></td>
                    <td class="spent" v-if="list.type === 'Spent'">
                        {{ list.amount }}
                    </td>
                
                    <td class="description" >{{ list.description }}</td>

                    <!-- <td>
                        <button @click="deleteList">x</button>
                    </td> -->
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
        // deleteList() {
        //     this.ledger = 
        // },
        
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/theme";

table {
    width: 100%;
    padding: 0 32px;
    th {
        background-color: $light-green;
        color: $dark-green;
        height: 2.5em;
        font-size: 18px;
    }
    tr {
        background-color: cornsilk;
        td {
            padding: 4px;
        }
        .date {
            width: 20%;
        }
        .received {
            width: 15%;
        }
        .spent {
            width: 15%;
        }
        .description {
            width: 50%;
            word-break: break-word;
        }
    }
    /* tr:nth-child(even) {background-color: ;} */
}

</style>