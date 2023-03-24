import styled from "styled-components";

const categories = [
  { id: 1, strCategory: "Ordinary Drink" },
  { id: 2, strCategory: "Cocktail" },
  { id: 3, strCategory: "Shake" },
  { id: 4, strCategory: "Other" },
  { id: 5, strCategory: "Cocoa" },
  { id: 6, strCategory: "Shot" },
  { id: 7, strCategory: "Party Drink" },
  { id: 8, strCategory: "Soft Drink" },
];

const HeroContainer = styled.div`
  border-bottom: 1px solid #d87093;
 margin:0;
 padding. 8px
  `;
const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 0.8rem;
  list-style-type: none;
  margin: 0;
  padding: 10px 8px;

  & li {
    border-bottom: 1px solid #242424;
    cursor: pointer;
    margin: 0;
    padding: 2px;

    &:hover {
      border-bottom: 1px solid #d87093;
      cursor: pointer;
      color: #d87093;
      transition: all 0.35s;
    }
  }
`;

const HeroStyled = ({ setFilteredList }) => {
  const onHandleClick = (value) => {
    setFilteredList(value);
  };
  return (
    <HeroContainer>
      <List>
        {categories.map((category) => (
          <li
            onClick={() => onHandleClick(category.strCategory)}
            key={category.id}
          >
            {category.strCategory.toUpperCase()}
          </li>
        ))}
      </List>
    </HeroContainer>
  );
};
export default HeroStyled;
