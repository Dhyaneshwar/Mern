import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

const UserItem = (props) => {
  const { id, name, image, placeCount } = props;

  return (
    <li className="user-item" id={id}>
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} Place{placeCount > 1 && "s"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
