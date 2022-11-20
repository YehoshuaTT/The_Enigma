import "./Letters.css"
function Letters() {

    let theABC = [
        "א",
        "ב",
        "ג",
        "ד",
        "ה",
        "ו",
        "ז",
        "ח",
        "ט",
        "י",
        "כ",
        "ל",
        "מ",
        "נ",
        "ס",
        "ע",
        "פ",
        "צ",
        "ק",
        "ר",
        "ש",
        "ת",
        "ם",
        "ן",
        "ץ",
        "ף",
        "ך",
    ];



    return (
        <div className="Letters">
            {theABC.map((v, i) => <div className="ltr" id={i} >{v}</div>
            )}
        </div>
    );
}

export default Letters;
