const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');

});

import { swift } from '../data/hotels.js'; // Ensure file path is correct

console.log(swift);

const cards = document.querySelector('#parkingLot'); // Corrected the ID reference

// Loop through all card items, creating new elements then assigning data from JSON
swift.forEach(hotel => {
    const mySection = document.createElement('section');

    const theImage = document.createElement('img');
    theImage.src = `images/${hotel.photo}`;
    theImage.alt = `${hotel.name}`;

    const theName = document.createElement('h2');
    theName.textContent = hotel.name;

    const theAddress = document.createElement('address');
    theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

    const thePhone = document.createElement('a');
    thePhone.textContent = hotel.phone;
    thePhone.href = `tel:${hotel.phone}`;

    // Attach all elements to the section
    mySection.appendChild(theImage);
    mySection.appendChild(theName);
    mySection.appendChild(theAddress);
    mySection.appendChild(thePhone);

    // Attach the section to the parking lot
    cards.appendChild(mySection);
});
