import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory} from 'react-router'

// import other components and insert them into 
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/repos" component={Repos}></Route>
			<Route path="repos/:userName/:repoName" component={Repo}></Route>
			<Route path="/about" component={About}></Route>	
		</Route>
	</Router>
), document.getElementById('app'))
