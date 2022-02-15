import React from 'react';

const Form = () => {
  return (
    <div className="formComponent">
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder="Cherchez un film" id="searchInput" />
          <input type="submit" placeholder="Rechercher" />
        </form>
        <div className="btnSortContainer">
          <div className="btnText">Classement</div>
          <div className="btnSort" id="goodToBad">
            <span>⇧</span>
          </div>
          <div className="btnSort" id="badToGood">
            <span>⇩</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
