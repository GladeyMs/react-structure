import React, { lazy, Suspense } from 'react'
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'
import { Result } from 'antd'
import { Layout } from '../Layout'
import { ROUTE_PATH } from '../helpers'
import { Homepage } from '../pages/Homepage'
import { Report } from '../pages/Report'
import { About } from '../pages/About'
import { Login } from '../pages/Login'

// const Homepage = lazy(() => import('../pages/Homepage'))

export const Routes = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route
						path={`${ROUTE_PATH.HOMEPAGE.LINK}`}
						element={
							<Suspense fallback={<></>}>
								<Homepage />
							</Suspense>
						}
					/>
					<Route
						path={`/login`}
						element={
							<Suspense fallback={<>loading...</>}>
								<Login />
							</Suspense>
						}
					/>
					<Route
						path={`/about`}
						element={
							<Suspense fallback={<>loading...</>}>
								<About />
							</Suspense>
						}
					/>
					<Route
						path={`${ROUTE_PATH.REPORT.LINK}`}
						element={
							<Suspense fallback={<></>}>
								<Report />
							</Suspense>
						}
					/>
					<Route
						path='*'
						element={
							<Result
								status='404'
								title='404'
								subTitle='Sorry, the page you visited does not exist.'
							/>
						}
					/>
				</Switch>
			</Layout>
		</Router>
	)
}
