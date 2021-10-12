
export const client = "VIVO";

export async function getCategories(){
    var categories = [];
    var response = await fetch('https://test.viar-eu.com/api/api/category/get_all.php')
      .then(response => response.json());
    
    //console.log(response.data);

    response.data.forEach(function(element) {
      categories.push({
        'name': element.categoryName,
        'startID':element.startID,
        'count': element.count
      });
    });
    console.log(categories);
    return categories;
  }

  export const Burgers = [
 
    {
      name: 'Mushroom & Truffle',
      id:'1',   
      description: 'Paine brioche, maioneza cu trufe, carne de vita portie mare, branza americana cu trufe, ciuperci King Oyster, rucola. (Alergeni: gluten,oua,lapte,susan) 450g',
      price: '39.00 lei',
    },
    {
        name: 'VIVO Burger',
        id:'2',   
        description: 'Paine brioche, ketchup, carne vita extra gramaj, bacon, parmezan, branza facuta in house, ulei de trufe, ceapa caramelizata, salata verde, rosii, castraveti murati. (Alergeni: gluten,oua,lapte,susan, mustar) 400gr',
        price: '36.00 lei',
    },
    {
        name: 'Italian Burger',
        id:'3',   
        description: 'Paine brioche, ketchup, carne vita, mozzarella, rucola, pesto de rosii uscate. (Alergeni: gluten,oua,lapte,susan,peste) 350gr',
        price: '31.00 lei',
    },
    {
        name: 'Clasic Burger',
        id:'4',   
        description: 'Paine brioche, ketchup, salata verde, carne, rosii, ceapa rosie, castraveti murati. (Alergeni: gluten,oua,lapte, susan) 300gr',
        price: '25.00 lei',
    },
    {
        name: 'Cheeseburger',
        id:'5',   
        description: 'Paine brioche, ketchup, salata verde, carne, branza Gouda, rosii, ceapa rosie, castraveti murati. (Alergeni: gluten,oua,lapte,susan) 350gr',
        price: '28.00 lei',
    },
    {
        name: 'Double Cheeseburger',
        id:'6',   
        description: 'Paine brioche, ketchup, 2xcarne vita, 2x branza, ceapa rosie, Castraveti murati. (Alergeni: gluten,oua,lapte,susan) 350gr',
        price: '33.00 lei',
    },
    {
        name: 'Spicy Fried Chicken',
        id:'7',   
        description: 'Paine brioche, maioneza picante, pulpe de pui crispy, branza americana, miere picante, jalapeno, castraveti murati. (Alergeni: gluten,oua,lapte,susan) 450gr',
        price: '29.00 lei',
    },
    {
        name: 'Fried Chicken',
        id:'8',   
        description: 'Paine brioche, salata coleslaw, crispy pui, branza Gouda , castraveti murati, sos aioli. (Alergeni: gluten,oua,lapte,susan,mustar) 350gr',
        price: '25.00 lei',
    },
    {
        name: 'Falafel Burger',
        id:'9',   
        description: 'Paine brioche, ketchup, salata verde, falafel, rosii, ceapa rosie, Castraveti murati, sos tzatziki. (Alergeni: gluten,oua,lapte,susan) 300gr',
        price: '24.00 lei',
    },
    {
        name: 'Haloumi Burger',
        id:'10',   
        description: 'Paine brioche, ketchup, salata verde, branza Halloumi, vanata, pesto de rucola. (Alergeni: gluten,oua,lapte,susan,peste,mustar) 300gr',
        price: '28.00 lei',
    }
  ];

  export const Ribs = [
  
    {
      name: 'House Of Ribs',
      id:'11',   
      description: 'Coaste de purcel, salata coleslaw, sos, castraveti murati, paine brioche. (Alergeni: gluten,oua,lapte,susan,mustar) 400gr',
      price: '54.00 lei',
    }
  ];

  export const Soups = [
  
    {
      name: 'Breakfast',
      model:'micDejun',
      id:'1',   
      description: 'Oua, pita de casa, rosii',
      price: '19 lei',
    }
  ];

  export const Salads = [
  
    {
      name: 'Breakfast',
      model:'micDejun',
      id:'1',   
      description: 'Oua, pita de casa, rosii',
      price: '19 lei',
    }
  ];

  export const Sides = [
  
    {
      name: 'Breakfast',
      model:'micDejun',
      id:'1',   
      description: 'Oua, pita de casa, rosii',
      price: '19 lei',
    }
  ];
  export const Deserts = [
  
    {
      name: 'Breakfast',
      model:'micDejun',
      id:'1',   
      description: 'Oua, pita de casa, rosii',
      price: '19 lei',
    }
  ];
  export const DataOverall =[
    {
      name: 'BURGERS',
      variable: Burgers
    },
    {
      name: 'HOUSE of RIBS',
      variable: Ribs
    },
    // {
    //   name: 'SOUPS',
    //   variable: Soups
    // },
    // {
    //   name: 'SALADSS',
    //   variable: Salads
    // },
    // {
    //   name: 'SIDES',
    //   variable: Sides
    // },
    // {
    //   name: 'SWEETS',
    //   variable: Deserts
    // }
  ];
