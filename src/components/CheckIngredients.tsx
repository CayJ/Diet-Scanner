import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../actions";
import { RootState } from "../reducers";
import PageContainer from "../components/PageContainer";
import Title from "../components/Title";
import BackButton from "../components/BackButton";

interface CheckIngredientsProps {
  diet: string;
}

const CheckIngredients: React.FC<CheckIngredientsProps> = ({ diet }) => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state: RootState) => state.diet);

  return (
    <PageContainer>
      <Title
        title="Diet Scanner"
        subtitle={`Flagged Ingredients for: ${diet}`}
      />
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <BackButton onClick={() => dispatch(toggleView("SET_INGREDIENTS"))} />
    </PageContainer>
  );
};

export default CheckIngredients;
