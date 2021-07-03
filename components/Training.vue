<template>
	<b-container id="training" fluid>
		<h3>Formations</h3>

		<ol class="list-group">
			<li
				class="
					list-group-item
					d-flex
					justify-content-between
					align-items-center
					fs-4
				"
			>
				<div class="date d-flex align-items-center">
					<div class="rounded-circle me-3"></div>
					2018 - 2020
				</div>
				<div class="description">
					<span class="title fw-bold">
						<span class="emphasis">BAC+2</span> -
						<a
							class="text-dark"
							href="https://www.webacademie.org/"
							target="_blank"
							>Web@cadémie by Epitech</a
						>
						<br />
					</span>
					<span>Développeur / Intégrateur web</span>
				</div>
			</li>
		</ol>
	</b-container>
</template>

<style lang="scss" scoped>
#training {
	.list-group-item {
		border: none;

		.date .rounded-circle {
			display: inline-block;
			width: 3rem;
			height: 3rem;
			background-color: $primary;
		}

		.description .title .emphasis {
			color: $primary;
		}
	}
}
</style>
