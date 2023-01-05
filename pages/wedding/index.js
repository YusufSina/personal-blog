
import { useState } from 'react';
import useTranslation from "next-translate/useTranslation";

import Countdown from 'react-countdown';

const weddingEpochTime = 1690646400000
export default function YSMWedding() {
    const { t, lang } = useTranslation("common");

    const Completionist = () => <span>{t("We got married!")}</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <span>{t("We are getting married in!", { day: days, hour: hours, minute: minutes, second: seconds })}</span>;
        }
    };    
    return (
        <>
            <div className="text-center">
                <Countdown date={weddingEpochTime}
                    renderer={renderer}
                />
            </div>
        </>
    )
}