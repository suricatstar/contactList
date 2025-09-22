import styled from 'styled-components';

export const ContactListContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ContactListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
`;

export const ContactListItems = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

// Alias para compatibilidade
export const Container = ContactListContainer;