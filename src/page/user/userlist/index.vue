<template>
    <div>{{state.name}}</div>
</template>
<script setup>
import { reactive } from "vue";


const state = reactive({
    name:"userlist"
})
</script>
 