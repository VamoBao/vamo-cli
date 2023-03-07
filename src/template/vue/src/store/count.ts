import {defineStore} from 'pinia'

export const useCount = defineStore('count',{
  state:() => {
    return {
      count:0
    }
  },
  getters:{
    double:(state):number => state.count*2
  },
  actions:{
    increment(){
      this.count++
    },
    incrementAny(number:number){
      this.count = this.count+ number
    }
  }
})