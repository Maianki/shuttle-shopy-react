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
import { useDocumentTitle, useAxios } from "../../hooks";
import { CATEGORIES_API } from "../../constants/apiEndPoints";
import { features } from "../../data/features-data";
import { useProducts } from "../../context/products-context";

function LandingPage() {
  useDocumentTitle("Home Page");
  const {
    products: { productsList },
  } = useProducts();

  const { response: categories } = useAxios(CATEGORIES_API);

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
          {features.map(({ _id, title, description, Icon }) => {
            return (
              <FeaturesCard
                key={_id}
                title={title}
                description={description}
                icon={<Icon />}
              />
            );
          })}
        </section>

        <h1 className='text-center md-btm-3'>Popular Purchase</h1>
        <section className='trending-container flex-row-center'>
          {productsList
            .filter((product) => product.badge === "Trending")
            .map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export { LandingPage };
