import { useState } from "react"


export default function MealsList(){
        const todaysMeals = [
        {name:"Baked Beans",
         calories:200,
            id:12345
                },
            {
                name:"Grilled Chicken",
                calories:80,
                id:2324
            },
            {
                name:"Soup",
                calories:100,
                id:34567
            }
        ]
        const [meals, setMeals] = useState(todaysMeals);

    };
    