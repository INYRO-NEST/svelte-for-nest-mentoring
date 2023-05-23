<script lang="ts">
	async function register() {
		const emailNode = <HTMLInputElement>document.getElementById('email');
		const email = emailNode.value;

		const passwordNode = <HTMLInputElement>document.getElementById('password');
		const password = passwordNode.value;
		const res = await fetch('http://127.0.0.1:3000/user', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		const user = await res.json();

		console.log(user);
		const main = document.getElementById('main');

		main!.innerHTML = `<div>
      <div> 이메일  : ${user.email}</div>
      <div>유저 번호 : ${user.id}</div>
      <div>가입 일자 : ${user.createdAt}</div>
    </div>`;
	}
</script>

<svelte:head>
	<title>회원가입 페이지</title>
</svelte:head>

<body>
	<h1>회원가입</h1>
	<div id="main">
		<div>아이디 &nbsp;&nbsp; : <input id="email" type="email" /></div>
		<div style="height: 20px;" />
		<div>비밀번호 : <input id="password" type="password" /></div>
		<button on:click={register}>sign up</button>
	</div>
</body>
