
//Mini Project 1: Simple Profile

    let name = "Ahmed"; 
    let age = "20";
    let country = "Lebanon"; 
    let favoriteLanguage = "JavaScript";
    let hobbies = ['coding', 'design', 'reading']; 
    console.log(`Name is: ${name}, And Age is: ${age}, Country: ${country}, And My Favorite Language is: ${favoriteLanguage}, My hobbies are: ${hobbies}`);

    //Mini Project 2: Simple Receipt
    let item1 = "Laptop";
    let price1 = 500;

    let item2 = "Mouse";
    let price2 = 20;

    let item3 = "Keyboard";
    let price3 = 40;

    let total = price1+ price2+ price3;
    let total_tax = total + total * 0.11; 

    console.log(`The price of ${item1} is: ${price1}, The price of ${item2} is: ${price2}, The price of ${item3} is: ${price3}`);
    console.log(`The total price of all items is: ${total} SR`);
    console.log(`Total price after tax: ${total_tax} SR`); 

    //Mini Project 3: Playlist Manager
    let playlist = []; 
    playlist.push('Ajmal Ehsas');
    playlist.push('Koule Waad');  
    playlist.push('Ghariba El Nas'); 
    console.log(playlist);

    playlist.pop(playlist.length-1);
    console.log(playlist);
    
    playlist.unshift('Betmoun');
    console.log(playlist);

    console.log(`The Number Of Songs are: ${playlist.length}`);

    //Mini Project 4: Word Game
    let noun = "cat";
    let verb = "runs";
    let adjective = "cute";
    let place = "garden";

    console.log(`The ${adjective} ${noun} ${verb} in the ${place}.`);