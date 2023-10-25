import React from "react";
import PageContainer from "../components/PageContainer";
import Title from "../components/Title";
import BackButton from "../components/BackButton";

interface AddIngredientsProps {
  diet: string;
}

const AddIngredients: React.FC<AddIngredientsProps> = ({ diet }) => {
  return (
    <PageContainer>
      <Title title="Diet Scanner" subtitle={`Add Ingredients: ${diet}`} />
      <BackButton to="/" />
      {/* Add more content as needed */}
    </PageContainer>
  );
};

export default AddIngredients;
