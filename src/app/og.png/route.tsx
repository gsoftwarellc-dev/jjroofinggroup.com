import { ImageResponse } from "next/og";
import { business } from "@/lib/site";

export const alt = business.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card, composed at request time so the phone number, motto, and
 * founding year stay in sync with lib/site.ts.
 *
 * Note: this route renders in production builds but 500s under `next dev`
 * with Turbopack — verify changes against `npm run build && npm run start`.
 */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {/* The brand mark is drawn as inline SVG rather than embedding the
              logo raster — Satori's image decoder rejects the source file. */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "150px",
              borderRadius: "18px",
              backgroundColor: "#37B5FF",
            }}
          >
            <svg width="112" height="112" viewBox="0 0 120 120">
              <circle cx="60" cy="46" r="17" fill="#FFD400" />
              <circle cx="60" cy="46" r="24" fill="none" stroke="#F59E0B" strokeWidth="7" />
              <path d="M10 96 L60 44 L110 96 Z" fill="#3D3A16" />
              <rect x="8" y="96" width="104" height="7" fill="#3D3A16" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "white",
                fontSize: "38px",
                fontWeight: 900,
                letterSpacing: "-0.5px",
              }}
            >
              NO LIMIT ROOFING
            </span>
            <span style={{ color: "#fb923c", fontSize: "20px", letterSpacing: "3px" }}>
              {business.motto.toUpperCase()}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#fb923c",
              fontSize: "21px",
              fontWeight: 700,
              letterSpacing: "3px",
              marginBottom: "16px",
            }}
          >
            DENVER METRO · COLORADO
          </span>
          {/* Satori ignores <br>, so each line is its own flex row. */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {["Roofing & Storm Damage", "Restoration Experts"].map((line) => (
              <span
                key={line}
                style={{
                  color: "white",
                  fontSize: "58px",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-2px",
                }}
              >
                {line}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #1e293b",
            paddingTop: "26px",
          }}
        >
          <span style={{ color: "#cbd5e1", fontSize: "28px", fontWeight: 700 }}>
            {business.phone}
          </span>
          <span style={{ color: "#64748b", fontSize: "19px" }}>
            Licensed &amp; Insured · Since {business.founded}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
