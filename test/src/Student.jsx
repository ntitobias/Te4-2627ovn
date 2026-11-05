function Student(props) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
      <h3>Elev: {props.name}</h3>
      <p>Inriktning: {props.program}</p>
    </div>
  );
}

export default Student;
