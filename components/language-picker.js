import setLanguage from 'next-translate/setLanguage'
import useTranslation from "next-translate/useTranslation";

export default function LanguagePicker() {
    const { t, lang } = useTranslation("common");

    return (
        <>
        <div className="languages">
            <span className={lang === 'en' && 'text-primary'} onClick={async() => await setLanguage('en')}>{t('English')}</span> / <span className={lang === 'tr' && 'text-primary'} onClick={async() => await setLanguage('tr')}>{t('Turkish')}</span>
        </div>
        </>
    )
}