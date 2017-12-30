import Index from '../../pages/Index';
import {bindActionCreators} from 'redux';
import * as IndexAction from '../actions/IndexAction';
class IndexContainer extends React.Component {
    render() {
        return (
            <Index
                {...this.props}
            />
        );
    }
}
/** 绑定IndexReducer、IndexAction **/
export default connect(state => ({
        state: state.IndexReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(IndexAction, dispatch)
    })
)(IndexContainer);