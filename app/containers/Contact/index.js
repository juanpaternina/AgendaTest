/* @flow weak */

import { connect } from 'react-redux';
import Component from './component';

import { fetchContact } from '../../actions';

const mapStateToProps = (state) => ({
	loading: state.main.contactLoading,
	contact: state.main.contact,
});

const mapDispatchToProps = (dispatch) => ({
	fetchContact: () => dispatch(fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
