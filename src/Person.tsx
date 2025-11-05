import { useState } from "react";

interface Person {
    name: string,
    age: number,
    isMarried: boolean,
}

const Person = (props: Person) => {

    //useState 
    const [isShowInfo, setShowInfo] = useState<boolean>(false);
    const [dataInput, setDataInput] =useState<string | null>(null);


    const toggleInfo =()=>{
        setShowInfo((prev) => !prev);
    };

    const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataInput(event.target.value);
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
     
            {" "}
            {props.name} Data: {!dataInput ? "ALAW UTSBO" : dataInput}
                   <br />
             <br />

            <button onClick={toggleInfo} >Toggle Info</button>
            <br />
            <br />
            <input onChange={handleChangeData} />
        </div>    
    );
};

export default Person;

