import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableList } from './sortableList';
import { Card } from 'react-bootstrap';

function App() {
  const [language, setLanguage] = useState(["Python", "Javascript", "Typescript", "C++", "C#", "C", "Java"]);

  const dageEndHandler = (e) => {
    // console.log("Drag end...");
    const { active, over } = e;
    // console.log("Active : "+ active.id);
    // console.log("Over : "+ over.id);

    if (active.id !== over.id) {

      setLanguage(items => {
        // find index of drag item and drop on item
        // use array move to move drag item to drop item's index
        // and set a new state
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext   // allow to all in this can drag and drop
      collisionDetection={closestCenter}
      onDragEnd={dageEndHandler}
    >
      <Container  // use Bootstrap Container
        className='p-3'
        style={{ width: "50%" }}
        align="center"
      >
        <h1 className='mb-5'>What is the popular programming language</h1>
        <SortableContext                              // Allow all inside to sort
          items={language}                            // items that use to sortable
          strategy={verticalListSortingStrategy}      // sort by use vertical strategy
        >
          {language.map(language => <SortableList key={language} id={language} />)}
        </SortableContext>
      </Container>
    </DndContext>
  )
}

export default App
