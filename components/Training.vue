<template>
	<b-container id="training" fluid>
		<h3>Formations</h3>

		<OrderedList :list="trainings" />
	</b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		trainings: {
			type: Array,
			default: () => [],
		},
	},
})
</script>
