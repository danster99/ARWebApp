export const client = "Demo";

export async function getCategories(){
    var categories = [];
    var response = await fetch('https://test.viar-eu.com/api/api/category/get_all.php')
      .then(response => response.json());
    
    //console.log(response.data);

    response.data.forEach(function(element) {
      let category ={
        'name': element.categoryName,
        'startID':element.startID,
        'count': element.count
      }
      categories.push(category);
    });
    console.log(categories);
    return categories;
  }




export const EarlyFoods = [
  
  {
    name: 'Breakfast',
    model:'micDejun',
    id:'1',   
    description: 'Oua, pita de casa, rosii',
    price: '19 lei',
  },
  {
    name: 'Brunch',
    model:'brunch',
    id:'2',    
    description: 'Clatita cu spanac, oua, avocado, branza feta, rosii.',
    price: '25 lei',
  },
  {
    name: 'Bruschetta',
    model:'bruschete',
    id:'3',
    description: 'Bruschete cu rosii, usturoi, busuioc si ulei de masline extra virgin.',
    price: '25 lei',
  }
];

export const Pizzas = [ 
  {
    name: 'Pizza Super Suprema',
    model:'pizzaSuprema',
    id:'4',
    description: 'Blat pufos, crema de branza, sos de roșii, mozzarela, vita, cipuerci',
    price: '32 lei',
  }
];

export const MainCourses = [ 
  {
    name: 'Steak & wedges',   
    model:'friptura',
    id:'7',
    description: 'Vita Black Angus, rozmarin, cartofi.',
    price: '69 lei',
  },
  {
    name: 'Burger',
    model:'burger',
    id:'8',
    description: 'Chifla de casa, carne de vita, cartofi, rosie, ceapa, salata.',
    price: '45 lei',
  },
  {
    name: 'Sandwich',
    model:'sandwich',
    id:'9',
    description: 'test model.',
    price: '20 lei',
  },
  {
    name: 'Burger Vivo',
    model:'burger1Vivo',
    id:'10',
    description: 'test model.',
    price: '45 lei',
  }
  
];

export const Pastas = [

  {
    name: 'Pasta carbonara',
    model:'carbonara',
    id:'5',
    description: 'Paste integrale, guanciale, ou, parmezan.',
    price: '32 lei',
  },
  {
    name: 'Pasta arrabiata',
    model:'arrabiata',
    id:'6',
    description: 'Paste integrale, sos de rosii, busuioc, parmezan, pui.',
    price: '28 lei',
  }
];

export const Tests = [

  {
    name: 'Burger Test',
    model:'burgertest',
    id:'12',
    description: 'Paste integrale, guanciale, ou, parmezan.',
    price: '32 lei',
  },
  {
    name: 'Salata bacon',
    model:'salatabacon',
    id:'13',
    description: 'Paste integrale, sos de rosii, busuioc, parmezan, pui.',
    price: '28 lei',
  },{
    name: 'Burger Test 1',
    model:'burgertest1',
    id:'14',
    description: 'Paste integrale, guanciale, ou, parmezan.',
    price: '32 lei',
  },{
    name: 'Burger Test 2',
    model:'burgertest2',
    id:'14',
    description: 'Paste integrale, guanciale, ou, parmezan.',
    price: '32 lei',
  },
  {
    name: 'Burger Test 3',
    model:'burger1Vivo',
    id:'11',
    description: 'test model.',
    price: '45 lei',
  }
];
export const Deserts = [

  {
    name: 'Cheese cake',
    model:'prajitura', 
    id:'10',
    description: 'Cheese cacke cu gem de capsuni si pudra de cacao.',
    price: '25 lei',
  }
]


export const NeaIancu = [

  {
    name: 'Platou Catavencu',
    model:'platou-catavencu', 
    description: 'Mici, carnaciori picanti, pastrama de pui, Cartofiori, muraturi, ketchup, mustar.',
    price: '30 lei',
  }
]

  export const DataOverall =[

    
    {
      name: 'Early Foods',
      variable: EarlyFoods
    },
    {
      name: 'Pizza',
      variable: Pizzas
    },
    {
      name: 'Pasta',
      variable: Pastas
    },
    {
      name: 'Main Courses',
      variable: MainCourses
    },
    {
      name: 'Deserts',
      variable: Deserts
    },
    {
      name: 'Tests',
      variable: Tests
    }
    // {
    //   name: 'Nenea Iancu',
    //   variable: NeaIancu
    // }
  ];