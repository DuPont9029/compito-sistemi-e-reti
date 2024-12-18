import TextComponent from "@/app/components/textcomponent";

export default function TextDestra({ testo }: { testo: string }) {
    return(
        <div className="flex flex-col items-end">
            <div className="w-full sm:w-1/2 text-right">
              <TextComponent text={testo} color="white"/>
            </div>
          </div>
    )
}


