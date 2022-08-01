import {useEffect, useState} from "react";
import AddForms from "../../components/AddPostForm";
import PostDisplay from "../../components/PostDisplay";
import postAddHandle from "../../functions/addPostHandler";
import fetchBlogPosts from "../../functions/fetchBlogPosts";

export default function POSTS() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetchBlogPosts().then(result => setData(result))
	}, [])

	if (!data) return <p>No POSTS fetched</p>
	return (
		<div>
			<h1 className="font-bold text-2xl m-2 ml-5">ADD POSTS</h1>
			<AddForms postHandle={(event) => {
				const newData = postAddHandle(event, data.length)
				setData((prevState) => {
					return [...prevState, newData]
				})
			}}/>


			<h1 className="font-bold text-2xl m-2">POSTS</h1>
			{data.map(post =>
				<PostDisplay post={post}/>
			)}
		</div>
	)
}
