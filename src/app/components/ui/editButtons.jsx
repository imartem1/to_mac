const EditButtons = ({meshes}) => {
    const items = Object.values(meshes).filter((mesh) => mesh.name.length === 6);
    console.log(items);
    return (
        {/*Object.values(meshes).map((mesh) => 
            {(mesh.name.length === 6) ? (
                <div key={mesh.uuid}>
                    <div>
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
                    </div>
                </div>
            ): (
                null
            )}   
            
            )*/}
    );
}
 
export default EditButtons;