<template>
    <div>
        <h1>Money Tracker</h1>
        <div>for Graph</div>
        <div class="body">
            <ledger-form class="ledger-form"></ledger-form>
            <ledger-table class="ledger-table"></ledger-table>
        </div>
        
    </div>
</template>

<script>
import LedgerForm from '@/components/LedgerForm'
import LedgerTable from '@/components/LedgerTable'
export default {
    components: {
        LedgerForm,
        LedgerTable,
    }
}
</script>

<style scoped lang="scss">

.body {
    padding-top: 8px;
    .ledger-form {
        margin-top: 24px;
    }
    .ledger-table{
        margin-top: 24px;
    }
}

</style>