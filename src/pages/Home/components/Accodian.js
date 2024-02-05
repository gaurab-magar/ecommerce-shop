import { useState } from "react";

export const Accodian = ({data}) => {
    const [show , setShow] = useState(false);
    const {id,question,answer} = data;


  return (
    <>
        <div id={id} className="row p-2">
            <div onClick={()=> setShow(!show)} className="mt-3 d-flex justify-content-between align-items-center border-bottom pb-3">
                <h4 className="mb-0">{question}</h4>
                <div>
                    { show ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i> }
                </div>
            </div>
            {show && (
                <div>
                    <p className="text-muted border-bottom py-4">{answer}</p>
                </div>
            )}
        </div>
    </>
  )
}
