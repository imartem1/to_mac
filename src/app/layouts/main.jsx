import React from 'react';
import { useParams } from "react-router-dom";
import ModelsListPage from "../components/page/modelsListPage/modelsListPage";
import ModelPage from "../components/page/modelPage/modelPage";


const Main = ({history}) => {
    const params = useParams();
    const { modelId } = params;
    console.log(history);
    return <div>
        {modelId ? (   
            <ModelPage id={modelId} history={history}/>
        ) : (
            <ModelsListPage/>
        )}
    </div>;
}
 
export default Main;