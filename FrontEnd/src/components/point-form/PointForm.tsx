import React, {useEffect, useState} from "react";
import {IPoint} from "../../models/IPoint";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isError} from "../../store/ducks/Points";
import {IPointFormProps} from "../../pages/HomePage";
import Alert from "../alert/Alert";
import Autocomplete from 'react-toolbox/lib/autocomplete';
import Input from 'react-toolbox/lib/input';



const PointForm = ({valR, setValR, submitPoint}: IPointFormProps) => {

    const hasError = useSelector((state: AppState) => isError(state));
    const error = useSelector((state: AppState) => state.points.error);
    const isFetching = useSelector((state: AppState) => state.points.fetching);
    const [pointInput, setPointInput] = useState<IPoint>({x: NaN, y: 0, r: valR});
    const source1 = ['-3', '-2', '-1', '0', '1', '2', '3', '4', '5'];
    const source2 = ['-3', '-2', '-1', '0', '1', '2', '3', '4', '5'];

    useEffect(() => {

    }, []);
    const handleChangeX = (event: number) => {
        setPointInput(inputs => ({...inputs, ["x"]: event}));
    };
    const handleChangeY = (event: number) => {
        setPointInput(inputs => ({...inputs, ["y"]: event}));
    };
    const handleChangeR = (event: number) =>
        setValR(Number(event));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitPoint(pointInput);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="main-label text-white"><b>X: </b></label>
                    <Autocomplete
                        direction="down"
                        multiple={false}
                        selectedPosition="above"
                        onChange={handleChangeX}
                        source={source1}
                        value={pointInput.x}
                        className={"default-text-input autocomplete"}
                    />
                </div>
                <div className="form-group">
                    <label className="main-label text-white"><b>Y: </b></label>
                    <Input type="text" name="y"
                           value={pointInput.y}
                           onChange={handleChangeY}
                           className={'default-text-inputY' + (hasError ? ' is-invalid' : '')}
                    />
                </div>
                <div className="form-group autocomplete">
                    <label className="main-label text-white"><b>R: </b></label>
                    <Autocomplete
                        direction="down"
                        multiple={false}
                        selectedPosition="above"
                        onChange={handleChangeR}
                        source={source2}
                        value={pointInput.r}
                        className={"default-text-input"}

                    />
                </div>
                <div className="form-group">
                    { hasError && <Alert type={"error"} content={error?.message}/> }
                </div>
                { hasError && <br/> }
                <div className="form-group">
                    <button className="default-btn btn-primary btn-block" disabled={isFetching}>
                        Добавить
                    </button>
                </div>
            </form>
        </>
    );
};

export default PointForm;