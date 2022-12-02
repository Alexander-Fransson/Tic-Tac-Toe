<script setup lang="ts">
    import { useUserStore } from '../stores/userStore'
    import { useCurrentData } from '../stores/currentDataStore';
    import router from '../router';
    import { ref } from 'vue'

    const users = useUserStore()
    const data = useCurrentData()
    
    const player1Name = ref('')
    const player2Name = ref('')
    console.log(data)
    const addPlayer = (Name: string, playerOne: boolean) => {
        if(users.checkIfUserExhists(Name)){
            users.addUser(Name)
        }else{
            console.log('user already added')
        }

        if(playerOne){
            data.setPlayerName(Name, true)
        }else{
            data.setPlayerName(Name, false)
            router.push('/game')
        }
    }
</script>

<template>
    <h1>Menuing</h1>

    <q-form v-if="data.playerOne === ''" @submit="addPlayer(player1Name, true)">
        <q-input 
            v-model="player1Name"
            type="text"
            label="player One, wright youre name."
        />
        <q-btn 
            label="Add"
            type="submit"
            color="primary"
        />
    </q-form>
    <q-form v-else @submit="addPlayer(player2Name, false)">
        <q-input 
            v-model="player2Name"
            type="text"
            label="player Two, wright youre name."
        />
        <q-btn 
            label="Add"
            type="submit"
            color="primary"
        />
    </q-form>
</template>

<style scoped>

</style>