type FetchBlogPostReturn = {
	title: string; body: string; id: number;
}

export default async function fetchBlogPosts(): Promise<FetchBlogPostReturn[]> {
	const result = await fetch("https://jsonplaceholder.typicode.com/posts")
	return await result.json()
}