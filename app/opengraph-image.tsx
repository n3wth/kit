import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'n3wth/kit - Make AI coding tools use your design system'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontFamily: 'monospace',
              color: '#a3a3a3',
              fontWeight: 600,
            }}
          >
            n3wth/kit
          </div>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            Make AI coding tools use your design system
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#737373',
              textAlign: 'center',
              maxWidth: '700px',
              lineHeight: 1.5,
            }}
          >
            47 components with AI context packs for v0, Cursor, Claude Code, Lovable, and Windsurf
          </div>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '16px',
            }}
          >
            {['v0', 'Cursor', 'Claude Code', 'Lovable', 'Windsurf'].map((tool) => (
              <div
                key={tool}
                style={{
                  border: '1px solid #262626',
                  borderRadius: '999px',
                  padding: '8px 20px',
                  fontSize: '16px',
                  color: '#525252',
                }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
