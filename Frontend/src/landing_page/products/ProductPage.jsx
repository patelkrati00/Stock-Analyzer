import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageUrl="/media/images/kite.png"
        productName="Kite"
        productDescription="Experience ultra-fast trading with streaming market data, advanced charts, and an elegant interface. Seamlessly trade on the go with Kite's optimized performance across Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="Learn More"
        googlePlay="/media/images/googlePlayBadge.svg"
        appStore="/media/images/appstoreBadge.svg"
      />

      <RightSection
        imageUrl="/media/images/console.png"
        productName="Console"
        productDescription="Access the central dashboard for your Zerodha account. Get powerful insights into your trades and investments through detailed reports and intuitive visualizations—all in one place."
        learnMore="Learn More"
      />

      <LeftSection
        imageUrl="/media/images/coin.png"
        productName="Coin"
        productDescription="Invest in direct mutual funds online with zero commission, delivered straight to your Demat account. Enjoy a seamless investment experience on both Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="Learn More"
        googlePlay="/media/images/googlePlayBadge.svg"
        appStore="/media/images/appstoreBadge.svg"
      />

      <RightSection
        imageUrl="/media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Create next-gen trading platforms with our simple HTTP/JSON APIs. Startups can leverage our infrastructure to build investment apps and showcase them to our extensive client base."
        learnMore="Learn More"
      />{" "}

      <LeftSection
        imageUrl="/media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="Master the stock market with our easy-to-understand collection of in-depth lessons, complete with clear illustrations. The content is broken into bite-sized cards - perfect for learning on the go."
        tryDemo="Try Demo"
        learnMore="Learn More"
        googlePlay="/media/images/googlePlayBadge.svg"
        appStore="/media/images/appstoreBadge.svg"
      />

      <Universe />
    </>
  );
}

export default ProductPage;
