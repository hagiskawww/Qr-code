import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import s from './qrCodeScanner.module.css'

import { SCAN_DATA} from '../../constans.js'

export const QrCodeScanner = () => {

    const [scanned, setScanned] = useState(null)    ;

    const handlerOfScanner = (result) => {
        setScanned(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData , result[0].rawValue]));
    }

    return(
        <div className={s.container}>
            <Scanner
                allowMultiple={false}
                onScan={handlerOfScanner}
                components={{
                    audio: false,
                    finder:false,
                }}
                styles={{container: {maxWidth: 350}}}
            />
            <p>{scanned}</p>
        </div>
    )
}