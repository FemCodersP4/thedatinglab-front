import Image from "next/image";
import TabButton from "./TabButton";
import { useState } from "react";

export default function TabProfile({ handleButtonClick }) {
  const [activeButton, setActiveButton] = useState('Perfil');

  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-2 lg:border-b-red-orange  lg:pb-8 lg:border-b-2 ">
      <TabButton 
        label="Tu Perfil" 
        onClick={() => {
          handleButtonClick('Perfil');
          setActiveButton('Perfil');
        }} 
        isActive={activeButton === 'Perfil'} 
      />
      <TabButton 
        label="Tus Matches" 
        img={
          <Image 
            src="/assets/image/icon-small-heart.svg" 
            width={24}
            height={24}
            alt="ícono corazón" 
          />
        } 
        onClick={() => {
          handleButtonClick('Matches');
          setActiveButton('Matches');
        }} 
        isActive={activeButton === 'Matches'} 
      />
      <TabButton 
        label="Tus Experiencias" 
        onClick={() => {
          handleButtonClick('Eventos');
          setActiveButton('Eventos');
        }} 
        isActive={activeButton === 'Eventos'} 
      />
      <TabButton 
        label="Test de Compatibilidad" 
        onClick={() => {
          handleButtonClick('Test');
          setActiveButton('Test');
        }} 
        isActive={activeButton === 'Test'} 
      />
    </div>
  );
}