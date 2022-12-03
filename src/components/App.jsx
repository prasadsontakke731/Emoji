import React from 'react';
// import Entry from './Entry';
// import emojipedia from '../emojipedia';
import Header from './Header';
// import Note from './Note';
import Footer from './Footer';
// import menuItem from '../menuItem';
// import notes from '../notes';
// import mealtype from '../mealtype';
// import Meal from './Meal';
import Menu from './Menu';
// import mealtype from '../mealtype';
import menuItem from '../menuItem';

function App() {
  // function createEntry(emojiTerm) {
  //   return (
  //     // <Entry
  //     //   key={emojiTerm.id}
  //     //   emoji={emojiTerm.emoji}
  //     //   name={emojiTerm.name}
  //     //   description={emojiTerm.meaning}
  //     // />
  //   );
  // }
  return (
    <div>
      {/* <h1>
        <span>emojipedia</span>
      </h1>

      <dl className='dictionary'>{emojipedia.map(createEntry)}</dl> */}
      <Header />
      {/* {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))} */}
      {/* {mealtype.map((mealItem) => {
        return (
          <Meal
            key={mealItem.key}
            name={mealItem.name}
            content={mealItem.content}
          />
        );
      })} */}
      {menuItem.map(function (menutype) {
        return (
          <Menu
            key={menutype.key}
            name={menutype.name}
            description={menutype.description}
            restaurantId={menutype.restaurantId}
            ingridients={menutype.ingridients}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
