import React, {useState} from 'react';
import './App.css';
import UncontrolledOnOf from "./components/UncontrolledOnOf/UncontrolledOnOf";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOf /OnOf";

function App() {
  console.log("App rendering");
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
      <div>

        <UncontrolledOnOf onChange={setSwitchOn}/> {switchOn.toString()}

        <OnOff onOf={switchOn} onChange={setSwitchOn}/>

        <Accordion items={[{title: "One", value: 1}, {title: "Two", value: 2}, {title: "Three", value: 3}]}
                   onClick={(id) => {
                     alert(`user with ID ${id} should be happy`)
                   }} titleValue={"Accordion"} collapsed={accordionCollapsed} onChange={() => {
          setAccordionCollapsed(!accordionCollapsed)
        }
        }/>
        <UncontrolledAccordion titleValue={"Menu"}/>
        <UncontrolledAccordion titleValue={"Users"}/>
        <UncontrolledRating/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
      </div>
  );
}

type PagePropsType = {
  title: string
}

function PageTitle(props: PagePropsType) {
  console.log("PageTitle rendering");
  return (
      <h1>{props.title}</h1>
  )

}


export default App;
