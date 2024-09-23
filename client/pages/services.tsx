import React from "react";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";
import Typography from "@/ui/typography/Typography";
import ServiceItemBlock from "@/components/services/ServiceItemBlock";

export default function Services() {
  const isMobile = useGetIsMobile();

  return (
    <section className="py-[100px] md:py-[280px] flex flex-col justify-center items-center">
      <Typography
        text={'Our Services'}
        type={isMobile ? 'heading2' : 'txt1'}
        className={'mb-2'}
        primaryElements={['Services']}
      />
      <Typography
        text={'Explore the tools and services designed to help you manage, grow, and optimize your wealth. Everything you need, all in one place.'}
        type={'heading6'}
        className={`md:px-20 px-0 text-center max-w-[970px] mb-[180px]`}
        color={'text-grayLight'}
      />
      <div className="flex flex-col space-y-20">
        <ServiceItemBlock
          title={'Track your Stocks'}
          description={'Wealth Mirror\'s "Track Your Stocks" service is a powerful feature designed to help users manage and monitor their stock investments efficiently. The Stocks can be from Indian, US or EU markets. This service integrates various functionalities that allow users to centralize their stock data, visualize performance, analyze trends, and take informed actions.'}
          primaryElements={['Stocks']}
          bigVideo={'/services/STOCK/STOCK_VIS.mp4'}
          smallVideo={'/services/STOCK/STOCK_ANIMATION.mp4'}
          stylesSmallVideo={"mt-8 ml-10"}
        />
        <ServiceItemBlock
          title={'Stalk your Mutual Funds'}
          description={'Wealth Mirror\'s "Stalk Your Mutual Funds" service is designed to empower users with comprehensive tools for tracking and managing their mutual fund investments. The mutual funds can be debt, equity or hybrid. This feature is integral to the Wealth Mirror platform, which aims to centralize financial data, enhance visualization, and provide actionable insights for better investment decisions.'}
          primaryElements={['Mutual', 'Funds']}
          direction={'left'}
          bigVideo={'/services/MUTUAL_FUNDS/MUTUAL_FUNDS_VIS.mp4'}
          smallVideo={'/services/MUTUAL_FUNDS/MUTUAL_FUNDS_ANIMATION.mp4'}
          stylesSmallVideo={"mb-5 mr-10"}
        />
        <ServiceItemBlock
          title={'Watch your Properties'}
          description={' Wealth Mirror\'s "Watch Your Properties" service is a comprehensive feature designed to help users effectively manage and monitor their real estate investments. The property can be residential or commercial. You can track your raw land, flat, villa or shop at a single place. This service integrates various functionalities that allow users to centralize property data, visualize performance, analyze trends, and make informed decisions regarding their property assets.'}
          primaryElements={['Properties']}
          bigVideo={'/services/PROPERTY/PROPERTY_VIS.mp4'}
          smallVideo={'/services/PROPERTY/PROPERTY_ANIMATION.mp4'}
          additionalVideo={'/services/PROPERTY/PROPERTY.mp4'}
        />
        <ServiceItemBlock
          title={'Monitor your Vehicles'}
          description={'Wealth Mirror\'s "Monitor Your Vehicles" service is an innovative feature designed to help users effectively manage and track their vehicle assets. Track your two wheeler/four wheeler, old/new vehicles all at a single place. This service integrates various functionalities that allow users to centralize vehicle data, visualize performance, analyze trends, and make informed decisions regarding their vehicles.'}
          primaryElements={['Vehicles']}
          direction={'left'}
          bigVideo={'/services/VEHICLES/VEHICLES_VIS.mp4'}
          smallVideo={'/services/VEHICLES/VEHICLES_ANIMATION.mp4'}
          stylesSmallVideo={"mb-10 mr-2"}
        />
        <ServiceItemBlock
          title={'Grow your Income'}
          description={'Wealth Mirror\'s "Grow Your Income" service is an essential feature designed to assist users in maximizing their income potential through strategic financial management. This service integrates various tools and insights that empower users to make informed decisions, optimize their investments, and ultimately enhance their overall financial well-being.'}
          primaryElements={['Income']}
          bigVideo={'/services/INCOME/INCOME_VIS.mp4'}
          smallVideo={'/services/INCOME/INCOME_ANIMATION.mp4'}
          stylesSmallVideo={"mb-12 mr-5"}
        />
        <ServiceItemBlock
          title={'Track your Expenses'}
          description={'Wealth Mirror\'s "Track Your Expenses" service is a vital feature designed to help users manage their spending effectively and gain control over their financial habits. The expenses can be Mobile Recharge, DTH, OTT, Bills, etc. This service integrates various functionalities that allow users to centralize their expense data, visualize spending patterns, analyze trends, and make informed decisions to achieve their financial goals.'}
          primaryElements={['Expenses']}
          direction={'left'}
          bigVideo={'/services/EXPENSES/EXPENSES_VIS.mp4'}
          smallVideo={'/services/EXPENSES/EXPENSES_ANIMATION.mp4'}
          stylesSmallVideo={"ml-4 mt-4"}
        />
        <ServiceItemBlock
          title={'Optimize your Fixed Deposits'}
          description={'Wealth Mirror\'s "Optimize Your Fixed Deposits" service is a strategic feature designed to help users maximize the returns on their fixed deposit investments. This service integrates various tools and insights that empower users to make informed decisions, manage their fixed deposits effectively, and achieve their financial objectives.'}
          primaryElements={['Fixed', 'Deposits']}
          bigVideo={'/services/FIXED_DEPOSIT/FIXED_DEPOSIT_VIS.mp4'}
          smallVideo={'/services/FIXED_DEPOSIT/FIXED_DEPOSIT_ANIMATION.mp4'}
          stylesSmallVideo={"mb-10 mr-5"}
        />
        <ServiceItemBlock
          title={'Keep Tabs on your Gold'}
          description={'Wealth Mirror\'s "Keep Tabs on Your Gold" service is a specialized feature designed to help users effectively manage and monitor their gold investments. The gold can be physical, digital or a gold bond. This service integrates various functionalities that allow users to centralize their gold data, visualize performance, analyze trends, and make informed decisions regarding their precious metal assets.'}
          primaryElements={['Gold']}
          direction={'left'}
          bigVideo={'/services/GOLD/GOLD_VIS.mp4'}
          smallVideo={'/services/GOLD/GOLD_ANIMATION.mp4'}
          stylesSmallVideo={"mt-7 mr-32"}
        />
        <ServiceItemBlock
          title={'Decipher your Crypto'}
          description={'Wealth Mirror\'s "Decipher Your Crypto" service is an essential feature designed to help users effectively manage and understand their cryptocurrency investments. As the crypto market can be complex and volatile, this service provides users with the tools and insights necessary to navigate their digital assets confidently.'}
          primaryElements={['Crypto']}
          bigVideo={'/services/CRYPTO/CRYPTO_VIS.mp4'}
          smallVideo={'/services/CRYPTO/CRYPTO_ANIMATION.mp4'}
        />
        <ServiceItemBlock
          title={'Manage your Liquid Cash'}
          description={'Wealth Mirror\'s "Manage Your Liquid Cash" service helps you effectively oversee and optimize your liquid assets. Keep track of your cash in bank accounts, savings, and other readily accessible funds all in one place. This service centralizes your financial data, allowing you to visualize cash flow, monitor balances, analyze spending patterns, and make informed decisions to better manage your liquidity.'}
          primaryElements={['Liquid', 'Cash']}
          direction={'left'}
          bigVideo={'/services/LIQUID_CASH/LIQUID_CASH_VIS.mp4'}
          smallVideo={'/services/LIQUID_CASH/LIQUID_CASH_ANIMATION.mp4'}
        />
        <ServiceItemBlock
          title={'Streamline your Savings'}
          description={'Wealth Mirror\'s "Streamline Your Savings" service is designed to give you full control over your savings accounts. Easily track your short-term and long-term savings goals in one convenient place. This service allows you to centralize your savings data, visualize growth, analyze interest accumulation, and make strategic decisions to maximize your savings potential and secure your financial future.'}
          primaryElements={['Savings']}
          bigVideo={'/services/SAVINGS/SAVINGS_VIS.mp4'}
          smallVideo={'/services/SAVINGS/SAVINGS_ANIMATION.mp4'}
          stylesSmallVideo={"mt-14 ml-10"}
        />
        <ServiceItemBlock
          title={'Monitor your Cards'}
          description={'Wealth Mirror\'s "Monitor Your Cards" service is a comprehensive feature designed to help users effectively oversee their credit and debit cards within a centralized platform. This service aims to simplify card management, enhance financial awareness, and provide users with the tools necessary to optimize their spending and security.'}
          primaryElements={['Cards']}
          direction={'left'}
          bigVideo={'/services/CARD/CARD_VIS.mp4'}
          smallVideo={'/services/CARD/CARD_ANIMATION.mp4'}
          stylesSmallVideo={"mt-5"}
        />
      </div>
    </section>
  )
}
