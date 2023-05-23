<script lang="ts">
	import { json } from '@sveltejs/kit';

	async function login() {
		const emailNode = <HTMLInputElement>document.getElementById('email');
		const email = emailNode.value;

		const passwordNode = <HTMLInputElement>document.getElementById('password');
		const password = passwordNode.value;

		const res = await fetch('http://127.0.0.1:3000/auths/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		const token = await res.json();

		const jwt = token?.accessToken;

		console.log(jwt);

		window.localStorage.setItem('jwt', jwt);

		const main = document.getElementById('main');

		main!.innerHTML = `<h2>로그인 성공!</h2>`;
	}
</script>

<svelte:head>
	<title>Login Page</title>
</svelte:head>

<body>
	<h1>로그인</h1>
	<div id="main">
		<div>아이디 &nbsp;&nbsp; : <input id="email" type="email" /></div>
		<div style="height: 20px;" />
		<div>비밀번호 : <input id="password" type="password" /></div>
		<button on:click={login}>sign in</button>
	</div>
</body>
