<script>
    import Pricingtable from "$lib/Pricingtable.svelte";
</script>



<div class="bg-white z-10 p-2 rounded-t-2xl">
  <div class="flex flex-row p-5 bg-blue-300 rounded-t-2xl">
    <h1 class ="text-3xl font-bold text-gray-800 " > Your Current plan</h1>
  </div>  

 <div class=" p-12 flex flex-col md:flex-row justify-start items-center space-y-9 md:space-y-0  md:space-x-9">    
        
 <!-- Pricing Card 1 -->
 <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
    <div class="p-1 bg-blue-200">
    </div>
    <div class="p-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Basic Plan</h2>
      <p class="text-gray-600 mb-6">Ideal for small businesses</p>
      <p class="text-4xl font-bold text-gray-800 mb-6">$19.99</p>
      <ul class="text-sm text-gray-600 mb-6">
        <li class="mb-2 flex items-center">
          <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 13l4 4L19 7"></path>
          </svg>
          10 Users
        </li>
        <li class="mb-2 flex items-center">
          <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 13l4 4L19 7"></path>
          </svg>
          Basic Features
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 13l4 4L19 7"></path>
          </svg>
          24/7 Support
        </li>
      </ul>
    </div>
    <div class="p-4">
      <button
        class="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Select Plan
      </button>
    </div>
  </div>
<!-- Pricing Card 1 -->

    

</div>



</div>

<div class="bg-white z-10 p-2  mb-24">
  <div class="flex flex-row p-5 bg-blue-300 rounded-t-2xl">
    <h1 class ="text-3xl font-bold text-gray-800 " > Available plans</h1>
  </div>

<!--div class="flex-grow items-stretch	bg-yellow-300 pb-36"-->
<div class="bg-yellow-300 p-12  flex flex-col md:flex-row justify-start items-center space-y-9 md:space-y-0  md:space-x-9">    
  
<Pricingtable />
 
</div>
</div>
