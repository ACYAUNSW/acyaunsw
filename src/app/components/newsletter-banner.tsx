import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

export default function NewsletterBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative isolate bg-red-50 px-4 py-3 sm:px-6">
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute left-0 top-1/2 h-[200%] w-[200%] -translate-y-1/2 bg-gradient-to-r from-[#f291a5] to-[#fc2828] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_80%)]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 sm:flex-row sm:gap-4">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm text-gray-900">
            <strong className="font-semibold">ACYA Newsletter</strong>
            <span className="hidden sm:inline sm:items-center">
              <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <span>
                Your monthly dose of events and Chinese culture
              </span>
            </span>
          </p>
        </div>

        <a
          href="https://drive.google.com/drive/folders/1NrD2hQJU7Pj9iQNxaBG6vwt3PcqfnirQ?usp=drive_link"
          target="_blank"
          className="shrink-0 rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Read now
        </a>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-2 p-1 sm:static sm:-m-1.5 sm:p-1.5"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" />
        </button>
      </div>
    </div>
  )
}