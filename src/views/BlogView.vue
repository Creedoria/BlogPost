<template>
    <div>
    <q-layout class="q-mx-lg q-my-lg">
        <q-header class=" row q-mb-lg"   >
            <div class="row">
            <img  src="../images/logo_1.jpg"/>     
        </div>
            <div class="q-pl-xl row justify-center"><h1 class="text-h3 q-pt-sm" style="color:white">Blog Post</h1></div>
        </q-header>
        <q-page-container style="background: #fbfcfc;" class="">
        <div class="row q-mt-xl" style="">
            <p class="text-h6"><span class="text-h5">Title :</span>{{ post?.title }}</p>
       <p class="text-h6 "><span class="text-h6 text-bold">Body:</span>{{ post?.body }}</p>
       <div class="row justify-center">
             <p class="text-h6"><span class="text-h5">Post by:</span>{{ userDetails?.name }}</p> </div>
            </div>
             <!-- Commnet Lists -->
             <div style="background:#cbdbcf">
            <h6 class="row  justify-center q-pt-lg">Comments</h6>
            <div class="q-mb-xl q-pb-lg" v-for="comment in comments" :key="comment.id">     
               <q-chat-message
                name="SomeBody"
                :avatar='temp_url'
                :text="[comment.body]"
               />
            </div>
            </div>
            </q-page-container>
            <q-footer>
                <div class="q-pt-md">
              <p class="row  justify-center ">Copyright © 2023</p>
                </div>
            </q-footer>
     </q-layout>
    </div>
</template>


<script>
import axios from 'axios'
// import blogImage from '../images'
import web from '../images/logo_2.jpg'
export default {
    data () {
        return {
            post: null,
            userDetails: null,
            comments: [],
            comment: '',
            temp_url:web,
        }
    },

    methods: {
        async fetchPost(postId) {
            const url = 'https://jsonplaceholder.typicode.com/posts/' + postId 
            const response = await axios.get(url)
            this.post = response.data
            // await this.fetchComments(this.postId);
        },

        async fetchUserDetails (userId) {
            const url = 'https://jsonplaceholder.typicode.com/users/' + userId
            const response = await axios.get(url)
            this.userDetails = response.data
        },

        async fetchComments(id)
        {
                const url = 'https://jsonplaceholder.typicode.com/comments/?postId=' +id
                const response = await axios.get(url);
            this.comments = response.data;
            // console.log(this.comments);
           
        },
        addShadow()
        {
            this.$el.style.boxShadow = '0 0 10px black';
        }
    },

    async mounted () {
        // Fetch Post details and comments details
        const postId = this.$route.params.id
        await this.fetchPost(postId);
        await this.fetchComments(postId);

        // Fetch User details
        const userId = this.post.userId
        await this.fetchUserDetails(userId)
 


    }
}
</script>