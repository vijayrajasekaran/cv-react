import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const PageOne = lazy(() => import('./pages/PageOne'))
const PageTwo = lazy(() => import('./pages/PageTwo'))

const App = () => (
  <Router>
    <Suspense fallback = {
        <div className = 'bg-gray-900 flex justify-center items-center min-h-screen'>
          <span className = 'text-xl font-bold text-white'>Loading..</span>
        </div>
      }>
    <Switch>
      <Route exact path = '/' component = { PageOne }/>
      <Route exact path = '/two' component = { PageTwo }/>
    </Switch>
    </Suspense>
  </Router>
)

export default App
