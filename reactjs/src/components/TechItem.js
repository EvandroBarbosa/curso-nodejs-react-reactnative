import React from 'react'
import PropTypes from 'prop-types'

function TechItem({ tech, onDelete }) {
  return(
    <li>
      {tech}
      <button type="button" onClick={onDelete} >Remover</button>
    </li>
  )
}
/* Conceito de default props
 Essa propriedade é preenchida caso o usuário não informe nenhuma informação */
/* TechItem.defaultProps = {
  tech: "Oculta"
} */

/* Conceito de prop types 
Quando é passado uma prop types como obrigatória, isso força o desenvolvedor
a declarar essa propriedade no componente, assim o defaultprops se torna desnecessario*/
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}
export default TechItem;