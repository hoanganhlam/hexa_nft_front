<template>
  <div>
    <section id="s1" class="h-screen pt-12 bg-gray-50 dark:bg-gray-900 relative">
      <div class="container px-6 md:px-0 flex flex-col mx-auto">
        <div class="flex-1 flex md:-mx-4 items-center">
          <div class="px-4 md:w-1/2">
            <h1 class="mb-8 font-bold text-5xl">{{ s1.title }}</h1>
            <p class="mb-12 text-gray-300">Put your $HEXA to work and collect HERO Cards that you can truly own.</p>
            <div class="flex flex-col md:flex-row -mx-2">
              <div class="mx-2">
                <a href="#about" class="btn-primary justify-center w-full md:w-auto mb-4 md:mb-0">About us</a>
              </div>
              <div class="mx-2">
                <a target="_blank" href="https://gokuball.medium.com/gokuball-on-the-nft-market-469f4d804605"
                   class="btn-secondary justify-center mb-4 md:mb-0">What is HERO</a>
              </div>
              <div class="mx-2">
                <a target="_blank" href="https://whitepaper.gokuball.com/" class="btn-secondary justify-center">White
                  Paper</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="false" id="s2" class="py-16 border-b md:border-b-0 dark:border-gray-700">
      <div class="container px-6 md:px-0 mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-center md:text-left mb-6 md:mb-0">
            <h4 class="text-3xl md:text-xl font-bold text-red-600">Supported by</h4>
            <p class="text-gray-300 text-lg">Leading brands</p>
          </div>
          <div class="flex flex-col md:flex-row md:-mx-2">
            <div class="mx-2">
              <img class="w-64 object-cover" src="/coingecko.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="s3" class="py-16 border-b md:border-b-0 dark:border-gray-700">
      <div class="container px-6 md:px-0 mx-auto">
        <div class="container mx-auto xs text-center mb-24">
          <span class="text-red-600 uppercase">Project</span>
          <h2 class="text-5xl mt-4 mb-8 font-medium">{{ s3.title }}</h2>
          <p class="text-gray-300">HERO Card is a collection of animated digital characters with varying scarcities.
            Each HERO Card is backed by a truly unique NFT and can be unpacked with <b class="text-white">Ball
              Points</b>.</p>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div v-for="(item, i) in s3.arr" class="px-4 mb-4 md:mb-8 md:w-1/3">
            <div class="p-6 rounded h-full" style="background: #23262F">
              <div class="w-10 mb-4">
                <img class="" :src="`/assets/Icons/Homepage/${i + 1}.png`" alt="">
              </div>
              <h4 class="mb-4 font-medium">{{ item.title }}</h4>
              <p class="text-gray-300">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="s4" class="py-16 border-b md:border-b-0 dark:border-gray-700">
      <div class="container px-6 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div class="mb-16 md:mb-0 text-center md:text-left">
          <span class="text-red-600 uppercase">Heroes collections</span>
          <h2 class="text-5xl font-medium mt-4 mb-8">{{ s4.title }}</h2>
          <p class="text-gray-300 mb-12">{{ s4.desc }}</p>
          <n-link to="/characters/genesis" class="btn-primary">Heroes Collection</n-link>
        </div>
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div class="cursor-pointer">
              <video muted loop autoplay playsinline :id="`video_0`" class="rounded-tl rounded-tr">
                <source src="https://ipfs.io/ipfs/QmbnsmucLYq8c2oXE3PBKiNdYbYT7PS8YNeMQ3iVnrVapY">
              </video>
              <div class="p-4 flex justify-center">
                <n-link to="/characters/genesis" class="btn-secondary sm">Heroes</n-link>
              </div>
            </div>
            <div class="cursor-pointer">
              <video muted loop autoplay playsinline :id="`video_1`" class="rounded-tl rounded-tr">
                <source src="https://ipfs.io/ipfs/QmaqMWBpgPQ5a7Z2sWTkbfjn3oTV2RwVS85rM6QJoyrvY2">
              </video>
              <div class="p-4 flex justify-center">
                <n-link to="/characters/lp_genesis" class="btn-secondary sm">Heroes LP</n-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="s5" class="py-16 border-b md:border-b-0 dark:border-gray-700">
      <div class="container sm px-6 md:px-0 mx-auto">
        <div class="container text-center xs mx-auto">
          <h2 class="text-3xl md:text-5xl font-medium mt-4 mb-8">{{ s5.title }}</h2>
          <p class="text-gray-300 mb-20">{{ s5.desc }}</p>
        </div>
        <div class="mb-6">
          <div class="mb-3 pb-3 border-b border-gray-700 cursor-pointer" v-for="(item, i) in s5.arr" :key="i">
            <div class="py-4 py-3 space-x-4 flex items-center justify-between w-full cursor-pointer"
                 @click="item.active = !item.active">
              <img :src="`/assets/Icons/Homepage/icon-${i}.png`" alt="">
              <span class="flex-1 font-bold">{{ item.title }}</span>
              <span class="rounded-full h-7 bg-red-600 shadow-sm shadow-inner p-1.5">
                <icon :name="item.active ? 'down': 'right'"/>
              </span>
            </div>
            <transition name="fade">
              <div v-if="item.active" class="content text-gray-400 pb-4">{{ item.desc }}</div>
            </transition>
          </div>
        </div>
      </div>
    </section>
    <section id="s6" class="py-16 border-b md:border-b-0 dark:border-gray-700">
      <div class="container px-6 md:px-0 mx-auto">
        <div class="mb-20 text-center">
          <span class="text-red-600 uppercase">Roadmap</span>
          <h2 class="text-3xl md:text-5xl mb-4 font-medium mt-4 mb-8">{{ s6.title }}</h2>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div v-for="(item, i) in s6.arr" :key="i" class="px-4 mb-4 md:mb-8 md:w-1/4">
            <div class="flex flex-col p-6 h-full" style="background: #23262F;">
              <span
                :style="{'background': item.color}"
                class="text-sm rounded rounded-full w-8 flex justify-center items-center h-8 font-bold">{{
                  i + 1
                }}</span>
              <div class="mt-2">
                <h4 class="mb-2">{{ item.title }}</h4>
                <p class="text-gray-400">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="py-16 border-b md:border-b-0 dark:border-gray-700">
      <div class="container px-6 md:px-0 mx-auto">
        <h4 class="text-red-600 uppercase text-center mb-8">About us</h4>
        <div class="mb-20">
          <h2 class="text-3xl text-center md:text-5xl mb-4 font-medium mt-4 mb-8">Our team</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(item, i) in s7.teams" :key="i">
              <div class="flex flex-col p-6 h-full" style="background: #23262F;">
                <div class="flex justify-center">
                  <div class="w-3/5">
                    <div class="rounded-1by1 mb-4">
                      <img class="object-contain" :src="`/assets/Team/${item.name}.png`" alt="">
                    </div>
                    <a v-if="item.link" :href="item.link" target="_blank">
                      <icon class="md" name="linkedin"></icon>
                    </a>
                  </div>
                </div>
                <div class="mt-2">
                  <h3 class="mb-2 font-bold text-lg">{{ item.name }}</h3>
                  <hr class="mb-2 border-gray-700">
                  <h4 class="mb-2">{{ item.title }}</h4>
                  <div class="text-gray-400 text-sm" v-html="item.bio"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-20 text-center">
          <div class="flex flex-wrap -mx-4 justify-center">
            <div class="px-4 mb-4 md:mb-8 md:w-2/3 flex flex-col">
              <h2 class="text-3xl md:text-5xl mb-4 font-medium mt-4 mb-8">Advisor</h2>
              <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="(item, i) in s7.advisors" :key="i">
                  <div class="flex flex-col p-6 h-full" style="background: #23262F;">
                    <div class="flex justify-center">
                      <div class="w-3/5">
                        <div class="rounded-1by1">
                          <img class="object-contain" :src="`/assets/Team/${item.name}.png`" alt="">
                        </div>
                      </div>
                    </div>
                    <div class="mt-2">
                      <h3 class="mb-2 font-bold text-lg">{{ item.name }}</h3>
                      <hr class="mb-2 border-gray-700">
                      <h4 class="mb-2">{{ item.title }}</h4>
                      <div class="text-gray-400 text-sm" v-html="item.bio"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SVGIcon from "~/components/Icon.vue";

