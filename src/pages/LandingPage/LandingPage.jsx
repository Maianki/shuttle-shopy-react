import React from "react";
import "./landingPage.css";
import {
  Navbar,
  Header,
  Footer,
  CategoryCard,
  FeaturesCard,
  ProductCard,
} from "../../components";
import { useDocumentTitle } from "../../hooks";
// import { categories } from "../../data/category-data";
import { categoriesAPI } from "../../constants/apiEndPoints";
import { features } from "../../data/features-data";
import { productsList } from "../../data/products-data";
import { useAxios } from "../../hooks/useAxios";

function LandingPage() {
  useDocumentTitle("Home Page");
  const { response: categories } = useAxios(categoriesAPI);

  return (
    <div>
      <Navbar />
      <Header />
      <main>
        {/* Featured Categories */}
        <h1 className='text-center md-btm-2'>Categories</h1>
        <section className='flex-row-center category-container'>
          {categories.map((category) => {
            return <CategoryCard key={category._id} category={category} />;
          })}
        </section>
        {/* Featured Container */}
        <h1 className='text-center md-btm-3'>Why choose Shuttle Shopy</h1>
        <section className='flex-row-center feature-container'>
          {features.map(({ title, description, Icon }) => {
            return (
              <FeaturesCard
                title={title}
                description={description}
                icon={<Icon />}
              />
            );
          })}
        </section>

        {/* popular purchase */}
        <h1 className='text-center md-btm-3'>Popular Purchase</h1>
        <section className='trending-container flex-row-center'>
          {productsList.map((product) => {
            return <ProductCard product={product} />;
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export { LandingPage };
