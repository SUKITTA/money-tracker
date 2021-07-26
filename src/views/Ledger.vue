<template>
    <div>
        <h1 class="header">Money Tracker</h1>
        <div class="graph">for Graph</div>
        <div class="body">
            <ledger-table class="ledger-table"></ledger-table>
            <ledger-form class="ledger-form"></ledger-form>
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
@import "@/assets/theme";
.header {
    margin: 0;
    padding: 0.8em 0;
    color: $soft-cream;
    background-color: $dark-green;
}

.graph {
    margin: 0.8em;
}

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