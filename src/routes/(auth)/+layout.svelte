<script lang="ts">
	import { onMount } from 'svelte';
	import { session } from '$lib/authstore';
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { auth } from '$lib/firebase.client';

	//import type { LayoutData } from './$types';
	export let data;

	let loading: boolean = true;
	let loggedIn: boolean = false;

	session.subscribe((cur: any) => {
		loading = cur?.loading;
		loggedIn = cur?.loggedIn;
	});

	onMount(async () => {
		const user: any = await data.getAuthUser();

		const loggedIn = !!user && user?.emailVerified;
		session.update((cur: any) => {
			loading = false;
			return {
				...cur,
				user,
				loggedIn,
				loading: false
			};
		});

		if (loggedIn) {
			goto('/dashboard');
		}
	});

	export function logout() {
		signOut(auth)
			.then(() => {
				goto('/');
				loggedIn = false;
			})
			.catch((error) => {
				throw new Error(error);
			});
	}
</script>

<slot />