export default {
  components: {icon: SVGIcon},
  name: "PageIndex",
  data() {
    return {
      s1: {
        title: "Farm rare diamond HERO Cards",
      },
      s3: {
        title: "HERO farming for NFTs",
        arr: [
          {
            title: "Classification of HERO cards",
            desc: "There are 4 levels of HERO cards which are sorted with their scarcity. Including: Copper, Silver, Gold and Diamond Cards."
          },
          {
            title: "Farming",
            desc: "You can stake your HERO tokens and receive reward points. Points are earned every day, based on the number of HERO tokens you stake."
          },
          {
            title: "NTFs Market",
            desc: "Once you earn enough points, you can redeem them for a collectable NFT HERO Card. It entirely depends on you to collect them for yourself or sell them to others on the NFTs Market."
          },
        ]
      },
      s4: {
        title: "Genesis Collection",
        desc: "Collectibles of HERO cards with the uniqueness of each character.",
        arr: []
      },
      s5: {
        title: "FAQ",
        desc: "A list of commonly asked questions and answers on a website about project information.",
        arr: [
          {
            img: null,
            active: false,
            title: "Can I buy and sell HERO Cards on Treasureland?",
            desc: "HERO cards are limited and digitally scarce as they are created based on Non‑fungible tokens (NFTs). These special tokens are used on Binance Smart Chain to generate verifiable digital scarcity. You could sell HERO Cards on Treasureland once they reach a certain value which you expect."
          },
          {
            img: null,
            active: false,
            title: "How to get FLIP tokens?",
            desc: "When you deposited $HEXA and $BNB into our liquidity pool on PancakeSwap, you will receive FLIP tokens (PancakeSwap’s version of liquidity provider tokens)."
          },
        ]
      },
      s6: {
        title: "Great Experiences Ahead",
        desc: "a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies.",
        arr: [
          {
            color: "#45B26B",
            title: "NFTs Market",
            desc: "NFT Marketplace will be launched in order to buy, sell and trade NFTs. The market will ensure sustainability of the collectible ecosystem."
          },
          {
            color: "#EF466F",
            title: "Mystery cards",
            desc: "A series of mystery cards will be released. Each gathered card equals a rate which is eligible for revealing new HERO Cards. More new HERO Cards will be added to NFTs."
          },
          {
            color: "#9757D7",
            title: "New HERO Cards Level",
            desc: "With more emerging HERO Cards, Mix Cards will be launched in the near future. Users can mix their cards to have an opportunity of creating new HERO cards level with a higher scarcity."
          },
          {
            color: "#3772FF",
            title: "HERO Battle ",
            desc: "A game space will be designed for users to use their cards in battles in order to receive engaging awards."
          }
        ]
      },
      s7: {
        teams: [
          {
            name: "Goku Nguyen",
            title: "Chief Executive Officer",
            bio: "<b>Power: strategic & management</b>\n" +
              "<p>- 10 years of experience in Technology and Business</p>\n" +
              "<p>- CEO at Luzo Technologies Vietnam and VidGo</p>\n" +
              "<p>- Technical Specialist at Microsoft Vietnam Philanthropies</p>",
            link: "https://www.linkedin.com/in/duvannguyen/"
          },
          {
            name: "Gohan Vu",
            title: "Chief Operating Officer",
            bio: "<b>Power: operation & cost optimization </b>\n" +
              "<p>- 10 years of experience in e-commerce industry</p>\n" +
              "<p>- Founder & CEO at Ligovi Ecom, CMO at Phat Media</p>\n" +
              "<p>- App Mobile Development Specialist</p>",
            link:"https://www.linkedin.com/in/huu-vu-quoc-766405213/"
          },
          {
            name: "Videl Nguyen",
            title: "Chief Marketing Officer",
            bio: "<b>Power: creative & growth hacking</b>\n" +
              "<p>- Master of International Marketing Management in the UK with 6 years of experience in Marketing and Business Development</p>\n" +
              "<p>- Growth Hacking Expert at VidGo & Marketing Lead of Tech startup</p>\n" +
              "<p>- Marketing Consultant at Vingroup and Viettel Telecom</p>",
            link: "https://www.linkedin.com/in/nhatnguyen246/"
          },
          {
            name: "Yamcha Nguyen",
            title: "Chief Technology Officer",
            bio: "<b>Power: software design & full-stack development</b>\n" +
              "<p>- Founder at sPhoton Technology and Deverion</p>\n" +
              "<p>- Awarded 1st prize of MSP Vietnam’s hackathon 2016 & 2nd prize of Vietnam National Imagine Cup 2015</p>\n" +
              "<p>- PhD candiate in Cryptocurrency & Blockchain, France</p>"
          },
          {
            name: "Vegeta Nguyen",
            title: "Chief Product Officer",
            bio: "<b>Power: product RnD & critical thinking</b>\n" +
              "<p>- 6 years of experience in core banking consulting, data warehouse and switching system implementation</p>\n" +
              "<p>- 5 years of experience in digital marketing, blockchain ecosystem research and advertising on mutil-channel</p>\n" +
              "<p>- Founder & Chief Business Officer (CBO) at OMIS Media</p>"
          },
          {
            name: "Krillin Tao",
            title: "Art & Game Director",
            bio: "<b>Power: art design & game programming</b>\n" +
              "<p>- 15 years of communication art and game design</p>\n" +
              "<p>- Developed \"Animation coloring app for kids\" at Bluebird Award 2016</p>\n" +
              "<p>- Awarded \"Best game idea\" of Gamejam Award 2012 FPT Arena Hanoi</p>"
          }
        ],
        advisors: [
          {
            name: "Nam Nguyen",
            title: "COO Gourmet Galaxy, CEO Tag Ventures",
            bio: "Nam Nguyen is CEO of Tagchain.io and Founder of TAG Ventures, one of South East Asia's leading venture capital firms. He is also Chief Operating Officer of Gourmet Galaxy (GUM), a Yield Farming platform. Mr. Nam advises us on operating system, entry new markets strategy to expand market share and sustainable development builded by stable company structure."
          },
          {
            name: "Johnny Tri Dung",
            title: "Chief Business Officer at Kardiachain",
            bio: "Johnny is Chief Operating Officer (COO) and Co-Founder of Big Cat Entertainment. He has 8 years of experience working as Administrator cadre for large corporations such as CleverAds, Galaxy Pay, Facebook, Youtube, Tiki.vn.... Johnny currently plays the role of advisor for Kardiachain - a famous startup providing comprehensive solution for blockchain infrastructure. He consults us on business development strategy and roadmap."
          },
        ],
        inverters: [
          {
            name: "Loi Luu",
            title: "CEO & Co-Founder at Kyber Network",
            bio: "Loi Luu is CEO and Co-Founder of Kyber Network, an on-chain liquidity protocol empowering decentralized applications. He achieved PhD in Computer Science at National University of Singapore, where he improved security for public blockchain infrastructure. Mr. Loi was nominated in the Forbes 30 under 30 list for Asia and Top 10 Innovators under 35 for Asia Pacific by MIT Technology Reviews. He has been accompanying us from first days of this project with valuable advice."
          },
        ]
      },
      dataset: [],
      fetching: false
    }
  },
  created() {
    this.fetching = true;
    this.$axios.$get(`/pools/genesis`).then(res => {
      this.dataset = res;
      this.fetching = false;
    })
  }
}
</script>

<style>
#s1 {
  background-image: url("/bg-mobile.jpg");
  background-size: 135%;
  background-repeat: no-repeat;
  background-position: center;
}

@media (min-width: 768px) {
  #s1 {
    background-image: url("/bg.jpg");
    background-size: cover;
  }
}

#s1 .container {
  min-height: 100vh;
}

details .content {
  animation: slide-down-2 0.35s;
}

@keyframes slide-down-2 {
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 0.9;
    transform: translateY(0);
  }
}

details summary::-webkit-details-marker {
  display: none;
}

.rounded-1by1 {
  padding-top: 100%;
  position: relative;
}

.rounded-1by1 img {
  @apply rounded-full;

  border-radius: 9999px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
