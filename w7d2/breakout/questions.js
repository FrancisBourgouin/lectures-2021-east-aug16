// Why React over Express/JQuery

const createABlogPostSummary = (data) => {
	const $article = $("<article>");
	const $h1 = $("<h1>");
	const $p = $("<p>");
	const $a = $("<a>");

	$h1.append(data.title);
	$p.append(data.text);
	$a.append(data.url_text);
	$a.attr("src", data.url);

	$article.append($h1);
	$article.append($p);
};

$.ajax({ url: "/blog/1" }).then((data) => {
	const blogPost = createABlogPostSummary(data);
	$("section.posts").append(blogPost);
});

const App = () => {
	const [blogList, setBlogList] = useState([]);

	axios.get("/blog").then((res) => setBlogList(res.data));

	const parsedBlogItems = blogList.map((item) => <BlogPost {...item} />);
};
const BlogPost = (props) => {
	const { title, text, url_text, url, isSummary } = props;

	render(
		<article>
			<h1>{title}</h1>
			<p>{text}</p>
			{isSummary && <a href={url}>{url_text}</a>}
		</article>
	);
};
