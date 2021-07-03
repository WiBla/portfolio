<template>
	<b-jumbotron fluid>
		<h1 class="display-2 weight-bold"><strong>Jimmy SCHULLER</strong></h1>
		<h2 class="display-6">Développeur Full-Stack</h2>

		<a id="scroll-btn" href="#about"></a>
	</b-jumbotron>
</template>

<style lang="scss">
.jumbotron {
	width: 100%;
	height: 70vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	color: #fff;
	background: linear-gradient(45deg, #681c5d, #c2452f);

	#scroll-btn {
		position: absolute;
		top: 70vh;

		width: 30px;
		height: 30px;

		border: 5px solid white;
		border-radius: 0;
		border-width: 0 0 5px 5px;
		background: transparent;

		transform: rotate(-45deg);
		animation: scroll-down 2s infinite;

		outline: transparent;
	}
}

@keyframes scroll-down {
	0% {
		transform: rotate(-45deg) translate(0, 0);
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	75%,
	100% {
		transform: rotate(-45deg) translate(-20px, 20px);
		opacity: 0;
	}
}
</style>
