import Index from './index'
import '../styles/globals.css';
import Layout from "../components/Layout";

function App ({Component, props}) {
    return(
        <Layout>
         <Component {...props}/>
        </Layout>
    )
}

export default App;