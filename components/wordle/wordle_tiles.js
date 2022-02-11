import Tile from "./tile" 

export default function WordleTiles() {
    
  return (
        <div className="grid grid-rows-6 w-[350px] h-[420px] gap-[5px] p-[10px] cursor-default">
          <div className="grid grid-cols-5 gap-[5px]">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
          <div className="grid grid-cols-5 gap-[5px]">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
          <div className="grid grid-cols-5 gap-[5px]">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
          <div className="grid grid-cols-5 gap-[5px]">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
          <div className="grid grid-cols-5 gap-[5px]">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
          <div className="grid grid-cols-5 gap-[5px]">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
        </div>
    )
}