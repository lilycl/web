<template>
	<div class="comp-star">
    <span @click="select(i)" v-for="i in scoreNumber">
      <span v-if="this.score > i">✮</span>
      <span v-if="this.score <= i">✩</span>
    </span>
    <span>{{text}}</span>
	</div>
</template>    

<script>
  const SCORE_MAP = {
    '1': '1分 很差',
    '2': '2分 差',
    '3': '3分 一般',
    '4': '4分 好',
    '5': '5分 很好',
  }

  const props = {
    /**
     * 默认分值
     */
    defaultScore: {
      type: Number,
      default: 0
    },

    scoreNumber: {
      type: Number,
      default: 5
    }
  };

  const events = {
  	CHANGE: 'star-change'
  };

  export default {
    props: props,
    data() {
      return {
        score: this.defaultScore
      }
    },
    computed: {
      text() {
        return SCORE_MAP[this.score]
      }
    },
    methods: {
      select(active) {
        this.score = active + 1
        this.$dispatch(events.muqianCHANGE, this.score)
      }
    },
    ready() {}
  };    
</script>

<style scoped>
</style>