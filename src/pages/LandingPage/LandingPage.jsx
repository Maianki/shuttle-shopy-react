import React from 'react'
import {Navbar, Header, Footer ,CategoryCard,FeaturesCard} from "../../components"
import "./landingPage.css"
import {categories} from "../../data/category-data"
import { features } from '../../data/features-data'

function LandingPage() {
  return (
      <>
        <Navbar/>
        <Header/>
        <main>
            {/* Featured Categories */}
            <h1 className="text-center md-btm-2">Categories</h1>
            <section className="flex-row-center category-container"> 
                {
                    categories.map(({category,img})=>{
                        return <CategoryCard category={category} img={img}/>
                    })
                }
            </section>
            {/* Featured Container */}
            <h1 className="text-center md-btm-3">Why choose Shuttle Shopy</h1>
            <section className="flex-row-center feature-container">
                {
                    features.map(({title,description,Icon})=>{
                        return <FeaturesCard title={title} description={description} icon = {<Icon/>}/>
                    })
                }
            </section>
        </main>

        <Footer/>
      </>
  )
}

export {LandingPage}