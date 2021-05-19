const newQuoteButton = document.getElementById("new-message-button");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");

newQuoteButton.addEventListener('click', () => {
   let i1 = Math.floor(Math.random()*limericks.length);
   let i2 = Math.floor(Math.random()*limericks.length);
   line1.innerHTML = limericks[i1]['l1'];
   line2.innerHTML = limericks[i1]['l2'];
   line3.innerHTML = limericks[i2]['l3'];
   line4.innerHTML = limericks[i2]['l4'];
   line5.innerHTML = limericks[i1]['l5'];
});

const limericks = [
   {
      l1: 'There was an Old Man of Quebec,',
      l2: 'A beetle ran over his neck;',
      l3: "But he cried, 'With a needle,",
      l4: "I'll slay you, O beetle!'",
      l5: 'That angry Old Man of Quebec.'
   },
   {
      l1: 'There was an Old Man who supposed,',
      l2: "That the street door was partially closed;",
      l3: "But some very large rats,",
      l4: 'Ate his coats and his hats,',
      l5: 'While that futile old gentleman dozed.'
   },
   {
      l1: 'There was an Old Man in a boat,',
      l2: "Who said, 'I'm afloat, I'm afloat!'",
      l3: "When they said, 'No! you ain't!'",
      l4: 'He was ready to faint,',
      l5: 'That unhappy Old Man in a boat.'
   },{
      l1: 'There was an Old Man in a tree,',
      l2: 'Who was horribly bored by a Bee;',
      l3: "When they said, 'Does it buzz?'",
      l4: "He replied, 'Yes, it does!'",
      l5: "'It's a regular brute of a Bee!'"
   },
   {
      l1: 'There was an Old Man of Kilkenny,',
      l2: 'Who never had more than a penny;',
      l3: "He spent all that money,",
      l4: 'In onions and honey,',
      l5: 'That wayward Old Man of Kilkenny.'
   },
   {
      l1: 'There was an Old Man of Marseilles,',
      l2: 'Whose daughters wore bottle-green veils;',
      l3: "They caught several Fish,",
      l4: 'Which they put in a dish,',
      l5: 'And sent to their dad at Marseilles.'
   },
   {
      l1: 'There was an Old Man with a beard,',
      l2: 'Who said, "It is just as I feared! --',
      l3: "Two Owls and a Hen,",
      l4: 'Four Larks and a Wren,',
      l5: 'Have all built their nests in my beard.'
   }
]