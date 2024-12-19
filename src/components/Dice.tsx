import React from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

interface DiceProps {
  value: number | null;
  onRoll: () => void;
  disabled: boolean;
}

const Dice: React.FC<DiceProps> = ({ value, onRoll, disabled }) => {
  const getDiceIcon = () => {
    switch (value) {
      case 1: return <Dice1 size={48} />;
      case 2: return <Dice2 size={48} />;
      case 3: return <Dice3 size={48} />;
      case 4: return <Dice4 size={48} />;
      case 5: return <Dice5 size={48} />;
      case 6: return <Dice6 size={48} />;
      default: return <Dice1 size={48} />;
    }
  };

  return (
    <button
      onClick={onRoll}
      disabled={disabled}
      className={`p-4 rounded-lg shadow-md transition-all
        ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:shadow-lg'}`}
    >
      {getDiceIcon()}
    </button>
  );
};

export default Dice;