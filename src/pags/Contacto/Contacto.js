import styled from 'styled-components';

export const ContactoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  margin: 5rem auto;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  z-index: -2; 
  
  img {
    max-width:350px;
    border-radius: 10px;
    margin-top: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
      max-width: 200px;
      margin-bottom: 4rem;
    }
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  height : auto ;
  max-width: 500px;
  font-family: var(--font-family);

  

  @media (max-width: 768px) {
    margin-top: 3rem;
    max-width: 300px;
  }
`;

export const Etiqueta = styled.label`
  margin-bottom: 8px; 
  font-family: var(--font-family);
  
`;

export const Input = styled.input`
  border-radius: 10px;
  margin-bottom: 16px; 
  padding: 0.5rem;
`;

export const Textarea = styled.textarea`

  margin-bottom: 16px; 
  border-radius: 10px;
`;

export const BotonEnviar = styled.button`
  padding: 10px 20px;
  font-size: 12px;
  background-color: var( --btn-Background);

  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
  font-size: 1.2rem;
  font-weight: 400;
  /* z-index: -2 ; */


`;

export const GrupoEtiquetaInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height : auto ;
  max-width: 380px;
  margin-top: 1rem;
  
`;

export const Errormessage = styled.p`

  color: red;
  font-size: 13px;
  font-weight: 400;

`;