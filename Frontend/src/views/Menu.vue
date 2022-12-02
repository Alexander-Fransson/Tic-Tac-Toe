<script setup lang="ts">
    import { useUserStore } from '../stores/userStore'
    import { ref } from 'vue'

    const users = useUserStore()
    const player1Name = ref('')

    const addPlayer = (Name: string, Number: number) => {
        users.addUser(Name)
        console.log(users.users);
        
    }
</script>

<template>
    <h1>Menuing</h1>

    <q-form @submit="addPlayer(player1Name, 1)">
        <q-input 
            v-model="player1Name"
            type="text"
            label="player one, wright youre name."
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