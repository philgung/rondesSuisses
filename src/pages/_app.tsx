import type { AppProps} from 'next/app'
import '@material/button/dist/mdc.button.css'
import '@material/select/dist/mdc.select.css'

function MyApp({ Component, pageProps} : AppProps){
    return <Component{...pageProps} />
}

export default MyApp;