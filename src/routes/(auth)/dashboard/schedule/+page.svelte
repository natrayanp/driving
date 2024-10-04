
<div class="bg-white p-5 rounded-xl mb-24">
<!-- component -->
<div class="lg:flex lg:h-full lg:flex-col ">
    <header class="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none bg-blue-200 pb-5 rounded-t-xl">
      <h1 class="text-base font-semibold leading-6 text-gray-900">
        <time datetime="2022-01">January 2022</time>
      </h1>
      <div class="flex items-center">
        <div class="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
          <button type="button" class="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50">
            <span class="sr-only">Previous month</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
          </button>
          <button type="button" class="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block">Today</button>
          <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
          <button type="button" class="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50">
            <span class="sr-only">Next month</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
  
        <div class="hidden md:ml-4 md:flex md:items-center">
  <!-- nat added
          <div class="relative">
            <button type="button" class="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
              Month view
              <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
      nat added-->
            <!--
              Dropdown menu, show/hide based on menu state.
  
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
    <!-- nat added            
            <div class="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">nat added-->
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
         <!-- nat added         <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Day view</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Week view</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Month view</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Year view</a>
              </div>
            </div>
            
          </div>
        nat added-->  
          <div class="ml-6 h-6 w-px bg-gray-300"></div>
          <button type="button" class="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Add event</button>
        
        </div>
        
        <div class="relative ml-6 md:hidden">
          <button type="button" class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500" id="menu-0-button" aria-expanded="false" aria-haspopup="true">
            <span class="sr-only">Open menu</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          </button>
  
          <!--
            Dropdown menu, show/hide based on menu state.
  
            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->

          
          <div class="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
            <div class="py-1" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0">Create event</a>
            </div>
            <div class="py-1" role="none">
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1">Go to today</a>
            </div>
            
            <div class="py-1" role="none">
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2">Day view</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-3">Week view</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-4">Month view</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-5">Year view</a>
            </div>
          
          </div>
          
        </div>
      </div>
    </header>


<div>
  


  <div class="custom-number-input h-10 w-32">
    
    <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Counter Input
    </label>
    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
      <button data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
        <span class="m-auto text-2xl font-thin">−</span>
      </button>
      <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0">
    <button data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
      <span class="m-auto text-2xl font-thin">+</span>
    </button>
  </div> 

