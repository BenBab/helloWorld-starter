import { connect } from 'react-redux'
import UsersList from '../../components/users/UsersList';
import * as actions from "../../../store/actions/index";

const mapStateToProps = state => {
    return {
        loading: state.users.loading,
        error: state.users.error,
        users: state.users.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: (url) => dispatch(actions.fetchUserData(url))
    };
  };
  
//assigns the relevant actions and redux state to be sent as props in the ShoppingCartList
export default connect(mapStateToProps, mapDispatchToProps )(UsersList)