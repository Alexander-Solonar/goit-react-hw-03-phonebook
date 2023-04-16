import { Component } from 'react';
import userContacts from '../data/contacts.json';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import css from './App.module.css';

const LOCAL_KEY = 'array-users-contacts';

export class App extends Component {
  state = {
    contacts: userContacts,
    filter: '',
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LOCAL_KEY);
    if (savedState) this.setState({ contacts: JSON.parse(savedState) });
  }

  componentDidUpdate(_, prevState) {
    const stateContacts = this.state.contacts;

    if (prevState.contacts.length !== stateContacts.length)
      localStorage.setItem(LOCAL_KEY, JSON.stringify(stateContacts));
  }

  addContacts = newContact => {
    const newNameContact = newContact.name.toLowerCase();
    const stateContacts = this.state.contacts;

    const nameMatches = stateContacts.some(
      ({ name }) => name.toLowerCase() === newNameContact
    );

    if (nameMatches) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  filterChange = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onfilterChange={this.filterChange} />
        <ContactList
          data={this.visibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
