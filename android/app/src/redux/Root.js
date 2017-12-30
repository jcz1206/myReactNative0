import { Provider } from 'react-redux';
import IndexContainer from './redux/containers/IndexContainer';
import configureStore from './redux/store/configure-store';
const store =configureStore();
const Root = () => (
    <Provider store={store}>
        <IndexContainer />
    </Provider>
);
export default Root;