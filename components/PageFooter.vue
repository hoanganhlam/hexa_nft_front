<template>
  <footer class="dark:text-white dark:bg-gray-900">
<!--    <div class="p-6 flex justify-center text-center">-->
<!--      <div>-->
<!--        <img class="md:mb-4 h-16 mx-auto object-contain" src="/step_hero_logo.png" alt="StepHero">-->
<!--      </div>-->
<!--    </div>-->
    <div class="p-6 border-t bg-purple-50 bg-opacity-20 dark:bg-gray-800 dark:border-gray-700">
      <div class="container mx-auto flex justify-between md:flex-1">
        <div>
          <img class="md:mb-4 h-16 mx-auto object-contain" src="/step_hero_logo.png" alt="StepHero">
          <div class="text-gray-300">HERO © 2021</div>
          <div>
            <a href="https://www.polygon.technology" class="text-gray-300 mb-2" target="_blank">Powered by Polygon</a>
          </div>
        </div>
        <div>
          <div class="font-bold mb-4">Contact us</div>
          <div>
            <a class="text-gray-300 mb-2" href="mailto:contact@stephero.io">contact@stephero.io</a>
          </div>
        </div>
        <div>
          <div class="font-bold mb-4">About HERO</div>
          <ul>
            <li class="text-gray-300 mb-2">
              <n-link to="/">Features</n-link>
            </li>
            <li class="text-gray-300 mb-2">
              <n-link to="/">HERO token</n-link>
            </li>
            <li class="text-gray-300 mb-2">
              <n-link to="/">Token Economics</n-link>
            </li>
            <li class="text-gray-300 mb-2">
              <n-link to="/">Team</n-link>
            </li>
          </ul>
        </div>
        <div>
          <div class="font-bold mb-4">Social</div>
          <ul>
            <li class="flex">
              <icon vb="35" class="md" name="fb" fill="#000"/>
              <a href="https://www.facebook.com/StepHeroNFTs" target="_blank"
                 class="text-gray-300 mb-2">
                Facebook
              </a>
            </li>
            <li class="flex">
              <icon vb="90" class="md" name="tl" fill="#000"/>
              <a href="https://t.me/stephero_ann" target="_blank" class="text-gray-300 mb-2">
                Telegram
              </a>
            </li>

            <li class="flex">
              <icon vb="30" class="md" name="tw" fill="#000"/>
              <a href="https://twitter.com/StepHeroNFTs" target="_blank" class="text-gray-300 mb-2">
                Twitter
              </a>
            </li>

            <li class="flex">
              <icon vb="90" class="md" name="me" fill="#000"/>
              <a href="https://stephero.medium.com/" target="_blank" class="text-gray-300 mb-2">
                Medium
              </a>
            </li>
            <li class="flex">
              <icon vb="50" class="md" name="reddit" fill="#000"/>
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
