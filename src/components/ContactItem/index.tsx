import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../store/actions/contactsActions';
import { Contact } from '../../types';
import {
  ContactCard,
  ContactName,
  ContactInfo,
  ButtonGroup,
  EditButton,
  RemoveButton
} from './styles';

interface ContactItemProps {
  contact: Contact;
  onEditContact: (contact: Contact) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEditContact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (window.confirm(`Tem certeza que deseja remover ${contact.name}?`)) {
      dispatch(removeContact(contact.id));
    }
  };

  const handleEdit = () => {
    onEditContact(contact);
  };

  return (
    <ContactCard>
      <ContactName>{contact.name}</ContactName>
      <ContactInfo><strong>Email:</strong> {contact.email}</ContactInfo>
      <ContactInfo><strong>Telefone:</strong> {contact.phone}</ContactInfo>
      <ButtonGroup>
        <EditButton onClick={handleEdit}>Editar</EditButton>
        <RemoveButton onClick={handleRemove}>Remover</RemoveButton>
      </ButtonGroup>
    </ContactCard>
  );
};

export default ContactItem;