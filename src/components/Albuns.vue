<template>
    <div class=" h-115 overflow-visible">
      <!-- <h1 class="ml-9">Albuns</h1> -->
      <div class=" cursor-pointer mt-5 max-h-100 grid grid-cols-4 items-center overflow-auto justify-items-center">
        <div class="w-50 h-50 overflow-hidden">
          <div class="w-50 h-30 bg-gray-300"></div>
          <div class="flex mt-2 flex-col items-center">
            <a class="font-bold">Album 1</a>
            <a>Descrição album 1</a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex p-3 items-center justify-end">
      <div>
        <button class="p-3 justify-self-start rounded bg-blue-600 text-white">Adicionar Album</button>
      </div>
    </div>
</template>