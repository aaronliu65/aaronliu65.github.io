import { ImageResponse } from 'next/og';

export const alt = 'Aaron Liu — Front-end Developer Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '58px 68px',
          backgroundColor: '#0c0e0f',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          color: '#f4f0e9',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            fontSize: 19,
            letterSpacing: 6,
          }}
        >
          AARON LIU
          <span style={{ color: '#c9f449', fontSize: 25 }}>•</span>
          <span
            style={{
              color: '#a9aeab',
              fontSize: 15,
              letterSpacing: 2,
            }}
          >
            FRONT-END DEVELOPER
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Georgia, serif',
                fontSize: 78,
                lineHeight: 1.02,
                letterSpacing: -3,
              }}
            >
              <span>Interfaces</span>
              <span>
                with intent<span style={{ color: '#c9f449' }}>.</span>
              </span>
            </div>
            <div style={{ color: '#a9aeab', fontSize: 22 }}>
              Vue.js&nbsp; · &nbsp;Nuxt.js&nbsp; · &nbsp;JavaScript&nbsp; · &nbsp;Responsive UI
            </div>
          </div>

          <div
            style={{
              width: 190,
              height: 190,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(201,244,73,.55)',
              borderRadius: 95,
              color: '#c9f449',
              fontFamily: 'Georgia, serif',
              fontSize: 90,
            }}
          >
            A.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,.17)',
            paddingTop: 20,
            color: '#8b918e',
            fontSize: 12,
            letterSpacing: 3,
          }}
        >
          <span>PORTFOLIO / HARPENDEN, UK</span>
          <span>THOUGHTFUL CODE. MEANINGFUL EXPERIENCES.</span>
        </div>
      </div>
    ),
    size,
  );
}
