import React from "react";
import AddPostForm from "../../components/AddPostForm";
import postAddHandle from "../../functions/addPostHandler";
import PostDisplay from "../../components/PostDisplay";
import fetchBlogPosts from "../../functions/fetchBlogPosts";

class Posts3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {posts: []}
	}

	componentDidMount() {
		fetchBlogPosts().then(result => this.setState({posts: result}))
	}

	render() {
		return <div>
			<section>
				<h1 className="font-bold text-2xl m-2 ml-5">ADD POSTS</h1>
				<AddPostForm postHandle={(event) => {
					const newPost = postAddHandle(event, this.state.posts.length)
					this.setState((prevState) => {
						return {
							posts: [...prevState.posts, newPost]
						}
						}
					)
				}
				}/>
			</section>
			{this.state.posts.length > 0 ? <section>
				<h1 className="font-bold text-2xl m-2">POSTS</h1>
				{this.state.posts.map(post =>
					<PostDisplay post={post} key={post.id}/>
				)}
			</section> : <section>
				<h1 className="font-bold text-2xl m-2">No posts</h1>
			</section>}
		</div>
	}
}

export default Posts3;