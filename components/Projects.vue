<template>
	<b-container id="projects" fluid>
		<h3>Projets</h3>

		<b-row class="g-4 mt-3">
			<b-col
				v-for="project in projects"
				:key="project.id"
				cols="12"
				sm="12"
				md="6"
				lg="4"
			>
				<b-card>
					<b-img
						v-if="project.thumbnail"
						:src="`projects/${project.thumbnail}`"
						:alt="`Thumbnail for project ${project.title}`"
						fluid
					/>

					<b-card-body>
						<h5>{{ project.title }}</h5>
						<p class="card-text">
							{{ project.short_description }}
						</p>
						<p class="card-text">
							<span>{{ project.creationDate.toLocaleDateString() }}</span>
						</p>
					</b-card-body>

					<template #footer>
						<!-- TODO override primary color -->
						<span
							v-for="tag in project.tags"
							:key="tag"
							class="badge bg-danger me-1"
						>
							{{ tag }}
						</span>
					</template>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		projects: {
			type: Array,
			default: () => [],
		},
	},
})
</script>
