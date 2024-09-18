import { useState,Fragment } from 'react';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import TabContent from './components/TabContent/TabContent.jsx';

function App() {
  const [selectedTopic, setSelected] = useState('');
  function handleSelect(selected){
    setSelected(selected);
  }

  let tabContent=<p>Select an example</p>;
  if(selectedTopic){
    tabContent=<TabContent {...EXAMPLES[selectedTopic]}/>
  }

  return (
    //note 
    //to prevent extra div, can use <Fragment> to wrap multiple elements
    //or use empty element tag <> content </>
    <>
      <Header />
      <main>
        <section>
          <h2>Time to get started!</h2>
          <div id='core-concepts'>
            <ul>
              {/* short form
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              long form
              <CoreConcept
                title={CORE_CONCEPTS[3].title}
                image={CORE_CONCEPTS[3].image}
                description={CORE_CONCEPTS[3].description}
              /> */}

              {CORE_CONCEPTS.map(
                (conceptItem) => <CoreConcept {...conceptItem} key={conceptItem.title} />
              )}
            </ul>

          </div>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>

          </menu>
          {tabContent}
        </section>


      </main>


    </>
  );
}

export default App;
