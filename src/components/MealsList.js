import { useState } from "react"
import { useMealsListContext } from "./MealsProvider"


// export default function MealsList(){
//         const todaysMeals = [
//         {name:"Baked Beans",
//          calories:200,
//             id:12345
//                 },
//             {
//                 name:"Grilled Chicken",
//                 calories:80,
//                 id:2324
//             },
//             {
//                 name:"Soup",
//                 calories:100,
//                 id:34567
//             }
//         ]
//         const [meals, setMeals] = useState(todaysMeals);

//     };  

const MealsList = () => {
    const {meals} = useMealsListContext();

    return (
        <div>
            <h1>
                Meals List Using Context API
            </h1>
            {
                meals.map((meal, index) => (
                    <h2 key={index}>{meal}</h2>
                ))
            }
        </div>
    )
    
}

export default MealsList;
    