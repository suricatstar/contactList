import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Contact } from './types';

const App: React.FC = () => {
  const [editingContact, setEditingContact] = useState<Contact | undefined>(undefined);

  const handleSetCurrentContact = (contact: Contact | null | undefined) => {
    setEditingContact(contact || undefined);
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ContactForm 
        currentContact={editingContact} 
        setCurrentContact={handleSetCurrentContact}
      />
      <ContactList onEditContact={setEditingContact} />
    </div>
  );
};

export default App;