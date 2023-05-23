<script lang="ts">
	/** @type {import('./$types').PageData}*/
	export let data: any;
	console.log(data);

	let id = 1;

	async function getArticle() {
		const res = await fetch(`http://127.0.0.1:3000/articles/${id}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		const article = await res.json();

		console.log(article);

		const articleDiv = document.getElementById('article');

		const articleId = article?.id;
		const articleTitle = article?.title;
		const articleContent = article?.content;
		const articleCreateAt = article?.createdAt;
		const articleUserId = article?.userId;
		const comments = article?.comments;

		const articleNode = document.createElement('div');
		articleNode.innerHTML = `<div>
			<h3>제목 : ${articleTitle}</h3>
			<span>게시글 번호 : ${articleId} &nbsp&nbsp</span><span>생성일자 : ${articleCreateAt} &nbsp&nbsp</span><span>유저 : ${articleUserId} &nbsp&nbsp</span>
			<p>${articleContent}</p>
			<div>${comments}</div>
		</div>`;

		if (articleDiv!.childNodes.length > 4) {
			articleDiv!.innerHTML = '';
		}

		articleDiv?.appendChild(articleNode);
	}
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<body>
	<div>
		<h1>보고싶은 게시글의 번호를 입력하세요!</h1>
		<input id="article--id" type="number" bind:value={id} />
		<button on:click={getArticle}>Get Articld!</button>
	</div>
	<div id="article" />
</body>
