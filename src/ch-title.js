import React from 'react';
import { useState } from 'react';
import './index.css';
const quotes = [

  {
    quote: '1. Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
    author: 'Наполеон Хилл, журналист и писатель ',
    color: 'green',
  },
  {
    quote: '2. Стремитесь не к успеху, а к ценностям, которые он дает',
    author: 'Альберт Эйнштейн',
    color: 'orange',
  },
  {
    quote: '3. Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
    author: 'Флоренс Найтингейл',
    color: 'yellow',
  },
  {
    quote: '4. За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.',
    author: 'Майкл Джордан',
    color: 'pink',
  },
  {
    quote: '5. Сложнее всего начать действовать, все остальное зависит только от упорства.',
    author: 'Амелия Эрхарт',
    color: 'blue',
  },
  {
    quote: '5. Сложнее всего начать действовать, все остальное зависит только от упорства.',
    author: 'Амелия Эрхарт',
    color: 'blue',
  },
  {
    quote: '6. Надо любить жизнь больше, чем смысл жизни.',
    author: 'Федор Достоевский',
    color: 'blue',
  },
];

const ChangeTitle = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const [backgroundColor, setBackground] = useState("green");
  const [color,setTxtColor]=useState("green");
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setBackground(quotes[randomIndex].color);
    setTxtColor(quotes[randomIndex].color);
  };

  return (
    <div className='body1' style={{backgroundColor}}>
      <div className='container' >
        <p className='quote' style={{color}}>{quote.quote}</p>
        <p className='autor' style={{color}}>- {quote.author}</p>
        <button onClick={generateQuote} style={{backgroundColor}} className='btn'>Generate new quote</button>
      </div></div>
  );
};


export default ChangeTitle;