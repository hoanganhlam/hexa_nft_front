<template>
  <footer class="dark:text-white dark:bg-gray-900">
<!--    <div class="p-6 flex justify-center text-center">-->
<!--      <div>-->
<!--        <img class="md:mb-4 h-16 mx-auto object-contain" src="/step_hero_logo.png" alt="StepHero">-->
<!--      </div>-->
<!--    </div>-->
    <div class="p-6 border-t bg-purple-50 bg-opacity-20 dark:bg-gray-800 dark:border-gray-700">
      <div class="container mx-auto flex justify-between flex-col text-center md:flex-row md:text-left">
        <div class="mt-2 mb-8 md:mb-2">
          <img class="md:mb-4 h-16 mx-auto object-contain" src="/step_hero_logo.png" alt="StepHero">
          <div class="text-gray-300">HERO © 2021</div>
          <div>
            <p>Powered by <a href="https://www.binance.org/" class="text-gray-300 mb-2" target="_blank">BSC</a> and <a href="https://www.polygon.technology" class="text-gray-300 mb-2" target="_blank">Polygon</a></p>

          </div>
        </div>
        <div class="mt-2 mb-8 md:mb-2">
          <div class="font-bold mb-4">Contact us</div>
          <div>
            <a class="text-gray-300 mb-2" href="mailto:contact@stephero.io">contact@stephero.io</a>
          </div>
        </div>
        <div class="mt-2 mb-8 md:mb-2">
          <div class="font-bold mb-4">About HERO</div>
          <ul>
            <li class="text-gray-300 mb-2">
              <n-link to="/about">About</n-link>
            </li>
            <li class="text-gray-300 mb-2">
              <n-link to="/">Features</n-link>
            </li>
            <li class="text-gray-300 mb-2">
              <n-link to="/token">HERO token</n-link>
            </li>
            <li class="text-gray-300 mb-2">
              <n-link to="/#about">Team</n-link>
            </li>
          </ul>
        </div>
        <div class="mt-2 mb-8 md:mb-2">
          <div class="font-bold mb-4">Social</div>
          <ul>
            <li class="flex justify-center md:justify-start">
              <icon vb="35" class="md" name="fb" fill="#000"/>
              <a href="https://www.facebook.com/StepHeroNFTs" target="_blank"
                 class="text-gray-300 mb-2">
                Facebook
              </a>
            </li>
            <li class="flex justify-center md:justify-start">
              <icon vb="90" class="md" name="tl" fill="#000"/>
              <a href="https://t.me/stephero_chat" target="_blank" class="text-gray-300 mb-2">
                Telegram
              </a>
            </li>

            <li class="flex justify-center md:justify-start">
              <icon vb="30" class="md" name="tw" fill="#000"/>
              <a href="https://twitter.com/StepHeroNFTs" target="_blank" class="text-gray-300 mb-2">
                Twitter
              </a>
            </li>

            <li class="flex justify-center md:justify-start">
              <icon vb="90" class="md" name="me" fill="#000"/>
              <a href="https://stephero.medium.com/" target="_blank" class="text-gray-300 mb-2">
                Medium
              </a>
            </li>
            <li class="flex justify-center md:justify-start">
              <icon vb="1200" class="md" name="re" fill="#000"/>
              <a href="https://www.reddit.com/user/StepHeroNFTs" target="_blank" class="text-gray-300 mb-2">
                Reddit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SVGIcon from '~/components/Icon.vue'

export default {
  name: 'PageFooter',
  comments: {icon: SVGIcon},
  props: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
</style>
