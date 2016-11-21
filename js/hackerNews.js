  const result = fetch('https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=5c16623f895c44948812458d23c5396e')
    result.then((response) => response.json()
    ).then((json) => generateNews(json)
    ).catch((ex) => console.error('failed', ex));

    const generateNews = (json) => {
        const news = document.getElementById("hacker-news");
        const {articles} = json;
        const HTML = articles.map((article) => {
            const {
                author: articleAuthor,
                urlToImage: articleUrlToImage,
                description: articleDescription,
                title: articleTitle,
                url: articleUrl,
                publishedAt: articlePublishedAt
            } = article;

            const authors = articleAuthor ? `<h5 class="author">${articleAuthor}</h5>` : '';
            const img = articleUrlToImage ? `<img class="image-to-logo" src="${articleUrlToImage}" />`: '';
            const descriptions = articleDescription ? `<p class="description">${articleDescription}</p>`: '';
            const titles = `<h3 class="title">${articleTitle}</h3>`;
            const link = articleUrl ? `<a href="${articleUrl}">more</a>`: '';
            const datetime = articlePublishedAt ? `<time>${new Date(articlePublishedAt).toLocaleString('en-US').split(', ')}</time>`: '';
            const element = (
            `<div>
                ${authors}
                ${img}
                ${titles}
                ${descriptions}
                ${link}
                ${datetime}
            </div>`
            );
            return element;
        }).join('');
       news.innerHTML=HTML;
    }