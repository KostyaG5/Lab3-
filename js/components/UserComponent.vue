<template>
   <div>
      <h3>{{user.name}}</h3>
	   <button class="btn btn-link" v-on:click="makeRemove()">remove</button>
   </div>
</template>

<script>
  export default {
    data: function() {
      return {
         user: {		   			
		     name: '',
           indexOriginal: null,		   
		   },
      }
    },  
	mounted() {
      this.getUser();   
	},  	
	methods: {	
		getUser() {
			let app = this;

         console.log(app.$route.params.id);

			let user = JSON.parse(localStorage.users).filter((user, index) => index == app.$route.params.id);
		 
			console.log(user);

			app.user = user[0];
		},	

      makeRemove() {
			let app = this;
	
			console.log(app.user.indexOriginal);	
	
			let users = JSON.parse(localStorage.users);
	
			users.splice(app.user.indexOriginal, 1); 
		 
			users.map(function(user, index) {
			   user.indexOriginal = index;
			});
		 
			localStorage.users = JSON.stringify(users);
		 
			app.$router.push({ name: 'MainComponent', params: { users: localStorage.users } });
      }
	}
 };
 </script>