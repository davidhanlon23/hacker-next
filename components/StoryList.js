// eslint-disable-next-line no-unused-vars
import Link from "next/link";

const StoryList = ( { stories } ) =>(
	<div className="story-list">
		{ stories.map( story =>(
			
			<div className="story" key={story.id}>
				<h2 className="story-title">
					<a href={story.url}>{story.title}</a>
				</h2>

				<div className="story-details">
					<span>{story.points ||0} points</span>
					<Link href={`/story?id=${story.id}`}>
						<a>{story.comments_count || 0} comments</a>
					</Link>
				</div> 
				<style jsx>
					{`
                        .story-list{
                            padding: 1em 1em;
                          
                        }
                        .story{
                            padding: 1em 1em;
                        }
                        .story-title{
                            font-size: 1rem;
                            font-weight: 400;
                            margin:0;
                            margin-bottom: 0.5em;
                        }
                        .story-title a{
                            color:#000;
                            text-decoration:none;
                        }
                        .story-title a:hover, .story-detail a:hover{
                            
                            text-decoration:underline;
                        }
                        .story-details{
                            font-size:0.8rem;
                            font-weight:bold !important;
                        }
                        .story-details span{
                            margin-right:1em;
                        }
                        .story-details a{
                            color#6600ff;
                            text-decoration:none;
                        }
                    `}   
				</style>             
			</div>
		) )}
	</div>
);

export default StoryList;