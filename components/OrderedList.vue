<template>
	<ol class="list-group">
		<li
			v-for="item in list"
			:key="item.id"
			class="
				list-group-item
				d-flex
				justify-content-between
				align-items-center
				fs-4
			"
		>
			<div class="date d-flex align-items-center">
				<img
					v-if="item.logo"
					:src="item.logo"
					class="img-fluid rounded-circle me-3"
					width="100px"
					:alt="item.location"
				/>
				<div v-else class="rounded-circle bg-primary me-3"></div>
				{{ item.date }}
			</div>

			<div class="description">
				<span class="title fw-bold">
					<span class="emphasis">{{ item.title }}</span> -
					<a
						v-if="item.locationLink !== undefined"
						class="text-dark"
						:href="item.locationLink"
						target="_blank"
						>{{ item.location }}</a
					>
					<span v-else>{{ item.location }}</span>
					<br />
				</span>
				<span v-if="typeof item.subtitle === 'string'" class="text-muted">
					<em>{{ item.subtitle }}</em
					><br />
				</span>
				<span>{{ item.description }}</span>
			</div>
		</li>
	</ol>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		list: {
			type: Array,
			default: () => [],
		},
	},
})
</script>

<style lang="scss" scoped>
.list-group-item {
	border: none;

	.date div.rounded-circle {
		display: inline-block;
		width: 3rem;
		height: 3rem;
	}

	.bg-primary {
		// TODO find a way to overide bootstrap's utilities colors
		background-color: $primary !important;
	}

	.description .title .emphasis {
		color: $primary;
	}
}
</style>
