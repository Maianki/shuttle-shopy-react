import React from 'react'
import "./landingPage.css"
import {Navbar, Header, Footer ,CategoryCard,FeaturesCard,ProductCard} from "../../components"
import {categories} from "../../data/category-data"
import { features } from "../../data/features-data"
import { productsList } from "../../data/products-data"

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

            {/* popular purchase */}
            <h1 className="text-center md-btm-3">Popular Purchase</h1>
            <section className="trending-container flex-row-center">
                {
                    productsList.map(({badge,img,name,description,price:{original,discounted,discount},Icon})=>{
                        return <ProductCard badge={badge} img={img} discountPercent={discount} description={description} originalPrice={original} discountedPrice={discounted} name={name} icon={<Icon/>}/>
                    })
                }
            </section>
    
        </main>

        <Footer/>
      </>
  )
}

export {LandingPage}