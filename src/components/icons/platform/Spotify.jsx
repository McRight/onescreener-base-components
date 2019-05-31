/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import classNames from 'classnames'

// React
import React from 'react'
import PropTypes from 'prop-types'

export const SpotifyIcon = ({ className }) => (
  <svg
    className={classNames('icon squid-ink', className)}
    enableBackground="new 0 0 56 56"
    version="1.1"
    viewBox="0 0 56 56"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="spotify">
      <path d="M47.397,19.6c-2.047-1.217-4.237-2.247-6.51-3.06c-7.936-2.84-16.706-3.216-26.065-1.119c-2.648,0.592-4.212,1.133-4.762,1.337c-1.634,0.608-2.469,2.434-1.861,4.068c0.608,1.635,2.433,2.472,4.067,1.862l0.002-0.001c0.155-0.058,0.486-0.17,0.973-0.318c0.924-0.281,1.921-0.542,2.962-0.775c8.062-1.804,15.859-1.49,22.552,0.903c1.89,0.677,3.71,1.531,5.409,2.541c0.505,0.301,1.062,0.443,1.611,0.443c1.08,0,2.134-0.552,2.725-1.546C49.391,22.435,48.896,20.49,47.397,19.6z M46.781,22.913c-0.328,0.551-1.043,0.731-1.595,0.405c-1.809-1.075-3.745-1.985-5.756-2.705c-4.047-1.448-8.467-2.176-13.094-2.176c-3.432,0-6.979,0.4-10.569,1.204c-1.09,0.244-2.135,0.518-3.107,0.813c-0.545,0.166-0.915,0.292-1.089,0.357c-0.6,0.225-1.273-0.084-1.497-0.685c-0.224-0.602,0.083-1.272,0.685-1.496c0.511-0.19,1.973-0.695,4.5-1.261c8.986-2.013,17.382-1.658,24.955,1.051c2.152,0.771,4.225,1.745,6.162,2.896C46.926,21.646,47.108,22.361,46.781,22.913z" />
      <path d="M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M28,54C13.664,54,2,42.337,2,28S13.664,2,28,2s26,11.663,26,26S42.336,54,28,54z" />
      <path d="M43.998,27.199c-10.286-4.409-19.972-5.543-28.008-3.283c-1.813,0.51-2.847,0.999-3.303,1.246c-1.533,0.83-2.105,2.754-1.275,4.288c0.832,1.534,2.753,2.104,4.288,1.275c0.049-0.025,0.174-0.083,0.375-0.166c0.475-0.196,1.022-0.383,1.627-0.553c6.63-1.865,14.862-0.824,23.803,3.008c0.4,0.172,0.823,0.258,1.246,0.258c0.397,0,0.795-0.076,1.176-0.229c0.784-0.313,1.4-0.914,1.732-1.691C46.346,29.749,45.601,27.886,43.998,27.199z M43.821,30.565c-0.123,0.285-0.349,0.507-0.638,0.622s-0.605,0.11-0.89-0.011c-6.303-2.701-12.299-4.07-17.703-4.07c-2.627,0-5.115,0.324-7.43,0.975c-0.681,0.191-1.304,0.404-1.849,0.63c-0.316,0.131-0.505,0.224-0.565,0.256c-0.273,0.148-0.589,0.181-0.884,0.092c-0.298-0.089-0.544-0.288-0.692-0.56c-0.305-0.565-0.095-1.272,0.468-1.577c0.308-0.167,1.206-0.605,2.893-1.079c7.591-2.136,16.817-1.031,26.679,3.195C43.799,29.29,44.074,29.976,43.821,30.565z" />
      <path d="M40.859,35.148c-7.148-4.083-15.364-5.226-23.758-3.298c-1.253,0.288-2.419,0.63-3.2,0.938c-0.787,0.309-1.406,0.905-1.743,1.68c-0.338,0.775-0.354,1.635-0.044,2.421c0.638,1.623,2.476,2.426,4.101,1.788l0.006-0.002c0.073-0.029,0.249-0.091,0.52-0.177c0.537-0.171,1.135-0.333,1.777-0.48c6.817-1.566,13.458-0.658,19.202,2.625c0.494,0.282,1.032,0.416,1.563,0.416c1.099,0,2.169-0.573,2.753-1.594C42.902,37.95,42.374,36.014,40.859,35.148z M40.3,38.473c-0.319,0.556-1.031,0.752-1.588,0.434c-4.222-2.413-8.887-3.637-13.748-3.637c-2.264,0-4.57,0.265-6.894,0.799c-0.695,0.16-1.347,0.336-1.934,0.523c-0.339,0.106-0.56,0.187-0.655,0.225c-0.596,0.231-1.271-0.063-1.506-0.658c-0.114-0.29-0.108-0.606,0.016-0.891c0.125-0.285,0.352-0.505,0.642-0.618c0.328-0.129,1.269-0.471,2.916-0.85c7.894-1.813,15.611-0.746,22.318,3.085c0.27,0.154,0.463,0.404,0.545,0.704C40.494,37.89,40.455,38.203,40.3,38.473z" />
    </g>
  </svg>
)
