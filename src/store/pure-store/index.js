import { Provider } from 'react-redux';
import store from "./store"

const PureProvider = ({ children }) => (
    <Provider store={store}>
        { children }
    </Provider>
)

export default PureProvider