import {History} from "./History.jsx";
import {GENERATE_DATA} from "../../constans.js";
import {QRCodeSVG} from "qrcode.react";

export const HistoryGenerate = () => {

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div>
            <History/>
            {data.map((text) => (
                <p key={text}>
                    <QRCodeSVG value={text} size={100} />
                    {text}
                </p>
            ))}
        </div>
    )
}