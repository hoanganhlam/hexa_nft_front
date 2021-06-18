<template>
  <div class="drop" :class="{'hoverable': hoverable, 'active': active}" v-click-outside="close">
    <div @click="active = !active">
      <slot></slot>
    </div>
    <div :class="`drop-wrap ${position} ${bodyClass}`">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    hoverable: {
      default: false,
      type: Boolean
    },
    position: {
      default: 'left',
      type: String
    },
    bodyClass: {
      default: 'pt-4'
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    close() {
      this.active = false
    }
  }
}
</script>

<style>
.drop {
  @apply relative;
}

.drop.active .drop-wrap,
.drop.hoverable:hover .drop-wrap {
  @apply block;
}

.drop-wrap {
  @apply absolute hidden z-50;
}

.drop-wrap.right {
  left: auto;
  right: 0;
}


.drop-body {
  @apply rounded-br-md rounded-bl-md p-3 shadow border border-gray-600;
  background: #353945;
  min-width: 12rem;
}

.drop-item {
  @apply px-3 py-1.5 rounded-md block w-full flex space-x-2 items-center cursor-pointer;
}

.drop-item.nuxt-link-active:after {
  display: none;
}

.drop-item:hover,
.drop-item.active {
  background: #23262F;
}
</style>
