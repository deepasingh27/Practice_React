let Inputt = (props) =>{
    return (
        <input 
        className="input-box"
        type="text" onChange={(e)=>{
         props.handlecurrInput(e.currentTarget.value);
        //   console.log(e.currentTarget.value)
        }}

        onKeyDown={
          (e)=>{
            if (e.key == "Enter"){
              props.handleTasks();
            }
          }}

          value={props.currInp}
      />
    )
};
export default Inputt;
