import { useState } from "react";

interface Person {
    name: string,
    age: number,
    isMarried: boolean,
}

const Person = (props: Person) => {

    //useState 
    const [isShowInfo, setShowInfo] = useState<boolean>(false);

    const toggleInfo =()=>{
        setShowInfo((prev) => !prev);
    };

    return (
        <div>
            {isShowInfo && (
                <>
                    <p>
                        Name: {props.name}
                        <br />
                        Age: {props.age}
                        <br />
                        This person is {props.isMarried ? "MINYO" : "LAON"} 
                    </p>
                </>
                )     
            }

            <button onClick={toggleInfo} >Toggle Info</button>
        </div>    
    );
};

export default Person;

