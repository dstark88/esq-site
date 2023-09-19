
export default function TwoSectionText({ sections }) {
    return (
        <div className="grid grid-cols-2 gap-8">
            {sections.map((section) => (
                <div className="col-span-1 grid grid-row-3 content-start">
                    <div className="text-[16px] font-blue">
                        {section.title}
                    </div>
                    <div className="text-[14px] py-4">
                        {section.text}
                    </div>
                    <div className="text-[16px]">
                        {section.button}
                    </div>
                </div>
            ))}
        </div>
    );
}
