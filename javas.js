var quotes = [
   'Fortune befriends the bold. -Emily Dickinson',
   'Success is survival. -Leonard Cohen',
   'There is little success where there is little laughter. -Andrew Carnegie',
   'There is no substitute for victory. -Douglas MacArthur',
   'They succeed, because they think they can. -Virgil',
   'It takes 20 years to make an overnight success. -Eddie Cantor',
  'Victory has a thousand fathers, but defeat is an orphan. -John F. Kennedy',
   'If you have no critics you’ll likely have no success. -Malcolm X',
   'Success is never accidental. -Jack Dorsey',
  'Doubt kills more dreams than failure ever will. -Suzy Kassem',
  'The best revenge is massive success. -Frank Sinatra',
  'Men are born to succeed, not to fail. -Henry David Thoreau',
  'Success is the child of audacity. -Benjamin Disraeli',
  'Impatience never commanded success. -Edwin H. Chapin',
  'If opportunity doesn’t knock, build a door. -Milton Berle',
  'Success is a lousy teacher. It seduces smart people into thinking they can’t lose. -Bill Gates',
  'Failure is success in progress. -Albert Einstein'
]
function newQuotes(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}