<script lang="ts">
	import { goto } from '$app/navigation';
    import { session } from '$lib/authstore.js';
    import { logout } from '$lib/firebase.client';
	import Headernav from '$lib/Headernav.svelte';
    import { page } from '$app/stores';

    
	let loading: boolean = true;
	let loggedIn: boolean = false;
    let current = 'Dashboard';
let myactive = "bg-blue-800 border-blue-500 flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6";
let myinactive = "flex flex-row items-center h-11 focus:outline-none hover:bg-blue-300 dark:hover:bg-gray-600 text-black hover:text-blue-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6";

    console.log('inside dashboard'+loggedIn);

    const links = [
        { name: 'Dashboard', path: '/dashboard', count:1, svgpath:'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'},
        { name: 'Package', path: '/dashboard/package',count:0, svgpath:"M15 17C15 15.343 13.657 14 12 14M12 14C10.343 14 9 15.343 9 17C9 18.657 10.343 20 12 20C13.657 20 15 21.343 15 23C15 24.657 13.657 26 12 26M12 14V13M12 26C10.343 26 9 24.657 9 23M12 26V27M22 31H31V29M25 26H31V24M26 21H31V19M26 16H31V14M23 11H31V9M10 6H31V1H7V6M23 20C23 13.926 18.074 9 12 9C5.926 9 1 13.926 1 20C1 26.074 5.926 31 12 31C18.074 31 23 26.074 23 20Z"},
        { name: 'Schedule', path: '/dashboard/schedule', count:null, svgpath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"},
        { name: 'Important', path: '/important', count:null, svgpath: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"},
        { name: 'Drafts', path: '/drafts', count:null, svgpath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},
        { name: 'Spam', path: '/spam', count:null, svgpath: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},
        { name: 'Trash', path: '/trash', count:null, svgpath: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},
    ];
    



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

    function actives(lis: string){
        current = lis;        
        console.log(myactive);
    }

  


</script>



{#if loading}
	<div>Loading...</div>
{:else}


<div class="flex flex-col bg-red-800 h-screen flex-1  overflow-y-hidden">
    <div >
        <Headernav />
    </div>
    
    


    <div class="flex flex-row h-full  ">

     
                
 <!-- Sidebar -->
 <div class=" flex flex-col top-18 left-0 w-14 hover:w-64 md:w-64 bg-white shadow-xl rounded-lg dark:bg-gray-900 text-white transition-all duration-300  border-none z-10  ">

    <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
 
 
 
        <div class="pt-4 pb-8">
            <ul class="space-y-2">


                {#each links as link}
        
                <li>
                                <a href= {link.path} class='{$page.url.pathname === link.path?myactive:myinactive}' >
                                  <span class="inline-flex justify-center items-center ml-4">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d= {link.svgpath}></path>
                                    </svg>
                                  </span>
                                  <span class="ml-2 text-m tracking-wide truncate">{link.name}</span>
                                {#if link.count!=null}
                                  <span class="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg ml-auto">{link.count}</span>
                                {/if}
                    </li>
            
            
                {/each}

<!--

              



  



-->
            </ul>
        </div>
 
 
 
 
    </div>
  </div>
  <!-- ./Sidebar -->
         


            <div class ="grow p-6 items-stretch bg-red-300 flex-1 overflow-y-auto ">
                <div class=" flex flex-col ">                    
                    <slot />
                </div>
            </div>

        </div>
    </div>



{/if}
