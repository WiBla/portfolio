<template>
	<header>
		<b-navbar toggleable="lg" class="w-100">
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<a href="/#training">Formations</a>
					<a href="/#experiences">Expériences</a>
					<a href="/#skills">Compétences</a>
					<a href="/#projects">Projets</a>
					<NuxtLink to="/contact">Contact</NuxtLink>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</header>
</template>

<script lang="ts"></script>

<style lang="scss">
header {
	width: 100%;
	position: sticky;
	top: 0;
	left: 0;

	& a {
		text-decoration: none;
	}
}
</style>
