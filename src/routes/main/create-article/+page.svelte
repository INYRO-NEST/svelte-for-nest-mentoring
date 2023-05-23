<script lang="ts">
	async function createArticle() {
		const titleNode = <HTMLInputElement>document.getElementById('title');
		const title = titleNode.value;

		const contentNode = <HTMLInputElement>document.getElementById('content');
		const content = contentNode.value;

		const jwt = window.localStorage.getItem('jwt');
		if (!jwt) {
			console.log('로그인이 되어있지 않습니다.');
			alert('로그인이 되어있지 않습니다.');
		}

		const res = await fetch('http://127.0.0.1:3000/articles', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${jwt}`
			},
			body: JSON.stringify({
				title,
				content
			})
		});

		const article = await res.json();

		const main = document.getElementById('main');
		main!.innerHTML = `<div>
			<h3>제목 : ${article.title}</h3>
			<span>게시글 번호 : ${article.id} &nbsp&nbsp</span><span>생성일자 : ${article.createdAt} &nbsp&nbsp</span><span>유저 : ${article.userId} &nbsp&nbsp</span>
			<p>${article.content}</p>
			<div>${article.comment}</div>
		</div>`;
	}
</script>

<svelte:head>
	<title>Create Article</title>
</svelte:head>

<body>
	<h1>게시글 작성</h1>
	<div id="main">
		<div>&nbsp;&nbsp; title &nbsp;&nbsp; : <input id="title" style="width: 500px" /></div>
		<div style="height: 50px" />
		<div>content : <input id="content" style="width: 500px; height: 400px" /></div>
		<button on:click={createArticle}>create</button>
	</div>
</body>
