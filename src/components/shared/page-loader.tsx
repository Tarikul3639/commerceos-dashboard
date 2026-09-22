import { useId } from "react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface PageLoaderProps {
  name?: string
  className?: string
}

export function PageLoader({
  name = siteConfig.name,
  className,
}: PageLoaderProps) {
  const id = useId()
  const clipId = `liquid-text-${id}`

  return (
    <div
      className={cn(
        "flex min-h-svh w-full items-center justify-center overflow-hidden bg-background select-none",
        className
      )}
    >
      <svg
        viewBox="0 0 1000 220"
        className="pointer-events-none h-auto w-[min(90vw,900px)]"
        role="img"
        aria-label={name}
      >
        <defs>
          {/* Text Mask Shape */}
          <clipPath id={clipId}>
            <text
              x="500"
              y="155"
              textAnchor="middle"
              fontSize="150"
              fontWeight="800"
              fontFamily="Inter, system-ui, -apple-system, sans-serif"
              letterSpacing="-4"
              textLength="900"
              lengthAdjust="spacingAndGlyphs"
            >
              {name}
            </text>
          </clipPath>

          {/* Liquid Fill Gradient */}
          <linearGradient id={`${clipId}-gradient`} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              className="[stop-color:color-mix(in_oklab,var(--primary)_65%,white)]"
            />
            <stop offset="100%" className="[stop-color:var(--primary)]" />
          </linearGradient>
        </defs>

        {/* Base Background Text */}
        <text
          x="500"
          y="155"
          textAnchor="middle"
          fontSize="150"
          fontWeight="800"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          letterSpacing="-4"
          textLength="900"
          lengthAdjust="spacingAndGlyphs"
          fill="currentColor"
          className="text-muted-foreground/15"
        >
          {name}
        </text>

        {/* Animated Liquid Section */}
        <g clipPath={`url(#${clipId})`}>
          {/* Deep Liquid Base */}
          <rect
            x="0"
            y="105"
            width="1000"
            height="120"
            fill={`url(#${clipId}-gradient)`}
          />

          {/* Primary Fluid Wave */}
          <path fill="var(--primary)" opacity="0.95">
            <animate
              attributeName="d"
              dur="1.8s"
              repeatCount="indefinite"
              values="M0 118 C120 88 190 145 310 115 S500 88 620 118 S820 145 1000 110 L1000 220 L0 220 Z; M0 118 C120 148 190 88 310 120 S500 148 620 112 S820 88 1000 120 L1000 220 L0 220 Z; M0 118 C120 88 190 145 310 115 S500 88 620 118 S820 145 1000 110 L1000 220 L0 220 Z"
            />
          </path>

          {/* Secondary Highlight Wave */}
          <path fill="white" opacity="0.2">
            <animate
              attributeName="d"
              dur="1.4s"
              repeatCount="indefinite"
              values="M0 125 C130 105 200 140 320 120 S510 100 640 125 S840 145 1000 118 L1000 220 L0 220 Z; M0 125 C130 145 200 105 320 128 S510 145 640 118 S840 100 1000 125 L1000 220 L0 220 Z; M0 125 C130 105 200 140 320 120 S510 100 640 125 S840 145 1000 118 L1000 220 L0 220 Z"
            />
          </path>

          {/* Floating Air Bubbles */}
          <g fill="white" opacity="0.35">
            {/* Bubble 1 */}
            <circle cx="300" cy="145" r="3">
              <animate
                attributeName="cy"
                values="145;110;145"
                dur="1.4s"
                repeatCount="indefinite"
              />

              <animate
                attributeName="opacity"
                values="0.1;0.6;0.1"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Bubble 2 */}
            <circle cx="580" cy="170" r="2.5">
              <animate
                attributeName="cy"
                values="170;125;170"
                dur="1.7s"
                repeatCount="indefinite"
              />

              <animate
                attributeName="opacity"
                values="0.2;0.7;0.2"
                dur="1.7s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Bubble 3 */}
            <circle cx="760" cy="150" r="3">
              <animate
                attributeName="cy"
                values="150;110;150"
                dur="1.2s"
                repeatCount="indefinite"
              />

              <animate
                attributeName="opacity"
                values="0.1;0.5;0.1"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  )
}
