<template>
	<b-container id="skills" fluid>
		<h3>Compétences</h3>

		<b-row v-for="skillSet in skills" :key="skillSet.title">
			<h4 class="text-white text-uppercase text-center my-5 px-0">
				{{ skillSet.title }}
			</h4>

			<b-col
				v-for="skill in skillSet.skills"
				:key="skill.title"
				sm="6"
				md="4"
				lg="3"
				xl="2"
				class="d-flex flex-column align-items-center"
			>
				<img
					:src="'skills/' + skill.logo"
					:alt="skill.title"
					width="100px"
					height="100px"
					class="rounded-circle shadow"
				/>
				<span class="mt-1 mb-4">{{ skill.title }}</span>
			</b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		skills: {
			type: Object,
			default: () => {},
		},
	},
})
</script>

<style lang="scss">
#skills {
	background-color: #dbdbdb;
}
</style>
