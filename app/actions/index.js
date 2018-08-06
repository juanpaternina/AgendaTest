import axios from 'axios';
import _ from 'lodash';

const ListApiUrl = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb';
const ContactApiUrl = 'https://randomuser.me/api';

export const fetchAgenda = () => async (dispatch, getState) => {
	console.log('call fetch agenda');
	const contactsList = await axios.get(ListApiUrl);
	const contacts = contactsList.data.results[0];

	result = [];

	_.forEach(contacts, (contact) => {
		const finded = _.find(result, { title: contact.first.charAt(0) });
		const ct = {
			name: `${contact.first} ${contact.last}`,
			job: "Drywall Contractor's",
		};
		if (!finded) {
			result.push({ title: ct.name.charAt(0), data: [ ct ] });
		} else {
			const index = result.indexOf(finded);
			result[index].data.push(ct);
			result[index].data = _.sortBy(result[index].data, 'name');
		}
	});

	dispatch(isLoadingAgenda(false));
	dispatch(setContacts(_.sortBy(result, 'title')));
};

export const fetchContact = () => async (dispatch, getState) => {
	console.log('contact fetched');
	dispatch(isLoadingContact(true));
	const userApi = await axios.get(ContactApiUrl);
	dispatch(isLoadingContact(false));
	const contact = {
		firstName: _.startCase(_.toLower(userApi.data.results[0].name.first)),
		lastName: _.startCase(_.toLower(userApi.data.results[0].name.last)),
		phone: userApi.data.results[0].phone,
		location: _.startCase(_.toLower(userApi.data.results[0].location.city)),
		picture: userApi.data.results[0].picture.medium,
	};
	dispatch(setContact(contact));
};

export const isLoadingAgenda = (loading) => ({
	type: 'IS_LOADING_AGENDA',
	isLoading: loading,
});

export const isLoadingContact = (loading) => ({
	type: 'IS_LOADING_CONTACT',
	isLoading: loading,
});

export const setContacts = (contacts) => ({
	type: 'SET_CONTACTS',
	contacts,
	isLoading: false,
});

export const setContact = (contact) => ({
	type: 'SET_CONTACT',
	contact,
	isLoading: false,
});
