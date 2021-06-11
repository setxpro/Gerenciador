import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

function Ordenation(props) {
  const handleAscDesc = () => {
    return props.orderAsc || props.oderDesc ? "hidden" : "";
  };

  const handleAsc = () => {
    return props.orderAsc ? "" : "hidden";
  };

  const handleDesc = () => {
    return props.oderDesc ? "" : "hidden";
  };

  return (
    <span>
      <FontAwesomeIcon icon={faSort} className={handleAscDesc()} />
      <FontAwesomeIcon icon={faSortUp} className={handleAsc()} />
      <FontAwesomeIcon icon={faSortDown} className={handleDesc()} />
    </span>
  );
}

Ordenation.propTypes = {
  orderAsc: PropTypes.bool.isRequired,
  oderDesc: PropTypes.bool.isRequired,
};

export default Ordenation;
