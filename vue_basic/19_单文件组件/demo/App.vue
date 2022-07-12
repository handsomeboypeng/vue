<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
import School from '../demo/School.vue'
import Student from '../demo/Student.vue'
export default {
    name:'App',
    components: { 
        School,
        Student },

    }
</script>
