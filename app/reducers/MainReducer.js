const initialState = {
	agendaLoading: true,
	contactLoading: false,
	contact: {},
	contacts: [],
};

export default (info = (state = initialState, action) => {
	switch (action.type) {
		case 'IS_LOADING_AGENDA':
			return {
				...state,
				agendaLoading: action.isLoading,
			};

		case 'IS_LOADING_CONTACT':
			return {
				...state,
				contactLoading: action.isLoading,
			};

		case 'SET_CONTACT':
			return {
				...state,
				contact: action.contact,
				contactLoading: action.isLoading,
			};

		case 'SET_CONTACTS':
			return {
				...state,
				contacts: action.contacts,
				contactLoading: action.isLoading,
			};

		default:
			return state;
	}
});
