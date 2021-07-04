<template>
	<b-container id="experiences" fluid>
		<h3>Expériences</h3>

		<OrderedList :list="experiences" />
	</b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		experiences: {
			type: Array,
			default: () => [],
		},
	},
})
</script>
