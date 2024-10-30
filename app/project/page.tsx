import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Project() {
  return (
    <>
      <Header />
      <h1 className=" text-xl md:text-3xl text-center m-8 font-bold">Project</h1>
      <main className="md:w-[1170px] md:mx-auto mt-20 mx-5">

        <div className="grid md:grid-cols-3 ml-32 space-y-10 md:space-y-0 md:m-0 gap-x-10">
          {/* card Calculator */}
          <Card heading="Calculator" discription="This is a cli Calculator use Typescript and Inquirer for user input on cli and style with Chalk." btnText="Explore" imageSrc="/calculator.png" linkURL="https://www.npmjs.com/package/sy66-simple-calculator"/>
          {/* card Number Guessing */}
          <Card heading="Number Guessing" discription="This is a cli Number Guessing game use Typescript and Inquirer for user input on cli and style with Chalk." btnText="Explore" imageSrc="/number-guessing-game.jpg" linkURL="https://www.npmjs.com/package/sy66-cli-number-guessing"/>
          {/* card ATM */}
          <Card heading="ATM" discription="This is a cli ATM Machine use Typescript and Inquirer for user input on cli and style with Chalk." btnText="Explore" imageSrc="/atm.jpg" linkURL="https://www.npmjs.com/package/sy66-atm"/>
        </div>
        {/* more card */}
        <div className="grid md:grid-cols-3 ml-32 space-y-10 md:space-y-0 md:m-0 gap-x-10">
          {/* card Currency Converter */}
          <Card heading="Currency Converter" discription="This is a cli Currency Converter use Typescript and Inquirer for user input on cli and style with Chalk." btnText="Explore" imageSrc="/currency.jpg" linkURL="https://www.npmjs.com/package/sy66-currencyconverter"/>
          {/* card Word Counter */}
          <Card heading="Word Counter" discription="This is a cli Word Counter game use Typescript and Inquirer for user input on cli and style with Chalk." btnText="Explore" imageSrc="/word.jpg" linkURL="https://www.npmjs.com/package/sy66-wordcounter"/>
          {/* card ATM */}
          <Card heading="Result Check App" discription="This is a cli ATM Machine use Typescript and Inquirer for user input on cli and style with Chalk." btnText="Explore" imageSrc="/result.jpg" linkURL="https://www.npmjs.com/package/sy6-result-check-application"/>

        </div>
      </main>
      <Footer />
    </>
  );
}
