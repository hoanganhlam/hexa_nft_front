<template>
  <div class="container mx-auto  py-32">
    <h1 class="text-6xl text-center mb-8">About us</h1>
    <p class="mb-4">Step Hero ecosystem is the perfect combination of NFT gaming and DeFi that enables users to have fun and earn profit simultaneously. The comprehensive ecosystem is made up of a fantasy-themed role-playing game with attractive gameplay, a cross-chained NFT marketplace, NFT collectibles, and HERO token. Moreover, Step Hero also provides a social network experience with a supportive community.</p>
    <p class="mb-4">Step Hero is developed by a dynamic young team passionate about blockchain in general and cryptocurrency in particular. They're game-lovers with the desire to recreate legendary characters of their childhood game in real life aligning with the 4.0 technology trend. Step Hero team took time to thoroughly study each character and create a creative NFT project, including a high liquidity marketplace and RPG game. Step Hero is the result of a proper working spirit with the world-class design of unique collectibles. The team’s ambition is to make Step Hero the best NFT game in the market.</p>
    <p class="mb-4">Step Hero team is an enthusiastic game studio established in early 2021 with various years of experience in blockchain generally and cryptocurrency particularly. Our team has 10 members with impressive backgrounds in different fields.</p>
    <div class="my-8">
      <h2 class="text-4xl">Teams</h2>
      <p class="mb-4 text-lg text-gray-500">The founding team consists of the following individuals</p>
      <div class="flex space-x-4 mb-4 border-b border-gray-700 pb-4 last:border-b-0 items-center" v-for="(item, i) in terms" :key="i">
        <div class="w-24 h-24 overflow-hidden rounded-full">
          <img :src="`/assets/Team/${item.title}.JPG`" :alt="item.title">
        </div>
        <div class="flex-1">
          <h3 class="text-xl"><span class="font-bold">{{item.title}}</span> — {{item.subtitle}}</h3>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
    <div class="my-8">
      <h2 class="text-4xl">Advisors</h2>
      <p class="mb-4 text-lg text-gray-500">Step Hero team is also backed by high-profile advisors who are experts in blockchain project consultancy startup. Their invaluable experience has provided our team with critical strategic guidance.</p>
      <div class="flex space-x-4 mb-4 border-b border-gray-700 pb-4 last:border-b-0 items-center" v-for="(item, i) in advisors" :key="i">
        <div class="w-24 h-24 overflow-hidden rounded-full">
          <img :src="`/assets/Team/${item.title.replace('Mr. ', '')}.png`" :alt="item.title">
        </div>
        <div class="flex-1">
          <h3 class="text-xl"><span class="font-bold">{{item.title}}</span> — {{item.subtitle}}</h3>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageAbout",
  data() {
    return {
      terms: [
        {
          title: "Garbriel Vu",
          subtitle: "Chief Executive Officer",
          desc: "Garbriel Vu is a tech-based business owner with over 10 years of experience in the e-commerce industry. He is the founder-CEO at Ligovi Ecom and the former CMO at Phat Media."
        },
        {
          title: "Lilly Nguyen",
          subtitle: "Chief Marketing Officer",
          desc: "Besides having a Master of International Marketing Management degree in the UK, Lilly Nguyen has 6 years of experience at high-profile businesses in Vietnam such as VidGo, Vingroup, Viettel Telecom and other Tech startups. She will take charge of growth hacking and creative roles."
        },
        {
          title: "Lucifer Nguyen",
          subtitle: "Chief Technology Officer",
          desc: "He is the founder of sPhoton Technology and Deverion. Moreover, he is a veteran software developer who has achieved prestigious programming awards, such as 1st prize of MSP Vietnam’s hackathon 2016 & 2nd prize of Vietnam National Imagine Cup 2015."
        },
        {
          title: "Stephen Dong",
          subtitle: "Technical Leader, Blockchain Engineer",
          desc: "He has over 8 years of experience working directly with large-scale clients and IT vendors, including 2 years in the blockchain area. He has brought Step Hero comprehensive technical architecture thanks to his skills and insights about decentralization protocol architecture, system scalability and security, and DeFi solutions."
        },
        {
          title: "Krillin Tao",
          subtitle: "Art & Game Director",
          desc: "Tao has 15 years of working experience in art communication and game design. He was one of the creators of the animation coloring application for kids participating in the Bluebird Award — the largest competition for game developers in Vietnam in 2016. In 2012, he won “Best game idea” award in Gamejam by FPT Arera Hanoi. This talented man is the founder of Skrollcat Studio — the development team of the phenomenal action-puzzle game “Hoa”. Hoa was the first made-in-Vietnam game ever debuted in both Steam and Nintendo Switch. His team’s extensive expertise in game design will contribute significantly to Step Hero’s novelistic gaming experience."
        }
      ],
      advisors: [
        {
          title: "Mr. Nam Nguyen",
          subtitle: "Advisor",
          desc: "Nam Nguyen is the CEO of Tagchain.io and the Founder of TAG Ventures, one of the top venture capital firms in South East Asia. He is also the CEO of Gourmet Galaxy (GUM), a famous Yield Farming platform. Mr. Nam advises us on system operation and new market entry strategy, which assists us in expanding market share and achieving sustainable development."
        },
        {
          title: "Mr. Thi Truong",
          subtitle: "Advisor",
          desc: "Mr. Thi has years of expertise in the blockchain space. His most successful initiative is PolkaFoundry, which was launched in 2018 to make the benefits of blockchain more accessible to the general public. He worked as a Software Engineer, then as a Solution Architect before being elevated to Director at FPT Corp. Following his departure from FPT, he worked as a Product Manager at Kyber Network, one of Asia’s most well-known blockchain projects initiatives. He advises us on the company growth strategy and roadmap."
        },
        {
          title: "Mr. Thanh Dao",
          subtitle: "Advisor",
          desc: "Mr. Thanh has been involving in cryptocurrencies since 2016 as a Bitcoin miner and investor. He got his MBA from UWIC and worked as a manager in Vingroup and later as the CTO of Nexty (a public chain project). In 2017, Thanh founded ezDeFi and launched various products. Thanh is currently CEO of ezDeFi and the project is reaching constant new growth."
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
