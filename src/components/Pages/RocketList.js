import React from 'react';
import { useSelector } from 'react-redux';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedDisplay = rockets.filter((rocket) => (rocket.reserved) === true);
  return (
    <ul className="rocket-ul">
      {reservedDisplay.map((display) => (
        <li key={display.id}>
          <p>{display.rocket_name}</p>
        </li>
      ))}
    </ul>
  );
};

export default RocketList;