</div>







  
</div>




    <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
      <div class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
        <div class="flex justify-center bg-white py-2">
          <span>M</span>
          <span class="sr-only sm:not-sr-only">on</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>T</span>
          <span class="sr-only sm:not-sr-only">ue</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>W</span>
          <span class="sr-only sm:not-sr-only">ed</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>T</span>
          <span class="sr-only sm:not-sr-only">hu</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>F</span>
          <span class="sr-only sm:not-sr-only">ri</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>S</span>
          <span class="sr-only sm:not-sr-only">at</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>S</span>
          <span class="sr-only sm:not-sr-only">un</span>
        </div>
      </div>
      <div class="relative flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
        <div class=" hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
          <!--
            Always include: "relative py-2 px-3"
            Is current month, include: "bg-white"
            Is not current month, include: "bg-gray-50 text-gray-500"
          -->
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <!--
              Is today, include: "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
            -->
            <time datetime="2021-12-27">27</time>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2021-12-28">28</time>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2021-12-29">29</time>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2021-12-30">30</time>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2021-12-31">31</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-01">1</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-01">2</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-03">3</time>
            <ol class="mt-2">
              <li>
                <a href="#" class="group flex">
                  <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Design review</p>
                  <time datetime="2022-01-03T10:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">10AM</time>
                </a>
              </li>
              <li>
                <a href="#" class="group flex">
                  <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Sales meeting</p>
                  <time datetime="2022-01-03T14:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">2PM</time>
                </a>
              </li>
            </ol>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-04">4</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-05">5</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-06">6</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-07">7</time>
            <ol class="mt-2">
              <li>
                <a href="#" class="group flex">
                  <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Date night</p>
                  <time datetime="2022-01-08T18:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">6PM</time>
                </a>
              </li>
            </ol>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-08">8</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-09">9</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-10">10</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-11">11</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-12" class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">12</time>
            <ol class="mt-2">
              <li>
                <a href="#" class="group flex">
                  <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Sam's birthday party</p>
                  <time datetime="2022-01-25T14:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">2PM</time>
                  
                </a>
              </li>
            
            
            
              <li>
              <a href="#" class="group flex">
                <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Sam's birthday party</p>                
                <time class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">8AM</time>
              </a>
            </li>


            </ol>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-13">13</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-14">14</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-15">15</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-16">16</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-17">17</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-18">18</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-19">19</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-20">20</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-21">21</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-22">22</time>
            <ol class="mt-2">
              <li>
                <a href="#" class="group flex">
                  <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Maple syrup museum</p>
                  <time datetime="2022-01-22T15:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">3PM</time>
                </a>
              </li>
              <li>
                <a href="#" class="group flex">
                  <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Hockey game</p>
                  <time datetime="2022-01-22T19:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">7PM</time>
                </a>
              </li>
            </ol>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-23">23</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-24">24</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-25">25</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-26">26</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-27">27</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-28">28</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-29">29</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-30">30</time>
          </div>
          <div class=" bg-white px-3 py-2">
            <time datetime="2022-01-31">31</time>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2022-02-01">1</time>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2022-02-02">2</time>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2022-02-03">3</time>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2022-02-04">4</time>
            <ol class="mt-2">
              <li>
                <a href="#" class="group flex">
                  <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Cinema with friends</p>
                  <time datetime="2022-02-04T21:00" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">9PM</time>
                </a>
              </li>
            </ol>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2022-02-05">5</time>
          </div>
          <div class=" bg-gray-50 px-3 py-2 text-gray-500">
            <time datetime="2022-02-06">6</time>
          </div>
        </div>

        <!-- Example of how to spread the booking multiple day-->
        <div class="absolute inset-0 w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
          <div class="col-start-3 col-end-8 row-start-5 flex items-end p-1">
            <div class="h-8 w-full rounded-lg bg-red-500 text-2xl">This is your event</div>
          </div>  
          <div class="col-start-1 col-end-3 row-start-6 flex items-end p-1">
            <div class="h-8 w-full rounded-lg bg-red-500 text-right text-2xl">.. Which spans till here</div>
          </div>
        </div>
        <!-- Example of how to spread the booking multiple day-->

        <div class="absolute inset-0 h-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px ">
          <div class="col-start-3  row-start-1  row-end-3 flex  p-0.5 ml-7 ">
            <div class="h-full w-full  bg-red-500 text-2xl">This is your event</div>
          </div>  

        </div>




        
        <div class="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
          <!--
            Always include: "flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10"
            Is current month, include: "bg-white"
            Is not current month, include: "bg-gray-50"
            Is selected or is today, include: "font-semibold"
            Is selected, include: "text-white"
            Is not selected and is today, include: "text-indigo-600"
            Is not selected and is current month, and is not today, include: "text-gray-900"
            Is not selected, is not current month, and is not today: "text-gray-500"
          -->
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <!--
              Always include: "ml-auto"
              Is selected, include: "flex h-6 w-6 items-center justify-center rounded-full"
              Is selected and is today, include: "bg-indigo-600"
              Is selected and is not today, include: "bg-gray-900"
            -->
            <time datetime="2021-12-27" class="ml-auto">27</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2021-12-28" class="ml-auto">28</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2021-12-29" class="ml-auto">29</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2021-12-30" class="ml-auto">30</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2021-12-31" class="ml-auto">31</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-01" class="ml-auto">1</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-02" class="ml-auto">2</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-03" class="ml-auto">3</time>
            <span class="sr-only">2 events</span>
            <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
              <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
              <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
            </span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-04" class="ml-auto">4</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-05" class="ml-auto">5</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-06" class="ml-auto">6</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-07" class="ml-auto">7</time>
            <span class="sr-only">1 event</span>
            <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
              <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
            </span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-08" class="ml-auto">8</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-09" class="ml-auto">9</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-10" class="ml-auto">10</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-11" class="ml-auto">11</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-12" class="ml-auto">12</time>
            <span class="sr-only">1 event</span>
            <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
              <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
            </span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-13" class="ml-auto">13</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-14" class="ml-auto">14</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-15" class="ml-auto">15</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-16" class="ml-auto">16</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-17" class="ml-auto">17</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-18" class="ml-auto">18</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-19" class="ml-auto">19</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-20" class="ml-auto">20</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-21" class="ml-auto">21</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 font-semibold text-white hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-22" class="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900">22</time>
            <span class="sr-only">2 events</span>
            <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
              <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
              <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
            </span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-23" class="ml-auto">23</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-24" class="ml-auto">24</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-25" class="ml-auto">25</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-26" class="ml-auto">26</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-27" class="ml-auto">27</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-28" class="ml-auto">28</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-29" class="ml-auto">29</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-30" class="ml-auto">30</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-01-31" class="ml-auto">31</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-02-01" class="ml-auto">1</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-02-02" class="ml-auto">2</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-02-03" class="ml-auto">3</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-02-04" class="ml-auto">4</time>
            <span class="sr-only">1 event</span>
            <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
              <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
            </span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-02-05" class="ml-auto">5</time>
            <span class="sr-only">0 events</span>
          </button>
          <button type="button" class="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
            <time datetime="2022-02-06" class="ml-auto">6</time>
            <span class="sr-only">0 events</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class = "flex h-full flex-col pt-5 space-y-4">
    <h1 class="text-xl font-semibold leading-6 text-gray-900">Schedules</h1>
    
    <div class ="flex flex-col lg:flex-row ">
      <div class="basis-auto bg-green-100 px-5 pt-2">
        <span class="inline-flex justify-center items-center ml-4 ">
          <svg class="w-4 h-4 mr-2 text-blue-500" viewBox="0 0 448 512" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z">                  
          </path>
        </svg>
        <h1>05-Oct-2024</h1>        
      </span>

        
      </div>

      <div class="grow bg-blue-100 p-2 px-5">
        <h1>kdkdk</h1>
      </div>
    </div>
    
    <div class ="flex flex-row">
      <div class="basis-auto bg-green-100 px-5 pt-2">
        <h1>kdkdk</h1>
        
      </div>

      <div class="grow bg-blue-100 p-2">
        <h1>kdkdk</h1>
        <h1>kdkdk</h1>
        <h1>kdkdk</h1>
      </div>
    </div>




  </div>


</div>

<!--https://shuffle.dev/components/tailwind/all/reviews?page=2-->