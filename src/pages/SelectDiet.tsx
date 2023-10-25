import React, { useState } from "react";
import DietarySelections from "../components/DietarySelections";
import Title from "../components/Title";
import NextButton from "../components/NextButton";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";

export function SelectDiet() {
  const [selectedDiet, setSelectedDiet] = useState<string>("");
  const navigate = useNavigate();

  const handleSelect = (diet: string) => {
    setSelectedDiet(diet);
  };

  const handleNext = () => {
    const dietUrl = selectedDiet.toLowerCase().replace(/ /g, "");
    navigate(`/${dietUrl}`);
  };

  return (
    <PageContainer>
      <Title title="Diet Scanner" subtitle="Select Diet" />
      <DietarySelections onSelect={handleSelect} selectedDiet={selectedDiet} />
      <NextButton onClick={handleNext} disabled={!selectedDiet} />
    </PageContainer>
  );
}
