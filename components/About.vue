<template>
	<b-container id="about" fluid>
		<h3>À propos</h3>

		<article class="card mb-3 border-0">
			<div class="row g-0 text-center">
				<div class="col-md-6 d-flex align-items-center justify-content-center">
					<img
						src="photo.png"
						class="img-fluid rounded-circle"
						alt="Picture of Jimmy SCHULLER"
						style="max-width: 300px"
					/>
				</div>
				<div class="col-md-6">
					<div class="card-body">
						<h5 class="card-title">Jimmy SCHULLER</h5>
						<h6 class="card-subtitle mb-2 text-muted">
							Développeur Full-Stack
						</h6>
						<p class="card-text text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
							dolor alias nemo non optio quod excepturi, saepe error, dolorum
							accusamus quasi tempore velit atque ea! Temporibus quisquam
							commodi ipsa eum? Nesciunt voluptates dolorum non error mollitia,
							ut suscipit fugit deleniti maiores neque! Unde eligendi est
							similique impedit, magnam quod iusto facilis deserunt atque hic ex
							vitae, voluptatibus beatae ad consequatur blanditiis ab tempora.
							Omnis ipsam error inventore minus sed perferendis esse corporis
							dolorem dolorum quis, officiis expedita assumenda quisquam minima
							odit laudantium autem voluptates ipsa quae rerum iusto beatae?
							Dolores sapiente nostrum repellendus reprehenderit cum ipsam
							expedita nihil consequatur rerum.
						</p>
						<a href="#" class="card-link cta">Voir mon CV</a>
					</div>
				</div>
			</div>
		</article>
	</b-container>
</template>

<script lang="ts"></script>

<style lang="scss">
.container-fluid {
	padding: 3em;

	.card-title {
		color: $primary;
		font-weight: bold;
	}
}

.cta {
	padding: 0.5em 1em;
	border-radius: 4px;

	color: #fff;
	text-decoration: none;
	background: linear-gradient(45deg, #681c5d, #c2452f);
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

	&:hover {
		color: #fff;
	}
}
</style>
