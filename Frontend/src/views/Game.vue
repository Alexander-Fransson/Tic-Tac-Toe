<script setup lang="ts">
    import router from '../router'
    import { useCurrentData } from '../stores/currentDataStore'

    const data = useCurrentData()

    if(data.playerOne === "" || data.playerTwo===""){
        router.push("/")
    }
</script>

<template>
    <h1>Tic Tac Toe</h1>
</template>

<style scoped>

</style>