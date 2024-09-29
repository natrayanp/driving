<script lang="ts">
	import { goto } from '$app/navigation';
    import { session } from '$lib/authstore.js';
    import { logout } from '$lib/firebase.client';

	let loading: boolean = true;
	let loggedIn: boolean = false;

    console.log('inside dashboard'+loggedIn);
    
    session.subscribe((cur: any) => {
        console.log('inside sub');
        console.log(loggedIn);
		loading = cur?.loading;
		loggedIn = cur?.loggedIn;
        console.log(loggedIn);
        if(!loggedIn){
            console.log('inside false');
            goto('/login');
        }
	});

    async function logmeout() {
        await logout();
    }
  

</script>



    {#if loading}
	<div>Loading...</div>
{:else}
	<div>


		<div>
			{#if loggedIn}
				<button on:click={logmeout}>Logout</button>
			{:else}
				<a href="/login"> Login</a>
			{/if}
		</div>
		<slot />
	</div>
{/if}
