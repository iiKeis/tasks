import React, { useState } from "react";
import { Button } from "react-bootstrap";
/*
    Thanksgiving - 🦃
    Christmas - 🎅🏻
    Easter - 🐣
    New_Years - 🎊
    Valentines_Day - 💝
    */

/*
    Advance by Year
    New_Years -> Valentines_Day -> Easter -> Thanksgiving -> Christmas

    Advance by Alphabet
    Christmas -> Easter -> New_Years -> Thanksgiving -> Valentines_Day
    */

type Holiday =
    | "Thanksgiving"
    | "Christmas"
    | "Easter"
    | "New_Years"
    | "Valentines_Day";

const HolidayEmojis: Record<Holiday, string> = {
    Thanksgiving: "🦃",
    Christmas: "🎅🏻",
    New_Years: "🎊",
    Easter: "🐣",
    Valentines_Day: "💝",
};

const nextLevelByAlphabet: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "New_Years",
    New_Years: "Thanksgiving",
    Thanksgiving: "Valentines_Day",
    Valentines_Day: "Christmas",
};

const nextLevelByYear: Record<Holiday, Holiday> = {
    New_Years: "Valentines_Day",
    Valentines_Day: "Easter",
    Easter: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New_Years",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Thanksgiving");

    function advanceHolidayByAlphabet(): void {
        setHoliday(nextLevelByAlphabet[holiday]);
    }

    function advanceHolidayByYear(): void {
        setHoliday(nextLevelByYear[holiday]);
    }

    return (
        <div>
            <Button onClick={advanceHolidayByAlphabet}>
                Cycle Holiday Alphabetically
            </Button>
            <Button onClick={advanceHolidayByYear}>Cycle Holiday Yearly</Button>
            <p>
                Holiday: {holiday} {HolidayEmojis[holiday]}
            </p>
            {/* //INSTEAD OF JUST HAVING TEXT OF THE PARAGRAPH
            //USE THE FUNCTION THAT MAPS HOLIDAYS TO EMOJIS */}
        </div>
    );
}
