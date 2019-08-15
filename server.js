const next = require( "next" );

const http = require( "http" );
const url = require( "url" );
const path = require( "path" );

const dev = process.env.NODE_ENV !== "production";
const app = next( { dev } );
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;
app.prepare()
	.then( ()=>{
	
		http.createServer( ( req,res ) =>{
		//Parse request url to get its pathname
			const parsedUrl = url.parse( req.url, true );
			const { pathname }= parsedUrl;

			//if a service worker is requested, serve it as a static file

			if( pathname === "/service-worker.js" ){
				const filePath = path.join( __dirname, ".next", pathname );
				app.serveStatic( req,res , filePath );
			}

			else{
				handle( req,res,parsedUrl );
			}
		} ).listen( PORT, ()=>{
			console.log( `Listening on PORT ${PORT}` );
		} );
	} );