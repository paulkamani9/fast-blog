type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type _2DShapes = Exclude<ShapeType, "cube" | "triangle">;

type PlacementType = "justify" | "align" | "self";
type PositionType = "start" | "center" | "end";

type FlexBox = {
  flex: Exclude<`${PlacementType}-${PositionType}`, "self-start" | "self-end">;
};

const Items = (props: FlexBox) => {
  const shape: ShapeType = "rectangle";
  const _2DShape: _2DShapes = "square";
  return;
};
export default Items;
