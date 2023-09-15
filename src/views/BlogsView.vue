<template>
    <q-layout>
        <q-header class="">Router</q-header>
    
        <q-page-container>
            <q-page>
    <q-card v-for="post in posts" :key="post.id" class="q-mb-md" style="background: rgb(110, 215, 192);">
        <q-card-section>
            <h4>{{ post.title }}</h4>
            <router-link :to="'/blogs/' + post.id">Read more</router-link>
        </q-card-section>
    </q-card>
    </q-page>
    </q-page-container>
    <q-footer class="row justify-center align-center">
        Copyright @2023
    </q-footer>
    </q-layout>

</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: []
        }
    },

    methods: {
        fetchPosts () {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            axios.get(url)
            .then(response => {
                this.posts = response.data
            })
        }
    },

    mounted () {
        this.fetchPosts()
    }
}
</script>