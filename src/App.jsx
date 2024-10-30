// src/App.jsx
import './App.css';
import { useState } from "react";

export default function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);

  const zombieFighters = [
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
    { name: 'Brawler', price: 11, strength: 8, agility: 3, img: 'https://via.placeholder.com/150/8985dc' },
    { name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: 'https://via.placeholder.com/150/392537' },
    { name: 'Leader', price: 22, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/602b9e' },
  ];

  const handleAddFighter = (fighter) => {
    money >= fighter.price 
      ? (setTeam([...team, fighter]), setMoney(money - fighter.price)) 
      : alert('Not enough money');
  };

  const handleRemoveFighter = (index) => {
    const removeFighter = team[index];
    setTeam(team.filter((_, i) => i !== index));
    setMoney(money + removeFighter.price);
  };

  const totalStrength = team.reduce((acc, fighter) => acc + fighter.strength, 0);
  const totalAgility = team.reduce((acc, fighter) => acc + fighter.agility, 0);

  return (
    <div className="app-container">
      <h1>Zombie Fighters</h1>
      <div className="stats">
        <p>Money: ${money}</p>
        <p>Total Strength: {totalStrength}</p>
        <p>Total Agility: {totalAgility}</p>
      </div>

      <h2>Choose Your Fighter!</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt="Fighter" />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      {team.length > 0 ? (
        <ul>
          {team.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt="Fighter" />
              <h2>{fighter.name}</h2>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Pick some team members!</p>
      )}
    </div>
  );
}
