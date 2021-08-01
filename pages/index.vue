<template>
  <div>
    <section id="s1" class="bg-gray-50 dark:bg-gray-900 relative">
      <img class="hidden md:block h-full object-cover" src="/Step_Hero_Game_Play_blank.jpg" alt="Step Hero Banner">
      <div class="absolute top-0 left-0 right-0 bottom-0">
        <div class="container pt-20 md:pt-0 px-6 md:px-0 flex flex-col mx-auto">
          <div class="flex-1 flex md:-mx-4 md:items-center md:w-1/2">
            <div class="px-4 py-12 md:py-6">
              <h1 class="md:mb-4 mb-2 font-bold text-3xl md:text-4xl text-center md:text-left">The lucrative NFT
                fantasy-themed RPG Game on BSC and Polygon</h1>
              <div class="flex md:justify-start justify-center -mx-2 mt-8">
                <div class="mx-2">
                  <a href="https://coinmarketcap.com/currencies/step-hero/airdrop/"
                     class="btn-secondary justify-center md:w-auto mb-4 md:mb-0">Airdrop</a>
                </div>
                <div v-if="false" class="mx-2">
                  <a target="_blank" href="#"
                     class="btn-secondary justify-center mb-4 md:mb-0">What is HERO</a>
                </div>
                <div v-if="false" class="mx-2">
                  <a target="_blank" href="https://whitepaper.stephero.io/" class="btn-secondary justify-center">White
                    Paper</a>
                </div>
              </div>
              <div class="flex md:justify-start justify-center space-x-2 mt-2 md:mt-8">
                <a href="https://twitter.com/StepHeroNFTs" target="_blank">
                  <icon vb="30" class="md" name="tw" fill="#000"/>
                </a>
                <a href="https://t.me/stephero_chat" target="_blank">
                  <icon vb="90" class="md" name="tl" fill="#000"/>
                </a>
                <a href="https://stephero.medium.com/" target="_blank">
                  <icon vb="90" class="md" name="me" fill="#000"/>
                </a>
                <a href="https://www.facebook.com/StepHeroNFTs" target="_blank">
                  <icon vb="35" class="md" name="fb" fill="#000"/>
                </a>
                <a href="https://www.reddit.com/user/StepHeroNFTs" target="_blank">
                  <icon vb="1200" class="md" name="re" fill="#000"/>
                </a>
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
              <img class="w-64 object-cover" src="/coingecko.png" alt="Coin Gecko">
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
          <p class="text-gray-300">Step Hero ecosystem is the perfect combination of NFT gaming and DeFi that enables
            users to have fun and earn profit simultaneously. The comprehensive ecosystem comprises Step Hero RPG game,
            Heroes Farming, and NFT Marketplace. More than a game, Step Hero also has a strong community helping players
            on investing activites to earn money from game.</p>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div v-for="(item, i) in s3.arr" class="px-4 mb-4 md:mb-8 md:w-1/3 relative">
            <img :src="`/assets/s1/${item.img}-text.png`" :alt="item.title">
            <div v-if="false" class="absolute top-0 left-0 right-0 bottom-0 p-10 px-20 md:p-16 md:px-20 rounded h-full">
              <div v-if="false" class="w-10 mb-4">
                <img class="" :src="`/assets/Icons/Homepage/${i + 1}.png`" :alt="item.title">
              </div>
              <h4 class="font-bold text-black text-xl mb-2">{{ item.title }}</h4>
              <p class="text-sm text-black">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="s3-2" class="dark:bg-gray-800 relative">
      <div class="md:pt-0 px-6 md:px-0 flex flex-col mx-auto">
        <div class="flex-1 flex flex-col md:flex-row md:items-center justify-start">
          <div class="md:w-1/2 relative">
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/577897292?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                style="position:absolute;top:0;left:0;width:100%;height:100%;" title="SH-gameplot-final.mp4"></iframe>
            </div>
            <!--            <img src="/step_hero_game_play.png" alt="Game">-->
            <!--            <div class="absolute top-0 right-0 left-0 bottom-0 flex flex-wrap items-center justify-center">-->
            <!--              <img class="shadow-lg cursor-pointer w-16" src="/play.png" alt="Play Button" @click="showing = true">-->
            <!--            </div>-->
          </div>
          <div class="md:w-1/2">
            <div class="lg:w-2/3 p-4 md:p-16">
              <span class="text-red-600 uppercase">Gameplay</span>
              <h2 class="text-5xl font-medium mt-4 mb-6">Save the world</h2>
              <p class="my-4 text-gray-300">The Step Hero game's plot hinges on the post-apocalyptic war between the
                army of Shadows led by Lucifer - The Demon Lord and the Heroes led by archangel Gabriel. The players
                will play the Hero roles. Your missions are fighting against the villains in battles while buffing your
                energy by collecting in-game items, earning money (in STEP coins), and upgrading your characters.</p>
              <n-link to="/battle" class="btn-primary justify-center w-full md:w-auto mb-4 md:mb-0">Battle</n-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="s3-1" class="dark:bg-gray-900 relative">
      <div class="container p-4 md:pt-20 px-6 md:px-0 flex flex-col mx-auto">
        <div class="flex-1 flex flex-col md:flex-row md:-mx-4 md:items-center justify-start">
          <div class="md:w-1/2">
            <div class="p-4 md:p-6">
              <span class="text-red-600 uppercase">Marketplace</span>
              <h2 class="text-5xl font-medium mt-4 mb-6">Cross-chain NFT platform</h2>
              <p class="my-8 text-lg text-gray-300">Step Hero NFTs Marketplace is where you create, sell, and buy NFTs
                digital content. Moreover, you can launch NFT auctions, earn commissions from affiliate programs, and
                build your favorite NFT collection.
              </p>
              <a href="https://market.stephero.io/" class="btn-primary justify-center w-full md:w-auto mb-4 md:mb-0">Visit</a>
            </div>
          </div>
          <div class="md:w-1/2">
            <img src="/step_hero_marketplace.png" alt="Marketplace">
          </div>
        </div>
      </div>
    </section>
    <section id="s4" class="py-16 border-b md:border-b-0 dark:border-gray-700">
      <div class="container px-6 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div class="mb-16 md:mb-0 text-center md:text-left">
          <span class="text-red-600 uppercase">Heroes collections</span>
          <h2 class="text-5xl font-medium mt-4 mb-6">{{ s4.title }}</h2>
          <p class="text-gray-300 mb-8">{{ s4.desc }}</p>
          <n-link to="/characters/genesis" class="btn-primary">Heroes Collection</n-link>
        </div>
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div class="cursor-pointer">
              <video muted loop autoplay playsinline :id="`video_0`" class="rounded-tl rounded-tr">
                <source
                  src="https://stephero-nft.s3.ap-southeast-1.amazonaws.com/heros/step_hero_king_arthur/step_hero_king_arthur_lv1.mp4">
              </video>
              <div class="p-4 flex justify-center">
                <n-link to="/characters/genesis" class="btn-secondary sm">Heroes</n-link>
              </div>
            </div>
            <div class="cursor-pointer">
              <video muted loop autoplay playsinline :id="`video_1`" class="rounded-tl rounded-tr">
                <source
                  src="https://stephero-nft.s3.ap-southeast-1.amazonaws.com/heros/step_hero_lucifer/step_hero_lucifer.mp4">
              </video>
              <div class="p-4 flex justify-center">
                <n-link to="/characters/lp_genesis" class="btn-secondary sm">Heroes LP</n-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="s5" class="dark:bg-gray-800 py-16 border-b md:border-b-0 dark:border-gray-700">
      <div class="container sm px-6 md:px-0 mx-auto">
        <div class="container text-center xs mx-auto">
          <h2 class="text-3xl md:text-5xl font-medium mt-4 mb-8">{{ s5.title }}</h2>
          <p class="text-gray-300 mb-20">{{ s5.desc }}</p>
        </div>
        <div class="mb-6">
          <div class="mb-3 pb-3 border-b border-gray-700 cursor-pointer" v-for="(item, i) in s5.arr" :key="i">
            <div class="py-4 py-3 space-x-4 flex items-center justify-between w-full cursor-pointer"
                 @click="item.active = !item.active">
              <img :src="`/assets/Icons/Homepage/icon-${i}.png`" :alt="item.title">
              <span class="flex-1 font-bold">{{ item.title }}</span>
              <span class="rounded-full h-7 bg-red-600 shadow-sm shadow-inner p-1.5">
                <icon :name="item.active ? 'down': 'right'"/>
              </span>
            </div>
            <transition name="fade">
              <div v-if="item.active" class="content text-gray-400 pb-4" v-html="item.desc"></div>
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
          <div v-for="(item, i) in s6.arr" :key="i" class="px-4 mb-4 md:mb-8 md:w-1/3 relative">
            <img :src="`/assets/s2/${item.img}.png`" :alt="item.title">
            <div class="absolute top-0 left-0 right-0 bottom-0 p-32 px-28 md:p-28 md:px-28 rounded h-full">
              <div v-if="false" class="w-10 mb-4">
                <img class="" :src="`/assets/Icons/Homepage/${i + 1}.png`" :alt="item.title">
              </div>
              <h4 class="font-medium">{{ item.title }}</h4>
              <div class="text-sm text-gray-300" v-html="item.desc"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="py-16 border-b md:border-b-0 dark:border-gray-700">
      <div class="container px-6 md:px-0 mx-auto">
        <h4 class="text-red-600 uppercase text-center mb-8">About us</h4>
        <div class="mb-20">
          <h2 class="text-3xl text-center md:text-5xl mb-4 font-medium mt-4 mb-16">Our team</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div v-for="(item, i) in s7.teams" :key="i" class="relative">
              <img src="/about-bg.png" alt="About">
              <div class="absolute -top-8 left-0 right-0 bottom-0 flex flex-col py-2 px-12 h-full">
                <div class="flex justify-center">
                  <div class="w-1/4">
                    <div class="rounded-1by1">
                      <img class="object-contain p-1" style="background-color: rgb(246 225 200)"
                           :src="`/assets/Team/${item.name}.JPG`" :alt="item.name">
                    </div>
                    <a v-if="item.link" :href="item.link" target="_blank">
                      <icon name="linkedin"></icon>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 class="text-gray-800 text-center font-bold text-lg">{{ item.name }}</h3>
                  <h4 class="text-gray-700 text-center text-sm mb-2">{{ item.title }}</h4>
                  <div class="text-gray-600 text-xs" v-html="item.bio"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="/assets/Team/10.png" alt="">
            </div>
            <div>
              <img src="/assets/Team/30.png" alt="">
            </div>
          </div>
        </div>
        <div class="mb-20 text-center">
          <h2 class="text-3xl text-center md:text-5xl mb-4 font-medium mt-4 mb-16">Advisor</h2>
          <div class="flex -mx-4 justify-center flex-wrap mx-auto justify-center">
            <div v-for="(item, i) in s7.advisors" :key="i" class="relative md:w-1/3 p-4">
              <img src="/about-bg.png" alt="BG">
              <div class="absolute -top-10 left-0 right-0 bottom-0 flex flex-col py-2 px-16 h-full">
                <div class="flex justify-center">
                  <div class="w-1/4">
                    <div class="rounded-1by1">
                      <img class="object-contain p-1" style="background-color: rgb(246 225 200)"
                           :src="`/assets/Team/${item.name}.png`" :alt="item.title">
                    </div>
                    <a v-if="item.link" :href="item.link" target="_blank">
                      <icon name="linkedin"></icon>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 class="text-gray-800 text-center font-bold text-lg">{{ item.name }}</h3>
                  <h4 class="text-gray-700 text-center text-sm">{{ item.title }}</h4>
                  <div class="text-gray-600 text-xs" v-html="item.bio"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-20 text-center">
          <h2 class="text-3xl text-center md:text-5xl mb-4 font-medium mt-4">VCs & Investors</h2>
          <div class="flex -mx-4 md:-mx-8 items-center justify-center flex-wrap">
            <div v-for="i in vcs" :key="i" class="p-4 w-1/2 md:w-1/4">
              <img class="mx-auto" :src="`/partner/${i}.png`" :alt="i">
            </div>
          </div>
        </div>
        <div class="text-center">
          <h2 class="text-3xl text-center md:text-5xl mb-4 font-medium mt-4">Partners</h2>
          <div class="flex -mx-4 md:-mx-8 items-center justify-center flex-wrap">
            <div v-for="i in partners" :key="i" class="p-4 w-1/2 md:w-1/4">
              <img class="mx-auto" :src="`/partner/${i}.png`" :alt="i">
            </div>
          </div>
        </div>

      </div>
    </section>
    <transition name="fade">
      <div v-show="showing" class="modal">
        <div class="mx-auto w-full md:w-1/2 md:mt-24 flex flex-col justify-end md:justify-start h-full">
          <div class="mb-2 flex justify-end">
            <div class="cursor-pointer ml-auto rounded-full bg-gray-700 p-2.5 inline-flex" @click="showing = false">
              <icon name="x"></icon>
            </div>
          </div>
          <div>
            <iframe src="https://player.vimeo.com/video/577530134" width="100%" height="480" frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SVGIcon from "~/components/Icon.vue";

