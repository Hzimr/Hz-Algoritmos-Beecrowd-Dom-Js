import { CategoriesList } from "./components/constants/data"
import { ThemeToggle } from './components/Theme/ThemeToggle'

const handleRenderizeListCategories = () => {
  return CategoriesList.map(category => {
    return (
      <button className={`${category.backgroundColor} flex p-4 gap-2 w-96 }`} key={category.id} >
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
      </button >
    )
  })
}

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-primaryColor-container">
      <header className="flex py-2 px-2 items-center justify-between bg-primaryColor-primary">
          <h1>Algorithms Project</h1>
          <ThemeToggle />
      </header>
            <div className="flex h-full items-center justify-center font-serif">
        <div className="flex items-center justify-center p-2 gap-4 flex-wrap text-white w-[1440px] bg-primaryColor-onContainer">
          {handleRenderizeListCategories()}
        </div>
      </div>
    </main>
  )
}
