import { SCAN_DATA} from '../../constans.js'
import {History} from "./History.jsx";
import {QRCodeSVG} from "qrcode.react";


export const HistoryScan = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');


    return (
        <div>
            <History/>
            {data.map((text) => (

                <p
                    key={text}>
                    <QRCodeSVG value={text} size={100} />
                    {text}
                </p>
            ))}
        </div>
    )
}