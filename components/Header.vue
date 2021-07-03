<template>
	<header>
		<a href="/#about">À propos</a>
		<a href="/#training">Formations</a>
		<a href="/#experiences">Expériences</a>
		<a href="/#skills">Compétences</a>
		<a href="/#projects">Projets</a>
		<NuxtLink to="/contact">Contact</NuxtLink>
	</header>
</template>

<script lang="ts"></script>

<style lang="scss">
header {
	display: flex;
	justify-content: center;
	align-items: center;

	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;

	background: #fff;
	z-index: 1;

	& a {
		color: #262626 !important;
		text-decoration: none;
		margin: 1rem;
	}
}
</style>
