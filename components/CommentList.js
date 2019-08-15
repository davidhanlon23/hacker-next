// eslint-disable-next-line no-unused-vars
import Comment from "./Comment";
export default ( { comments } )=>(
	<React.Fragment>
		{comments.map( comment =>(
			<Comment key={comment.id} comment={comment}/>
		) )}
	</React.Fragment>
);