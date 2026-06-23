       
       //challenge 1: Calculate Age
        let birthYear = 2001;
        let currentYear = 2026;
        let age = currentYear - birthYear; 
        console.log("Your age is: " + age); 

       //challenge 2: Price With Tax
       let price = 100; 
       let tax = 0.11; 
       let finalPrice = price + (price * tax);
       console.log("The final price with tax is: " + finalPrice);

      //challenge 3: Minutes to Seconds
      let minutes = 5; 
      let seconds = minutes * 60;
      console.log("the number of seconds in " + minutes + " minutes is: " + seconds + " seconds"  );

      //Challenge 4: Remainder Check
      let num1 = 11;
      let num2 = 2;
      let remainder = num1 % num2;
      console.log("The remainder of " + num1 + " divided by " + num2 + " is: " + remainder);

      //Challenge 5: Full Name 
      let firstName = "Ahmed"; 
      let lastName = "Al-ali";
      let fullName = firstName +" " + lastName;
      console.log("Your full name is: " + fullName);

      //Challenge 6: Sentence Builder
      let langauge = "Javascript"; 
      let goal = "build interactive web applications";
      let sentence = "I am learning " + langauge + " because I want to " + goal;
      console.log(sentence);

      //Challenge 7: String Length
      let message = "I Love coding";
      let msglength = message.length; 
      console.log("The length of the string is: " + msglength);

      //Challenge 8: First and Last Character
      let word = "JavaScript"; 
      let fisrtCharacter = word.charAt(0);
      let lastCharacter = word.charAt(word.length -1); 
      console.log("The first character is: " + fisrtCharacter+
         " and the last character is: " + lastCharacter ); 

      //Challenge 9: Favorite Foods
      let favFoods = ["Pizza", "Sushi", "Tacos", "Pasta", "Ice Cream"];
      let firstFood = favFoods[0];
      let lastFood = favFoods[favFoods.length - 1];
      console.log("My favorite food is: " + firstFood + " and my least favorite food is: " + lastFood);
      console.log("The length of the array is: "+ favFoods.length);

      let colors = ['red', 'blue', 'green'];
      colors[1] = 'purple';
      console.log(colors);

    //Challenge 11: Shopping Cart
      let cart = []; 
      cart.push('watch');
      cart.push('phone');
      cart.push('laptop');
      console.log(cart); 
     
      cart.pop(cart.length - 1);
      console.log(cart);

      cart.unshift('tap'); 
      console.log(cart);

      cart.shift();
      console.log(cart);


      let students = [['sara', 18], ['mona', 20], ['ali', 22]]; 
      for (let i =0; i<students.length; i++){
        let studNamAge = students[i][0] + " is " + students[i][1] + " years old.";  
        console.log(studNamAge);  
      }
       
      

      