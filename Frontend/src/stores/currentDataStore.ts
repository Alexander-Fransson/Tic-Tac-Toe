import { defineStore } from "pinia"

export const useCurrentData = defineStore("currentData", {
    state: () => {
        return {
            currentScore: 0,
            playerOnesTurn: true,
            playerOne: '',
            playerTwo: '',
            sqares: [
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' '
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
            const currentSign = this.sqares[square]

            if(playerOne){
                if(currentSign === " "){
                    this.sqares[square] = "X"
                }
                else if(currentSign === "X"){
                    this.sqares[square] = " "
                }
            }else{
                if(currentSign === " "){
                    this.sqares[square]= "O"
                }
                else if(currentSign === "O"){
                    this.sqares[square] = " "
                }
            }
        }
    }
})