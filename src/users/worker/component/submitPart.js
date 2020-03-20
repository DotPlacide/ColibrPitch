import React, {Component , useState} from 'react';
import CkEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './ckeditor.css'
const SubmitPart = () => {

    const [value , setValue] = useState("");
    const handleOnChange= (e ,editor) => {
        const data = editor.getData();
        setValue(data);
    };

        return (
            <div>
                <form action="">
                    <CkEditor Style={'height:150px'} editor={ClassicEditor} value={value} onChange={handleOnChange}/>
                    <div className="input-group ">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <button Style={'margin-top: 60px'} className="btn btnMain col-md-2" type="submit"><a Style={'color:white ; text-decoration:none'} href="dashboard">Submit</a></button>
                </form>
                
            </div>
        );
    };

export default SubmitPart;