<script setup>
import Bar from '../components/bar.vue'
// const a = ref(20)
// const inc = () => a.value++

const counter = counterStore()  
</script>

<template>
    <button @click="counter.inc()">{{counter.num}}</button>
    <Bar></Bar>
</template>