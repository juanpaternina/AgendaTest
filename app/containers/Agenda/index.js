/* @flow weak */

import { connect } from 'react-redux';
import Component from './component';

import { fetchAgenda, makeFavourite } from '../../actions';
import NavigationService from '../../helpers/NavigationService';

const mapStateToProps = (state) => ({
	loading: state.main.agendaLoading,
	contacts: state.main.contacts,
});

const mapDispatchToProps = (dispatch) => ({
	fetchAgenda: () => dispatch(fetchAgenda()),
	toContact: () => NavigationService.navigate('Contact'),
	makeFavourite: () => dispatch(makeFavourite()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
