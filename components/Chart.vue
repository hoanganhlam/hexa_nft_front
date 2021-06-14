<template>
  <div :style="style">
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>

export default {
  name: "Chart",
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    data: {
      default: () => ([{l: 'Private sale', v: 21, c: '#FFC848'},
        {l: 'Marketing & business development', v: 17, c: '#9757D7'},
        {l: 'Liquidity', v: 23, c: '#45B26B'},
        {l: 'Team & advisors', v: 19, c: '#EF466F'},]),
      type: Array
    }
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  methods: {
    init() {
      const ctx = this.$refs.myChart.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: this.data.map(x => x.l),
          datasets: [{
            label: 'My First Dataset',
            data: this.data.map(x => x.v),
            borderColor: "rgba(17, 24, 39, 1)",
            backgroundColor: this.data.map(x => x.c),
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
            },
          }
        }
      });
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    data() {
      this.init()
    }
  }
}
</script>

<style scoped>

</style>
