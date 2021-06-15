<template>
  <div>
    <section class="py-44 md:h-screen">
      <div class="px-6 md:px-0 container h-full flex flex-col items-center justify-center mx-auto">
        <div class="mb-12 container xs text-center">
          <h2 class="text-5xl mb-8 font-bold">
            <span>StepHero</span>
            <br>
            <span>Tokenomics</span>
          </h2>
          <p class="text-gray-400 text-xl mb-4">HERO token is the platform of sharing profits and governancing tokens. The total supply is fixed at 500 million tokens.</p>
        </div>
        <div class="w-full flex flex-col md:flex-row flex-wrap -mx-4">
          <div class="md:px-4 mb-8 md:w-1/3">
            <div class="flex flex-col p-4 border rounded-lg bg-gray-800 border-gray-700">
              <div class="mb-4">
                <div class="mx-auto p-4 flex justify-center items-center rounded-full w-24 h-24 lg"
                     :style="{background: '#3772FF'}">
                  <img src="/assets/Icons/Icon/Box.svg" alt="">
                </div>
              </div>
              <div class="text-center">
                <h4 class="mb-2 font-bold text-xl">100M</h4>
                <span class="text-gray-400">Total Suply</span>
              </div>
            </div>
          </div>
          <div class="md:px-4 mb-8 md:w-1/3">
            <div class="flex flex-col p-4 border rounded-lg bg-gray-800 border-gray-700">
              <div class="mb-4">
                <div class="mx-auto p-4 flex justify-center items-center rounded-full w-24 h-24 lg"
                     :style="{background: '#EF466F'}">
                  <img src="/assets/Icons/Icon/Money.svg" alt="">
                </div>
              </div>
              <div class="text-center">
                <h4 class="mb-2 font-bold text-xl">5.25M</h4>
                <span class="text-gray-400">Initial Circulating Supply</span>
              </div>
            </div>
          </div>
          <div class="md:px-4 mb-8 md:w-1/3">
            <div class="flex flex-col p-4 border rounded-lg bg-gray-800 border-gray-700">
              <div class="mb-4">
                <div class="mx-auto p-4 flex justify-center items-center rounded-full w-24 h-24 lg"
                     :style="{background: 'rgb(68 178 107)'}">
                  <img src="/assets/Icons/Icon/Pancakeswap.png" alt="">
                </div>
              </div>
              <div class="text-center">
                <h4 class="mb-2 font-bold text-xl">$0.1</h4>
                <span class="text-gray-400">Pancakeswap Listing Price</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 md:h-screen">
      <div class="px-6 md:px-0 container mb-20 text-center xs mx-auto">
        <h2 class="text-5xl mb-8">Token Distribution</h2>
        <p class="text-xl text-gray-400 mb-6">Information about the HERO token distribution.</p>
      </div>
      <div class="px-6 md:px-0 container mx-auto md:flex md:flex-row items-center justify-center">
        <div v-if="false" class="md:w-2/5 mb-8 md:md-0">
          <ul>
            <li class="mb-3 flex space-x-2">
              <icon name="plus"></icon>
              <span>20% (Approximately 100 million tokens) for private sale: 15% on TGE, linear vesting  weekly unlock after 1 month listing. Sale price: $0.015.</span>
            </li>
            <li class="mb-3 flex space-x-2">
              <icon name="plus"></icon>
              <span>5% (Approximately 25 million tokens) for public sale. Sale price: $0.02.</span>
            </li>
            <li class="mb-3 flex space-x-2">
              <icon name="plus"></icon>
              <span>5% (Approximately 15 million tokens) for advisors. 6 months locked.10% monthly unlock.</span>
            </li>
            <li class="mb-3 flex space-x-2">
              <icon name="plus"></icon>
              <span>15% (Approximately 167 million tokens) for the team. 1 year locked, 10% monthly unlock.</span>
            </li>
            <li class="mb-3 flex space-x-2">
              <icon name="plus"></icon>
              <span>10% (Approximately 50 million tokens) for foundation reserve: 6 months locked, 10% monthly.</span>
            </li>
            <li class="mb-3 flex space-x-2">
              <icon name="plus"></icon>
              <span>10% (Approximately 50 million tokens) for Marketing & business development:15% in the first week, 5% monthly unlock.</span>
            </li>
            <li class="mb-3 flex space-x-2">
              <icon name="plus"></icon>
              <span>30% (Approximately 150 million tokens) Liquidity tokens: 10% will be distributed before listing, then annual vesting monthly.</span>
            </li>
          </ul>
        </div>
        <div class="md:w-1/2 text-center">
          <div class="flex justify-center mb-6">
            <client-only>
              <chart :data="distributions"/>
            </client-only>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 md:h-screen">
      <div class="px-6 md:px-0 container mb-20 text-center xs mx-auto">
        <h2 class="text-5xl mb-8">HERO Token Usage</h2>
        <p class="text-xl text-gray-400 mb-6">Find out how the funding is used.</p>
      </div>
      <div class="px-6 md:px-0 container mx-auto md:flex md:flex-row items-center">
        <div class="md:w-2/5 mb-8 md:md-0">
          <client-only>
            <chart :data="usages"/>
          </client-only>
        </div>
        <div class="flex-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div :style="{background: '#23262F'}" class="flex p-4">
              <div class="p-6 rounded-full" style="background: #3772FF"></div>
              <span class="ml-3">35% Provide liquidity to exchanges</span>
            </div>
            <div :style="{background: '#23262F'}" class="flex p-4">
              <div class="p-6 rounded-full" style="background: #EF466F"></div>
              <span class="ml-3">35% Development</span>
            </div>
            <div :style="{background: '#23262F'}" class="flex p-4">
              <div class="p-6 h-12 rounded-full" style="background: #45B26B"></div>
              <span class="ml-3">5% Legal and Accountancy</span>
            </div>
            <div :style="{background: '#23262F'}" class="flex p-4">
              <div class="p-6 h-12 rounded-full" style="background: #9757D7"></div>
              <span class="ml-3">25% Operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SVGIcon from "@/components/Icon.vue";

export default {
  name: "PageToken",
  components: {icon: SVGIcon},
  data() {
    return {
      usages: [
        {l: 'Development', v: 35, c: '#EF466F'},
        {l: 'Provide liquidity to exchanges', v: 35, c: '#3772FF'},
        {l: 'Operations', v: 25, c: '#9757D7'},
        {l: 'Legal and Accountancy', v: 5, c: '#45B26B'}
        ],
      distributions: [
        {l: 'Foundation Reserve', v: 10, c: '#FFC848'},
        {l: 'Seed', v: 5, c: '#9757D7'},
        {l: 'Private', v: 15, c: '#45B26B'},
        {l: 'Public', v: 2.5, c: '#EF466F'},
        {l: 'Liquidity', v: 20, c: '#3772fe'},
        {l: 'Marketing', v: 15, c: '#1642ac'},
        {l: 'Game Incentives', v: 17.5, c: '#ac188c'},
        {l: 'Team', v: 10, c: '#78c436'},
        {l: 'Advisors', v: 5, c: '#56440d'},
      ],
    }
  }
}
</script>

<style scoped>

</style>
