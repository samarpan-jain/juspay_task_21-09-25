import { locations, dots } from "../assets/revenueByLocationData";

export default function RevenueByLocation() {
    return (
        <div className="bg-gray-50 rounded-2xl p-6 flex-1">
            <div className="font-semibold text-lg mb-4">Revenue by Location</div>
            <div className="relative mb-6">
                <svg viewBox="0 0 400 180" className="w-full h-28">
                    <image href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" width="400" height="180" />
                </svg>
                {dots.map((dot, i) => (
                    <span
                        key={i}
                        className="absolute w-2 h-2 bg-blue-300 rounded-full"
                        style={{
                            left: dot.left,
                            top: dot.top,
                            transform: "translate(-50%, -50%)"
                        }}
                    />
                ))}
            </div>
            <div>
                {locations.map((loc, i) => (
                    <div key={loc.name} className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-base">{loc.name}</span>
                            <span className="font-semibold">{loc.value}K</span>
                        </div>
                        <div className="w-full h-1 bg-blue-100 rounded">
                            <div
                                className="h-1 bg-blue-300 rounded"
                                style={{ width: `${loc.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}