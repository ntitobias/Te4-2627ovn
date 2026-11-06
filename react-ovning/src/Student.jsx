function Student(props){
    return(
        <div>
            <h3>Elev: {props.name}</h3>
            <p>Tidigare program: {props.program}</p>
        </div>
    );
}

export default Student;