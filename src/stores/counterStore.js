import { defineStore } from "pinia"

export default defineStore('counter',{
    // state(){
    //     return{
    //         num: 1
    //     }
    // },
    state: () =>({
        num:1
    }),
    getters:{

    },
    actions:{
        inc(){
            this.num++
        }
    }
})