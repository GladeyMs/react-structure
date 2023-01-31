import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './stores'
import { Routes } from './routes'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Routes />
			</PersistGate>
		</Provider>
	)
}

export default App
