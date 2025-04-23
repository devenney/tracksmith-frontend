import { useState } from "react";
import "./index.css";
import {
  ArrowPathIcon,
  FaceSmileIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import BrandIcon from "/logo.png"; // or /favicon.svg if you convert

import Toggle from "./components/Toggle";

const runTypes = [
  { key: "easy", label: "Easy", Icon: FaceSmileIcon },
  { key: "tempo", label: "Tempo", Icon: BoltIcon },
  { key: "long", label: "Long", Icon: ArrowTrendingUpIcon },
];

const buttonBase =
  "flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium text-sm border transition";
const inputBase =
  "w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent";

export default function App() {
  const [distance, setDistance] = useState("");
  const [routeType, setRouteType] = useState("easy");
  const [isLoop, setIsLoop] = useState(true);

  const [config, setConfig] = useState({ isLoop: true });
  const [showAdvanced, setShowAdvanced] = useState(false);

  const updateToggle = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting config:", { distance, routeType, isLoop });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
        {/* Header */}
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-3xl font-extrabold text-accent-dark tracking-tight flex items-center gap-1">
            <img
              src={BrandIcon}
              alt="Tracksmith logo"
              className="h-[1.6em] w-[1.6em] -ml-1 inline-block align-baseline"
            />
            Tracksmith
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Distance input */}
          <div>
            <label
              htmlFor="distance"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Run Distance (km)
            </label>
            <input
              id="distance"
              type="number"
              step="0.1"
              min="1"
              required
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className={inputBase}
              placeholder="e.g. 10"
            />
          </div>

          {/* Run Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Run Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {runTypes.map(({ key, label, Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setRouteType(key)}
                  className={`${buttonBase} ${
                    routeType === key
                      ? "bg-accent text-white border-accent"
                      : "text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Advanced settings */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setShowAdvanced((prev) => !prev)}
              className="text-sm font-medium text-pink-600 hover:underline focus:outline-none"
            >
              {showAdvanced
                ? "Hide Advanced Settings"
                : "Show Advanced Settings"}
            </button>

            {showAdvanced && (
              <div className="space-y-4">
                <Toggle
                  id="isLoop"
                  label="Prefer a loop route"
                  description="to return to your starting point"
                  checked={config.isLoop}
                  onChange={(e) => {
                    updateToggle("isLoop", !config.isLoop);
                    setIsLoop(e.target.checked);
                  }}
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-4 rounded-md transition flex justify-center items-center gap-2"
          >
            <ArrowPathIcon className="w-4 h-4" />
            Find Route
          </button>
        </form>
      </div>
    </div>
  );
}
