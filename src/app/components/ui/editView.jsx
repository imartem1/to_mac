import React from 'react'

const EditView = ({meshes, setMeshes, history}) => {
    const changeOpacity = (event, name) => {
        setMeshes(Object.values(meshes).map((element)=>{
            if(element.name === name){
                element.material.opacity = event.target.value
                return element
            }
            else{
                return element
            }
        }))
        console.log(event.target.value, name)
    }
    const changeVisible = (name) => {
        setMeshes(Object.values(meshes).map((element)=>{
            if(element.name === name){
                element.visible = !element.visible
                return element
            }
            else{
                return element
            }
        }))
    }
    const handleBack = () => {
        //console.log(history)
        history.push("/")
    }
    const count = Object.values(meshes).length;
    console.log(count)
    return (
        <div style={{height: '880px', width: '250px'}}>
            <button
                onClick={() => {handleBack()}}
                className="btn btn-light m-1"
                >
            Вернутся к списку моделей
                </button>
            {count === 0 ? (<div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>) : 
                Object.values(meshes).map((mesh) =>    
                <div key={mesh.uuid}>
                    {mesh.name.length === 6 ? (<><div>
                        <input
                            className="form-check-input m-1"
                            type="checkbox"
                            value=""
                            onChange={() => changeVisible(mesh.name)}
                            checked={mesh.visible}
                        />
                        <label className="form-check-label " htmlFor={mesh.name}>
                            {mesh.name + ' видимость'}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="customRange3" className="form-label">
                            {mesh.name + ' прозрачность'}
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="1"
                            step="0.01"
                            id="customRange3"
                            defaultValue={0.5}
                            onChange={(event) => changeOpacity(event, mesh.name)}
                        />
                    </div></>): (<></>)}
                    
                </div>
            )
            }
        </div>
    );
}
 
export default EditView;