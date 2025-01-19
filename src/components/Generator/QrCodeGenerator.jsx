import {QRCodeSVG} from 'qrcode.react';
import {useState} from "react";
import s from './qrCodeGenerator.module.css'
import {GENERATE_DATA} from "../../constans.js";


export const QrCodeGenerator = () => {

    const [value, setValue] = useState('')
    const [result, setResult] = useState('')


    const onCLickBtnGenerator = () => {
        setResult(value)
        setValue(value)

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData , value]));

        console.log(prevData)
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
        setResult('');
    }

    const clearInput = () => {
        setValue('')
    }



    return (
        <div>
            {result !== '' ?
                <QRCodeSVG value={value}/> : null}
            <input className={s.input} onChange={onChangeInput} value={value} type="text"/>
            <button type="button" onClick={onCLickBtnGenerator}>Сгенерировать</button>
            <button type="button" onClick={clearInput}>Очистить</button>
        </div>
    );
};
