import App from './App.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
import { DarkModeContext } from './context/darkModeContext.jsx'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
	<DarkModeContext.Provider>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</DarkModeContext.Provider>
)
