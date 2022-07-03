import React, {useState} from 'react';
import { Link } from "react-router-dom";

const ModelsListPage = () => {
    const renderIcon = (item) => {
        if (item) {
            return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
        }
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>
    }
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value);
    };
    const [models, setModels] = useState({
        T01: {
            name: "T1",
            id:'T1.glb',
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: true,
            inferior_longitudinal_fasciculus: false,
            uncinate_fasciculus: false,
            frontal_aslant_tract: false,
        },
        T02: {
            name: "T2",
            id:'T2.glb',
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: true,
            inferior_longitudinal_fasciculus: true,
            uncinate_fasciculus: true,
            frontal_aslant_tract: true,
        },
        T03: {
            name: "T3",
            id:'T3.glb',
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: false,
            inferior_longitudinal_fasciculus: false,
            uncinate_fasciculus: false,
            frontal_aslant_tract: false,
        },
        T04: {
            name: "T4",
            id:'T4.glb',
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: false,
            inferior_longitudinal_fasciculus: false,
            uncinate_fasciculus: true,
            frontal_aslant_tract: true,
        },
        T05: {
            name: "Tum2_St79_fc",
            id:'Tum2_St79_fc.glb',
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: false,
            inferior_longitudinal_fasciculus: true,
            uncinate_fasciculus: false,
            frontal_aslant_tract: false,
        },
        T06: {
            name: "Br1_AF_St5-6",
            id:'Br1_AF_St5-6.glb',
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: false,
            inferior_longitudinal_fasciculus: true,
            uncinate_fasciculus: false,
            frontal_aslant_tract: true,
        }
    });
    const filteredModels = Object.values(models).filter(
        (model) =>
            model.name
                .toLowerCase()
                .indexOf(searchQuery.toLowerCase()) !== -1
    )
    return (
        <div className="container align-items-center justify-content-center h-500px">
            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                >
                    Поиск модели
                </label>
                <input
                    type="text"
                    name="searchQuery"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Поиск"
                    onChange={handleSearchQuery}
                    value={searchQuery}
                />
            </div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                    <th scope="col">Имя модели</th>
                    <th scope="col">anterior segment</th>
                    <th scope="col">posterior segment</th>
                    <th scope="col">long segment</th>
                    <th scope="col">fronto occipital fasciculus</th>
                    <th scope="col">inferior longitudinal fasciculus</th>
                    <th scope="col">uncinate fasciculus</th>
                    <th scope="col">frontal aslant tract</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredModels.map((model) => (
                        <tr key={model.id}>
                            <th scope="col">
                                <Link to={`/${model.id}`}>{model.name}</Link>
                            </th>
                            <th scope="col">{renderIcon(model.anterior_segment)}</th>
                            <th scope="col">{renderIcon(model.posterior_segment)}</th>
                            <th scope="col">{renderIcon(model.long_segment)}</th>
                            <th scope="col">{renderIcon(model.fronto_occipital_fasciculus)}</th>
                            <th scope="col">{renderIcon(model.inferior_longitudinal_fasciculus)}</th>
                            <th scope="col">{renderIcon(model.uncinate_fasciculus)}</th>
                            <th scope="col">{renderIcon(model.frontal_aslant_tract)}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}
 
export default ModelsListPage;