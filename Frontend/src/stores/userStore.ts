import { defineStore } from "pinia"

interface IUser {
    Id: number,
    Name: string,
    HighScoar: number
}

export const useUserStore = defineStore("userStore",{
    state: () => {
        return{
            users: [] as IUser[]
        }
    },
    getters:{
    
    },
    actions:{
        async updateStore(){
            const req = await fetch('http://localhost:5251/api/Users')
            const res = await req.json()
            this.users = res;
        },
        async addUser(name: string){
            const id = this.users.length? this.users.map(user => user.Id).sort()[this.users.length] : 1
            const body = JSON.stringify({
                Id: id,
                Name: name,
                HighScoar: 0
            })

            const req = await fetch('http://localhost:5251/api/Users', {
                method: 'POST',
                headers: {
                    'accept':'text/plain',
                    'Content-Type':'application/json',
                },
                body: body
            })

            const res = await req.json()
            console.log(res)
            this.updateStore()
        },
    } 
})