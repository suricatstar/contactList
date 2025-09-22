import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { Contact } from '../../types';
import { RootState } from '../../store';
import { Container } from './styles';

interface ContactListProps {
    onEditContact: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ onEditContact }) => {
    const contacts: Contact[] = useSelector((state: RootState) => state.contacts);

    return (
        <Container>
            <h2>Lista de Contatos ({contacts.length})</h2>
            {contacts.length === 0 ? (
                <p>Nenhum contato cadastrado. Adicione um contato acima!</p>
            ) : (
                contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} onEditContact={onEditContact} />
                ))
            )}
        </Container>
    );
};

export default ContactList;