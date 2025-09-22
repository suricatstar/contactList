import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../../store/actions/contactsActions';
import { Contact } from '../../types';
import {
  FormContainer,
  FormTitle,
  InputGroup,
  Input,
  ButtonGroup,
  SubmitButton,
  CancelButton
} from './styles';

const ContactForm: React.FC<{ currentContact?: Contact; setCurrentContact?: (contact: Contact | null | undefined) => void }> = ({ currentContact, setCurrentContact }) => {
    const [name, setName] = useState(currentContact ? currentContact.name : '');
    const [email, setEmail] = useState(currentContact ? currentContact.email : '');
    const [phone, setPhone] = useState(currentContact ? currentContact.phone : '');
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);
        }
    }, [currentContact]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentContact) {
            dispatch(editContact({ ...currentContact, name, email, phone }));
        } else {
            dispatch(addContact({ id: Date.now().toString(), name, email, phone }));
        }
        clearFields();
    };

    const clearFields = () => {
        setName('');
        setEmail('');
        setPhone('');
        if (setCurrentContact) setCurrentContact(undefined);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>{currentContact ? 'Editar Contato' : 'Adicionar Novo Contato'}</FormTitle>
            <InputGroup>
                <Input
                    type="text"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </InputGroup>
            <InputGroup>
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </InputGroup>
            <InputGroup>
                <Input
                    type="tel"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </InputGroup>
            <ButtonGroup>
                <SubmitButton type="submit">
                    {currentContact ? 'Salvar Alterações' : 'Adicionar Contato'}
                </SubmitButton>
                {currentContact && (
                    <CancelButton type="button" onClick={clearFields}>
                        Cancelar Edição
                    </CancelButton>
                )}
            </ButtonGroup>
        </FormContainer>
    );
};

export default ContactForm;