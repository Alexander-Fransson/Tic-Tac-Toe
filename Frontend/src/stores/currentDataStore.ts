import { defineStore } from "pinia"

export const useCurrentData = defineStore("currentData", {
    state: () => {
        return {
            currentScore: 0,
            playerOnesTurn: true,
            playerOne: '',
            playerTwo: '',
            sqares: [
                {
                    number: 1,
                    sign: ''
                },
                {
                    number: 2,
                    sign: ''
                },
                {
                    number: 3,
                    sign: ''
                },
                {
                    number: 4,
                    sign: ''
                },
                {
                    number: 5,
                    sign: ''
                },
                {
                    number: 6,
                    sign: ''
                },
                {
                    number: 7,
                    sign: ''
                },
                {
                    number: 8,
                    sign: ''
                },
                {
                    number: 9,
                    sign: ''
                },
            ]
        }
    },
    getters: {

    },
    actions: {
        changeTurn(){
            this.playerOnesTurn = !this.playerOnesTurn
        },
        increaseScore(){
            this.currentScore += 1
        },
        setPlayerName(name: string, playerOne: boolean){
            if(playerOne){
                this.playerOne = name;
            }else{
                this.playerTwo = name
            }
        },
        changeSquare(playerOne: boolean, square: number){
            const currentSign = this.sqares[square].sign

            if(playerOne){
                if(currentSign === ""){
                    this.sqares[square].sign = "X"
                }
                else if(currentSign === "X"){
                    this.sqares[square].sign = ""
                }
            }else{
                if(currentSign === ""){
                    this.sqares[square].sign = "O"
                }
                else if(currentSign === "O"){
                    this.sqares[square].sign = ""
                }
            }
        }
    }
})