import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        fill="#D0476E"
        height="800px"
        width="800px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 304.367 304.367"
      >
        <g>
          <path d="M176.352,195.932c-11.553,4.32-22.803,5.328-35.088,5.398C152.004,205.964,167.781,204.229,176.352,195.932z" />
          <path d="M127.322,177.169c-4.744,11.383-11.705,20.285-20.057,29.295C117.984,201.792,127.516,189.083,127.322,177.169z" />
          <path
            d="M302.411,61.366c1.497-1.589,2.19-3.772,1.886-5.932c-0.305-2.161-1.575-4.066-3.453-5.178l-42.909-25.41
		c-1.878-1.111-4.16-1.309-6.2-0.537c-2.041,0.772-3.621,2.429-4.294,4.505l-12.016,37.084l-38.096,57.436H7.184
		c-3.968,0-7.184,3.216-7.184,7.185c0,56.395,31.871,105.479,78.542,130.209v1.627c0,10.037,8.132,18.168,18.162,18.168h101.114
		c10.037,0,18.168-8.131,18.168-18.168v-1.631c46.668-24.73,78.536-73.813,78.536-130.205c0-3.969-3.216-7.185-7.184-7.185h-29.307
		l17.641-33.602L302.411,61.366z M187.432,211.385c-10.293,8.678-23.803,11.227-36.441,6.615c-9.01-3.291-15.613-9.93-17.678-12.014
		c0,0-3.688,2.938-8.172,4.775c-14.219,5.828-21.699,3.342-21.699,3.342s-1.465-1.969-4.512-9.869
		c-4.738-12.795,1.021-27.912,12.408-34.961c5.725-3.545,12.193-4.904,17.098-9.914c3.346-3.52,5.506-8.021,5.205-12.963
		c-0.125-2.049-0.475-4.098-0.727-6.133c7.658,11.787,14.023,24.91,13.26,39.387c-0.072,1.389-0.221,2.752-0.432,4.098
		c7.211-5.23,16.781-7.215,25.439-4.879c6.881,1.857,12.545,5.93,20.047,5.686c7.424-0.242,11.492-4.514,15.873-9.779
		C203.738,188.427,198.516,202.046,187.432,211.385z"
          />
        </g>
      </svg>
    ),
    title: "Power of Ayurveda",
    paragraph:
      "Embrace the ancient wisdom of Ayurveda, which incorporates time-honored healing methods to alleviate pain and promote overall well-being. By utilizing natural ingredients known for their anti-inflammatory and analgesic properties, we support your body's innate healing processes.",
  },
  {
    id: 2,
    icon: (
      // Using the second SVG from your template
      <svg
        width="40"
        height="42"
        viewBox="0 0 100 100"
        className="fill-current"
      >
        <path
          d="M31 79.5h-4v-6.1c.7 0 1.3.1 2 .1s1.3 0 2-.1v6.1zm42-6.1c-.7 0-1.3.1-2 .1s-1.3 0-2-.1v6.1h4v-6.1zm14 10.1H13c-1.7 0-3 1.3-3 3 0 1.6 1.3 3 3 3h74c1.7 0 3-1.4 3-3 0-1.7-1.3-3-3-3zM47.9 52.6c-8.8 1-15.8 8-16.8 16.8 8.8-1 15.8-8 16.8-16.8zm-21 16.8c-1-8.8-8-15.8-16.8-16.8 1 8.8 8 15.8 16.8 16.8zm63-16.8c-8.8 1-15.8 8-16.8 16.8 8.8-1 15.8-8 16.8-16.8zm-37.8 0c1 8.8 8 15.8 16.8 16.8-1-8.8-8-15.8-16.8-16.8zM39 27.5h6c1.1 0 2 .9 2 2v6c0 1.6 1.3 3 3 3s3-1.4 3-3v-6c0-1.1.9-2 2-2h6c1.7 0 3-1.4 3-3 0-1.7-1.3-3-3-3h-6c-1.1 0-2-.9-2-2v-6c0-1.7-1.3-3-3-3s-3 1.3-3 3v6c0 1.1-.9 2-2 2h-6c-1.7 0-3 1.3-3 3 0 1.6 1.3 3 3 3z"
          fill="#D0476E"
        ></path>
      </svg>
    ),
    title: "Instant Pain Relief",
    paragraph:
      "Experience immediate relief from discomfort through our innovative Pain Relief Oil that combines latest technology with Ayurvedic principles. This synergy provides fast-acting alleviation of various pains, including muscle aches, joint discomfort, and menstrual cramps, helping you regain comfort swiftly.",
  },
  {
    id: 3,
    icon: (
      // Continue with next SVG
      <svg width="40" height="45" viewBox="0 0 24 24" className="fill-current">
        <path
          fill="#F8B1B2"
          d="M21 22.025H8.542c-1.364-.162-.93-1.367-.93-1.367.593-1.501 1.462-2.767 2.472-3.63a5.964 5.964 0 0 1-1.351-3.781 6.044 6.044 0 0 1 6.038-6.036c1.209 0 2.377.357 3.377 1.032.458.31.578.932.27 1.389-.31.457-.932.577-1.389.27a4.042 4.042 0 0 0-6.296 3.346c0 1.218.559 2.363 1.533 3.142a1.003 1.003 0 0 1-.166 1.67c-.706.364-1.389 1.063-1.947 1.967h9.234c-.558-.902-1.242-1.602-1.949-1.968a1 1 0 0 1-.165-1.668 4.017 4.017 0 0 0 1.533-3.143c0-.339-.058-.695-.183-1.122a1 1 0 0 1 1.92-.56c.18.614.263 1.148.263 1.683a5.954 5.954 0 0 1-1.352 3.781c1.012.865 1.883 2.13 2.475 3.63.001-.002.384 1.203-.929 1.365z"
        ></path>
        <path
          fill="#D0476E"
          d="M8.965 14.814H4.611c.559-.903 1.241-1.603 1.947-1.967a.999.999 0 0 0 .165-1.67 4.014 4.014 0 0 1-1.532-3.142A4.042 4.042 0 0 1 9.229 4c2.017 0 3.678 1.491 3.975 3.425a6.012 6.012 0 0 1 1.568-.214c.146 0 .29.021.435.032C14.816 4.289 12.287 2 9.229 2a6.043 6.043 0 0 0-6.038 6.035c0 1.393.481 2.718 1.351 3.782-1.01.863-1.879 2.129-2.472 3.63 0 0-.383 1.244.93 1.367h6.938a5.94 5.94 0 0 1-.973-2z"
        ></path>
      </svg>
    ),
    title: "Pain Reduction",
    paragraph:
      "Our holistic approach not only addresses immediate pain but also focuses on reducing chronic discomfort over time. By integrating modern technology with Ayurvedic wisdom, our product aids in decreasing inflammation and promoting long-term relief, enhancing your quality of life.",
  },
];

export default featuresData;
