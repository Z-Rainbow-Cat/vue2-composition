<template>
    <div>{{userinfo}}</div>
</template>
<script setup>
    import {ref} from "vue"
    const userinfo = ref("zhouyongli")
    const obj ={ a:1 ,b:2 } 
    console.log(obj)
</script>
