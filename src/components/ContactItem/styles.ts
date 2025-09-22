import styled from 'styled-components';

export const ContactCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const ContactName = styled.h3`
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 1.3rem;
`;

export const ContactInfo = styled.p`
  color: #7f8c8d;
  margin-bottom: 8px;
  font-size: 14px;

  strong {
    color: #34495e;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const EditButton = styled.button`
  background: #f39c12;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e67e22;
  }
`;

export const RemoveButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #c0392b;
  }
`;