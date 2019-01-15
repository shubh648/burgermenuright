
## Right Implementation:

The "burger menu navigation" covers both the requirements. On expansion of the menu, i am overlaying a div with the z-index more than the body and less than "menu navigation". So on click of this div i am collapsing the "menu navigation" and removing the overlay div. I think it's a right way to do expand and collapse the "menu navigation" because i am listening for the event listener on the overlay but not on the overall body and this overlay hides on collapse of the "menu navigation".

## Instructions for running project
```
git clone https://github.com/shubh648/burgermenuright.git
cd eventbubbling
npm i
npm start
```

