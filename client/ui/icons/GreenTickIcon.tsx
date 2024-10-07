export default function GreenTickIcon({
  width = 30,
  height = 30
}: {
  width?: number,
  height?: number
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 30 30" fill="none">
      <path
        d="M13.7525 0.993453C14.4815 0.413155 15.5146 0.413154 16.2436 0.993453L17.3695 1.8897C17.8259 2.25293 18.418 2.39888 18.9908 2.28931L20.4043 2.01897C21.3195 1.84392 22.2343 2.32405 22.6101 3.17667L23.1906 4.49349C23.4258 5.02718 23.8823 5.43159 24.4404 5.60079L25.8176 6.01828C26.7093 6.28859 27.2962 7.13886 27.2328 8.06847L27.1348 9.5042C27.0951 10.0861 27.3113 10.6563 27.7269 11.0655L28.7523 12.0752C29.4163 12.7289 29.5408 13.7546 29.0526 14.5482L28.2986 15.7739C27.993 16.2707 27.9195 16.8761 28.0973 17.4316L28.5361 18.8022C28.8202 19.6896 28.4538 20.6556 27.6527 21.1314L26.4154 21.8664C25.914 22.1642 25.5676 22.6661 25.4669 23.2406L25.2184 24.6581C25.0576 25.5759 24.2843 26.261 23.3538 26.31L21.9167 26.3858C21.3343 26.4165 20.7943 26.6999 20.4381 27.1618L19.5594 28.3015C18.9905 29.0394 17.9873 29.2866 17.1406 28.8976L15.833 28.2969C15.303 28.0534 14.6931 28.0534 14.1631 28.2969L12.8554 28.8976C12.0088 29.2866 11.0056 29.0394 10.4367 28.3015L9.55796 27.1618C9.20183 26.6999 8.66183 26.4165 8.0794 26.3858L6.64232 26.31C5.71184 26.261 4.93852 25.5759 4.77766 24.6581L4.52922 23.2406C4.42853 22.6661 4.08209 22.1642 3.58065 21.8664L2.34339 21.1314C1.54229 20.6556 1.17593 19.6896 1.46001 18.8022L1.89876 17.4316C2.07657 16.8761 2.00306 16.2707 1.69748 15.7739L0.943485 14.5482C0.45529 13.7546 0.579822 12.7289 1.24376 12.0752L2.26919 11.0655C2.68477 10.6563 2.90103 10.0861 2.86131 9.50421L2.76331 8.06847C2.69986 7.13886 3.28676 6.28859 4.17846 6.01828L5.55564 5.60079C6.1138 5.43159 6.57028 5.02718 6.80553 4.49349L7.38597 3.17667C7.7618 2.32405 8.67661 1.84392 9.59179 2.01897L11.0052 2.28931C11.5781 2.39888 12.1702 2.25293 12.6265 1.8897L13.7525 0.993453Z"
        fill="#BCE8BB"/>
      <circle cx="14.9975" cy="14.9995" r="12.0952" fill="#2ADC03"/>
      <path d="M9.19336 15.77L11.7749 18.3914C12.5583 19.1869 13.8414 19.1869 14.6249 18.3914L22.0143 10.8879"
            stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}