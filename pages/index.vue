<template>
	<div>
		<Header />

		<Jumbotron />

		<About />
		<Quote />
		<Training :trainings="trainings" />
		<Experiences :experiences="experiences" />
		<Skills :skills="skills" />
		<Projects />

		<Footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import data from 'static/_/data'

export default Vue.extend({
	data() {
		return {
			trainings: data?.trainings,
			experiences: data?.experiences,
			skills: data?.skills,
		}
	},
})
</script>
