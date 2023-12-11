import React, { useState } from "react";
import DietarySelections from "../components/DietarySelections";
import Title from "../components/Title";
import NextButton from "../components/NextButton";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";

export function SelectDiet() {
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSelect = (diet: string) => {
    if (selectedDiets.includes(diet)) {
      setSelectedDiets(selectedDiets.filter((d) => d !== diet));
    } else {
      setSelectedDiets([...selectedDiets, diet]);
    }
  };

  const handleNext = () => {
    const dietUrl = selectedDiets
      .map((diet) => diet.toLowerCase().replace(/ /g, ""))
      .sort()
      .join("/");
    navigate(`/${dietUrl}`);
  };

  return (
    <PageContainer>
      <Title
        title="Diet Scanner"
        subtitle="Select Diet"
        blurb="Have certain ingredients that you want to avoid? Select your diet below and we'll
        let you know if we spot any ingredients that may not adhere to your dietary preferences."
      />
      <DietarySelections
        onSelect={handleSelect}
        selectedDiets={selectedDiets}
      />
      <NextButton onClick={handleNext} disabled={selectedDiets.length === 0} />
    </PageContainer>
  );
}
