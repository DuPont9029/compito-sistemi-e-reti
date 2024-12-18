import TextComponent from "@/app/components/textcomponent";

export default function TextSinistra({ testo }: { testo: string }) {
    return(
        <div className="flex flex-col items-start">
            <div className="w-full sm:w-1/2 text-left">
                <TextComponent text={testo} className="mr-2" color="green"/>
            </div>
        </div>
    )
}