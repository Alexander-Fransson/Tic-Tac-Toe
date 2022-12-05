import { defineStore } from "pinia"

export const useCurrentData = defineStore("currentData", {
    state: () => {
        return {
            currentScore: 0,
            p1Pieces: 0,
            p2Pieces: 0,
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
        showWhosTurn() : string {
            if(this.victory()){
                return 'Winner: ' + this.victory()!
            } else {
                return this.playerOnesTurn? this.playerOne : this.playerTwo
            }
        },
        setPlayerName(name: string, playerOne: boolean){
            if(playerOne){
                this.playerOne = name;
            }else{
                this.playerTwo = name
            }
        },
        changeSquare(square: number){
            const currentSign = this.sqares[square]

            if(!this.victory()){
                if(this.playerOnesTurn){
                    if(currentSign === " " && this.p1Pieces < 3){
                        this.p1Pieces ++
                        this.sqares[square] = "X"
                        this.playerOnesTurn = !this.playerOnesTurn
                    }
                    else if(currentSign === "X"){
                        this.p1Pieces --
                        this.sqares[square] = " "
                    }
                }else{
                    if(currentSign === " " && this.p2Pieces < 3){
                        this.p2Pieces ++
                        this.sqares[square]= "O"
                        this.playerOnesTurn = !this.playerOnesTurn
                    }
                    else if(currentSign === "O"){
                        this.p2Pieces --
                        this.sqares[square] = " "
                    }
                }
            }
        },
        victory(){
            if (
                this.sqares[0] === "X" && this.sqares[1] === "X" && this.sqares[2] === "X" ||
                this.sqares[3] === "X" && this.sqares[4] === "X" && this.sqares[5] === "X" ||
                this.sqares[6] === "X" && this.sqares[7] === "X" && this.sqares[8] === "X" ||

                this.sqares[0] === "X" && this.sqares[3] === "X" && this.sqares[6] === "X" ||
                this.sqares[1] === "X" && this.sqares[4] === "X" && this.sqares[7] === "X" ||
                this.sqares[2] === "X" && this.sqares[5] === "X" && this.sqares[8] === "X" ||

                this.sqares[1] === "X" && this.sqares[4] === "X" && this.sqares[8] === "X" ||
                this.sqares[6] === "X" && this.sqares[4] === "X" && this.sqares[2] === "X"
            ){
                return this.playerOne
            }
            else if (
                this.sqares[0] === "O" && this.sqares[1] === "O" && this.sqares[2] === "O" ||
                this.sqares[3] === "O" && this.sqares[4] === "O" && this.sqares[5] === "O" ||
                this.sqares[6] === "O" && this.sqares[7] === "O" && this.sqares[8] === "O" ||

                this.sqares[0] === "O" && this.sqares[3] === "O" && this.sqares[6] === "O" ||
                this.sqares[1] === "O" && this.sqares[4] === "O" && this.sqares[7] === "O" ||
                this.sqares[2] === "O" && this.sqares[5] === "O" && this.sqares[8] === "O" ||

                this.sqares[1] === "O" && this.sqares[4] === "O" && this.sqares[8] === "O" ||
                this.sqares[6] === "O" && this.sqares[4] === "O" && this.sqares[2] === "O"
            ){
                return this.playerTwo
            }
            else {
                return null
            }
        }
    }
})