<template>
<div class="cart-color">
	<p class="color-title">颜色</p>
	<ul class="clear">
		<li @click="select($index, sku)" v-for="sku in skuList">
			<a :class="{'current': active === $index}">{{sku.skuName}}</a>
		</li>
	</ul>
</div>
</template>

<style type="text/css">

</style>

<script type="text/javascript">

export default{
	props:['skuList'],
	data() {
		return {
			active: -1
		}
	},
	ready() {
	},
	methods: {
		select(active, sku) {
	        this.active = active
			this.$dispatch('select', Object.assign({}, sku,active))
	    },
	},
}  
</script>

<style>
</style>