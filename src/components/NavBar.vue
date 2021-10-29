<template>
    <div class = "bg-green-400 item-center font-sans font-bold">
    <router-link class ="mx-2" to="/">Home</router-link> |
    <router-link class ="mx-2" to="/add">Add</router-link> |
    <router-link class ="mx-2" to="/about">About</router-link>
    </div>
</template>
<script>
export default {
    name:'NavBar'
}
</script>