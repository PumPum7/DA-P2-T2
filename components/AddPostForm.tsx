import {FormEvent} from "react";

export default function({postHandle}: {postHandle: (event: FormEvent<HTMLFormElement>) => void})  {
	return (
		<form onSubmit={(event) => postHandle(event)} className="w-2/5 ml-5">
			<input required className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" name="title" placeholder="Title" />
			<input required className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" name="body" placeholder="Body" />
			<button className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" type="submit">Add post</button>
		</form>
	)
}