import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../theme/ThemeToggle'
import { PawIcon } from './PawIcon'

const PAW_COUNT = 6

export function LoadingScreen() {
  return (
    <main className="loading-screen">
      <div className="loading-screen__bar">
        <Link to="/">Back home</Link>
        <ThemeToggle />
      </div>
      <div className="loading-stage">
        <p className="loading-copy">Wait a bit, loading</p>
        <div className="loading-ring" aria-hidden="true">
          {Array.from({ length: PAW_COUNT }, (_, index) => (
            <span
              key={index}
              className="loading-paw"
              style={{ '--i': index } as CSSProperties}
            >
              <PawIcon />
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
