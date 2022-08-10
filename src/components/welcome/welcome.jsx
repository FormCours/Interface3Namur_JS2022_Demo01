import PropTypes from 'prop-types';
import style from './welcome.module.css';

// Composant React
const Welcome = ({ firstname, lastname, age }) => {

    return (
        <div>
            <h2 className={style.demo}>{firstname} {lastname}</h2>
            <p>L'age de la personne est de {age}</p>
        </div>
    );
};

// Définir les valeur de props par defaut
Welcome.defaultProps = {
    age: 42
};

// Ajouter le typage avec PropTypes
Welcome.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number
};

export default Welcome;