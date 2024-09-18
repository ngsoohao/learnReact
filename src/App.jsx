
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {

  function handleSelect(selected){
    console.log(selected);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Time to get started!</h2>
          <div id='core-concepts'>
            <ul>
              {/* short form */}
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              {/* long form */}
              <CoreConcept
                title={CORE_CONCEPTS[3].title}
                image={CORE_CONCEPTS[3].image}
                description={CORE_CONCEPTS[3].description}
              />
            </ul>

          </div>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect('component')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>

          </menu>
        </section>

      </main>


    </div>
  );
}

export default App;
