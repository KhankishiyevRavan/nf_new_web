import { useEffect, useState } from "react";
import Select from "react-select";

const options = [
    { value: "ukrayna", label: "Ukrayna" },
    { value: "amerika", label: "Amerika" },
    { value: "turkiye", label: "Turkiye" },
];
const SelectOption = ({ contactData, setContactData }) => {
    // with TypeScript, ... useState<{value: string; label: string;} | null>(null)
    const [selectedOption, setSelectedOption] = useState(options[0]);
    useEffect(() => {
        setContactData({ ...contactData, type: selectedOption.value })
    }, [selectedOption])
    return (
        <div>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    );
}

export default SelectOption
