'use client'
import { CategoriesList } from "@/components/constants/data"
import styled from "styled-components"

const Header = styled.header`
  display: flex;
  background: var(--primary-color);
`

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--primary-container);
`

const ContentDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const CategoriesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 1rem;
  flex-wrap: wrap;
  color: white;
  width: 1440px;
  background-color: var(--on-primary-container);
`

const CategorieCard = styled.button`
  display: flex;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${props => props.color};
  width: 25rem;
`

const handleRenderizeListCategories = () => {
  return CategoriesList.map(category => {
    return (
      <CategorieCard key={category.id} color={category.backgroundColor} >
        <div>
          {category.id}
        </div>
        <div>
          <div>
            {category.name}
          </div>
          <div>
            {category.problems}
          </div>
          <div>
            {category.solutions}
          </div>
        </div>
      </CategorieCard >
    )
  })
}

export default function Home() {
  return (
    <MainContent>
      <Header>
          Header
      </Header>
      <ContentDiv className="font-serif">
        <CategoriesDiv>
          {handleRenderizeListCategories()}
        </CategoriesDiv>
      </ContentDiv>
    </MainContent>
  )
}
