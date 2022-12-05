<script setup lang="ts">
    import router from '../router'
    import { useCurrentData } from '../stores/currentDataStore'

    const data = useCurrentData()
    console.log(data.sqares)

    if(data.playerOne === "" || data.playerTwo===""){
        router.push("/")
    }

    
</script>

<template>
    <h1>Tic Tac Toe</h1>
    <section >
        <input v-for="(squares, index) in data.sqares" type="button" :value="squares" @click="data.changeSquare(index)"/>
    </section>
    <h2>{{data.showWhosTurn()}}</h2>
</template>

<style scoped>
    section{
        display: flex;
        flex-wrap: wrap;
        width: 15vw;
        margin: auto;
    }
    input{
        background-color: wheat;
        width: 5vw;
        height: 5vw;
    }
</style>