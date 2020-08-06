import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/50345995?s=460&u=44aa87e4ff3d423b7bb0566ef035f0d48bac6b00&v=4"
          alt="Christian"
        />
        <div>
          <strong>Christian Testtzlaffe</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id adipisci
        doloribus nesciunt vitae, repellendus expedita deleniti sapiente quas
        autem alias quae, repellat ad ipsam neque perferendis dignissimos quasi
        aliquid incidunt?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
