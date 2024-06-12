import layer_1 from "@/public/icons/layer-1.svg";

export default function Wave() {
  return (
    <div className="ocean">
      <div
        className="wave"
        style={{ background: `url("${layer_1.src}")` }}
      ></div>
      <div
        className="wave wave2"
        style={{ background: `url("${layer_1.src}")` }}
      ></div>
      <div
        className="wave wave3"
        style={{ background: `url("${layer_1.src}")` }}
      ></div>
    </div>
  );
}
