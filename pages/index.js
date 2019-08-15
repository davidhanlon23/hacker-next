
import { Component } from "react";
import fetch from "isomorphic-unfetch";
// eslint-disable-next-line no-unused-vars
import StoryList from "../components/StoryList";
// eslint-disable-next-line no-unused-vars
import Error from "next/error";
// eslint-disable-next-line no-unused-vars
import Layout from "../components/Layout";
// eslint-disable-next-line no-unused-vars
import Link from "next/link";


class Index extends Component{

	static async getInitialProps( { query } ){
		let stories;
		let page;
		
		try{
			page=Number( query.page ) ||1;
			
			//const response = await fetch( "https://node-hnapi.herokuapp.com/news?page=1" );
			const response = await fetch( `https://node-hnapi.herokuapp.com/news?page=${page}` );
			stories = await response.json();

		}
		catch( err ){
			console.log( err );
			stories=[];
		}
		return{ page,stories };
	}
	componentDidMount(){
		// eslint-disable-next-line no-undef
		if( "serviceWorker" in navigator ){
			// eslint-disable-next-line no-undef
			navigator.serviceWorker.register( "/service-worker.js" ).then( registration =>{
				console.log( "service worker registration successful", registration );
			} )
				.catch( err => {
					console.warn( "service worker registration failed", err.message );
				} );
		}
	}
	render(){
		const { stories, page } = this.props;
		if( stories.length===0 ){ return  <Error statusCode={503}/>;}
		return(
			<div>
				<Layout title="Hacker Next" description="A Hacker News Clone with NextJS">
					<StoryList stories={stories}/>
					<footer>
						<Link href={`/?page=${page+1}`}>
							<a>Next Page ({page +1})</a>
						</Link>
					</footer>
				</Layout>
				
				<style jsx>
					{`
						footer{
							padding: 1em;
						}
						footer a{
							font-weight: bold;
							color:black;
							text-decoration:none;
						}
					`}
					
				</style>
			</div>
		);
	}
}

export default Index;