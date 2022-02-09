import React, {FC} from "react";
import "./style.scss";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";


const ModalProcess: FC = ({children}) => {
    // const {isAct} = useAppSelector(state => state.url)
    // const dispatch = useAppDispatch()
    return (<></>
        // <div className={isAct ? 'modalProcessP activeProcess' : "modalProcess"} onClick={() => dispatch(getModal())}>
        //     <div className={isAct ? 'modal__contentProcess activeProcess' : "modal__contentProcess"}
        //          onClick={e => e.stopPropagation()}>
        //         <div className={'modal__bodyProcess'}>
        //             <button className={'modal__closeProcess'} onClick={() => dispatch(getModal())}>{'⮿'}</button>
        //         </div>
        //         {children}
        //     </div>
        // </div>
    )
}

export default ModalProcess;