import React, {useState} from 'react';
import { Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
    Canvas,
    useThree,
    extend,
    useLoader
} from "react-three-fiber";
import EditView from '../../ui/editView';
extend({ OrbitControls});

const Orbit = () => {
    const { camera, gl} = useThree();
    return(
        <orbitControls
            args={[camera, gl.domElement]}
            attach='orbitControls'
        />
    )
}

const Bulb = props => {
    return(
        <mesh {...props}>
            <pointLight castShadow/>
            {/*<sphereBufferGeometry args={[0.2, 20, 20]}/>*/}
            <meshPhongMaterial emissive='yellow'/>
        </mesh>
    )
}

const Brain = ({path, scale, position, setMeshes}) => {
    const model = useLoader(
        GLTFLoader,
        path
    )

    console.log(model)
    setMeshes(model.nodes)
    
    return(
        <primitive
            object={model.scene}
            {...path+scale+position}
        />
    )
}

const ModelPage = ({id, history}) => {
    
    
    const[meshes,setMeshes] = useState({});
    // console.log(meshes);
    return (
    <div className='d-flex w-100 p-0'>
        <EditView
            history={history}
            meshes={meshes}
            setMeshes={setMeshes}
        />
        <div style={{height: '94svh', width: '86vw'}}>
            <Canvas
                    shadowMap
                    style={{background: 'black'}}
                    camera={{position: [100,100,100]}}
            >
                <Bulb position={[0,150,0]}/>
                <Bulb position={[150,150,0]}/>
                <Bulb position={[-150,150,0]}/>
                <Bulb position={[0,150,150]}/>
                <Bulb position={[0,150,-150]}/>
                <ambientLight intensity={0.2}/>
                
                    <Suspense fallback={null}>
                        <Brain
                            scale={new Array(3).fill(1)}
                            path={`/models/${id}`}
                            position={[0, 0, 0]}
                            
                            setMeshes={setMeshes}
                        />
                    </Suspense>
                
                <Orbit/>
            </Canvas>
        </div>
    </div>
    );
}
 
export default ModelPage;