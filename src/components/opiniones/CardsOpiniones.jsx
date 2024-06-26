import { OpinionesContainer, OpininonesWrapper } from "./opinionesStyle";
import Opiniones from './CardOpinion';
import { useSelector, useDispatch } from 'react-redux';
import { randomOpinion } from '../../redux/opininones/opinionesSlice'; 
import styled from "styled-components";

function OpinionesCompra() {
  const { opiniones } = useSelector((state) => state.opiniones);
  const dispatch = useDispatch();

  // const handleReloadOpinions = () => {
  //   dispatch(randomOpinion());
  // };

  return (
    <OpininonesWrapper>
      <h2>Experiencias de compra: </h2>

      
      <OpinionesContainer>
        {opiniones.map(opinion => (
          <Opiniones key={opinion.id} {...opinion} />
        ))}
      </OpinionesContainer>

      {/* <BotonRecargar className='BotonRecargar' onClick={handleReloadOpinions}>SABER MAS</BotonRecargar> */}
      
    </OpininonesWrapper>
  );
}

export default OpinionesCompra;

// export const BotonRecargar = styled.button`
  
//   max-width: 12rem;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
//   font-size: 12px;

// `