export default {
  components: {icon: SVGIcon},
  name: "PageIndex",
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.desc
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.desc
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.page.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.page.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.desc
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.page.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.page.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.page.title
        }
      ]
    }
  },
  data() {
    return {
      page: {
        title: "Step Hero",
        desc: "Step Hero ecosystem is the perfect combination of NFT gaming and DeFi that enables users to have fun and earn profit simultaneously.",
        image: "https://stephero.io/thumbnail.jpg"
      },
      showing: false,
      s1: {
        title: "Fantasy-themed RPG Game",
      },
      s3: {
        title: "Stephero Ecosystem",
        arr: [
          {
            img: 'red',
            title: "RPG Game",
            desc: "The Step Hero game's plot hinges on the post-apocalyptic war between the army of Shadows led by Lucifer - The Demon Lord and the Heroes led by archangel Gabriel. The players will play the hero roles. Their missions are fighting against the villains in battles while buffing their energy by collecting in-game items, earning money (in STEP coins), and upgrading their characters."
          },
          {
            img: 'green',
            title: "Heroes Farming",
            desc: "Holders of HERO tokens can either stake HERO to earn Points or stake HERO-BNB LP to earn FLIP on PancakeSwap. Users can redeem Points and FLIP for NFTs that can be traded on marketplace. After the redemption, the corresponding Points are burned."
          },
          {
            img: 'blue',
            title: "NFTs Marketplace",
            desc: "Step Hero NFTs Marketplace is a cross-chained NFT platform where users can easily create, sell, and buy NFTs digital content. The marketplace is equipped with superior features such as NFTs auctions, affiliate programs,..."
          },
        ]
      },
      s4: {
        title: "Heroes Collection",
        desc: "Collectibles of unique and valuable Hero character cards.",
        arr: []
      },
      s5: {
        title: "FAQ",
        desc: "Frequently asked questions and answers about the project.",
        arr: [
          {
            img: null,
            active: false,
            title: "Can I buy and sell HERO Cards on NFTs market place?",
            desc: "Yes. HERO cards are unique non-fungible-tokens (NFTs) that can be traded in NFTs marketplace. These special tokens are used on BSC & Polygon to generate verifiable digital scarcity. You could sell HERO Cards on NFTs marketplace once they reach a certain value which you expect."
          },
          {
            img: null,
            active: false,
            title: "How to get LP tokens?",
            desc: "- When you deposited $HERO and $BNB into our liquidity pool on PancakeSwap, you will receive FLIP tokens (PancakeSwap's version of liquidity provider tokens)."
          },
        ]
      },
      s6: {
        title: "Great Experiences Ahead",
        desc: "a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies.",
        arr: [
          {
            img: 'red',
            color: "#45B26B",
            title: "Q2/2021",
            desc: `NFT Marketplace will be launched in order to buy, sell and trade NFTs. The market will ensure sustainability of the collectible ecosystem.`
          },
          {
            img: 'green',
            color: "#EF466F",
            title: "Q3/2021",
            desc: "A series of Weapon NFTs will be released. It would help to empower the attack and defense's capability of the character."
          },
          {
            img: 'blue',
            color: "#9757D7",
            title: "Q4/2021",
            desc: "Become a legend through intense PvP arena battles! Join open tournaments for big rewards."
          }
        ]
      },
      s7: {
        teams: [
          // {
          //   name: "Goku Nguyen",
          //   title: "Chief Executive Officer",
          //   bio: "<b>Power: strategic & management</b>\n" +
          //     "<p>- 10 years of experience in Technology and Business</p>\n" +
          //     "<p>- CEO at Luzo Technologies Vietnam and VidGo</p>\n" +
          //     "<p>- Technical Specialist at Microsoft Vietnam Philanthropies</p>",
          //   link: "https://www.linkedin.com/in/duvannguyen/"
          // },
          {
            name: "Garbriel Vu",
            title: "Chief Executive Officer",
            bio: "<b>Power: operation & cost optimization </b>\n" +
              "<p>- 10 years of experience in e-commerce industry</p>\n" +
              "<p>- Founder & CEO at Ligovi Ecom, CMO at Phat Media</p>\n" +
              "<p>- App Mobile Development Specialist</p>",
            link: "https://www.linkedin.com/in/huu-vu-quoc-766405213/"
          },
          {
            name: "Lilly Nguyen",
            title: "Chief Marketing Officer",
            bio: "<b>Power: creative & growth hacking</b>\n" +
              "<p>- Master of International Marketing Management in the UK with 6 years of experience in Marketing and Business Development</p>\n" +
              "<p>- Growth Hacking Expert at VidGo & Marketing Lead of Tech startup</p>\n" +
              "<p>- Marketing Consultant at Vingroup and Viettel Telecom</p>",
            link: "https://www.linkedin.com/in/nhatnguyen246/"
          },
          {
            name: "Lucifer Nguyen",
            title: "Chief Technology Officer",
            bio: "<b>Power: software design & full-stack development</b>\n" +
              "<p>- Founder at sPhoton Technology and Deverion</p>\n" +
              "<p>- Awarded 1st prize of MSP Vietnam’s hackathon 2016 & 2nd prize of Vietnam National Imagine Cup 2015</p>\n" +
              "<p>- PhD candiate in Cryptocurrency & Blockchain, France</p>"
          },
          // {
          //   name: "Vegeta Nguyen",
          //   title: "Chief Product Officer",
          //   bio: "<b>Power: product RnD & critical thinking</b>\n" +
          //     "<p>- 6 years of experience in core banking consulting, data warehouse and switching system implementation</p>\n" +
          //     "<p>- 5 years of experience in digital marketing, blockchain ecosystem research and advertising on mutil-channel</p>\n" +
          //     "<p>- Founder & Chief Business Officer (CBO) at OMIS Media</p>"
          // },
          // {
          //   name: "Krillin Tao",
          //   title: "Art & Game Director",
          //   bio: "<b>Power: art design & game programming</b>\n" +
          //     "<p>- 15 years of communication art and game design</p>\n" +
          //     "<p>- Developed \"Animation coloring app for kids\" at Bluebird Award 2016</p>\n" +
          //     "<p>- Awarded \"Best game idea\" of Gamejam Award 2012 FPT Arena Hanoi</p>"
          // }
        ],
        advisors: [

          // {
          //   name: "Johnny Tri Dung",
          //   title: "Chief Business Officer at Kardiachain",
          //   bio: "Johnny is Chief Operating Officer (COO) and Co-Founder of Big Cat Entertainment. He has 8 years of experience working as Administrator cadre for large corporations such as CleverAds, Galaxy Pay, Facebook, Youtube, Tiki.vn.... Johnny currently plays the role of advisor for Kardiachain - a famous startup providing comprehensive solution for blockchain infrastructure. He consults us on business development strategy and roadmap."
          // },
          {
            name: "Thi Truong",
            title: "Co-founder & CEO at PolkaFoundry",
            bio: "Mr. Thi has years of expertise in the blockchain space. His most successful initiative was PolkaFoundry, which was launched in 2018 to make the benefits of blockchain more accessible to the general public. He worked as a Software Engineer, then as a Solution Architect before being elevated to Director at FPT Corp. Following his departure from FPT, he worked as a Product Manager at Kyber Network, one of Asia's most well-known blockchain initiatives. He advises us on the company growth strategy and roadmap."
          },
          {
            name: "Thanh Dao",
            title: "CEO & Founder of EzDefi",
            bio: "Mr. Thanh has been involving in cryptocurrencies since 2016 as a Bitcoin miner and investor. He got his MBA from UWIC and worked as a manager in Vingroup and later as the CTO of Nexty ( a public chain project). In 2017, Thanh founded ezDeFi and launched various products. Thanh is currently CEO of ezDeFi and the project is reaching constant new growth."
          },
          {
            name: "Kamran Iqbal",
            title: "Co-Founder and COO of BSC News.",
            bio: "As our investor, advisor, and communication partner, he will assist our project on community development and brand marketing. Furthermore, he will connect us with his extensive network of partners who can support the development of our project."
          },
          {
            name: "Nam Nguyen",
            title: "COO Gourmet Galaxy, CEO Tag Ventures",
            bio: "Nam Nguyen is CEO of TAG Vietnam and Founder of TAG Ventures, one of South East Asia's leading venture capital firms. He is also Chief Operating Officer of Gourmet Galaxy (GUM), a Yield Farming platform. Mr. Nam advises us on operating system, entry new markets strategy to expand market share and sustainable development builded by stable company structure."
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
      fetching: false,
      partners: [
        "red-kite",
        // "poolz",
        "cmc",
        "bsc-new",
        "BSCdaily",
        "launchzone",
        "polygon",
        "barmy",
        // "frontier",
        "danchoicoin",
        "altcoin",
        "kingsman",
        "TAG",
        "gum",
        "nftstarter"
      ],
      vcs: [
        "icetea_lab",
        "mayor",
        "DCI",
        "1010",
        "av",
        "OIG",
        "exntc",
        "choiventures",
        "bullperks"
      ]
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
  background-image: url("/bg_mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 56px;
  background-position-x: center;
  height: 100vh;
}

#s1 .btn-secondary {
  padding: .75rem 2.5rem;
  display: inline-flex;
}

@media (min-width: 768px) {
  #s1 {
    background-image: url("/bg.jpg");
    background-size: cover;
    background-position: center;
    margin-top: 3.5rem;
    height: 100vh;
  }
}

#s1 .container {
  min-height: calc(100vh - 56px);
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
